import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
});

export const getEntries = async (entryType) => {
  const res = await client.getEntries({ content_type: entryType });
  return res;
};

export const getEntry = async (entryId) => {
  const res = await client.getEntry(entryId);
  return res;
};

export const getEntryWithSlug = async (slug) => {
  const res = await client.getEntries({
    content_type: "musProject",
    limit: 1,
    "fields.slug": slug,
  });
  return res;
};
