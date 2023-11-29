import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import LoadMoreImages from "@/components/LoadMoreImages";
import cloudinary from "cloudinary";

export type SearchResult = {
    public_id: string;
    filename: string;
    tags: string[];
};

export default async function GalleryPage({
    searchParams: { search, pagesize }
}: {
    searchParams: { search: string, pagesize: number }
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(pagesize ? pagesize : 4)
        .execute()) as { resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            <h1 className='font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2'>
                {search && `Showing result for "${search} (${results.resources.length})"`}
                {!search && `Latest Posts (${results.resources.length})`}
            </h1>
            <ImageGrid images={results.resources} />
            <LoadMoreImages pagesize={pagesize ? pagesize : 4} />
        </section>
    );
}
