"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact us", href: "/contactus" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-6">
      {navs.map((nav) => (
        <Link
          key={nav.name}
          href={nav.href}
          className={`px-4 py-1 hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 ${
            pathname === nav.href && "border-b-2 border-yellow-500"
          }`}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
