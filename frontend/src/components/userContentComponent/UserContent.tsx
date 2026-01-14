import { Box, Typography, Button, Stack, Rating } from "@mui/material";
import { type FC } from "react";

import { type UserContentData } from "../../types/userContent";
import { getStrapiMedia } from "../../utils/getStrapiMedia";
import ReviewCarousel from "./ReviewCarousel";

interface UserContentProp {
  data: UserContentData;
}

const UserContent: FC<UserContentProp> = ({ data }) => {
  if (!data) return null;

  const { title, text, review, content } = data;

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "60px",
      }}
    >
      <Stack
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
        <Typography sx={{ color: "rgba(103, 104, 105, 1)" }}>{text}</Typography>
        <Stack
          direction="row"
          sx={{ width: "100%", height: "265px", flexWrap: "wrap" }}
        >
          {content.map((img) => (
            <Box
              component="img"
              src={getStrapiMedia(img.url)}
              alt={img.alternativeText || ""}
              sx={{
                objectFit: "cover",
                transition: "all .3s ease",
                margin: "1px",
                width: {
                  xs: 100,
                  md: 128,
                },
                height: { xs: 100, md: 128 },
              }}
            />
          ))}
        </Stack>
        <ReviewCarousel review={review} />
        <Stack>
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
          <Stack direction="row">
            <Rating value={5} readOnly size="small" precision={1} />

            <Typography fontSize={12} color="text.secondary">
              Over 500+ 5 Star Reviews Online
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default UserContent;
