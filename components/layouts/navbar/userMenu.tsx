"use client";

import { Avatar, AvatarFallback, UIAlertDialog } from "@/components/common";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common";
import { useIsMobile } from "@/lib/hooks/useMobile";
import { logout } from "@/lib/common/auth";
import { User } from "@supabase/supabase-js";
import { LayoutDashboard, LogOut, Rocket, Settings2, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IUserDropdownMenu {
  user: User;
}
export const UserDropdownMenu = ({ user }: IUserDropdownMenu) => {
  const navigate = useRouter();
  const isMobile = useIsMobile();
  const [isSignOut, setIsSignOut] = useState(false);

  const handleSignOut = async () => {
    await logout();
    navigate.replace("/");
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-3 focus-visible:outline-none outline-none">
          <div className="text-end flex flex-col">
            {!isMobile && (
              <>
                <p className="text-sm font-medium">{user.user_metadata.display_name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </>
            )}
          </div>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.user_metadata.display_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn(
            "mt-2 w-72 origin-top",
            "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in data-[state=open]:slide-in-from-top-1",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out data-[state=closed]:slide-out-to-top-1",
            "duration-200 ease-out"
          )}
        >
          <DropdownMenuItem className="py-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.user_metadata.display_name.charAt(0).toUpperCase()}
              </AvatarFallback>
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
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive dark:text-red-300" onClick={() => setIsSignOut(true)}>
            <LogOut className="mr-1 text-destructive dark:text-red-300" /> Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UIAlertDialog
        open={isSignOut}
        onOpenChange={setIsSignOut}
        variant="warning"
        title="Sign out?"
        description={<p>Ready to sign out? You can always come back anytime!</p>}
        actionText="Sign out"
        hasCancel
        onAction={handleSignOut}
      />
    </>
  );
};
