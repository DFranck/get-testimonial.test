import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  image: z.string(),
  noteText: z.string().optional(),
  informationText: z.string().optional(),
  reviewText: z.string().optional(),
  thanksText: z.string().optional(),
  backgroundColor: z.string().optional(),
});

export type ProductType = z.infer<typeof productSchema>;

export const GRADIEN_CONTENT = [
  {
    name: "gradient-1",
    gradient: "linear-gradient(180deg, #FFD6D6 0%, #FFDBDB 100%)",
  },
  {
    name: "gradient-2",
    gradient: "linear-gradient(180deg, #FFDBDB 0%, #FFD6D6 100%)",
  },
];
