import React, { useState } from 'react'
import Calendar from '../components/organisms/Calendar'
import CalendarDetail from '../components/molecules/calendar/CalendarDetail'
import { CalendarPageWrapper } from '../styles/calendar/CalendarPage'

const CalendarPage = () => {
  return (
    <CalendarPageWrapper>
      <CalendarDetail />
      <Calendar />
    </CalendarPageWrapper>
  )
}

export default CalendarPage
