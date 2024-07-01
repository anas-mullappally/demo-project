import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userStore } from "@/store/store";

export default function Profile() {
  const { user, signOut } = userStore();

  function getFirstLetters(input?: string): string {
    if (!input) {
      return ""; // Return an empty string if input is undefined or null
    }
    return input
      .split(" ") // Split the string by spaces
      .map((word) => word[0]) // Map each word to its first letter
      .join(""); // Join the first letters into a single string
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.image} alt={user?.name} />
            <AvatarFallback> {getFirstLetters(user?.name)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
