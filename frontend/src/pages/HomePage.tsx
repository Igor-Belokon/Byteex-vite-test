import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  getHero,
  getBenefits,
  getTalkAbout,
  getWorksOrder,
  getUserContent,
  getFQA,
} from "../api/services";
import Header from "../components/Header";
import Hero from "../components/heroComponents/Hero";
import Benefits from "../components/benefitsComponents/Benefits";
import TalkAbout from "../components/talkAboutComponents/TalkAbout";
import WorksOrder from "../components/worksOrderComponents/WorksOrder";
import UserContent from "../components/userContentComponent/UserContent";
import FAQ from "../components/FAQComponents/FAQ";
import { type HeroData } from "../types/hero";
import { type BenefitsData } from "../types/benefits";
import { type TalkAboutData } from "../types/talkAbout";
import { type WorksOrderData } from "../types/worksOrder";
import { type UserContentData } from "../types/userContent";
import { type FAQData } from "../types/faq";

export const HomePage = () => {
  const [heroData, setHeroData] = useState<HeroData>();
  const [benefitData, setBenefitData] = useState<BenefitsData>();
  const [talkAboutData, setTalkAboutData] = useState<TalkAboutData>();
  const [worksOrderData, setWorksOrderData] = useState<WorksOrderData>();
  const [userContentData, setUserContentData] = useState<UserContentData>();
  const [FaqData, setFaqData] = useState<FAQData>();

  useEffect(() => {
    getHero().then((hero) => setHeroData(hero));
    getBenefits().then((benefit) => setBenefitData(benefit));
    getTalkAbout().then((talk) => setTalkAboutData(talk));
    getWorksOrder().then((work) => setWorksOrderData(work));
    getUserContent().then((data) => setUserContentData(data));
    getFQA().then((data) => setFaqData(data));
  }, []);
  if (!heroData) return null;
  if (!benefitData) return null;
  if (!talkAboutData) return null;
  if (!worksOrderData) return null;
  if (!userContentData) return null;
  if (!FaqData) return null;

  return (
    <Box sx={{ width: "100vw" }}>
      <Header />
      <Hero hero={heroData} />
      <Benefits benefits={benefitData} />
      <TalkAbout talkAbout={talkAboutData} />
      <WorksOrder data={worksOrderData} />
      <UserContent data={userContentData} />
      <FAQ data={FaqData} />
    </Box>
  );
};
