import cloudinary from "cloudinary";
import { CloudinaryImage } from './CloudinaryImage';

type SearchResult = {
    public_id: string;
};

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(10)
        .execute()) as { resources: SearchResult[] };

    return (
        <section className="min-h-screen p-4">
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2'>Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {results.resources.map((result) => (
                    <CloudinaryImage
                        key={result.public_id}
                        src={result.public_id}
                        height={400}
                        width={500}
                        alt="argha media"
                    />
                ))}
            </div>
        </section>
    )
}
