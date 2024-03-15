import { Post } from '@/lib/types'
import { wait } from '@/lib/utils/wait'

/**
 * Server side function to get a specific project's posts
 */
export async function getProjectPosts(id: string): Promise<Post[] | null> {
  try {
    const response = await fetch(process.env.API_URL + `/projects/${id}/posts`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const { posts } = await response.json()

    if (posts === null) {
      throw new Error('Project posts not found')
    }

    return posts
  } catch (error) {
    console.error('Error fetching project posts:', error)
    return null
  }
}
