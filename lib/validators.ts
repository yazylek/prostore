import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting products

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  slug: z.string().min(3, "Slug is too short"),
  category: z.string().min(3, "Category is too short"),
  brand: z.string().min(3, "Brand is too short"),
  description: z.string().min(3, "Description is too short"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormSchema = z.object({
  email: z.string().email("invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters"),
});
