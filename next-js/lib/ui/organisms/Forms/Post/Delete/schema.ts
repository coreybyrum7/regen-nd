import { z } from "zod";

export const deletePostSchema = z.object({
  id: z.string(),
  projectId: z.string(),
});
