import {
  ComponentPropsWithoutRef,
  FC,
  memo,
  ReactNode,
  useContext,
} from 'react'
import styles from './SelectBox.module.scss'
import { FormControlContext } from '../FormControlContext'

interface SelectBoxProps extends ComponentPropsWithoutRef<'select'> {
  children: ReactNode
}

export const SelectBox: FC<SelectBoxProps> = memo(({ children, ...rest }) => {
  const { id, isRequired } = useContext(FormControlContext)

  return (
    <div className={styles.root}>
      <select
        id={id}
        name={id}
        required={isRequired}
        {...rest}
        className={styles.select}
      >
        {children}
      </select>
      <span className={styles.overlay_focus} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={styles.icon}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  )
})
