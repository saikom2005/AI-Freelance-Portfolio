export type Project = {
  id: string;
  title: string;
  badge: string;
  description: string;
  pills: string[];
  caseStudyUrl?: string;
};

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type SiteConfig = {
  name: string;
  email: string;
  linkedIn: string;
  github?: string;
  tagline: string;
  taglineAccent: string;
  subHeadline: string;
  availableForWork: boolean;
};
