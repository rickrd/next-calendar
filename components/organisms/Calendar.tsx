import React from 'react'
import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper } from '../../styles/calendar'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody />
    </CalendarWrapper>
  )
}

export default Calendar
