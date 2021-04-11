import React from 'react'
import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'
import { useSelector } from 'react-redux'

const Calendar = () => {
  const reminderFormType = useSelector((state: any) => state.reminders.reminderFormType)
  
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody />
      <ReminderForm type={reminderFormType} />
    </CalendarWrapper>
  )
}

export default Calendar
