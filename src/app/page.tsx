"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center">Welcome to Argha Media</h1>
      <Link href="/gallery"><Button variant="secondary">Explore my Gallery</Button></Link>
    </main>
  )
}
