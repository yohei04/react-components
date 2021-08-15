import { ChangeEvent, useCallback, useState } from 'react'

export const useCheckbox = (
  checkboxLabels: string[],
  defaultCheckedboxLabels?: string[]
) => {
  const [checkedboxes, setCheckedboxes] = useState<string[]>(
    defaultCheckedboxLabels ? defaultCheckedboxLabels : []
  )

  const handleCheckboxes = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setCheckedboxes((prevState) => {
        if (prevState.some((state) => state === event.target.id)) {
          return prevState.filter((state) => state !== event.target.id)
        } else {
          return [...prevState, event.target.id]
        }
      }),
    []
  )
  return {
    checkboxLabels,
    checkedboxes,
    handleCheckboxes,
  }
}
