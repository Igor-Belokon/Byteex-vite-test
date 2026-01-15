import { strapi } from "./strapi";

export const getHero = async () => {
  const { data } = await strapi.get("/hero?populate=*");
  return data.data;
};

export const getFeatures = async () => {
  const { data } = await strapi.get("/features?populate=*");
  return data.data;
};

export const getTestimonials = async () => {
  const { data } = await strapi.get("/testimonials?populate=*");
  return data.data;
};

export const getProduct = async () => {
  const { data } = await strapi.get("/product?populate=*");
  return data.data;
};

export const getBenefits = async () => {
  const { data } = await strapi.get("/benefit?populate=*");
  return data.data;
};

export const getTalkAbout = async () => {
  const { data } = await strapi.get("/talk-about?populate=*");
  return data.data;
};

export const getWorksOrder = async () => {
  const { data } = await strapi.get("/works-order?populate=*");
  return data.data;
};

export const getUserContent = async () => {
  const { data } = await strapi.get("/user-content?populate=*");
  return data.data;
};

export const getFQA = async () => {
  const { data } = await strapi.get("/faq?populate=*");
  return data.data;
};

export const getInfoBaner = async () => {
  const { data } = await strapi.get("/info-baner?populate=*");
  return data.data;
};

export const getFinal = async () => {
  const { data } = await strapi.get("/final?populate=*");
  return data.data;
};
