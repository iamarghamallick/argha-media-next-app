"use client";

import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';

type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};

const page = () => {
    const [imageId, setImageId] = useState("");
    return (
        <main className="min-h-screen">
            <CldUploadButton onUpload={(result: UploadResult) => {
                console.log(result.info.public_id);
                setImageId(result.info.public_id);
            }}
                uploadPreset="xqzutzk0" />
            {imageId && <CldImage
                width="400"
                height="300"
                src={imageId}
                sizes="100vw"
                alt="Description of my image"
            />}
        </main>
    )
}

export default page