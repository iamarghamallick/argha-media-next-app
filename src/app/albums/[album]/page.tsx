import cloudinary from "cloudinary";
import ImageGrid from "@/components/ImageGrid";
import { SearchResult } from "@/app/gallery/page";
import LoadMoreImages from "@/components/LoadMoreImages";

export default async function AlbumPage({
    searchParams: { pagesize }, params
}: {
    searchParams: { pagesize: number }
    params: { album: string }
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.album}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(pagesize ? pagesize : 4)
        .execute()) as { next_cursor: string, resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2'>{`${params.album} (${results.resources.length})`}</h1>
            <ImageGrid images={results.resources} />
            <LoadMoreImages q="" currRoute={`/albums/${params.album}`} pagesize={pagesize ? pagesize : 4} />
        </section>
    );
}
