const STRAPI_URL = "http://localhost:1337";

export const getStrapiMedia = (url?: string): string => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
};
