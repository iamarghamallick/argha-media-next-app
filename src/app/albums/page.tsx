import AlbumCard from "@/components/AlbumCard";
import cloudinary from "cloudinary";

export type Folder = {
    name: string,
    path: string,
};

export default async function AlbumsPage() {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[];
    };

    return (
        <section className="min-h-screen p-4">
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2 mb-8'>Albums</h1>
            <div className="grid grid-cols-3 gap-8">
                {folders.map((folder) => (
                    <AlbumCard key={folder.path} folder={folder} />
                ))}
            </div>
        </section>
    )
}
