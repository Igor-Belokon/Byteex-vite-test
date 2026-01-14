import { Box, IconButton } from "@mui/material";
import { type FC, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { type UserContentReview } from "../../types/userContent";

import { UserContentReviewCard } from "./UserContentReviewCard";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface Props {
  review: UserContentReview[];
}

const ReviewCarousel: FC<Props> = ({ review }) => {
  const [index, setIndex] = useState(0);

  if (!review || review.length < 3) return null;

  const prev = () => setIndex((i) => (i - 1 + review.length) % review.length);

  const next = () => setIndex((i) => (i + 1) % review.length);

  const get = (offset: number) =>
    review[(index + offset + review.length) % review.length];

  return (
    <Box display="flex" alignItems="center" gap={{}}>
      <IconButton onClick={prev}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>

      <Box display="flex" alignItems="center" gap={{ xs: 1.5, md: 0.5 }}>
        <UserContentReviewCard review={get(-1)} />
        <UserContentReviewCard review={get(0)} />
        <UserContentReviewCard review={get(1)} />
      </Box>

      <IconButton onClick={next}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ReviewCarousel;
