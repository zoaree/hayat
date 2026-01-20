
export interface Coverage {
  title: string;
  description: string;
  isMain: boolean;
  limits?: string;
  durationInfo?: string;
  impactOnPolicy?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DetailedIllness {
  name: string;
  description: string;
  exclusions?: string;
}

export interface PremiumBreakdown {
  investment: number;
  award: number;
  risk: number;
  management: number;
}

export interface ProductData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  summary: string;
  currency: string;
  type: string;
  duration: string;
  renewal: string;
  maxAgeFormula: string;
  coverages: Coverage[];
  criticalIllnesses?: string[];
  detailedIllnesses?: DetailedIllness[];
  disabilityCriteria?: string[];
  waitingPeriods: { title: string; period: string }[];
  exclusions: string[];
  taxAdvantage: string;
  premiumBreakdown?: PremiumBreakdown;
  lifecycle: {
    tenzil: string;
    istirak: string;
    istirakTable?: { label: string; rate: string }[];
    araVerme: string;
    ikraz?: string;
    sonlanma: string;
  };
  faqs: FAQ[];
}

export type ProductId = 'turuncu-elma' | 'rop-80-20' | string;
