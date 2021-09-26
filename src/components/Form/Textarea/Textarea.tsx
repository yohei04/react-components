import React, { ComponentPropsWithoutRef, FC, memo, useContext } from 'react'
import styles from './Textarea.module.scss'
import { FormControlContext } from '../FormControl/FormControlContext'
import clsx from 'clsx'

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  currentLength?: number
  isOverMaxLength?: boolean
}

export const Textarea: FC<TextareaProps> = memo(
  ({ currentLength, isOverMaxLength, maxLength, rows = 5, ...rest }) => {
    const { id, isInvalid, isRequired } = useContext(FormControlContext)

    return (
      <>
        <textarea
          id={id}
          name={id}
          aria-invalid={isInvalid}
          required={isRequired}
          rows={rows}
          {...rest}
          className={styles.root}
        />
        {maxLength && (
          <p
            className={clsx(styles.length, {
              [styles.length__over]: isOverMaxLength,
            })}
          >{`${currentLength?.toLocaleString()} / ${maxLength?.toLocaleString()}文字`}</p>
        )}
      </>
    )
  }
)
