import { ComponentPropsWithoutRef, FC, memo, useContext } from 'react'
import styles from './TextInput.module.scss'
import { FormControlContext } from '../FormControl/FormControlContext'

type TextInputProps = ComponentPropsWithoutRef<'input'>

export const TextInput: FC<TextInputProps> = memo((props) => {
  const { id, isInvalid, isRequired } = useContext(FormControlContext)

  return (
    <input
      id={id}
      name={id}
      aria-invalid={isInvalid}
      required={isRequired}
      {...props}
      className={styles.root}
    />
  )
})
