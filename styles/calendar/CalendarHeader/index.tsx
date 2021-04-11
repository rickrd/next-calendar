import { CalendarHeaderCellParams } from '../../../types/calendar/CalendarHeader'
import styled from 'styled-components'

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const CalendarHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CalendarHeaderCellWrapper = styled.div``

export const CalendarHeaderCell = styled.div`
  padding: ${({ padding }: CalendarHeaderCellParams) => (padding ? padding : 0)};
  font-weight: ${({ bold = false }: CalendarHeaderCellParams) => (bold ? 'bold' : 'normal')};
`

export const CalendarHeaderYearsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
