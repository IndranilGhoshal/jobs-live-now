"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function ImageToPdf() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState("a4");

  const handleImages = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setImages(files);
  };

  const convertToPdf = async () => {
    if (!images.length) {
      alert("Please upload images");
      return;
    }

    try {
      setLoading(true);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: pageSize,
      });

      for (let i = 0; i < images.length; i++) {
        const file = images[i];

        const imgData = await new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result);
          };

          reader.readAsDataURL(file);
        });

        const img = new Image();

        await new Promise((resolve) => {
          img.onload = resolve;
          img.src = imgData;
        });

        if (i !== 0) {
          pdf.addPage();
        }

        const pageWidth =
          pdf.internal.pageSize.getWidth();

        const pageHeight =
          pdf.internal.pageSize.getHeight();

        const ratio = Math.min(
          pageWidth / img.width,
          pageHeight / img.height
        );

        const imgWidth = img.width * ratio;
        const imgHeight = img.height * ratio;

        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(
          imgData,
          "JPEG",
          x,
          y,
          imgWidth,
          imgHeight
        );
      }

      pdf.save(
        `merged-images-${Date.now()}.pdf`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to create PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="img-pdf-card">
          <div className="mb-3">
            <label>
              Single / Multiple Images Upload
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              className="form-control"
              onChange={handleImages}
            />
          </div>

          <div className="mb-3">
            <label>
              Page Size
            </label>

            <select
              className="form-select"
              value={pageSize}
              onChange={(e) =>
                setPageSize(e.target.value)
              }
            >
              <option value="a4">
                A4
              </option>

              <option value="letter">
                Letter
              </option>
            </select>
          </div>

          {images.length > 0 && (
            <div className="alert alert-success">
              {images.length} Images Selected
            </div>
          )}

          {images.length > 0 && (
            <div className="row g-3 mb-4">
              {images.map((file, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-6"
                >
                  <div className="card">
                    <img
                      src={URL.createObjectURL(
                        file
                      )}
                      alt={`Preview ${index + 1}`}
                      className="card-img-top"
                      style={{
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            className="resize-btn"
            onClick={convertToPdf}
            disabled={
              loading || !images.length
            }
          >
            {loading
              ? "Creating PDF..."
              : "Convert To PDF"}
          </button>
        </div>
    </>
  );
}