export interface FAQImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface FAQContent {
  title: string;
  text: string;
}

export interface FAQData {
  question: FAQContent[];
  images: FAQImage[];
  title: string;
}
