import { Box, Typography, Stack } from "@mui/material";
import { type FC } from "react";

import { type InfoBanerData } from "../../types/infoBaner";

import DataBlockComponent from "./DataBlockComponent";

interface InfoBanerProp {
  data: InfoBanerData;
}

const InfoBaner: FC<InfoBanerProp> = ({ data }) => {
  if (!data) return null;

  const { title, dataBlock } = data;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(240, 238, 239, 1)",
      }}
    >
      <Stack alignItems="center" sx={{ height: "250px", width: "100%" }}>
        <Typography
          sx={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: "44px",
            fontWeight: 500,
            color: "rgba(1, 0, 91, 1)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ width: "100%" }}
        >
          {dataBlock.map((data) => (
            <DataBlockComponent data={data} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default InfoBaner;
