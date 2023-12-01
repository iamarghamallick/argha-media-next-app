"use server";

import { Folder } from "../albums/page";
import cloudinary from "cloudinary";

export async function fetchFolders() {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[];
    };
    return folders;
}