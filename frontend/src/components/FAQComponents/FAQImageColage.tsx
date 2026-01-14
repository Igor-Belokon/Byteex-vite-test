import { Box } from "@mui/material";
import { type FC } from "react";

interface ImageColageProp {
  main: string;
  top: string;
  bottom: string;
}

const FAQImageColage: FC<ImageColageProp> = ({ main, top, bottom }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 420,
        height: 620,
        flexShrink: 0,

        "@media (max-width: 900px)": {
          width: 220,
          height: 420,
          margin: "0 auto",
        },
      }}
    >
      {/* BACKGROUND SHAPES */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: 0,
          width: 120,
          height: 170,
          background: `
      linear-gradient(
        to bottom,
        #fdf4e8 00%,
        #ffffff 00%,
        #ffffff 30%,
        #f9efe3 100%
      )
    `,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          right: 0,
          width: 120,
          height: 170,
          background: `
      linear-gradient(
        to bottom,
        #fdf4e8 00%,
        #ffffff 00%,
        #ffffff 30%,
        #f9efe3 100%
      )
    `,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 320,
          height: 480,
          zIndex: 1,
          overflow: "hidden",
          boxShadow: "0px 24px 40px rgba(0,0,0,0.12)",

          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },

          "@media (max-width: 900px)": {
            width: 160,
            height: 280,
          },
        }}
      >
        <img src={main} alt="" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 120,
          height: 180,
          zIndex: 0,
          overflow: "hidden",
          boxShadow: "0px 16px 32px rgba(0,0,0,0.12)",

          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },

          "@media (max-width: 900px)": {
            width: 80,
            height: 100,
          },
        }}
      >
        <img src={top} alt="" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 120,
          height: 180,
          zIndex: 0,
          overflow: "hidden",
          boxShadow: "0px 16px 32px rgba(0,0,0,0.12)",

          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },

          "@media (max-width: 900px)": {
            width: 80,
            height: 100,
          },
        }}
      >
        <img src={bottom} alt="" />
      </Box>
    </Box>
  );
};

export default FAQImageColage;
