import { FC, memo, ReactNode } from 'react'
import styles from './FormControl.module.scss'
import {
  FormControlProvider,
  FormControlProviderProps,
} from './FormControlContext'

interface FormControlProps extends FormControlProviderProps {
  children: ReactNode
}

export const FormControl: FC<FormControlProps> = memo((props) => {
  const { children, ...rest } = props

  return (
    <FormControlProvider {...rest}>
      <div role="group" className={styles.root}>
        {children}
      </div>
    </FormControlProvider>
  )
})
