import { Box, Typography, Stack } from "@mui/material";
import { type FC } from "react";

import { type FAQData } from "../../types/faq";
import { getStrapiMedia } from "../../utils/getStrapiMedia";
import FAQContainer from "./AccordionComponent";
import FAQImageColage from "./FAQImageColage";

interface FAQProp {
  data: FAQData;
}

const FAQ: FC<FAQProp> = ({ data }) => {
  if (!data) return null;

  const { title, images, question } = data;

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "60px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: "700px", width: "100%" }}
      >
        <Stack spacing={8}>
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
          <FAQContainer data={question} />
        </Stack>
        <FAQImageColage
          main={getStrapiMedia(images[0].url)}
          top={getStrapiMedia(images[1].url)}
          bottom={getStrapiMedia(images[2].url)}
        />
      </Stack>
    </Box>
  );
};

export default FAQ;
