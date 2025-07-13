import Link from "next/link";
import { AlignLeft } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShinyButton } from "./magicui/shiny-button";
import { navbarLinks } from "@/constants";
import { useModalStore } from "@/stores/modalStore";

const MobileNavigation = () => {
  const { openModal } = useModalStore();

  return (
    <Sheet>
      <SheetTrigger className="md:hidden mr-3">
        <AlignLeft size={25} />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <SheetHeader className="text-left">
          <SheetTitle>Roshan</SheetTitle>
        </SheetHeader>

        <ShinyButton
          onClick={openModal}
          className="rounded-full border mb-5 mt-4"
        >
          Contact
        </ShinyButton>

        <div className="flex flex-col gap-4 text-lg px-2 font-medium">
          {navbarLinks.map((link) => (
            <SheetClose key={link.name} asChild>
              <Link
                href={link.url}
                className="transition-colors hover:text-foreground/80"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
