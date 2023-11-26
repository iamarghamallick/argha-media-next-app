import cloudinary from "cloudinary";
import DisplayPost from "@/components/DisplayPost";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type SearchResult = {
    public_id: string;
    filename: string;
    tags: string[];
};

export default async function GalleryPage({ searchParams: { post } }: { searchParams: { post: string } }) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${post ? ` AND filename=${post}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(1)
        .execute()) as { resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            {post && <DisplayPost images={results.resources} />}
            {results.resources.length === 0 && <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-center">This Post does not exist!</h1>
                <Link href="/"><Button variant="secondary">Back to Home</Button></Link>
            </div>}
        </section>
    );
}
