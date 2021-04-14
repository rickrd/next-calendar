import React, { useState } from 'react'
import Calendar from '../components/organisms/Calendar'
import { CalendarPageWrapper } from '../styles/calendar/CalendarPage'

const CalendarPage = () => {
  return (
    <CalendarPageWrapper>
      <Calendar />
    </CalendarPageWrapper>
  )
}

export default CalendarPage
