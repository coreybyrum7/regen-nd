import { Post } from '../types';

export function postToCamelCase(post: Post) {
  return {
    id: post.id,
    createdAt: post.created_at,
    projectId: post.project_id,
    title: post.title,
    comment: post.comment,
  };
}
