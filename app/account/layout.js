"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import SideNavigation from "../_components/SideNavigation";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-full flex">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-primary-100 focus:outline-none">
          {isSidebarOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-64 border-r border-primary-900"> {/* Fixed width for desktop sidebar */}
        <SideNavigation />
      </div>

      {/* Mobile Sliding Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-primary-950 z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)} className="text-primary-100 focus:outline-none">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <SideNavigation />
      </div>

      {/* Main Content */}
      <div className="flex-grow py-10 px-4 md:px-0">
        {children}
      </div>
    </div>
  );
}

export default Layout;
