import { Box, Typography, Stack, Avatar } from "@mui/material";
import { type FC } from "react";

import { type Answer } from "../../types/worksOrder";

interface AnswerProp {
  data: Answer;
}

const AnswerComponent: FC<AnswerProp> = ({ data }) => {
  if (!data) return null;

  const { title, icon, text, color } = data;

  return (
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: "8px",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          height: "320px",
          width: "350px",
          bgсolor: color,
          padding: "35px",
        }}
      >
        <Avatar
          sx={{
            width: 28,
            height: 28,
            backgroundColor: "#f1ecff",
            color: "rgba(1, 0, 91, 1)",
            fontSize: 14,
          }}
        >
          {icon?.[0]?.toUpperCase()}
        </Avatar>
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
        <Typography sx={{ color: "rgba(103, 104, 105, 1)", fontSize: 15 }}>
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

export default AnswerComponent;
