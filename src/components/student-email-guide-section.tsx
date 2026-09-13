"use client";

import { useState } from "react";
import { studentEmailGuide } from "@/content/site-data";
import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";

export function StudentEmailGuideSection() {
  const [copied, setCopied] = useState(false);

  const copyEmailFormat = async () => {
    try {
      await navigator.clipboard.writeText("uxxxxxxxxxxxx@ms.kbu.ac.th");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = "uxxxxxxxxxxxx@ms.kbu.ac.th";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="student-email-guide"
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-kbu-border/60 bg-gradient-to-b from-white to-kbu-surface shadow-xs"
    >
      <div className="border-b border-slate-200/80 bg-kbu-mist/60 px-4 py-4 sm:px-8 sm:py-5">
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-kbu-orange text-white shadow-xs sm:h-11 sm:w-11">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow text-[10px] sm:text-xs">
                  Official KBU Student Verification
                </span>
                {"postedDate" in studentEmailGuide && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] text-slate-400 sm:text-xs">
                      Posted on {(studentEmailGuide as { postedDate?: string }).postedDate}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-base font-bold text-slate-800 sm:text-xl">
                How to Access Your KBU Student Email
              </h2>
            </div>
          </div>

          <a
            href={studentEmailGuide.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-kbu-orange px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-kbu-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kbu-orange sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span>Open Outlook Webmail</span>
            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>

      <div className="p-4 sm:p-8">
        <p className="max-w-3xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-relaxed">
          {studentEmailGuide.description}
        </p>

        {/* Email format callout */}
        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-orange-200 bg-orange-50/60 p-3.5 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-kbu-orange sm:h-5 sm:w-5" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-kbu-orange sm:text-xs">
                Your Institutional Email Format
              </p>
              <p className="mt-0.5 font-mono text-xs font-bold text-slate-800 sm:text-base">
                {studentEmailGuide.formatExample}
              </p>
              <p className="text-[11px] text-slate-500 sm:text-xs">
                Replace <span className="font-semibold text-slate-700">xxxxxxxxxxxx</span> with your
                actual KBU student ID number.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={copyEmailFormat}
            className="inline-flex items-center gap-1.5 self-start rounded-lg border border-orange-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:bg-orange-100/50 sm:self-center sm:px-3.5 sm:py-2 sm:text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-600 sm:h-3.5 sm:w-3.5" />
                <span className="text-emerald-700">Copied format!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 text-slate-500 sm:h-3.5 sm:w-3.5" />
                <span>Copy format</span>
              </>
            )}
          </button>
        </div>

        {/* Steps Grid */}
        <div className="mt-6 sm:mt-8">
          <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:mb-4 sm:text-xs">
            4-Step Login Walkthrough
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {studentEmailGuide.steps.map((s) => (
              <div
                key={s.stepNumber}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-5"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-kbu-orange sm:text-xs">
                    {s.stepNumber}
                  </span>
                  <h4 className="mt-1 text-xs font-semibold text-slate-800 sm:mt-2 sm:text-sm">
                    {s.title}
                  </h4>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className="mt-6 rounded-2xl bg-kbu-mist p-3.5 sm:mt-8 sm:p-5">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">
            <HelpCircle className="h-3.5 w-3.5 text-kbu-orange sm:h-4 sm:w-4" />
            <span>Important Tips for Student Verification</span>
          </div>
          <ul className="mt-2.5 grid gap-2 sm:mt-3 sm:grid-cols-3">
            {studentEmailGuide.tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-[11px] leading-4 text-slate-600 sm:text-xs sm:leading-5"
              >
                <AlertCircle className="mt-0.5 h-3 w-3 shrink-0 text-kbu-orange sm:h-3.5 sm:w-3.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
