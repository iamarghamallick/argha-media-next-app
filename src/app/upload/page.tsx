"use client";

import AddToAlbumDialog from '@/components/AddToAlbumDialog';
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';

export type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};

export default function UploadPage() {
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
    const [imageId, setImageId] = useState("");

    return (
        <section className="min-h-screen flex flex-col mt-6 items-center gap-2">
            <CldImage
                width="320"
                height="320"
                src={"bjn2wpgm9vc54ocymt5o"}
                sizes="100vw"
                alt="argha media"
                className='mt-2 mb-4'
            />
            <CldUploadButton onUpload={(result: UploadResult) => {
                console.log(result);
                setImageId(result.info.public_id);
            }}
                uploadPreset={UPLOAD_PRESET}
                className='p-2 rounded-sm bg-slate-700'
            />
            {imageId && <div>
                <CldImage
                    width="320"
                    height="320"
                    src={imageId}
                    sizes="100vw"
                    alt="argha media"
                    className='mt-2 mb-2'
                />
                <AddToAlbumDialog imageId={imageId} />
            </div>}
        </section>
    );
}
