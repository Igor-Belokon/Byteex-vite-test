import { Typography, Stack, Avatar } from "@mui/material";
import { type FC } from "react";

import { type DataBlock } from "../../types/infoBaner";
interface InfoBanerProp {
  data: DataBlock;
}

const DataBlockComponent: FC<InfoBanerProp> = ({ data }) => {
  if (!data) return null;

  const { icon, value, discription } = data;

  return (
    <Stack
      alignItems="center"
      justifyContent="space-around"
      sx={{
        height: "120px",
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
          color: "#3f51b5",
          fontSize: 14,
        }}
      >
        {icon?.[0]?.toUpperCase()}
      </Avatar>

      <Typography
        sx={{
          fontSize: { xs: "15px", md: "22px" },

          color: "rgba(21, 0, 91, 1)",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "8px", md: "14px" },

          color: "rgba(21, 0, 91, 1)",
          letterSpacing: "-0.01em",
        }}
      >
        {discription}
      </Typography>

      <Stack direction="row"></Stack>
    </Stack>
  );
};

export default DataBlockComponent;
