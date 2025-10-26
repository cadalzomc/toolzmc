import { FunctionSquareIcon, Home, MessageSquareQuote, TagIcon, Users } from "lucide-react";
import { IMenuItem } from "../models";

export const CONST_NAV_MENU: IMenuItem[] = [
 {
      title: "Features",
      url: "features",
      icon: Home,
    },
    {
      title: "FAQ",
      url: "faq",
      icon: FunctionSquareIcon,
    },
    {
      title: "Testimonials",
      url: "testimonials",
      icon: MessageSquareQuote,
    },
    {
      title: "Pricing",
      url: "pricing",
      icon: TagIcon,
    },
    {
      title: "About Us",
      url: "aboutus",
      icon: Users,
    },
]