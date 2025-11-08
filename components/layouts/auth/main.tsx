import { ChevronLeft, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { Separator } from "@/components/common";
import Link from "next/link";

const LayoutAuthMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-dvh justify-center p-2 lg:grid-cols-2">
      <div className="bg-zinc-950 dark:bg-zinc-900 relative order-2 hidden h-full rounded-3xl lg:flex">
        <div className="text-white absolute top-10 space-y-1 px-10">
          <Image src="/img/Logo.png" width={100} height={100} alt="mctoolz" className="h-10 w-18" />
          <h1 className="text-2xl font-medium">MCTool</h1>
          <p className="text-sm">Generate. Convert. Sign. Repeat.</p>
        </div>

        <div className="absolute bottom-10 flex w-full justify-between px-10">
          <div className="text-white flex-1 space-y-1">
            <h2 className="font-bold">Work Smarter, Not Harder</h2>
            <p className="text-sm">Online converters, generators, and annotators to speed up your workflow.</p>
          </div>
          <Separator orientation="vertical" className="mx-3 h-auto!" />
          <div className="text-white flex-1 space-y-1">
            <h2 className="font-bold">Developers Love It</h2>
            <p className="text-sm">Built by developers, for developers — intuitive, fast, and reliable.</p>
          </div>
        </div>
      </div>
      <div className="relative order-1 flex h-full">
        <div className="m-auto sm:min-w-md">
          <Link className="w-fit sm:mt-10 absolute top-0 mb-20 text-zinc-950 dark:text-white" href="/">
            <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
              <ChevronLeft className="mr-3 h-4 w-4 text-zinc-950 dark:text-white" />
              <p className="ml-0 text-sm text-zinc-950 dark:text-white">Back to the website</p>
            </div>
          </Link>
          <div className="max-sm:px-2">{children}</div>
        </div>
        <div className="absolute bottom-5 flex w-full justify-between px-10">
          <div className="text-sm">© 2025 MCTool</div>
          <div className="flex items-center gap-1 text-sm">
            <Globe className="text-muted-foreground size-4" />
            ENG
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuthMain;
