import style from './page.module.scss';
import Link from "next/link";
import { Button } from "@/lib/ui";
import { CreatePostForm } from '@/lib/ui/organisms/Forms/Post/Create';

type Props = {
  params: {
    projectId: string
  }
}

export default async function CreatePost({ params }: Props) {
  const projectId = params.projectId
  return (
    <div className={style.createPost}>
      <Link href={`/projects/${projectId}`} className={style.link}>
        <Button
          buttonType='primary'
          label='All Posts'
          size='large'
          theme='dark'
          includeIcon
          iconPosition='left'
        />
      </Link>
      <CreatePostForm projectId={projectId} />
    </div>
  )
}