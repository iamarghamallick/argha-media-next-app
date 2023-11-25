"use server";

import cloudinary from 'cloudinary';

export default async function addImageToAlbum(imageId: string, album: string) {
    await cloudinary.v2.api.create_folder(album);
    cloudinary.v2.uploader.rename(imageId, `${album}/${imageId}`)
}