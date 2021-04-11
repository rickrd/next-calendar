import React from 'react'
import styled from 'styled-components'

export interface ButtonParams {
  onClick: any
  children: any
  style?: any
}

function Button({ onClick, children, style }: ButtonParams) {
  return (
    <ButtonStyled style={style} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
`

export default Button
