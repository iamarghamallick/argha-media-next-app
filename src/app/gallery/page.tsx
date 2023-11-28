import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import { fetchImages } from "./actions";
import LoadMoreImages from "@/components/LoadMoreImages";

export type SearchResult = {
    public_id: string;
    filename: string;
    tags: string[];
};

export default async function GalleryPage({
    searchParams: { search, pagesize }
}: {
    searchParams: { search: string, pagesize: string }
}) {
    const results = await fetchImages("", search ? search : "") as { next_cursor: string, resources: SearchResult[] };

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            <h1 className='font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2'>
                {search && `Showing result for "${search} (${results.resources.length})"`}
                {!search && `Latest Posts (${results.resources.length})`}
            </h1>
            <ImageGrid images={results.resources} />
            <LoadMoreImages cursor={results.next_cursor} />
        </section>
    );
}
