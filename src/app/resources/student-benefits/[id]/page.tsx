import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { studentBenefits } from "@/content/site-data";
import { GithubIcon, FigmaIcon } from "@/components/brand-icons";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Box,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  FileText,
  Mail,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const iconMap = {
  github: GithubIcon,
  google: Bot,
  figma: FigmaIcon,
  aws: Cloud,
  code: Code2,
  cloud: Cloud,
  "file-text": FileText,
  box: Box,
};

export async function generateStaticParams() {
  return studentBenefits.map((benefit) => ({
    id: benefit.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const benefit = studentBenefits.find((b) => b.id === id);

  if (!benefit) {
    return { title: "Student Benefit Not Found" };
  }

  return {
    title: `${benefit.title} — KBU Student Benefits`,
    description: benefit.description,
  };
}

export default async function StudentBenefitDetailPage({ params }: PageProps) {
  const { id } = await params;
  const benefit = studentBenefits.find((b) => b.id === id);

  if (!benefit) {
    notFound();
  }

  const IconComponent = iconMap[benefit.iconName] || Box;
  const otherBenefits = studentBenefits.filter((b) => b.id !== benefit.id).slice(0, 3);

  return (
    <div className="page-shell py-6 sm:py-16">
      {/* Top Navigation & Breadcrumbs */}
      <div className="mb-5 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Breadcrumb" className="hidden sm:block">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500">
            <li>
              <Link href="/" className="transition hover:text-kbu-orange">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/resources" className="transition hover:text-kbu-orange">
                Resources
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/resources/student-benefits" className="transition hover:text-kbu-orange">
                Student Benefits
              </Link>
            </li>
            <li>/</li>
            <li className="line-clamp-1 font-semibold text-slate-800" aria-current="page">
              {benefit.title}
            </li>
          </ol>
        </nav>

        <Link
          href="/resources/student-benefits"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition hover:text-kbu-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to all student benefits</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
            {/* Top row on mobile: icon + badges */}
            <div className="flex items-center justify-between sm:block">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kbu-orange text-white shadow-xs sm:h-16 sm:w-16">
                <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              {/* Badges on mobile (floated right) */}
              <div className="flex flex-wrap items-center gap-1.5 sm:hidden">
                {benefit.badge && (
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-kbu-orange">
                    {benefit.badge}
                  </span>
                )}
                {benefit.valueBadge && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                    {benefit.valueBadge}
                  </span>
                )}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              {/* Categories + Badges on tablet/desktop */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {benefit.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center rounded-md bg-orange-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-kbu-orange sm:text-xs"
                  >
                    {cat}
                  </span>
                ))}
                {benefit.badge && (
                  <span className="hidden rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-kbu-orange sm:inline-block">
                    {benefit.badge}
                  </span>
                )}
                {benefit.valueBadge && (
                  <span className="hidden rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 sm:inline-block">
                    {benefit.valueBadge}
                  </span>
                )}
              </div>

              <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {benefit.title}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
                <span>Provided by {benefit.provider}</span>
                {benefit.postedDate && (
                  <>
                    <span>•</span>
                    <span>Posted on {benefit.postedDate}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <a
              href={benefit.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kbu-orange px-5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-kbu-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span>Claim on {benefit.provider}</span>
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Pricing / Special Term Banner if applicable */}
        {benefit.pricingNote && (
          <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-orange-200 bg-orange-50/80 p-3.5 sm:mt-8 sm:gap-3 sm:p-5">
            <Tag className="mt-0.5 h-4 w-4 shrink-0 text-kbu-orange sm:h-5 sm:w-5" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-kbu-orange sm:text-xs">
                Special Pricing For Verified Students
              </p>
              <p className="mt-0.5 text-xs font-semibold text-slate-800 sm:mt-1 sm:text-base">
                {benefit.pricingNote}
              </p>
            </div>
          </div>
        )}

        <p className="mt-4 text-xs leading-5 text-slate-600 sm:mt-6 sm:text-base sm:leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-3 lg:gap-10">
        {/* Main 2-column content */}
        <div className="space-y-6 sm:space-y-10 lg:col-span-2">
          {/* Perks & Features */}
          <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-kbu-orange sm:h-5 sm:w-5" />
              <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
                What&apos;s Included Free
              </h2>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
              Exclusive privileges unlocked with student academic status
            </p>

            <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {benefit.perks.map((perk, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs leading-5 text-slate-700 sm:gap-3 sm:text-sm sm:leading-relaxed"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kbu-orange sm:h-4 sm:w-4" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            {/* Restrictions Note if provided */}
            {benefit.restrictionsNote && (
              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-[11px] leading-relaxed text-slate-500 sm:mt-8 sm:p-4 sm:text-xs">
                <p className="mb-1 font-semibold text-slate-600">Important Terms & Restrictions:</p>
                <p>{benefit.restrictionsNote}</p>
              </div>
            )}
          </section>

          {/* Step-by-Step Claim Walkthrough */}
          <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
              How to Claim This Student Offer
            </h2>
            <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
              Follow these exact steps to complete student verification
            </p>

            <ol className="mt-4 space-y-3.5 sm:mt-6 sm:space-y-5">
              {benefit.howToClaim.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-kbu-orange text-[10px] font-bold text-white shadow-2xs sm:h-7 sm:w-7 sm:text-xs">
                    {idx + 1}
                  </span>
                  <div className="pt-0.5 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-relaxed">
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
              <span className="text-xs text-slate-500">
                Ready to begin? Head to the official offer portal:
              </span>
              <a
                href={benefit.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-kbu-orange px-4 py-2 text-xs font-semibold text-white transition hover:bg-kbu-primary-hover sm:px-5 sm:py-2.5"
              >
                <span>Go to {benefit.provider} Official Page</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-1">
          {/* Eligibility Requirements */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-800">Eligibility Criteria</h3>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">{benefit.eligibility}</p>
          </div>

          {/* Compact Student Email Helper Link */}
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-2xs">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-kbu-orange" />
              <span>Need KBU student email help?</span>
            </div>
            <Link
              href="/resources/student-benefits#student-email-guide"
              className="shrink-0 font-semibold text-kbu-orange hover:underline"
            >
              Email Guide →
            </Link>
          </div>

          {/* More Student Offers */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xs">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Explore More Offers
            </h3>
            <div className="space-y-3">
              {otherBenefits.map((item) => (
                <Link
                  key={item.id}
                  href={`/resources/student-benefits/${item.id}`}
                  className="group block rounded-2xl border border-slate-100 bg-kbu-surface p-3.5 transition hover:border-kbu-orange/40 hover:bg-white"
                >
                  <div className="mb-0.5 flex flex-wrap items-center gap-1">
                    {item.categories.map((cat) => (
                      <span key={cat} className="eyebrow text-[10px]">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 transition group-hover:text-kbu-orange">
                      {item.title}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-kbu-orange" />
                  </div>
                  <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
