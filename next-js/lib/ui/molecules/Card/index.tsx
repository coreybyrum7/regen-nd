import classnames from 'classnames'
import style from './index.module.scss'

type CardProps = {
  landscape?: boolean,
  includeBorder?: boolean,
  children: React.ReactNode 
}

export default function Card({
  landscape = true,
  includeBorder = true,
  children 
}: CardProps) {
  return (
    <li className={classnames(
      style.wrapper,
      landscape && style.landscape,
      includeBorder && style.border)}>
      {children}
    </li>
  )
}