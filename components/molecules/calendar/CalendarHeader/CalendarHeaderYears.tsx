import React from 'react'
import { CalendarHeaderCell, CalendarHeaderCellWrapper, CalendarHeaderYearsWrapper } from '../../../../styles/calendar/CalendarHeader'

const CalendarHeaderYears = ({ years }) => {
  return (
    <CalendarHeaderYearsWrapper>
      <CalendarHeaderCell bold padding='1em'>{`<`}</CalendarHeaderCell>
      {years.map((year: string, index: number) => {
        return (
          <CalendarHeaderCellWrapper key={index}>
            <CalendarHeaderCell padding='1em'> {year}</CalendarHeaderCell>
          </CalendarHeaderCellWrapper>
        )
      })}
      <CalendarHeaderCell bold padding='1em'>{`>`}</CalendarHeaderCell>
    </CalendarHeaderYearsWrapper>
  )
}

export default CalendarHeaderYears
