import { Typography, Stack, Avatar } from "@mui/material";
import { type FC } from "react";

import { type Group } from "../../types/final";
interface FinalBlockProp {
  data: Group;
}

const FinalBlockComponent: FC<FinalBlockProp> = ({ data }) => {
  if (!data) return null;

  const { icon, text } = data;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        padding: "20px",
        height: "50px",
        width: "100%",
        "&:not(:last-child)": {
          borderRight: "1px solid rgba(196, 196, 196, 0.5)",
        },
      }}
    >
      <Avatar
        sx={{
          width: 28,
          height: 28,
          backgroundColor: "#f1ecff",
          color: "rgba(103, 104, 105, 1)",
          fontSize: 14,
        }}
      >
        {icon?.[0]?.toUpperCase()}
      </Avatar>

      <Typography
        sx={{
          fontSize: { xs: "8px", md: "14px" },

          color: "rgba(103, 104, 105, 1)",
          letterSpacing: "-0.01em",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default FinalBlockComponent;
