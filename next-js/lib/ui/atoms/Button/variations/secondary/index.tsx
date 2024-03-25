import classNames from 'classnames'
import styles from './style.module.scss'
import sizingStyles from '../../style.module.scss'
import { Props } from '../../types'
import { Icon } from '@/lib/ui'

export const SecondaryButton = ({
  theme = 'light',
  size = 'large',
  includeIcon = false,
  iconPosition = 'right',
  label,
  baseProps,
}: Props) => {
  return (
    <button
      type='button'
      className={classNames(
        styles.button,
        styles.secondary,
        styles[theme],
        sizingStyles[size],
      )}
      {...baseProps}
    >
      {includeIcon && iconPosition === 'left' ? <Icon name='arrow-right' height={16} width={16} /> : null}
      {label}
      {includeIcon && iconPosition === 'right' ? <Icon name='arrow-right' height={16} width={16} /> : null}
    </button>
  )
}