import style from './index.module.scss'
import { CardSkeleton } from '@/lib/ui'

export default function PostListSkeleton() {
  return (
    <ul className={style.posts}>
      {[...Array(7)].map((i) => (
        <CardSkeleton key={`loader-id-${i}`} border={true} />
      ))}
    </ul>
  )
}