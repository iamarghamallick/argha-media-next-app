"use server";

import cloudinary from "cloudinary";

export async function addImageToAlbum(imageId: string, album: string) {
    await cloudinary.v2.api.create_folder(album);

    let parts = imageId.split("/");
    if (parts.length > 1) {
        parts = parts.slice(1);
    }
    const publicId = parts.join("/");

    await cloudinary.v2.uploader.rename(imageId, `${album}/${publicId}`);
}