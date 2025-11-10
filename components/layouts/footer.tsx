import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import { Button, FormField, Separator } from "../common";
import { LogoMain } from "../shared/logo/main";
import Link from "next/link";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Tools",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="mt-12 sm:mt-20 dark bg-background border-t">
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              <LogoMain />

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-muted-foreground hover:text-foreground">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:max-w-xs w-full">
              <h6 className="font-medium text-white">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <FormField
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="grow  text-white! dark:focus-visible:ring-2! border-l-amber-500"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <Separator />
          <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
            <span className="text-muted-foreground text-center sm:text-start">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="https://cadalzomeigo.vercel.app" target="_blank">
                MCToolz Hub
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
