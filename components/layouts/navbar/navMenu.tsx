import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/common/base/navigation-menu";
import { CONST_NAV_MENU } from "@/lib/data";
import { cn } from "@/lib/utils";
import { type NavigationMenuProps } from "@radix-ui/react-navigation-menu";

interface INavMenuProps extends NavigationMenuProps {
  isMobile?: boolean;
}

export const NavMenu = ({ isMobile, ...props }: INavMenuProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:gap-3 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-center data-[orientation=vertical]:w-full">
        {CONST_NAV_MENU.map((menu) => (
          <NavigationMenuItem
            className={cn("hover:text-primary/90 duration-150 cursor-pointer", isMobile && "w-full")}
            onClick={() => scrollToSection(menu.url)}
            key={menu.title}
          >
            {menu.title}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
