"use server";

import cloudinary from "cloudinary";
import { SearchResult } from "./page";

export async function setAsFavoriteAction(public_id: string, isFavorited: boolean) {
    isFavorited ?
        await cloudinary.v2.uploader.remove_tag("favorite", [public_id])
        :
        await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
}

export async function fetchImages(nextCursor: string, search: string, pagesize: number) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(pagesize)
        .next_cursor(nextCursor === "" ? undefined : nextCursor)
        .execute()) as { next_cursor: string, resources: SearchResult[] };
    console.log(results);

    return results;
}