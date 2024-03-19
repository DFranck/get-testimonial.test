"use server";

import db from "@/lib/db";
import { userAction } from "@/lib/safe-action";
import { productSchema } from "./product.schema";

export const createProductAction = userAction(
  productSchema,
  async (input, context) => {
    const product = await db.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });
    return product;
  }
);

export const editProductAction = async () => {};
