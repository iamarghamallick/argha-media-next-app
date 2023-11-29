"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LoadMoreImages({ currRoute, pagesize }: { currRoute: string, pagesize: number }) {
    return (
        <div className="mt-8 mb-8 flex justify-between">
            <Link href={`${currRoute}?pagesize=${Number(pagesize) - 4 <= 0 ? 4 : Number(pagesize) - 4}`}>
                <Button variant="secondary" className="text-center" disabled={!pagesize || pagesize == 4}><ArrowLeft />&nbsp;&nbsp; Prev</Button>
            </Link>
            <Link href={`${currRoute}?pagesize=${Number(pagesize) + 4}`}>
                <Button variant="secondary" className="text-center">Next &nbsp;&nbsp;<ArrowRight /></Button>
            </Link>
        </div>
    );
}