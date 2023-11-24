"use client";

import Heart from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/icons/FullHeart";

export function CloudinaryImage(props: any & { imagedata: SearchResult }) {
    const { imagedata } = props;

    const [transition, startTransition] = useTransition();
    const isFavorited = imagedata.tags.includes("favorite");

    return (
        <div className="relative">
            <CldImage {...props} src={imagedata.public_id} />
            {isFavorited ?
                <FullHeart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imagedata.public_id, true)
                        })
                    }}
                    className="absolute top-1 left-1" />
                :
                <Heart
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imagedata.public_id, false)
                        })
                    }}
                    className="absolute top-1 left-1" />}
        </div>
    )
}