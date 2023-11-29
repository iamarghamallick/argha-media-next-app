import ForceRefresh from "@/components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import LoadMoreImages from "@/components/LoadMoreImages";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import Link from "next/link";

export default async function SearchPage({
    searchParams: { q, pagesize }
}: {
    searchParams: { q: string, pagesize: number }
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND tags=${q ? q : "argha-media"}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(pagesize ? pagesize : 4)
        .execute()) as { resources: SearchResult[] };
    console.log(results);

    return (
        <section className="min-h-screen p-4">
            <ForceRefresh />
            {q && results.resources.length > 0 && <>
                <h1 className='font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2'>
                    {`Showing ${results.resources.length} result${results.resources.length == 1 ? "" : "s"} for "${q}"`}
                </h1>
                <ImageGrid images={results.resources} />
                <LoadMoreImages currRoute={`/search`} q={q ? q : ""} pagesize={pagesize ? pagesize : 4} />
            </>}
            {q && results.resources.length == 0 && <>
                <h1 className='font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2'>
                    {`No post Found for "${q}"`}
                </h1>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="mt-4">Try seaching for:</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <Link href="/search?q=flower"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">flower</p></Link>
                        <Link href="/search?q=bird"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">bird</p></Link>
                        <Link href="/search?q=cat"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">cat</p></Link>
                        <Link href="/search?q=dog"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">dog</p></Link>
                        <Link href="/search?q=kolkata"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">kolkata</p></Link>
                    </div>
                    <h1>etc.</h1>
                </div>
            </>}
            {!q && <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="mt-4">Try searching with tags, like:</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Link href="/search?q=flower"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">flower</p></Link>
                    <Link href="/search?q=bird"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">bird</p></Link>
                    <Link href="/search?q=cat"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">cat</p></Link>
                    <Link href="/search?q=dog"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">dog</p></Link>
                    <Link href="/search?q=kolkata"><p className="text-center bg-slate-800 hover:bg-slate-600 p-1 rounded-md">kolkata</p></Link>
                </div>
                <h1>etc.</h1>
            </div>}
        </section>
    );
}
