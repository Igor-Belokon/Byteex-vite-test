import { type FC, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import { type BenefitsImage } from "../../types/benefits";

import { getStrapiMedia } from "../../utils/getStrapiMedia";

interface BenefitsCarrouselProp {
  images: BenefitsImage[];
}

const BenefitsCarrousel: FC<BenefitsCarrouselProp> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  return (
    <Box sx={{ width: 420 }}>
      {/* BIG IMAGE + ARROWS */}
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={() => mainSwiper?.slidePrev()}
          sx={{ position: "absolute", left: -48, top: "50%", zIndex: 2 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Swiper
          modules={[Thumbs]}
          onSwiper={setMainSwiper}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <Box
                component="img"
                src={getStrapiMedia(img.url)}
                alt={img.alternativeText ?? ""}
                sx={{
                  width: "100%",
                  height: 520,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <IconButton
          onClick={() => mainSwiper?.slideNext()}
          sx={{ position: "absolute", right: -48, top: "50%", zIndex: 2 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* THUMBNAILS (ALWAYS VISIBLE) */}
      <Box sx={{ mt: 2 }}>
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={8}
          watchSlidesProgress
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <Box
                component="img"
                src={getStrapiMedia(img.url)}
                alt=""
                sx={{
                  width: "100%",
                  height: 56,
                  objectFit: "cover",
                  borderRadius: 1,
                  cursor: "pointer",
                  opacity: 0.6,
                  "&.swiper-slide-thumb-active": {
                    opacity: 1,
                    outline: "2px solid #000",
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default BenefitsCarrousel;
