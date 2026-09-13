import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { resources } from "@/content/site-data";
export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <div className="page-shell py-20">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">Your next step</p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-800">Resources</h1>
        <p className="mt-5 text-lg leading-8 text-slate-500">
          A growing collection of tools, guidance, student software perks, and support for your
          academic journey.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((item) => (
          <section
            id={item.id}
            key={item.id}
            className="flex scroll-mt-28 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition hover:border-kbu-orange/40 hover:shadow-xs"
          >
            <div>
              <Image
                src={item.image}
                alt=""
                width={640}
                height={360}
                className="mb-6 h-32 w-full rounded-xl bg-kbu-mist object-contain p-5"
              />
              <p className="eyebrow mb-4">{item.label}</p>
              <h2 className="text-xl font-semibold text-slate-800">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>
            </div>

            <div className="mt-8 pt-2">
              {item.href.startsWith("/resources/") ? (
                <Link
                  href={item.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kbu-orange px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-kbu-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange"
                >
                  <span>Explore Student Offers</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <p className="text-sm font-medium text-slate-400">Details will be added soon.</p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
