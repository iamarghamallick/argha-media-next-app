"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SearchIcon from "./icons/SearchIcon";
import { useRouter } from "next/navigation";

const ViewPost = () => {
    const [postName, setpostName] = useState("");
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.replace(`/gallery?post=${encodeURIComponent(postName)}`);
                router.refresh();
            }}
            className="p-2 m-1 bg-slate-800 rounded-md w-full"
        >
            <div className="flex flex-row gap-4 justify-between items-center">
                <Button variant={"ghost"} className="hidden md:block text-xl" disabled>Search by Posts</Button>
                <Input
                    onChange={(e) => { setpostName(e.currentTarget.value) }}
                    id="post-name"
                    value={postName}
                />
                <Button variant={"secondary"} type="submit" className="border-slate-500 border-2"><SearchIcon /></Button>
            </div>
        </form>
    );
}

export default ViewPost