import { CloudinaryImage } from "@/app/gallery/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function ImageGrid({ images }: { images: SearchResult[] }) {
    const MAX_COL = 4;
    function getCols(colIndex: number) {
        return images.filter(
            (resource, idx) => idx % MAX_COL === colIndex
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
                getCols(0),
                getCols(1),
                getCols(2),
                getCols(3),
            ].map(col => <div className="flex flex-col gap-4">
                {col.map((result, idx) => (
                    <CloudinaryImage
                        key={idx}
                        imagedata={result}
                        height={400}
                        width={500}
                        alt="argha media"
                    />
                ))}
            </div>)}
        </div>
    );
}