import { Box, Typography, Divider } from "@mui/material";

const infoText = {
  fontSize: "12px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#222",
  whiteSpace: "nowrap",
};

const divider = {
  borderColor: "#cfc7bd",
};
const Header = () => {
  return (
    <Box component="header">
      {/* === INFO BAR (beige) === */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F6EEE4", // цвет инфо-бара
          borderBottom: "1px solid #e6ded4",
        }}
      >
        {/* Desktop */}
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: 2,
            py: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={infoText}>
            Consciously made butter soft staples for every day (or night)
          </Typography>

          <Divider orientation="vertical" flexItem sx={divider} />

          <Typography sx={infoText}>
            Free shipping on orders &gt; $200
          </Typography>

          <Divider orientation="vertical" flexItem sx={divider} />

          <Typography sx={infoText}>Easy 45 day return window</Typography>
        </Box>

        {/* Mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            px: 2,
            py: 1,
          }}
        >
          <Typography sx={infoText}>
            Free shipping on orders &gt; $200
          </Typography>
        </Box>
      </Box>

      {/* === LOGO BAR (white) === */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF", // белый фон под логотип
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: 2,
            py: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: {
              xs: "center", // mobile
              md: "flex-start", // desktop
            },
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "#000",
            }}
          >
            BYTEEX
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
