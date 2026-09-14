"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/announcements", label: "Announcements" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-kbu-surface/90 backdrop-blur-lg">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/brand/kbu-logo.png" alt="KBU Logo" width={40} height={40} />
          <span className="hidden text-sm font-semibold leading-tight text-slate-800 sm:block">
            Computer Science
            <br />
            <span className="font-normal text-slate-500">Faculty of Science and Technology</span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-kbu-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kbu-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#quick-links"
            className="rounded-full bg-kbu-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-kbu-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange"
          >
            Student portal
          </Link>
        </nav>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="page-shell flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-2 text-base font-medium text-slate-700 focus-visible:outline-2 focus-visible:outline-kbu-orange"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#quick-links"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-kbu-orange px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Student portal
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
