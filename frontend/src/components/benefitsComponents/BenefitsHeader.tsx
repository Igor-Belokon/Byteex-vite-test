import { Box, Typography, Stack } from "@mui/material";
import { type FC } from "react";

import { type BenefitsLogo } from "../../types/benefits";
import { getStrapiMedia } from "../../utils/getStrapiMedia";

interface HeaderProp {
  logos: BenefitsLogo[];
}

const BenefitsHeader: FC<HeaderProp> = ({ logos }) => {
  console.log("logos", logos);
  return (
    <Box component="header" sx={{ marginBottom: "15px" }}>
      <Box
        textAlign="center"
        sx={{
          width: "100%",
        }}
      >
        <Typography
          sx={{ color: "rgba(134, 135, 135, 1)", marginBottom: "15px" }}
        >
          as seen in
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          {logos.map((logo) => (
            <Box
              component="img"
              src={getStrapiMedia(logo.url)}
              alt={""}
              sx={{}}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default BenefitsHeader;
