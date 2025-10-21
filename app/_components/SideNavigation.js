import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation({ onClose }) { // Accept onClose prop
  const pathname = usePathname(); // Get current pathname

  return (
    <nav className="px-4 py-6 md:px-0 md:py-0"> {/* Removed border */}
      <ul className="flex flex-col gap-4 md:gap-2 h-full text-xl md:text-lg"> {/* Increased gap and text size on mobile */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900 text-primary-100" : "" // Active link styling
              }`}
              href={link.href}
              onClick={onClose} // Close sidebar on link click
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
