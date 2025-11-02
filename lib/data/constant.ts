import { Bolt, Contact, Home, TagIcon, Users } from "lucide-react";
import { IMenuItem } from "../models";

export const CONST_NAV_MENU: IMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: TagIcon,
  },
  {
    title: "Tools",
    url: "/tools",
    icon: Bolt,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
  {
    title: "About Us",
    url: "/about",
    icon: Users,
  },
];
