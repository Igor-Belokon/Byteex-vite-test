import { Box } from "@mui/material";
import { type FC, useState } from "react";

import { type HeroImage } from "../types/hero";

import { ImageCard } from "./ImageCard";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Props {
  images: HeroImage[];
}

const sideControlStyle = {
  width: { xs: 40, md: 64 },
  height: { xs: 120, md: 180 },
  background: `
      linear-gradient(
        to bottom,
        #fdf4e8 00%,
        #ffffff 00%,
        #ffffff 30%,
        #f9efe3 100%
      )
    `,
};

const Carousel: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length < 3) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () => setIndex((i) => (i + 1) % images.length);

  const get = (offset: number) =>
    images[(index + offset + images.length) % images.length];

  return (
    <Box display="flex" alignItems="center" gap={{}}>
      <Box onClick={prev} sx={sideControlStyle} />

      <Box display="flex" alignItems="center" gap={{ xs: 1.5, md: 0.5 }}>
        <ImageCard image={get(-1)} size="medium" />
        <ImageCard image={get(0)} size="large" />
        <ImageCard image={get(1)} size="medium" />
      </Box>

      <Box onClick={next} sx={sideControlStyle} />
    </Box>
  );
};

export default Carousel;
