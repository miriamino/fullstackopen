import { useState } from 'react'

export const useField = (type, name, id) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }
  const formElements = { type, name, id, value, onChange }

  return {
    name,
    type,
    value,
    onChange,
    reset,
    formElements
  }
}
