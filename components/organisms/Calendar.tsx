import React from 'react'
import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper } from '../../styles/calendar'

const Calendar = ({ setSelectedDate }) => {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody setSelectedDate={setSelectedDate} />
    </CalendarWrapper>
  )
}

export default Calendar
