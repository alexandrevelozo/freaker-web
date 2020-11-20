import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <input multiple ref={inputRef} defaultValue={defaultValue} {...rest} />
  )
}

export default Input
