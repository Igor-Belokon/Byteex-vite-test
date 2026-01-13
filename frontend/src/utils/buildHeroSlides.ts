import { type HeroImage } from "../types/hero";

type CarouselSlide =
  | { type: "placeholder" }
  | { type: "image"; image: HeroImage };

const buildHeroSlides = (images: HeroImage[]): CarouselSlide[] => {
  if (!images || images.length < 3) return [];

  const [left, center, right] = images;

  return [
    { type: "placeholder" },
    { type: "image", image: left },
    { type: "image", image: center },
    { type: "image", image: right },
    { type: "placeholder" },
  ];
};
export default buildHeroSlides;
