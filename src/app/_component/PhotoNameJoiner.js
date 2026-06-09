"use client";

import { useEffect, useRef, useState } from "react";

export default function PhotoNameJoiner() {



    const canvasRef = useRef(null);

    const [photo, setPhoto] = useState(null);
    const [photodownload, setPhotoDownload] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        fontSize: 24,
        textColor: "#000000",
    });

    useEffect(() => {
        if (photo) {
            handleGenerate();
        }
    }, [photo, formData]);

    const handleGenerate = () => {
        setPhotoDownload(true)
        if (!photo) {
            alert("Please Upload Image");
            setPhotoDownload(true)
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const img = new Image();

        img.src = photo;

        img.onload = () => {

            const bottomSpace = 70;

            canvas.width = img.width;
            canvas.height = img.height + bottomSpace;

            // White Background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            // Draw Image
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height
            );

            // Text Style
            ctx.fillStyle = formData.textColor;
            ctx.font = `bold ${formData.fontSize}px Arial`;

            ctx.textAlign = "center";

            // Name
            ctx.fillText(
                formData.name || "",
                canvas.width / 2,
                img.height + 20
            );

            // Date
            ctx.fillText(
                formatDate(formData.date) || "",
                canvas.width / 2,
                img.height + 50
            );

            setPhotoDownload(false)

        };
    };

    const downloadImage = () => {

        const link =
            document.createElement("a");

        link.download =
            "photo-name-joiner.jpg";

        link.href =
            canvasRef.current.toDataURL(
                "image/jpeg",
                1
            );

        link.click();
    };

    const formatDate = (dateString) => {

        if (!dateString) return "";

        const date = new Date(dateString);

        const day = String(
            date.getDate()
        ).padStart(2, "0");

        const month = String(
            date.getMonth() + 1
        ).padStart(2, "0");

        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    return (
        <div className="photo-tool-container">
                    <div className="mt-2">
                        <label>Image</label>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) =>
                                setPhoto(
                                    URL.createObjectURL(
                                        e.target.files[0]
                                    )
                                )
                            }
                        />
                    </div>
                    <div className="mt-2">
                        <label>Name on Image</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mt-2">
                        <label>Date on Image</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter Date"
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="textColor mt-2">
                        <label>Text Color</label>
                        <input
                            type="color"
                            className="form-control"
                            value={formData.textColor}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    textColor:
                                        e.target.value,
                                })
                            }
                        />
                    </div>

                    <button
                        disabled={!photo || !formData.name || !formData.date}
                        className="generate-btn mt-3"
                        onClick={handleGenerate}
                    >
                        Generate Image
                    </button>

                    <div className="preview-box">

                        <h3>Preview</h3>

                        <canvas
                            ref={canvasRef}
                            className="preview-canvas"
                        />

                    </div>

                    <button
                        className="download-btn mt-2"
                        onClick={downloadImage}
                        disabled={photodownload}
                    >
                        Download Image
                    </button>
        </div>
    );
}