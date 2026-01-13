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
