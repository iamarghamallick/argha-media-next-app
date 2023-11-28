"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { fetchImages } from "@/app/gallery/actions";
import { SearchResult } from "@/app/gallery/page";
import ImageGrid from "./ImageGrid";

export default function LoadMoreImages({ cursor }: { cursor: string }) {
    const [nextCursor, setNextCursor] = useState("");
    const [fetchedResults, setFetchedResults] = useState({ next_cursor: "", resources: [] } as { next_cursor: string, resources: SearchResult[]; });

    const combineResult = (arr1: SearchResult[], arr2: SearchResult[]) => {
        return [...arr1, ...arr2];
    }

    const handleClick = async () => {
        await fetchImages(nextCursor === "" ? cursor : nextCursor, "").then((results) => {
            setFetchedResults({ next_cursor: results.next_cursor, resources: combineResult(fetchedResults.resources, results.resources) });
            setNextCursor(fetchedResults.next_cursor);
            console.log(fetchedResults.resources);
        })
    }

    return (
        <div>
            {fetchedResults.resources && <ImageGrid images={fetchedResults.resources} />}
            <div className="m-8 flex justify-center">
                <Button onClick={handleClick} variant="secondary" className="text-center">Load More</Button>
            </div>
        </div>
    );
}