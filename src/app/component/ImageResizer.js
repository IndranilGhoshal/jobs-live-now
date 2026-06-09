"use client";

import { useState } from "react";

const IMAGE_PRESETS = [
    { label: "-- Select --", value: "none" },
    { label: "DSSSB (Photo 5x7)", value: "500x700" },
    { label: "DSSSB (Signature)", value: "140x110" },
    { label: "DSSSB (Thumb)", value: "110x140" },
    { label: "Bank Photo (200 x 230)", value: "200x230" },
    { label: "Bank Signature (450 x 230)", value: "450x230" },
    { label: "UPSC Photo (450 x 450)", value: "450x450" },
    { label: "UPSC Signature (500 x 350)", value: "500x350" },
    { label: "UPSSSC OTR Photo (200 x 200)", value: "200x200" },
    { label: "UPSSSC OTR Signature (220 x 150)", value: "220x150" },
    { label: "MPPEB Marksheet (800 x 700)", value: "800x700" },
    { label: "5x7", value: "1500x2100" },
    { label: "8x12", value: "2400x3600" },
    { label: "13x19", value: "3900x5700" },
    { label: "19x13", value: "5700x3900" },
];

export default function ImageResizer() {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [output, setOutput] = useState("");

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(230);

    const [quality, setQuality] = useState(90);
    const [loading, setLoading] = useState(false);

    const handleImage = (e) => {

        const selected = e.target.files?.[0];

        if (!selected) return;

        setFile(selected);

        const url = URL.createObjectURL(selected);

        setPreview(url);

        setOutput("");

    };

    const handlePreset = (e) => {

        const value = e.target.value;

        if (value === "none") return;

        const [w, h] = value.split("x");

        setWidth(Number(w));

        setHeight(Number(h));

    };

    const resizeImage = () => {

        if (!file) {

            alert("Please select an image");

            return;

        }

        setLoading(true);

        const img = new Image();

        img.onload = () => {

            const canvas =
                document.createElement("canvas");

            canvas.width = width;

            canvas.height = height;

            const ctx =
                canvas.getContext("2d");

            ctx.drawImage(
                img,
                0,
                0,
                width,
                height
            );

            const result =
                canvas.toDataURL(
                    "image/jpeg",
                    quality / 100
                );

            setOutput(result);

            setLoading(false);

        };

        img.src =
            URL.createObjectURL(file);

    };

    const downloadImage = () => {

        if (!output) return;

        const link =
            document.createElement("a");

        link.href = output;

        link.download =
            `resized-${Date.now()}.jpg`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    };

    return (

        <div className="image-resizer-card">
            {/* QUALITY */}

            <div className="mb-3">

                <label className="form-label">
                    Image Quality
                </label>

                <select
                    className="form-select"
                    value={quality}
                    onChange={(e) =>
                        setQuality(
                            Number(e.target.value)
                        )
                    }
                >
                    <option value="100">100%</option>
                    <option value="90">90%</option>
                    <option value="80">80%</option>
                    <option value="70">70%</option>
                    <option value="60">60%</option>
                    <option value="50">50%</option>
                    <option value="40">40%</option>
                    <option value="30">30%</option>
                    <option value="20">20%</option>
                    <option value="10">10%</option>
                </select>

            </div>

            {/* WIDTH HEIGHT */}

            <div className="row">

                <div className="col-md-6">

                    <label className="form-label">
                        Width (px)
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={width}
                        onChange={(e) =>
                            setWidth(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    />

                </div>

                <div className="col-md-6">

                    <label className="form-label">
                        Height (px)
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={height}
                        onChange={(e) =>
                            setHeight(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    />

                </div>

            </div>

            <div className="or-divider">
                OR
            </div>

            {/* PRESET */}

            <div className="mb-3">

                <label className="form-label">
                    Preset Size
                </label>

                <select
                    className="form-select"
                    onChange={handlePreset}
                >

                    {IMAGE_PRESETS.map(
                        (item) => (

                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>

                        )
                    )}

                </select>

            </div>

            {/* FILE */}

            <div className="mb-3">

                <label className="form-label">
                    Upload Image <span className="astrist"> *</span>
                </label>

                <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImage}
                />

            </div>

            {/* PREVIEW */}

            {preview && (

                <div className="preview-box">

                    <h5>
                        Original Image
                    </h5>

                    <img
                        src={preview}
                        alt="Preview"
                    />

                </div>

            )}

            {/* BUTTON */}

            <button
                className="resize-btn"
                onClick={resizeImage}
                disabled={loading || !file}
            >

                {loading
                    ? "Processing..."
                    : "Resize Image"}

            </button>

            {/* OUTPUT */}

            {output && (

                <div className="preview-box mt-4">

                    <h5>
                        Resized Image ({width+" X "+ height})
                    </h5>

                    <img
                        src={output}
                        alt="Output"
                    />

                    <button
                        className="download-btn"
                        onClick={downloadImage}
                    >
                        Download Image
                    </button>

                </div>

            )}

        </div>

    );

}