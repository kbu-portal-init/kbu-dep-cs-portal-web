export type Announcement = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
};

export type DepartmentHighlight = {
  value: string;
  label: string;
};

export type StudentBenefitCategory =
  "All" | "Developer Tools" | "AI & Cloud" | "Design & UI/UX" | "Learning & Productivity";

export type StudentBenefit = {
  id: string;
  title: string;
  provider: string;
  categories: Exclude<StudentBenefitCategory, "All">[];
  tagline: string;
  description: string;
  valueBadge?: string;
  badge?: string;
  pricingNote?: string;
  restrictionsNote?: string;
  postedDate?: string;
  perks: string[];
  eligibility: string;
  howToClaim: string[];
  officialUrl: string;
  iconName: "github" | "google" | "figma" | "aws" | "code" | "cloud" | "file-text" | "box";
};
