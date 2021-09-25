import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

export const useForm = <T>(initialState: T, callback: any) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const value = event.target.value
      setValues((prevState) => ({ ...prevState, [name]: value }))
    },
    []
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback()
  }

  return {
    values,
    handleInputChange,
    handleSubmit,
  }
}
