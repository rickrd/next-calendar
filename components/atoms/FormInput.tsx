import React from 'react'
import styled from 'styled-components'

const FormInput = ({ id, name, type, placeholder, value, onChange }) => {
  return <FormInputStyled id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
}

const FormInputStyled = styled.input`
  max-width: 30em;
  border: 0;
  border-bottom: 1px solid lightgrey;
  margin: 0.5em 0;

  &:focus {
    border: 0;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid lightgrey;
  }
`

export default FormInput
