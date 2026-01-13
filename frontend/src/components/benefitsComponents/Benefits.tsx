import { Box, Typography, Stack, Avatar } from "@mui/material";
import { type FC } from "react";

import BenefitsHeader from "./BenefitsHeader";
import BenefitsCarrousel from "./BenefitsCarousel";

import { type BenefitsData } from "../../types/benefits";
interface BenefitsProps {
  benefits: BenefitsData;
}

const Benefits: FC<BenefitsProps> = ({ benefits }) => {
  if (!benefits) return null;

  const { title, advantages, carouselImages, logos } = benefits;

  return (
    <Box sx={{ bgcolor: "#F9F0E5" }}>
      <Box
        sx={{
          background: `linear-gradient(
    to top,
        #fdf4e8 00%,
        #ffffff 00%,
        #ffffff 30%,
        #f9efe3 100%
  )`,
          py: { xs: 4, md: 8 },
        }}
      >
        <BenefitsHeader logos={logos} />
        <Stack
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
          <Stack justifyContent="space-around" sx={{ height: "700px" }}>
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
                    {item.icon?.[0]?.toUpperCase()}
                  </Avatar>
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#444",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#444",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <BenefitsCarrousel images={carouselImages} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Benefits;
