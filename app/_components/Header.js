"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 bg-transparent sm:px-8 px-4 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <Navigation />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-primary-100 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex flex-col items-center justify-start pt-20 px-4 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute top-8 right-8">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-primary-100 transition-colors hover:text-accent-400 focus:outline-none"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <Navigation isMobile={true} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
