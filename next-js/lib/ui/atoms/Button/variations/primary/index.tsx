import classnames from 'classnames'
import styles from './style.module.scss'
import sizingStyles from '../../style.module.scss'
import { Icon } from '@/lib/ui'
import { Props } from '@/lib/types/components/button'

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
  baseProps,
}: Props) => {
  return (
    <button
      type='button'
      className={classnames(
        styles.button,
        styles.primary,
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