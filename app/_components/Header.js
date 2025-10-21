"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative border-b border-primary-900 sm:px-8 px-4 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <nav className="hidden md:block">
          <Navigation />
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-100 focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-950 py-4 px-4 z-20">
          <Navigation isMobile={true} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;
