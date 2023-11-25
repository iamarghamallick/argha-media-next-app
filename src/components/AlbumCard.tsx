import * as React from "react"
import { Folder } from "@/app/albums/page"
import Link from "next/link"

export default function AlbumCard({ folder }: { folder: Folder }) {
    return (
        <div className="relative rounded-3xl">
            <img src="https://picsum.photos/400/300" className="rounded-3xl w-full h-full" alt="" />
            <Link href={`/albums/${folder.name}`}>
                <div className="rounded-b-3xl cursor-pointer p-2 flex justify-between items-center absolute bottom-0 bg-slate-900/[.5] hover:bg-slate-900/[.7] w-full">
                    <h1 className="text-center text-3xl">{folder.name}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}
