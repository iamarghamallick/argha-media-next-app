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
    const [imageId, setImageId] = useState("jagiue4eb1yyactjmfy0");

    return (
        <section className="min-h-screen flex flex-col mt-6 items-center gap-2">
            <CldUploadButton onUpload={(result: UploadResult) => {
                console.log(result);
                setImageId(result.info.public_id);
            }}
                uploadPreset="xqzutzk0"
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
