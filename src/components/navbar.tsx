"use client";

import Link from "next/link";

import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ShinyButton } from "./magicui/shiny-button";
import { ThemeToggle } from "./theme-toggle";
import MobileNavigation from "./mobile-navbar";
import { navbarLinks } from "@/constants";
import { useModalStore } from "@/stores/modalStore";

const Navbar = () => {
  const { openModal } = useModalStore();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNavigation />

        <div className="hidden md:flex gap-2">
          <Link className="flex items-center mr-6" href="/">
            <span className="font-bold">
              <AnimatedGradientText>Roshan</AnimatedGradientText>
            </span>
          </Link>

          <div className="flex items-center space-x-6 text-sm font-medium">
            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="transition-colors hover:text-foreground/80"
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <ShinyButton
          onClick={openModal}
          className="hidden md:block ml-auto rounded-full border"
        >
          Contact
        </ShinyButton>

        <div className="ml-auto md:ml-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
