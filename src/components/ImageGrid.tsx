import { CloudinaryImage } from "@/components/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function ImageGrid({ images }: { images: SearchResult[] }) {
    return (
        <div className="columns-1 md:columns-2 xl:columns-4 gap-4 mt-4 space-y-4">
            {images.map((result, idx) => (
                <CloudinaryImage
                    key={idx}
                    imagedata={result}
                    height={500}
                    width={500}
                    alt={idx}
                    className={`break-before-avoid rounded-sm ${idx == 0 ? "mt-4" : ""}`}
                />
            ))}
        </div>
    );
}