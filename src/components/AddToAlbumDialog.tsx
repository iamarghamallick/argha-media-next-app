import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import addImageToAlbum from "./actions";

export default function AddToAlbumDialog({ imageId }: { imageId: string }) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="w-full">Manage Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type/Select an album to add this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album Title
                        </Label>
                        <Input
                            onChange={(e) => setAlbumName(e.currentTarget.value)}
                            id="album-name"
                            value={albumName}
                            className="col-span-3"
                            required
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={async () => {
                        console.log(imageId);
                        setOpen(false);
                        await addImageToAlbum(imageId, albumName);
                    }} type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
