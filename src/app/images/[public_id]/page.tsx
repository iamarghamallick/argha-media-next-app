"use client";

import { CldImage } from "next-cloudinary";

export default async function GetFullImage({ params }: { params: { public_id: string } }) {
    return (
        <section>
            <h1>{params.public_id}</h1>
            <CldImage
                src={params.public_id}
                height={320}
                width={320}
                alt="argha media"
            />
        </section>
    );
}