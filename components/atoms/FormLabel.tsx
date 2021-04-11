import React from 'react'
import styled from 'styled-components'

export interface FormLabelParams {
  label: string
}

const FormLabel = ({ label }: FormLabelParams) => {
  return <FormLabelSpan>{label}</FormLabelSpan>
}

const FormLabelSpan = styled.span`
`

export default FormLabel
