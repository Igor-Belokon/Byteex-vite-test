import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getHero, getBenefits } from "../api/services";
import Header from "../components/Header";
import Hero from "../components/heroComponents/Hero";
import Benefits from "../components/benefitsComponents/Benefits";
import { type HeroData } from "../types/hero";
import { type BenefitsData } from "../types/benefits";

export const HomePage = () => {
  const [heroData, setHeroData] = useState<HeroData>();
  const [benefitData, setBenefitData] = useState<BenefitsData>();

  useEffect(() => {
    getHero().then((hero) => setHeroData(hero));
    getBenefits().then((benefit) => setBenefitData(benefit));
  }, []);
  console.log("benefitData", benefitData);
  if (!heroData) return null;
  if (!benefitData) return null;

  return (
    <Box sx={{ width: "100vw" }}>
      <Header />
      <Hero hero={heroData} />
      <Benefits benefits={benefitData} />
    </Box>
  );
};
