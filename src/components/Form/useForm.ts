import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
  useState,
} from 'react'

export const useForm = <T>(initialValues: T, callback: any) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const name = event.target.name
      const value = event.target.value
      setValues((prevState) => ({ ...prevState, [name]: value }))
    },
    []
  )

  const handleErrorMessage = useCallback(
    (
      event: FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const name = event.target.name
      const value = event.target.value
      if (name === 'name') {
        if (value === '') {
          setErrors((prevState) => ({
            ...prevState,
            name: '氏名を入力してください。',
          }))
        } else {
          setErrors((prevState) => ({
            ...prevState,
            name: '',
          }))
        }
      }

      if (name === 'email') {
        if (value === '') {
          setErrors((prevState) => ({
            ...prevState,
            email: 'メールアドレスを入力してください。',
          }))
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors((prevState) => ({
            ...prevState,
            email: 'メールアドレスを正しく入力してください。',
          }))
        } else {
          setErrors((prevState) => ({
            ...prevState,
            email: '',
          }))
        }
      }

      if (name === 'question-type') {
        if (value === '') {
          setErrors((prevState) => ({
            ...prevState,
            ['question-type']: 'お問い合わせの種類を入力してください。',
          }))
        } else {
          setErrors((prevState) => ({
            ...prevState,
            ['question-type']: '',
          }))
        }
      }

      if (name === 'question-content') {
        if (value === '') {
          setErrors((prevState) => ({
            ...prevState,
            ['question-content']: 'お問い合わせ内容を入力してください。',
          }))
        } else {
          setErrors((prevState) => ({
            ...prevState,
            ['question-content']: '',
          }))
        }
      }
    },
    [values]
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback()
  }

  return {
    values,
    errors,
    handleInputChange,
    handleErrorMessage,
    handleSubmit,
  }
}
