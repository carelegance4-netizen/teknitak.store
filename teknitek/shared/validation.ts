import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { products, services, articles, settings, users } from "../drizzle/schema";

export const insertProductSchema = createInsertSchema(products)
  .omit({ id: true, createdAt: true, updatedAt: true })
  .extend({
    name: z.string().min(2, "اسم المنتج قصير جداً"),
  });

export const insertServiceSchema = createInsertSchema(services)
  .omit({ id: true, createdAt: true, updatedAt: true })
  .extend({
    name: z.string().min(2, "اسم الخدمة قصير جداً"),
  });

export const insertArticleSchema = createInsertSchema(articles)
  .omit({ id: true, createdAt: true, updatedAt: true })
  .extend({
    title: z.string().min(2, "عنوان المقال قصير جداً"),
  });

export const updateSettingsSchema = createInsertSchema(settings).omit({
  id: true,
  updatedAt: true,
});

export const loginSchema = z.object({
  username: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
});

export const insertUserSchema = createInsertSchema(users)
  .omit({ id: true, createdAt: true })
  .extend({
    username: z.string().min(3),
  });

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type UpdateSettings = z.infer<typeof updateSettingsSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
