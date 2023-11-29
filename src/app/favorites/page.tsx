import cloudinary from "cloudinary";
import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import { SearchResult } from "../gallery/page";
import LoadMoreImages from "@/components/LoadMoreImages";

export default async function GalleryPage({
    searchParams: { pagesize }
}: {
    searchParams: { pagesize: number }
}) {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(pagesize ? pagesize : 4)
        .execute()) as { next_cursor: string, resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2'>Favorites</h1>
            <ImageGrid images={results.resources} />
            <LoadMoreImages currRoute={`/favorite`} pagesize={pagesize ? pagesize : 4} />
        </section>
    );
}
