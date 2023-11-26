import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CopyTextButton from "./CopyTextButton"

export default function ShareDialog({ filename }: { filename: string }) {
    const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="cursor-pointer absolute top-1 right-1 bg-slate-950/[.3] p-1 rounded-sm w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
            </DialogTrigger>
            <DialogContent className="max-w-sm md:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            value={`${HOSTNAME}/view?post=${filename}`}
                            readOnly
                        />
                    </div>
                    <CopyTextButton textToCopy={`${HOSTNAME}/view?post=${filename}`} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
