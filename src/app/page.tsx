import Link from "next/link";
import { AnnouncementCard, EventCard, ResourceCard } from "@/components/content-cards";
import { announcements, events, highlights, resources } from "@/content/site-data";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-kbu-mist">
        <div className="page-shell grid min-h-150 items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <p className="eyebrow mb-6">
              Department of Computer Science · Faculty of Science and Technology
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-800 sm:text-6xl">
              Learn deeply.
              <br />
              <span className="text-kbu-orange">Build boldly.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Welcome to the Computer Science community at KBU—a place for curious minds,
              collaborative ideas, and the next generation of digital builders.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#quick-links"
                className="rounded-full bg-kbu-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-kbu-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange"
              >
                Explore the portal <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-kbu-border px-6 py-3.5 text-sm font-semibold text-kbu-orange transition hover:border-kbu-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange"
              >
                Meet our department
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-square rounded-4xl border border-kbu-border bg-kbu-mist p-8 shadow-xl shadow-slate-200/70 sm:p-12">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-kbu-orange/20 bg-white p-6 text-slate-800 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-kbu-orange">
                  Computing community
                </span>
                <div>
                  <div className="mb-4 h-1 w-16 bg-kbu-orange" />
                  <p className="max-w-xs text-3xl font-medium leading-tight sm:text-4xl">
                    The future is built by people who keep learning.
                  </p>
                </div>
                <span className="self-end font-mono text-sm text-slate-400">KBU / CS_2026</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-kbu-orange px-5 py-4 text-white shadow-xl">
              <p className="text-2xl font-semibold">01</p>
              <p className="text-xs font-medium uppercase tracking-wide">community</p>
            </div>
          </div>
        </div>
      </section>
      <section id="quick-links" className="page-shell py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Start here</p>
            <h2 className="text-3xl font-semibold tracking-tight ">
              Everything you need, close by.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Your shortcut to the latest information, opportunities, and support from the department.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {resources.map((item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="page-shell">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Stay in the loop</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                Latest announcements
              </h2>
            </div>
            <Link
              href="/announcements"
              className="hidden text-sm font-semibold text-kbu-orange hover:text-kbu-primary-hover sm:block"
            >
              View all <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {announcements.map((item) => (
              <AnnouncementCard key={item.id} item={item} />
            ))}
          </div>
          <Link
            href="/announcements"
            className="mt-6 block text-sm font-semibold text-kbu-orange sm:hidden"
          >
            View all announcements <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="page-shell py-20">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-3">Coming up</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
              Make time for what matters.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Meet people, sharpen your skills, and find your place in the community.
            </p>
            <Link
              href="/events"
              className="mt-7 inline-block text-sm font-semibold text-kbu-orange hover:text-kbu-primary-hover"
            >
              See all events <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4">
            {events.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-kbu-mist py-16">
        <div className="page-shell grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="border-l border-kbu-border pl-5">
              <p className="text-4xl font-semibold text-kbu-orange">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
