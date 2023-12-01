import cloudinary from "cloudinary";
import DisplayPost from "@/components/DisplayPost";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type SearchResult = {
    public_id: string;
    folder: string;
    filename: string;
    format: string;
    uploaded_at: string;
    width: number;
    height: number;
    aspect_ratio: number;
    bytes: number;
    tags: string[];
    access_mode: string;
};

export default async function GalleryPage({ searchParams: { post } }: { searchParams: { post: string } }) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${post ? ` AND filename=${post}` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(1)
        .execute()) as { resources: SearchResult[] };
    console.log(results);
    const meta = results.resources[0];

    function formatDateTimeForIndia(dateTimeString: string): string {
        const originalDate = new Date(dateTimeString);

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(originalDate);

        return formattedDate;
    }

    return (
        <section className="min-h-screen p-4">
            {results.resources && post && meta && meta.folder && <>
                <DisplayPost images={results.resources} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="flex justify-center items-center bg-slate-600 rounded-md p-2">
                        <h1 className="font-bold">Folder &nbsp;</h1> <span>{meta.folder === "" ? "Home" : meta.folder}</span>
                    </div>
                    <div className="flex justify-center items-center bg-slate-600 rounded-md p-2">
                        <h1 className="font-bold">Format &nbsp;</h1> <span>{meta.format}</span>
                    </div>
                    <div className="flex justify-center items-center bg-slate-600 rounded-md p-2">
                        <h1 className="font-bold">Resolution &nbsp;</h1> <span>{meta.height} x {meta.width}</span>
                    </div>
                    <div className="flex justify-center items-center bg-slate-600 rounded-md p-2">
                        <h1 className="font-bold">Posted on &nbsp;</h1> <span>{formatDateTimeForIndia(meta.uploaded_at)}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-slate-600 rounded-md p-2 mt-4">
                    <h1 className="font-bold">Tags</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        {meta.tags.map((tag) => {
                            return <Link key={tag} href={`/search?q=${tag}`}><p className="text-center bg-slate-700 hover:bg-slate-700/[0.5] p-2 rounded-md">{tag}</p></Link>
                        })}
                    </div>
                    <p className="mt-2 font-thin text-center">Employs cutting-edge AI-driven auto-tagging capabilities.</p>
                </div>
            </>}
            {results.resources.length === 0 && <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-center">This Post does not exist!</h1>
                <Link href="/"><Button variant="secondary">Back to Home</Button></Link>
            </div>}
        </section>
    );
}
