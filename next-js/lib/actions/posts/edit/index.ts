"use server";

import { editPostSchema } from "@/lib/ui/organisms/Forms/Post/Edit/schema";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";

const action = createSafeActionClient();

export const editPostAction = action(
  editPostSchema,
  async ({ id, projectId, title, comment }) => {
    console.log("editPostAction", id, projectId, title, comment);
    const response = await fetch(`http://localhost:5000/posts/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, comment }),
    });

    revalidatePath(`/projects/${projectId}`);
    return response.json();
  }
);
