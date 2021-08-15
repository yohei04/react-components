import { ChangeEvent, FC } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  id: string
  label: string
  isChecked: boolean
  handleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  isChecked,
  handleCheckbox,
}) => {
  return (
    <label className={styles.root} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckbox}
        aria-hidden="true"
        tabIndex={-1} // タブでフォーカスさせない
        className={styles.input}
      />
      <span role={'checkbox'} tabIndex={0} className={styles.checkmark}></span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}

// 使い方
// const { checkboxLabels, checkedboxes, handleCheckboxes } = useCheckbox(
//     [
//       '期待するメニューが無かった',
//       '月額料金が高い',
//       '月額制が不満',
//       '忙しくてサロンに行く時間が無くなった',
//       '予約が取りづらい（予約が埋まっている）',
//       '特に不満はない',
//       'その他',
//     ],
//     ['月額料金が高い']
//   )

// <Stack spacing={'gap_5'}>
//   {checkboxLabels.map((checkbox) => (
//     <Checkbox
//       key={checkbox}
//       id={`${checkbox}`}
//       isChecked={checkedboxes.includes(`${checkbox}`)}
//       label={`${checkbox}`}
//       handleCheckbox={handleCheckboxes}
//     />
//   ))}
// </Stack>
