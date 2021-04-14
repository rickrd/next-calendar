import React from 'react'
import { CalendarHeaderWrapper, CalendarHeaderRow } from '../../../../styles/calendar/CalendarHeader'
import CalendarHeaderWeeks from './CalendarHeaderWeeks'

const CalendarHeader = () => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <CalendarHeaderWrapper>
      <CalendarHeaderRow>
        <CalendarHeaderWeeks weekDays={weekDays} />
      </CalendarHeaderRow>
    </CalendarHeaderWrapper>
  )
}

export default CalendarHeader
