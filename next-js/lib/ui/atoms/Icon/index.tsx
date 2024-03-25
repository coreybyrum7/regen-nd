import classnames from 'classnames'
import { FaArrowLeftLong } from "react-icons/fa6"
import { Props } from './types'

export default function Icon({ name, ...props }: Props) {
  const className = classnames('icon', props.className)
  switch (name) {
    case 'arrow-right':
      return <FaArrowLeftLong title={name} className={className} />
    default:
      return null
  }
}