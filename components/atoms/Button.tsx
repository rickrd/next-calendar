import React from 'react'
import styled from 'styled-components'

export interface ButtonParams {
  onClick: any
  children: any
  style?: any
  disabled?: boolean
}

function Button({ onClick, children, style = {}, disabled = false }: ButtonParams) {
  return (
    <ButtonStyled style={style} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button``

export default Button
