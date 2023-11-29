"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LoadMoreImages({ currRoute, q, pagesize }: { currRoute: string, q: string, pagesize: number }) {
    return (
        <div className="mt-8 mb-8 flex justify-between">
            <Button variant="secondary" className="text-center" disabled={!pagesize || pagesize == 4}>
                <Link className="flex items-center" href={`${currRoute}?${q === "" || q == undefined ? "" : `q=${q}&`}pagesize=${Number(pagesize) - 4 <= 0 ? 4 : Number(pagesize) - 4}`}>
                    <ArrowLeft />&nbsp;&nbsp; Prev
                </Link>
            </Button>

            <Button variant="secondary" className="text-center">
                <Link className="flex items-center" href={`${currRoute}?${q === "" || q == undefined ? "" : `q=${q}&`}pagesize=${Number(pagesize) + 4}`}>
                    Next &nbsp;&nbsp;<ArrowRight />
                </Link>
            </Button>
        </div>
    );
}