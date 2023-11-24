"use server";

import { revalidatePath } from "next/cache";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(public_id: string, isFavorited: boolean) {
    isFavorited ?
        await cloudinary.v2.uploader.remove_tag("favorite", [public_id])
        :
        await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
}