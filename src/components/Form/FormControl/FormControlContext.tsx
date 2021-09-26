import { useContext, ReactNode, FC, createContext } from 'react'

type FormControlContextType = {
  id: string
  isInvalid?: boolean
  isRequired?: boolean
}

const formControlContextDefaultValue: FormControlContextType = {
  id: '',
  isInvalid: false,
  isRequired: false,
}

export const FormControlContext = createContext<FormControlContextType>(
  formControlContextDefaultValue
)

export const useFormControl = () => useContext(FormControlContext)

export type FormControlProviderProps = FormControlContextType & {
  children: ReactNode
}

export const FormControlProvider: FC<FormControlProviderProps> = (props) => {
  const { children, ...rest } = props

  return (
    <FormControlContext.Provider value={rest}>
      {children}
    </FormControlContext.Provider>
  )
}
