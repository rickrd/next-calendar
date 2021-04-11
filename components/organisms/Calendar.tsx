import React from 'react'
import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody />
      <ReminderForm />
    </CalendarWrapper>
  )
}

export default Calendar
