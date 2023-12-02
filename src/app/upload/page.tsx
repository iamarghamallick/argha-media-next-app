"use client";

import AddToAlbumDialog from '@/components/AddToAlbumDialog';
import { Button } from '@/components/ui/button';
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { verifyToken } from '../login/verifyToken';
import Image from "next/image"

export type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};

export default function UploadPage() {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('login') !== 'true' || localStorage.getItem('token') === null) {
            redirect("/login");
        }
        const token = localStorage.getItem('token') as string;
        if (!(token && verifyToken(token))) {
            redirect("/login");
        }
    }, [])

    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
    const [imageId, setImageId] = useState("");

    const handleLogout = () => {
        localStorage.removeItem('login');
        router.replace("/login");
    }

    return (
        <section className="min-h-screen flex flex-col mt-6 items-center gap-2">
            <Image
                src="/argha-mallick-photography-watermark.png"
                width={500}
                height={500}
                alt="argha-mallick-photography"
            />
            <CldUploadButton
                onUpload={(data) => {
                    const uploadedData = data as UploadResult;
                    // console.log(uploadedData.info.public_id);
                    setImageId(uploadedData.info.public_id);
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
            <Button className='mt-8 mb-8' onClick={handleLogout}>Logout</Button>
        </section>
    );
}
