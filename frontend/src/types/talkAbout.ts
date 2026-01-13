export interface TalkAboutData {
  images: TalkAboutImage[];
  title: string;
  text: string;
}

export interface TalkAboutImage {
  id: number;
  url: string;
}
