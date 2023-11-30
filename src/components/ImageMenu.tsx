import { CreditCard, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ViewDetailsDialog from "./AddToAlbumDialog"
import ShareDialog from "./ShareDialog"
import Menu from "./icons/Menu"

export default function ImageMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-7 h-7 p-0 absolute top-1 right-1 bg-slate-900/[.3]">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <ViewDetailsDialog imageId="" />
                </DropdownMenuItem>
                <br />
                <DropdownMenuItem asChild>
                    <ShareDialog filename="" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
