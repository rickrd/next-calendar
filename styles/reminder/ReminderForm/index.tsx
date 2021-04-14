import styled from 'styled-components'

export const ReminderFormWrapper = styled.div`
  position: fixed;
  z-index: 12;
  background: 0 0;
  outline: 0;
  max-height: 100%;
  border-radius: 6px;
  left: 582px;
  bottom: auto;
  top: 259px;
  background-color: aliceblue;
  border: 1px solid lightgrey;
  border-radius: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    margin: -16px;
    width: 32px;
    height: 32px;
    transform: rotate(45deg);
    background-color: lightgrey;
    opacity: 0.4;
    top: 0;
    right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    margin: -16px;
    width: 32px;
    height: 32px;
    transform: rotate(45deg);
    background-color: lightgrey;
    opacity: 0.4;
    top: 0;
    left: 0;
  }
`

export const ReminderFormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em 2em 2em;
`
