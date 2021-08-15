import { FC } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  label: string
  id: string
  defaultChecked: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  defaultChecked = false,
}) => {
  return (
    <label className={styles.root} htmlFor={id}>
      <input
        className={styles.input}
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
      />
      <span className={styles.checkmark}></span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
