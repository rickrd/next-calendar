import React from 'react'
import { CalendarHeaderCell, CalendarHeaderCellWrapper } from '../../../../styles/calendar/CalendarHeader'

const CalendarHeaderWeeks = ({ weekDays }) => {
  return weekDays.map((weeklyDay: string, index: number) => {
    return (
      <CalendarHeaderCellWrapper key={index}>
        <CalendarHeaderCell bold={weeklyDay == 'Sun' || weeklyDay == 'Sat'} padding='0 6em 0 6em'>
          {weeklyDay}
        </CalendarHeaderCell>
      </CalendarHeaderCellWrapper>
    )
  })
}

export default CalendarHeaderWeeks
