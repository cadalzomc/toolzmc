import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoMainProps {
  className?: string;
}
export const LogoMain = ({ className }: LogoMainProps) => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/img/Logo.png" width={50} height={50} alt="mctoolz" className={cn("h-8 w-8", className)} />
      <span className="font-bold text-xl">MCToolz</span>
    </Link>
  );
};
