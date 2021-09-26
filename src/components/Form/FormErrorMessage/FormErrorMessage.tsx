import React, { FC, memo, ReactNode, useContext } from 'react'
import styles from './FormErrorMessage.module.scss'
import { FormControlContext } from '../FormControl/FormControlContext'

interface FormErrorMessageProps {
  children: ReactNode
}

export const FormErrorMessage: FC<FormErrorMessageProps> = memo(
  ({ children }) => {
    const { isInvalid } = useContext(FormControlContext)

    return isInvalid ? <p className={styles.root}>{children}</p> : null
  }
)
