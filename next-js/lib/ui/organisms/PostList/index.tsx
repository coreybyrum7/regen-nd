import style from './index.module.scss'
import '@/lib/styles/_global.scss'
import { Card, CardSection } from '@/lib/ui'
import { getPosts } from "@/lib/query/posts"
import Link from 'next/link'

export default async function Posts({ id }: { id: string }) {
  const posts = await getPosts(id)

  if (!posts) {
    return null
  }

  return (
    <ul className={style.posts}>
      {posts.map(post => (
        <Link key={post.id} href={`/projects/${id}/posts/${post.id}`}>
          <Card>
            <CardSection label="Title" value={post.title} />
            <CardSection label="Comments" value={post.comment} />
            <CardSection label="Created" value={post.createdAt} />
          </Card>
        </Link>
      ))}
    </ul>
  )
}