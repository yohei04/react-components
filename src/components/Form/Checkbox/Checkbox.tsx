import { ComponentPropsWithoutRef, FC, memo, ReactNode } from 'react'
import styles from './Checkbox.module.scss'
import utilStyles from 'styles/base/Utils.module.scss'
import { RequiredIndicator } from '..'
import clsx from 'clsx'

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  children: ReactNode
  isRequired?: boolean
}

export const Checkbox: FC<CheckboxProps> = memo(
  ({ children, isRequired, ...rest }) => {
    return (
      <label className={styles.root}>
        <input
          type="checkbox"
          name="checkbox"
          required={isRequired}
          {...rest}
          className={clsx(styles.input, utilStyles.sr_only)}
        />
        <span className={styles.control}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className={styles.icon}
          >
            <path
              fill="none"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
        <span className={styles.label}>{children}</span>
        {isRequired && <RequiredIndicator />}
      </label>
    )
  }
)
