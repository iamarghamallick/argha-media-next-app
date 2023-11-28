"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <CldImage
        width="320"
        height="320"
        src={"bjn2wpgm9vc54ocymt5o"}
        sizes="100vw"
        alt="argha media"
        className='mt-2 mb-4'
      />
      <h1 className="text-center">Welcome to Argha Media</h1>
      <Link href="/gallery"><Button variant="secondary">Explore my Gallery</Button></Link>
    </main>
  )
}
