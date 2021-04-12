import styled from 'styled-components'
import { CalendarBodyCellParams } from '../../../types/calendar/CalendarBody'

export const CalendarBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CalendarBodyRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CalendarBodyCellWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`

export const CalendarBodyCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 14em;
  height: 9.32em;
  background: ${({ background }: CalendarBodyCellParams) => (background ? background : '#fff')};
  color: ${({ color }: CalendarBodyCellParams) => (color ? color : '#000')};
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
`
