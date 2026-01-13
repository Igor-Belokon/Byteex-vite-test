export interface BenefitsImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface BenefitsAdvantage {
  icon: string;
  title: string;
  text: string;
}

export interface BenefitsData {
  title: string;
  advantages: BenefitsAdvantage[];
  carouselImages: BenefitsImage[];
  logos: BenefitsLogo[];
}

export interface BenefitsLogo {
  id: number;
  url: string;
}
