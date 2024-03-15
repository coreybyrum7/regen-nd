import style from './index.module.scss'
import '@/app/styles/_global.scss'
import { Card, CardSection } from '@/lib/ui'
import { getProjectPosts } from "@/lib/query/project/projectPosts"

export default async function Posts({ id }: { id: string }) {
  const posts = await getProjectPosts(id)

  if (!posts) {
    return null
  }

  return (
    <ul className={style.posts}>
      {posts.map(post => (
        <Card key={post.id}>
          <CardSection label="Title" value={post.title} />
          <CardSection label="Comments" value={post.comment} />
          <CardSection label="Created" value={post.createdAt} />
        </Card>
      ))}
    </ul>
  )
}