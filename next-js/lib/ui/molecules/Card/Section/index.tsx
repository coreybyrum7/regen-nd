import style from './index.module.scss'

type CardSectionProps = {
  label: string
  value: string
}

export default function CardSection({
  label,
  value,
}: CardSectionProps) {
  return (
    <div className={style.section}>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  )
}