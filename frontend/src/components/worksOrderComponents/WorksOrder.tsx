import { Box, Typography, Button, Stack, Rating } from "@mui/material";
import { type FC } from "react";

import { type WorksOrderData } from "../../types/worksOrder";

import AnswerComponent from "./AnswerComponent";

interface WorksOrderProp {
  data: WorksOrderData;
}

const WorksOrder: FC<WorksOrderProp> = ({ data }) => {
  if (!data) return null;

  const { title, answer } = data;

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "60px",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: "800px", width: "100%" }}
      >
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
        <Stack direction="row" spacing={4}>
          {answer.map((an) => (
            <AnswerComponent data={an} />
          ))}
        </Stack>
        <Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1a237e",
              px: 4,
              py: 1.5,
              borderRadius: "6px",
              textTransform: "none",
              mb: 4,
              "&:hover": {
                backgroundColor: "#0d144f",
              },
            }}
          >
            Customize Your Outfit
          </Button>
          <Stack direction="row">
            <Rating value={5} readOnly size="small" precision={1} />

            <Typography fontSize={12} color="text.secondary">
              Over 500+ 5 Star Reviews Online
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WorksOrder;
