import { z } from "zod";

export const editPostSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  title: z.string().min(1, { message: "Title is required" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});
