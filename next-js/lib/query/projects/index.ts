import { Project, Post } from "@/lib/types";

/**
 * Server side function to get a specific project
 */
export async function getProjects(): Promise<Project[] | null> {
  try {
    const response = await fetch(process.env.API_URL + `/projects`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data === null) {
      throw new Error("Project not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

/**
 * Server side function to get a specific project
 */
export async function getProject(id: string): Promise<Project | null> {
  try {
    const response = await fetch(process.env.API_URL + `/projects/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { project } = await response.json();

    if (project === null) {
      throw new Error("Project not found");
    }

    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
