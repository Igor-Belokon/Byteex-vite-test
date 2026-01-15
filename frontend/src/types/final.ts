export interface Group {
  icon: string;
  text: string;
}

export interface FinalImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface FinalData {
  title: string;
  text: string;
  group: Group[];
  icon: string;
  carouselImages: FinalImage[];
  cardLogo: FinalImage[];
  sale: string;
}
