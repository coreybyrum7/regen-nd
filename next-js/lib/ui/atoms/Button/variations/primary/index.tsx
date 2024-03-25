import classnames from 'classnames'
import styles from './style.module.scss'
import sizingStyles from '../../style.module.scss'
import { Icon } from '@/lib/ui'
import { Props } from '../../types'

/**
 * Primary UI component for user interaction
 * TODO: Add icon variations
 */
export const PrimaryButton = ({
  theme = 'light',
  size = 'large',
  includeIcon = false,
  iconPosition = 'right',
  label,
  ...props
}: Props) => {
  return (
    <button
      className={classnames(
        styles.button,
        styles.primary,
        styles[theme],
        sizingStyles[size],
      )}
      {...props}
    >
      {includeIcon && iconPosition === 'left' ? <Icon name='arrow-right' height={16} width={16} /> : null}
      {label}
      {includeIcon && iconPosition === 'right' ? <Icon name='arrow-right' height={16} width={16} /> : null}
    </button>
  )
}