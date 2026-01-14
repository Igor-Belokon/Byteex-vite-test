import { Box, Typography, Button, Stack } from "@mui/material";
import { type FC } from "react";

import { type TalkAboutData } from "../../types/talkAbout";
import { getStrapiMedia } from "../../utils/getStrapiMedia";

import ImageColage from "./ImageColage";

interface TalkAboutProp {
  talkAbout: TalkAboutData;
}

const TalkAbout: FC<TalkAboutProp> = ({ talkAbout }) => {
  if (!talkAbout) return null;

  const { title, text, images } = talkAbout;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(240, 238, 239, 1)",
        padding: "60px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ height: "800px", width: "100%" }}
      >
        <ImageColage
          main={getStrapiMedia(images[0].url)}
          top={getStrapiMedia(images[1].url)}
          bottom={getStrapiMedia(images[2].url)}
        />
        <Stack
          spacing={3}
          sx={{
            maxWidth: 520,
            pt: { xs: 4, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              lineHeight: "44px",
              fontWeight: 500,
              color: "#2A2ACF", // Figma blue
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#6B6B6B",
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </Typography>
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default TalkAbout;
