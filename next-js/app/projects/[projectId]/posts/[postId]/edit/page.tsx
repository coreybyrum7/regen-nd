import style from './page.module.scss'
import { getPost } from "@/lib/query"
import { Button } from "@/lib/ui"
import EditPostForm from '@/lib/ui/organisms/Forms/Post/Edit'
import Link from 'next/link'
import { notFound } from "next/navigation"

type Props = {
  params: {
    postId: string
  }
}

export default async function EditPost({ params }: Props) {
  const post = await getPost(params.postId)

  if (!post) {
    return notFound()
  }

  return (
    <div className={style.post}>
      <Link href={`/projects/${post.projectId}`} className={style.link}>
        <Button
          buttonType='primary'
          label='Cancel'
          size='large'
          theme='dark'
          includeIcon
          iconPosition='left'
        />
      </Link>
      <div className={style.formWrapper}>
        <h2>{`Edit ${post.title}`}</h2>
        <EditPostForm post={post} />
      </div>
    </div>
  )
}