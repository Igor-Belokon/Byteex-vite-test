import { type FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";
import { type HeroReview } from "../../types/hero";

type Props = {
  review: HeroReview;
};

export const HeroReviewCard: FC<Props> = ({ review }) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 420,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
        mt: { xs: 4, md: 6 },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          <Avatar
            src={review.avatarUrl}
            alt={review.author}
            sx={{ width: 40, height: 40, mr: 1.5 }}
          />

          <Box>
            <Typography fontWeight={600} fontSize={14}>
              {review.author}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Rating
                value={review.rating}
                readOnly
                size="small"
                precision={1}
              />
              <Typography fontSize={12} color="text.secondary">
                {review.subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography fontSize={14} color="text.secondary" lineHeight={1.6}>
          {review.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
