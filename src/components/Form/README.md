<!-- REF -->
<!-- form -->
<!-- REF: https://www.w3schools.com/react/react_forms.asp -->

<!-- custom hook useForm -->
<!-- REF: https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon -->
<!-- REF: https://dev.to/zachsnoek/creating-custom-react-hooks-useform-1gon -->
<!-- REF: https://upmostly.com/tutorials/form-validation-using-custom-react-hooks -->
<!-- REF: https://felixgerschau.com/react-hooks-form-validation-typescript/ -->

```javascript
import { Button } from '@components/Button'
import {
  FormControl,
  FormLabel,
  TextInput,
  FormErrorMessage,
  SelectBox,
  Textarea,
  Checkbox,
  useForm,
} from '@components/Form'
import clsx from 'clsx'
import React, { useState } from 'react'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  const [check, setCheck] = useState(true)

  const {
    values,
    errors,
    handleInputChange,
    handleErrorMessage,
    handleSubmit,
  } = useForm(
    {
      name: '',
      email: '',
      ['question-type']: 'first',
      ['question-content']: '',
    },
    (values: any) => console.error(values)
  )

  const MAX_LENGTH = 1000
  const currentLength = values['question-content'].length
  const isOverMaxLength = currentLength > MAX_LENGTH

  const disabled =
    !!errors.name ||
    !!errors.email ||
    !!errors['question-type'] ||
    !!errors['question-content'] ||
    !!isOverMaxLength ||
    !check

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(utilStyles.p_10, utilStyles.space_y_8)}
    >
      <FormControl id="name" isRequired isInvalid={!!errors.name}>
        <FormLabel>氏名</FormLabel>
        <TextInput
          type="text"
          value={values.name}
          onChange={handleInputChange}
          onBlur={handleErrorMessage}
        />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl id="email" isInvalid={!!errors.email}>
        <FormLabel>メールアドレス</FormLabel>
        <TextInput
          type={'email'}
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleErrorMessage}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        id="question-type"
        isRequired
        isInvalid={!!errors['question-type']}
      >
        <FormLabel>お問い合わせの種類</FormLabel>
        <SelectBox
          value={values['question-type']}
          onChange={handleInputChange}
          onBlur={handleErrorMessage}
        >
          <option value="first">First Value</option>
          <option value="second">Second Value</option>
          <option value="third">Third Value</option>
        </SelectBox>
        <FormErrorMessage>{errors['question-type']}</FormErrorMessage>
      </FormControl>
      <FormControl
        id="question-content"
        isRequired
        isInvalid={!!errors['question-content']}
      >
        <FormLabel>お問い合わせ内容</FormLabel>
        <Textarea
          value={values['question-content']}
          onChange={handleInputChange}
          onBlur={handleErrorMessage}
          currentLength={values['question-content'].length}
          maxLength={MAX_LENGTH}
          isOverMaxLength={isOverMaxLength}
        />
        <FormErrorMessage>{errors['question-content']}</FormErrorMessage>
      </FormControl>

      <Checkbox checked={check} isRequired onChange={() => setCheck(!check)}>
        への同意が必要です。
      </Checkbox>

      <div>
        <Button size="lg" type="submit" disabled={disabled}>
          送信する
        </Button>
      </div>
    </form>
  )
}

export default Home
```
