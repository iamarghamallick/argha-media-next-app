import cloudinary from "cloudinary";
import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";

export type SearchResult = {
    public_id: string;
    filename: string;
    tags: string[];
};

export default async function GalleryPage({ searchParams: { search } }: { searchParams: { search: string } }) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            <h1 className='font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2'>
                {search && `Showing result for "${search}"`}
                {!search && "Latest Posts"}
            </h1>
            <ImageGrid images={results.resources} />
        </section>
    );
}
