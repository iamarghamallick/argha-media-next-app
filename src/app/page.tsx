"use client";

import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react';

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="min-h-screen">
      <h1>Gallery</h1>
    </main>
  )
}
