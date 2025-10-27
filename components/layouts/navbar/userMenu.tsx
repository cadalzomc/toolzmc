import { Avatar, AvatarFallback } from "@/components/common";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common";
import { logout } from "@/lib/common/auth";
import { User } from "@supabase/supabase-js";
import { LayoutDashboard, LogOut, Moon, Rocket, Settings2, User as UserIcon } from "lucide-react";

interface IUserDropdownMenu {
  user: User;
}
export const UserDropdownMenu = ({ user }: IUserDropdownMenu) => {
  const handleSignOut = async () => {
    await logout();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 focus-visible:outline-none outline-none">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">M</AvatarFallback>
        </Avatar>
        <div className="text-start flex flex-col">
          <p className="text-sm font-medium">Meigo Cadalzo</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-72">
        <DropdownMenuItem className="py-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">MW</AvatarFallback>
          </Avatar>
          <div className="ml-1 flex flex-col">
            <p className="text-sm font-medium">My Account</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start">
          <div className="flex items-center gap-1">
            <Rocket className="mr-1 h-[18px] w-[18px]" />
            <span className="font-medium leading-none">Upgrade</span>
          </div>
          <p className="text-muted-foreground">You&apos;re on a free version.</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LayoutDashboard className="mr-1" /> Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserIcon className="mr-1" /> Invite people
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings2 className="mr-1" /> Preferences
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Moon className="mr-1" /> Dark Mode
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-1" /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
