"use server";

import { deletePostSchema } from "@/lib/ui/organisms/Forms/Post/Delete/schema";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const action = createSafeActionClient();

export const deletePostAction = action(
  deletePostSchema,
  async ({ projectId, id }) => {
    const response = await fetch(`http://localhost:5000/posts/delete/${id}`, {
      method: "DELETE",
    });

    if (response.status === 200 || response.status === 204) {
      revalidatePath(`/projects/${projectId}`);
      redirect(`/projects/${projectId}`);
    } else {
      return response.json();
    }
  }
);
