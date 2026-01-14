export interface UserContentReview {
  author: string;
  avatarUrl: string;
  rating: number;
  subtitle: string;
  text: string;
}

export interface UserContentImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface UserContentData {
  title: string;
  text: string;
  content: UserContentImage[];
  review: UserContentReview[];
}
