import style from './page.module.scss'
import { getPost } from "@/lib/query/posts"
import { Button, Card, CardSection } from '@/lib/ui'
import { DeletePostForm } from '@/lib/ui/organisms/Forms/Post/Delete'
import Link from 'next/link'
import { notFound } from "next/navigation"

type PostProps = {
  params: {
    postId: string
  }
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.postId)

  if (!post) {
    return notFound()
  }

  return (
    <div className={style.post}>
      <Link href={`/projects/${post.projectId}`} className={style.link}>
        <Button
          buttonType='primary'
          label='All Posts'
          size='large'
          theme='dark'
          includeIcon
          iconPosition='left'
        />
      </Link>
      <Card
        landscape={false}
        includeBorder={false}
      >
        <CardSection label='Project' value={post.projectId} />
      </Card>
      <Card key={post.id}>
        <CardSection label="Title" value={post.title} />
        <CardSection label="Comments" value={post.comment} />
        <CardSection label="Created" value={post.createdAt} />
      </Card>
      <div className={style.buttons}>
        <Link href={`/projects/${post.projectId}/posts/${post.id}/edit`} className={style.link}>
          <Button
            buttonType='primary'
            label='Edit'
            size='large'
            theme='dark'
          />
        </Link>
        <DeletePostForm projectId={post.projectId} postId={post.id} />
      </div>
    </div>
  )
}