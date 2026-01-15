import { Box, Typography, Button, Stack, Avatar } from "@mui/material";
import { type FC } from "react";

import { type HeroData } from "../../types/hero";
import Carousel from "../Carousel";
import { HeroReviewCard } from "./HeroReviewCard";

interface HeroProps {
  hero: HeroData;
}

const Hero: FC<HeroProps> = ({ hero }) => {
  if (!hero) return null;

  const { title, advantages, cta, review, carouselImages } = hero;

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", md: "36px" },
              fontWeight: 500,
              color: "#1a237e",
              mb: 3,
            }}
          >
            {title}
          </Typography>

          <Stack spacing={2} mb={4}>
            {advantages?.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                    backgroundColor: "#f1ecff",
                    color: "#3f51b5",
                    fontSize: 14,
                  }}
                >
                  {/* icon enum → можно заменить на реальные SVG */}
                  {item.icon?.[0]?.toUpperCase()}
                </Avatar>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#444",
                  }}
                >
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>

          {cta && (
            <Button
              variant="contained"
              href={cta.link}
              sx={{
                backgroundColor: "#1a237e",
                px: 4,
                py: 1.5,
                borderRadius: "6px",
                textTransform: "none",
                mb: 4,
                "&:hover": {
                  backgroundColor: "#0d144f",
                },
              }}
            >
              {cta.label}
            </Button>
          )}
          {review && <HeroReviewCard review={review[0]} />}
        </Box>

        <Carousel images={carouselImages} />
      </Box>
    </Box>
  );
};

export default Hero;
