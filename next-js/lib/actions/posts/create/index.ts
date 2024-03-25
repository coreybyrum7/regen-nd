"use server";

import { revalidatePath } from "next/cache";
import { createSafeActionClient } from "next-safe-action";
import { createPostSchema } from "@/lib/ui/organisms/Forms/Post/Create/schema";

const action = createSafeActionClient();

// export async function createPost(formData: FormData) {
//   const { projectId, title, comment } = createPostSchema.parse({
//     projectId: formData.get("projectId"),
//     title: formData.get("title"),
//     comment: formData.get("comment"),
//   });
//   const createdAt = new Date().toISOString();

//   const route = "http://localhost:5000" + `/posts/create`;
//   const body = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ projectId, title, comment, createdAt }),
//   };

//   const response = await fetch(route, body);
//   console.log(response);
// }

export const createPostAction = action(
  createPostSchema,
  async ({ projectId, title, comment }) => {
    const createdAt = new Date().toISOString();
    const response = await fetch("http://localhost:5000/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId,
        title,
        comment,
        createdAt,
      }),
    });

    revalidatePath(`/projects/${projectId}`);
    return response.json();
  }
);
