import { Box, Typography, Stack, Button, Avatar } from "@mui/material";
import { type FC } from "react";

import { type FinalData } from "../../types/final";
import { getStrapiMedia } from "../../utils/getStrapiMedia";
import Carousel from "../Carousel";
import FinalBlockComponent from "./FinalBlockComponent";

interface FinalProp {
  data: FinalData;
}

const Final: FC<FinalProp> = ({ data }) => {
  if (!data) return null;

  const { title, text, icon, carouselImages, cardLogo, sale, group } = data;

  return (
    <Box
      sx={{
        background: `
      linear-gradient(
        to bottom,
        #fdf4e8 00%,
        #ffffff 00%,
        #ffffff 30%,
        #f9efe3 100%
      )
    `,
        padding: "60px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: "800px", width: "100%" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: "44px",
            fontWeight: 500,
            color: "rgba(1, 0, 91, 1)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            width: "580px",
            fontSize: { xs: "10px", md: "15px" },
            color: "rgba(103, 104, 105, 1)",
            letterSpacing: "-0.01em",
          }}
        >
          {text}
        </Typography>
        <Carousel images={carouselImages} />
        <Button
          variant="contained"
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
          Customize Your Outfit
        </Button>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            sx={{
              width: 28,
              height: 28,
              backgroundColor: "#f1ecff",
              color: "#3f51b5",
              fontSize: 14,
            }}
          >
            {icon?.[0]?.toUpperCase()}
          </Avatar>
          <Typography sx={{ color: "rgba(31, 173, 64, 1)" }}>{sale}</Typography>
          {cardLogo.map((logo) => (
            <Box
              component="img"
              src={getStrapiMedia(logo.url)}
              alt={""}
              sx={{
                objectFit: "cover",
                transition: "all .3s ease",
                width: 30,
                height: 16,
              }}
            />
          ))}
        </Stack>
        <Stack direction="row">
          {group.map((item) => (
            <FinalBlockComponent data={item} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Final;
