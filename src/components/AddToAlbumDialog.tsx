import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { addImageToAlbum } from "./actions";
import { fetchFolders } from "@/app/upload/actions";
import { Folder } from "@/app/albums/page";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import AlertIcon from "./icons/AlertIcon";

export default function AddToAlbumDialog({ imageId }: { imageId: string }) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);
    const [folders, setFolders] = useState<Folder[]>([]);

    const fetchCurrentFolders = async () => {
        const currFolders = await fetchFolders();
        setFolders(currFolders);
    }

    useEffect(() => {
        fetchCurrentFolders();
    }, [])

    const [alert, setAlert] = useState("");

    const isValidAlbumName = (str: string) => {
        if (str.includes(" "))
            setAlert("Album Name should not contain empty spaces. Use underscore instade!");
        else
            setAlert("");
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="w-full">Manage Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-center justify-center gap-2">

                        {alert && <p className="text-center text-red-500 text-sm flex flex-col justify-center items-center">
                            <AlertIcon />
                            <span>{alert}</span>
                        </p>}

                        <Select onValueChange={(e) => { setAlbumName(e); isValidAlbumName(e) }}>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select an Album" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Albums</SelectLabel>
                                    {folders.map((folder) => (
                                        <SelectItem key={folder.path} value={folder.name}>{folder.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <p className="m-2">or</p>
                        <Input
                            onChange={(e) => { setAlbumName(e.currentTarget.value); isValidAlbumName(e.currentTarget.value); }}
                            id="album-name"
                            value={albumName}
                            className="col-span-3 w-[280px]"
                            placeholder="Create new"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={async () => {
                            // console.log(imageId);
                            await addImageToAlbum(imageId, albumName);
                            setOpen(false);
                        }}
                        type="submit"
                        disabled={alert !== ""}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
