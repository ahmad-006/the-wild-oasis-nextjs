import Link from "next/link";

export default function Navigation({ isMobile, onClose }) {
  return (
    <nav className={isMobile ? "text-2xl" : "z-10 sm:text-xl text-base"}>
      <ul className={isMobile ? "flex flex-col gap-6" : "flex flex-wrap sm:gap-16 gap-8 items-center"}>
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
            onClick={isMobile ? onClose : undefined}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
            onClick={isMobile ? onClose : undefined}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            onClick={isMobile ? onClose : undefined}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
