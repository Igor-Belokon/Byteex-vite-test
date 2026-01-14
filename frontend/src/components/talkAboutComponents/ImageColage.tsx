import { Box } from "@mui/material";
import { type FC } from "react";

interface ImageColageProp {
  main: string;
  top: string;
  bottom: string;
}

const styles = {
  wrapper: {
    position: "relative",
    width: 520,
    height: 720,

    "@media (max-width: 900px)": {
      width: 320,
      height: 520,
      margin: "0 auto",
    },
  },

  mainImage: {
    position: "absolute",
    top: 0,
    left: 60,
    width: 400,
    height: 600,
    overflow: "hidden",
    boxShadow: "0px 24px 40px rgba(0, 0, 0, 0.12)",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    "@media (max-width: 900px)": {
      width: 280,
      height: 420,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

  topImage: {
    position: "absolute",
    top: -40,
    left: 0,
    width: 160,
    height: 200,
    overflow: "hidden",
    boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.12)",
    border: "4px solid rgba(240, 238, 239, 1)",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    "@media (max-width: 900px)": {
      width: 120,
      height: 160,
      top: -24,
      left: -12,
    },
  },

  bottomImage: {
    position: "absolute",
    bottom: -40,
    right: 0,
    width: 160,
    height: 200,
    border: "4px solid rgba(240, 238, 239, 1)",
    overflow: "hidden",
    boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.12)",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    "@media (max-width: 900px)": {
      width: 120,
      height: 160,
      bottom: -24,
      right: -12,
    },
  },
};

const ImageColage: FC<ImageColageProp> = ({ main, top, bottom }) => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        width: 520,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.mainImage}>
          <img src={main} alt="" />
        </Box>

        <Box sx={styles.topImage}>
          <img src={top} alt="" />
        </Box>

        <Box sx={styles.bottomImage}>
          <img src={bottom} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageColage;
