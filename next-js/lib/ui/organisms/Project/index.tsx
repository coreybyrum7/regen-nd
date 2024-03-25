import '@/lib/styles/_global.scss'
import style from "./style.module.scss"
import { Suspense } from "react"
import { Button, Card, CardSection, PostList, PostListSkeleton } from '@/lib/ui'
import { Project as ProjectProps } from "@/lib/types"
import Link from 'next/link'

export default function Project({ id, createdAt, name, includePosts }: ProjectProps) {
  const date = new Date(createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <article className={style.wrapper}>
      <Card
        landscape={false}
        includeBorder={!includePosts}
      >
        <CardSection label='Project' value={name} />
        <CardSection label='Date' value={date} />
      </Card>
      {includePosts ? (
        <div className={style.innerWrapper}>
          <div className={style.headline}>
            <h2>Posts</h2>
            <Link href={`/projects/${id}/posts/create`} className={style.link}>
              <Button
                buttonType='primary'
                label='New'
                size='large'
                theme='dark'
              />
            </Link>
          </div>
          <Suspense fallback={<PostListSkeleton />}>
            <PostList id={id} />
          </Suspense>
        </div>
      ) : null}
    </article>
  )
}