import {
  ComponentPropsWithoutRef,
  FC,
  memo,
  ReactNode,
  useContext,
} from 'react'
import styles from './FormLabel.module.scss'
import { RequiredIndicator } from '..'
import { FormControlContext } from '../FormControlContext'

interface FormLabelProps extends ComponentPropsWithoutRef<'label'> {
  children: ReactNode
}

export const FormLabel: FC<FormLabelProps> = memo(({ children }) => {
  const { id, isRequired } = useContext(FormControlContext)

  return (
    <label htmlFor={id} className={styles.root}>
      {children}
      {isRequired && <RequiredIndicator />}
    </label>
  )
})
