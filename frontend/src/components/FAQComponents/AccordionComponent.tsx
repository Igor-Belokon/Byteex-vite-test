import { type FC, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import MuiAccordion, { type AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { type FAQContent } from "../../types/faq";

/* ---------- styled components ---------- */

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: "1px solid #E6E6E6",
  borderBottom: "1px solid #E6E6E6",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  padding: "16px 0",
  minHeight: "unset",
  "&.Mui-expanded": {
    minHeight: "unset",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    alignItems: "center",
  },
  "&:focus": {
    outline: "none",
  },
  "&:focus-visible": {
    outline: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "0 0 16px 0",
}));

/* ---------- component ---------- */

interface FAQProp {
  data: FAQContent[];
}

const FAQContainer: FC<FAQProp> = ({ data }) => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Stack>
      {data.map((item, index) => {
        const isOpen = expanded === index;

        return (
          <Accordion
            key={index}
            expanded={isOpen}
            onChange={() => setExpanded(isOpen ? null : index)}
          >
            <AccordionSummary>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#2A2ACF", // фирменный синий
                  }}
                >
                  {item.title}
                </Typography>

                {isOpen ? (
                  <RemoveIcon sx={{ color: "#2A2ACF" }} />
                ) : (
                  <AddIcon sx={{ color: "#2A2ACF" }} />
                )}
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#6B6B6B",
                  maxWidth: "640px",
                }}
              >
                {item.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
};

export default FAQContainer;
