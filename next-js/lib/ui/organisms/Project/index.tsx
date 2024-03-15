import '@/app/styles/_global.scss'
import style from "./style.module.scss"
import { Suspense } from "react"
import { Card, CardSection, PostList, PostListSkeleton } from '@/lib/ui'
import { Project as ProjectProps } from "@/lib/types"

export default function Project({ id, createdAt, name, includePosts }: ProjectProps) {
  const date = new Date(createdAt).toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})

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
          <h2>Posts</h2>
          <Suspense fallback={<PostListSkeleton />}>
            <PostList id={id} />
          </Suspense>
        </div>
      ) : null}
    </article>
  )
}