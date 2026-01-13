export interface HeroAdvantage {
  icon: string;
  text: string;
}

export interface HeroCTA {
  label: string;
  link: string;
}

export interface HeroTestimonial {
  author: string;
  rating: number;
  source?: string;
  text: string;
}

export interface HeroImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface HeroReview {
  author: string;
  avatarUrl: string;
  rating: number;
  subtitle: string;
  text: string;
}

export interface HeroData {
  title: string;
  advantages: HeroAdvantage[];
  cta: HeroCTA;
  review?: HeroReview[];
  carouselImages: HeroImage[];
}
