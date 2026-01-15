import { Box } from "@mui/material";
import type { HeroImage } from "../types/hero";
import { getStrapiMedia } from "../utils/getStrapiMedia";

type Props = {
  image: HeroImage;
  size: "medium" | "large";
};

export const ImageCard = ({ image, size }: Props) => {
  return (
    <Box
      component="img"
      src={getStrapiMedia(image.url)}
      alt={image.alternativeText || ""}
      sx={{
        objectFit: "cover",
        transition: "all .3s ease",
        width: {
          xs: size === "large" ? 160 : 80,
          md: size === "large" ? 260 : 200,
        },
        height: {
          xs: size === "large" ? 240 : 180,
          md: size === "large" ? 380 : 300,
        },
        boxShadow: size === "large" ? "0 20px 40px rgba(0,0,0,.15)" : "none",
      }}
    />
  );
};
