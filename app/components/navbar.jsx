"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Blogs", href: "/blog" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] -mx-6 sm:-mx-12 px-6 sm:px-12 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          cyrill<span className="text-[#16f2b3]">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="block rounded-full px-4 py-2 text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-[#16f2b3]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/#contact"
              className="block rounded-full border border-[#16f2b3]/50 px-4 py-2 text-[#16f2b3] transition-colors duration-200 hover:bg-[#16f2b3] hover:text-[#070b14]"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/5"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 pb-4 text-base">
          {[...links, { label: "Contact", href: "/#contact" }].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-gray-200 hover:bg-white/5 hover:text-[#16f2b3]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
