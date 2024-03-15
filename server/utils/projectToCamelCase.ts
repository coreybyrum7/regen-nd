import { Project } from '../types';

export function projectToCamelCase(project: Project) {
  return {
    id: project.id,
    createdAt: project.created_at,
    name: project.name,
  };
}
