import {
  ComponentPropsWithoutRef,
  FC,
  memo,
  ReactNode,
  useContext,
} from 'react'
import styles from './TextInput.module.scss'
import { FormControlContext } from '../FormControlContext'

interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  children: ReactNode
}

export const TextInput: FC<TextInputProps> = memo((props) => {
  const { id, isInvalid, isRequired } = useContext(FormControlContext)

  return (
    <input
      id={id}
      aria-invalid={isInvalid}
      required={isRequired}
      {...props}
      className={styles.root}
    />
  )
})
