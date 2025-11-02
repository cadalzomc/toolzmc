import { SheetClose } from "@/components/common";
import { CONST_NAV_MENU } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export const MobileNavMenu = () => {
  return (
    <AnimatePresence>
      <div className="px-4 space-y-1 w-full">
        {CONST_NAV_MENU.map((item, index) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <SheetClose asChild>
              <Link
                href={item.url}
                className="w-full flex  justify-between py-4 text-sm font-semibold border-b border-[#ecd9e7] dark:border-[#362e34]"
              >
                <span className="flex gap-2 items-center">
                  <item.icon className="w-4" />
                  {item.title}
                </span>
                <ChevronRightIcon className="w-4 mr-2" />
              </Link>
            </SheetClose>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
