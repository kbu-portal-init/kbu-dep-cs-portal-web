import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/brand/kbu-logo.png" alt="KBU Logo" width={32} height={32} />
            <span className="font-semibold text-kbu-primary">Computer Science</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            A place to learn deeply, build boldly, and grow together at KBU Faculty of Science and
            Technology.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-slate-800">Explore</h2>
          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <Link href="/announcements" className="hover:text-kbu-orange">
              Announcements
            </Link>
            <Link href="/events" className="hover:text-kbu-orange">
              Events
            </Link>
            <Link href="/resources" className="hover:text-kbu-orange">
              Resources
            </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-slate-800">Contact</h2>
          <p className="text-sm leading-6 text-slate-500">
            Faculty of Science and Technology
            <br />
            KBU Campus
            <br />
            cs@kbu.example
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 KBU Faculty of Science and Technology. Temporary portal content.</span>
          <span>Built for the KBU computing community.</span>
        </div>
      </div>
    </footer>
  );
}
