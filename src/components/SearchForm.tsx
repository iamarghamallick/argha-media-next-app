"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from "next/navigation";

const SearchForm = () => {
    const [tagName, setTagName] = useState("");
    const router = useRouter();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
                router.refresh();
            }}
            className="p-2 m-1 bg-slate-800 rounded-md w-full"
        >
            <div className="flex flex-row gap-4 justify-between items-center">
                <Button variant={"ghost"} className="hidden md:block text-xl" disabled>Search by Tags</Button>
                <Input
                    onChange={(e) => { setTagName(e.currentTarget.value) }}
                    id="tag-name"
                    value={tagName}
                />
                <Button variant={"secondary"} type="submit" className="border-slate-500 border-2"><SearchIcon /></Button>
            </div>
        </form>
    );
}

export default SearchForm