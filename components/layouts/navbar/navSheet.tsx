import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Menu } from "lucide-react";

import { Button, Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/common";
import { MobileNavMenu } from "./mobileNavMenu";
import { LogoMain } from "@/components/shared/logo/main";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHiddenPrimitive.Root>
        <SheetTitle>Mobile Drawer</SheetTitle>
      </VisuallyHiddenPrimitive.Root>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full duration-200">
        <div className="p-4">
          <LogoMain />
        </div>

        <MobileNavMenu />

        <div className="mt-8 space-y-4 px-4">
          <Button className="w-full max-sm:h-10 sm:hidden">Sign In</Button>
          <Button className="w-full max-sm:h-10 sm:hidden">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
