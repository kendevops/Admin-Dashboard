import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <section className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between ">
      <Link href="/">
        <Image
          src="/img/logo.png"
          width={40}
          height={40}
          alt="Synergetix logo"
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shascn" />
            <AvatarFallback className="text-black">BT</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default Navbar;
