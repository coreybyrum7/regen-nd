import classnames from 'classnames'
import style from './loader.module.scss'
import { CardSectionSkeleton } from '@/lib/ui'

type CardSkeletonProps = {
  border?: boolean
  numSections?: number
}

export default function Skeleton({ 
  border = false,
  numSections = 3,
}: CardSkeletonProps) {
  return (
    <div className={classnames(style.skeleton, border && style.border)}>
      {[...Array(numSections)].map((i) => (
        <CardSectionSkeleton key={`card-section-skeleton-${i}`} />
       ))}
    </div>
  )
}