import cloudinary from "cloudinary";
import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import { SearchResult } from "../gallery/page";

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2'>Favorites</h1>
            <ImageGrid images={results.resources} />
        </section>
    );
}
