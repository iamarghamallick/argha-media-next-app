import { CloudinaryImage } from "@/components/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function ImageGrid({ images }: { images: SearchResult[] }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {images.map((result, idx) => (
                    <CloudinaryImage
                        key={idx}
                        imagedata={result}
                        height={500}
                        width={500}
                        alt="argha media"
                    />
                ))}
            </div>
        </div>
    );
}