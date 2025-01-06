import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01'; // Default to a valid date

// export const client = createClient({
//     projectId,
//     dataset,
//     apiVersion, // Ensure this is a valid date or '1'
// });


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
