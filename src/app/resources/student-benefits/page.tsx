"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { studentBenefits } from "@/content/site-data";
import type { StudentBenefitCategory } from "@/lib/types";
import { StudentBenefitCard } from "@/components/cards/student-benefit-card";
import { StudentEmailGuideSection } from "@/components/student-email-guide-section";
import { ChevronRight, ExternalLink, Gift, Mail, Search, Sparkles, X } from "lucide-react";

const categories: StudentBenefitCategory[] = [
  "All",
  "Developer Tools",
  "AI & Cloud",
  "Design & UI/UX",
  "Learning & Productivity",
];

export default function StudentBenefitsPage() {
  const [selectedCategory, setSelectedCategory] = useState<StudentBenefitCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBenefits = useMemo(() => {
    return studentBenefits.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.categories.includes(selectedCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.provider.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.perks.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const scrollToEmailGuide = () => {
    const el = document.getElementById("student-email-guide");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-shell py-8 sm:py-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
          <li>
            <Link href="/" className="transition hover:text-kbu-orange">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3 text-slate-400" />
          </li>
          <li>
            <Link href="/resources" className="transition hover:text-kbu-orange">
              Resources
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3 text-slate-400" />
          </li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Student Benefits
          </li>
        </ol>
      </nav>

      {/* Header section */}
      <div className="mb-8 max-w-3xl sm:mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/70 px-2.5 py-0.5 text-[11px] font-semibold text-kbu-orange sm:text-xs sm:px-3 sm:py-1">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span>Available for All Enrolled KBU Students</span>
        </div>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Student Benefits & Developer Packs
        </h1>
        <p className="mt-2.5 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
          Unlock over $200,000+ in industry-standard software, AI coding assistants, cloud credits,
          and educational licenses using your official KBU student credentials.
        </p>

        {/* Quick action buttons */}
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={scrollToEmailGuide}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-kbu-orange/40 bg-orange-50/70 px-4 py-2 text-xs font-semibold text-kbu-orange transition hover:border-kbu-orange hover:bg-orange-100"
          >
            <Mail className="h-3.5 w-3.5 text-kbu-orange" />
            <span>Need student email to claim? View Login Guide</span>
            <span className="text-[10px] text-kbu-orange">↓</span>
          </button>
          <a
            href="https://outlook.cloud.microsoft/mail/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span>Open Outlook Webmail</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Search & Category Filter bar */}
      <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Explore Available Offers
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Showing {filteredBenefits.length} of {studentBenefits.length} student benefits
            </p>
          </div>

          {/* Search box with guaranteed spacing */}
          <div className="flex w-full items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-2xs transition focus-within:border-kbu-orange focus-within:ring-2 focus-within:ring-kbu-orange/20 sm:max-w-xs">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, providers..."
              className="w-full min-w-0 bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="shrink-0 p-0.5 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (swipeable on mobile) */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-kbu-orange text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Benefits Card Grid */}
      {filteredBenefits.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBenefits.map((benefit) => (
            <StudentBenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <Gift className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-base font-semibold text-slate-800">No benefits found</h3>
          <p className="mt-2 text-xs text-slate-500">
            No perks matched your query &quot;{searchQuery}&quot;. Try adjusting your keywords or
            filter category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-5 rounded-full bg-kbu-orange px-5 py-2 text-xs font-semibold text-white transition hover:bg-kbu-primary-hover"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Student Email Guide Section (Placed below offers so offers are front and center) */}
      <div className="mt-14 border-t border-slate-200 pt-10 sm:mt-20">
        <StudentEmailGuideSection />
      </div>
    </div>
  );
}
