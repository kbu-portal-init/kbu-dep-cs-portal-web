import Link from "next/link";
import type { StudentBenefit } from "@/lib/types";
import { GithubIcon, FigmaIcon } from "@/components/brand-icons";
import { ArrowRight, Bot, Box, CheckCircle2, Code2, Cloud, FileText } from "lucide-react";

interface StudentBenefitCardProps {
  benefit: StudentBenefit;
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

export function StudentBenefitCard({ benefit }: StudentBenefitCardProps) {
  const IconComponent = iconMap[benefit.iconName] || Box;

  return (
    <Link
      href={`/resources/student-benefits/${benefit.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:-translate-y-1 hover:border-kbu-orange/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange sm:p-6"
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-kbu-mist text-kbu-orange transition group-hover:bg-kbu-orange group-hover:text-white sm:h-12 sm:w-12">
            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {benefit.valueBadge && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 sm:px-2.5 sm:text-xs">
                {benefit.valueBadge}
              </span>
            )}
            {benefit.badge && (
              <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-kbu-orange sm:px-2.5 sm:text-xs">
                {benefit.badge}
              </span>
            )}
          </div>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          {benefit.categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center rounded-md bg-orange-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-kbu-orange sm:text-[10px]"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-slate-800 transition group-hover:text-kbu-orange sm:text-xl">
          {benefit.title}
        </h3>
        <p className="mt-0.5 text-[11px] font-medium text-slate-400 sm:text-xs">
          By {benefit.provider}
        </p>

        <p className="mt-2.5 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
          {benefit.tagline}
        </p>

        {benefit.pricingNote && (
          <div className="mt-2.5 rounded-xl border border-orange-200/60 bg-orange-50/80 p-2 text-[11px] font-medium text-orange-900 sm:mt-3 sm:p-2.5 sm:text-xs">
            {benefit.pricingNote}
          </div>
        )}

        <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 sm:mt-4 sm:space-y-2 sm:pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            Key Highlights
          </p>
          <ul className="space-y-1 sm:space-y-1.5">
            {benefit.perks.slice(0, 3).map((perk, idx) => (
              <li
                key={idx}
                className="flex items-start gap-1.5 text-[11px] leading-4 text-slate-600 sm:gap-2 sm:text-xs sm:leading-5"
              >
                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-kbu-orange sm:h-3.5 sm:w-3.5" />
                <span className="line-clamp-2">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-1 sm:mt-6 sm:pt-2">
        <div className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-kbu-mist px-3 py-2 text-xs font-semibold text-slate-700 transition group-hover:bg-kbu-orange group-hover:text-white sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm">
          <span>View Detailed Guide</span>
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </div>
        {benefit.postedDate && (
          <p className="mt-2.5 text-center text-[10px] font-medium text-slate-400 sm:text-[11px]">
            Posted on {benefit.postedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
