"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 font-medium transition-colors ${
        isActive
          ? "text-primary"
          : "text-gray-700 hover:text-primary"
      }`}
    >
      {children}

      {/* underline */}
      <span
        className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-primary transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
};

export default NavLink;
