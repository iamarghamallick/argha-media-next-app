"use client";

import Heart from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/FullHeart";
import Share from "./icons/Share";
import Link from "next/link";

export function CloudinaryImage(props: any & { imagedata: SearchResult; }) {
    const { imagedata } = props;

    const [transition, startTransition] = useTransition();
    const [isFavorited, setIsFavorited] = useState(imagedata.tags.includes("favorite"));

    return (
        <div className="relative">
            <Link href={"/images/" + imagedata.public_id}><CldImage {...props} src={imagedata.public_id} /></Link>
            {isFavorited ?
                <FullHeart
                    onClick={() => {
                        startTransition(() => {
                            setIsFavorited(!isFavorited);
                            setAsFavoriteAction(imagedata.public_id, true)
                        })
                    }}
                    className="absolute top-1 left-1" />
                :
                <Heart
                    onClick={() => {
                        startTransition(() => {
                            setIsFavorited(!isFavorited);
                            setAsFavoriteAction(imagedata.public_id, false)
                        })
                    }}
                    className="absolute top-1 left-1" />}
            <Share className="absolute top-1 right-1 bg-slate-950/[.3] p-1 rounded-sm" />
        </div>
    )
}
