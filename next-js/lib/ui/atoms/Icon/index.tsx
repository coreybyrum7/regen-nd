import classnames from 'classnames'
import { Icon as Props } from '@/lib/types'
import { FaArrowLeftLong } from "react-icons/fa6"

export default function Icon({ name, ...props }: Props) {
  const className = classnames('icon', props.className)
  switch (name) {
    case 'arrow-right':
      return <FaArrowLeftLong title={name} className={className} />
    default:
      return null
  }
}