import { CloudinaryImage } from "@/components/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function DisplayPost({ images }: { images: SearchResult[] }) {
    const MAX_COL = 4;
    function getCols(colIndex: number) {
        return images.filter(
            (resource, idx) => idx % MAX_COL === colIndex
        );
    }

    return (
        <div className="flex justify-center items-center mt-6">
            {[
                getCols(0)
            ].map(col => <div key={col.length}>
                {col.map((result, idx) => (
                    <CloudinaryImage
                        key={result.filename}
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