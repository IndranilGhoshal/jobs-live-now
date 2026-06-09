"use client";

import { useState } from "react";

export default function PdfToImageClient() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
  };

  const downloadAll = () => {
    images.forEach((item) => {
      const link =
        document.createElement("a");

      link.href = item.image;
      link.download = `pdf-page-${item.page}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };


  const generateimage = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    setLoading(true);
    setImages([]);

    try {
      const pdfjsLib = await import("pdfjs-dist");

      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "/pdf.worker.min.mjs";

      const buffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: buffer,
      }).promise;

      const output = [];

      for (
        let pageNum = 1;
        pageNum <= pdf.numPages;
        pageNum++
      ) {
        const page = await pdf.getPage(pageNum);

        const viewport = page.getViewport({
          scale: 2,
        });

        const canvas =
          document.createElement("canvas");

        const context =
          canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        output.push({
          page: pageNum,
          image: canvas.toDataURL("image/png"),
        });
      }

      setImages(output);
    } catch (err) {
      console.error(err);
      alert("PDF conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pdf-img-container">
      <label>
        PDF Upload
      </label>
      <input
        type="file"
        accept=".pdf"
        className="form-control"
        onChange={handleFileChange}
      />

      <button
        type="button"
        className="generate-pdf-img-btn mt-3"
        onClick={generateimage}
        disabled={!file || loading}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {loading && (
        <div className="mt-4">
          <div
            className="spinner-border"
            role="status"
          />
          <p className="mt-2">
            Converting PDF...
          </p>
        </div>
      )}

      {images.length > 0 && (
        <>
          <div className="mt-4">
            <button
              className="btn btn-success"
              onClick={downloadAll}
            >
              Download All Images
            </button>
          </div>

          <div className="row mt-4">
            {images.map((item) => (
              <div
                key={item.page}
                className="col-lg-4 col-md-6 mb-4"
              >
                <div className="card shadow-sm h-100">
                  <img
                    src={item.image}
                    alt={`PDF Page ${item.page}`}
                    className="card-img-top"
                  />

                  <div className="card-body text-center">
                    <h6>
                      Page {item.page}
                    </h6>

                    <a
                      href={item.image}
                      download={`pdf-page-${item.page}.png`}
                      className="btn btn-primary w-100"
                    >
                      Download Page {item.page}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}