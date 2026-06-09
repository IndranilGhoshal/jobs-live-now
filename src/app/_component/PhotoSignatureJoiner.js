"use client";

import { useRef, useState } from "react";

export default function PhotoSignatureJoiner() {

    const [photo, setPhoto] = useState(null);
    const [signature, setSignature] = useState(null);

    const [photodownload, setPhotoDownload] = useState(true);


    const [size, setSize] = useState("295x360");

    const canvasRef = useRef(null);

    const sizeOptions = [
        { label: "Standard Passport Size (295x360)", value: "295x360" },
        { label: "SSC (100×120)", value: "100x120" },
        { label: "DSSSB (Photo 5x7)", value: "500x700" },
        { label: "DSSSB (Signature)", value: "140x110" },
        { label: "DSSSB (Thumb)", value: "110x140" },
        { label: "Bank Photo (200x230)", value: "200x230" },
        { label: "Bank Signature (450x230)", value: "450x230" },
        { label: "UPSC Photo (450x450)", value: "450x450" },
        { label: "UPSC Signature (500x350)", value: "500x350" },
        { label: "UPSSSC OTR Photo (200x200)", value: "200x200" },
        { label: "UPSSSC OTR Signature (220x150)", value: "220x150" },
        { label: "MPPEB Certificate (800x700)", value: "800x700" },
        { label: "5x7", value: "1500x2100" },
        { label: "8x12", value: "2400x3600" },
        { label: "13x19", value: "3900x5700" },
        { label: "19x13", value: "5700x3900" },
    ];

    const generateImage = () => {


        setPhotoDownload(true)

        if (!photo || !signature) {
            alert("Upload Photo & Signature");
            setPhotoDownload(true)
            return;
        }

        const [width, height] = size.split("x").map(Number);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        const photoImg = new Image();
        const signImg = new Image();

        photoImg.src = photo;
        signImg.src = signature;


        photoImg.onload = () => {

            signImg.onload = () => {

                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, width, height);

                const photoHeight = height * 0.75;
                const signHeight = height * 0.25;

                ctx.drawImage(
                    photoImg,
                    0,
                    0,
                    width,
                    photoHeight
                );

                ctx.drawImage(
                    signImg,
                    0,
                    photoHeight,
                    width,
                    signHeight
                );

                setPhotoDownload(false)

            };

        };

    };

    const downloadImage = () => {

        const canvas = canvasRef.current;

        const link = document.createElement("a");

        link.download = "photo-signature.jpg";

        link.href = canvas.toDataURL("image/jpeg", 1);

        link.click();

    };

    return (
        <>

            <div className="photo-signature-tool">

                <div className="joiner-card">

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label>
                                Upload Photo
                            </label>

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

                        <div className="col-md-6 mb-3">

                            <label>
                                Upload Signature
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(e) =>
                                    setSignature(
                                        URL.createObjectURL(
                                            e.target.files[0]
                                        )
                                    )
                                }
                            />

                        </div>

                        <div className="col-md-12 mb-3">

                            <label>
                                Select Output Size
                            </label>

                            <select
                                className="form-select"
                                value={size}
                                onChange={(e) =>
                                    setSize(e.target.value)
                                }
                            >
                                {
                                    sizeOptions.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>

                    </div>

                    <div>

                        <button
                            disabled={!photo || !signature}
                            className="btn-join"
                            onClick={generateImage}
                        >
                            Join Photo & Signature
                        </button>



                    </div>

                    <div className="preview-wrapper">

                        <h3 className="preview-title">
                            Preview
                        </h3>

                        <canvas
                            ref={canvasRef}
                        />

                    </div>

                    <div>
                        <button
                            className="btn-download w-100 mt-3"
                            onClick={downloadImage}
                            disabled={photodownload}
                        >
                            Download Image
                        </button>
                    </div>

                </div>

            </div>

        </>
    );

}