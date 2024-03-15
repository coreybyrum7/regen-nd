import { Post } from '../../types/components/post'
import { wait } from '../../utils/wait'

/**
 * Server side function to get a specific project's posts
 */
export async function getPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch(process.env.API_URL + `/projects/${id}/posts`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const { post } = await response.json()

    if (post === null) {
      throw new Error('Project posts not found')
    }

    return post
  } catch (error) {
    console.error('Error fetching project posts:', error)
    return null
  }
}
