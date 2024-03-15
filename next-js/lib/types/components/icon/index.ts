type Icons = 'arrow-right' | 'message'

export type Icon = React.ComponentPropsWithoutRef<'svg'> & {
  name: Icons
  height: Number
  width: Number
  className?: string
}
