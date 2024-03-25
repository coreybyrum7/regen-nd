import { revalidatePath } from "next/cache";
import { Post } from "../../types/post";
import { wait } from "../../utils/wait";

/**
 * Server side function to get a specific project's posts
 */
export async function getPosts(id: string): Promise<Post[] | null> {
  try {
    const response = await fetch(process.env.API_URL + `/projects/${id}/posts`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { posts } = await response.json();

    if (posts === null) {
      throw new Error("Project posts not found");
    }

    revalidatePath(`/projects/${id}/posts`);
    return posts;
  } catch (error) {
    console.error("Error fetching project posts:", error);
    return null;
  }
}

/**
 * Server side function to get a specific project's posts
 */
export async function getPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch(process.env.API_URL + `/posts/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { project } = await response.json();

    if (project === null) {
      throw new Error("Project post not found");
    }

    return project;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

/**
 * Server side function to create a post for a specific project
 */
export async function createPost(id: string): Promise<string | null> {
  try {
    const response = await fetch(process.env.API_URL + `/posts/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { project } = await response.json();

    if (project === null) {
      throw new Error("Post couldn't be created");
    }

    return project;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}
