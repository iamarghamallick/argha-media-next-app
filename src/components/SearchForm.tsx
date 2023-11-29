"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchForm = () => {
    const [tagName, setTagName] = useState("");
    const router = useRouter();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.replace(`/search?q=${encodeURIComponent(tagName)}&pagesize=4`);
                router.refresh();
            }}
            className="p-2 m-1 bg-slate-800 rounded-md w-full"
        >
            <div className="flex flex-row gap-4 justify-between items-center">
                <Link href="/search">
                    <Button variant={"ghost"} className="hidden md:block text-xl">Search by Tags</Button>
                </Link>
                <Input
                    onChange={(e) => { setTagName(e.currentTarget.value) }}
                    placeholder="Type a keyword"
                    id="tag-name"
                    value={tagName}
                />
                <Button variant={"secondary"} type="submit" className="border-slate-500 border-2 hover:bg-slate-600"><SearchIcon /></Button>
            </div>
        </form>
    );
}

export default SearchForm