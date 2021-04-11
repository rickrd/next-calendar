import React, { useState } from 'react'
import Calendar from '../components/organisms/Calendar'
import CalendarDetail from '../components/molecules/calendar/CalendarDetail'
import moment from 'moment'
import { CalendarPageWrapper } from '../styles/calendar/CalendarPage'

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<any>(moment().format('YYYY-MM-DD'))
  return (
    <CalendarPageWrapper>
      <CalendarDetail date={selectedDate} />
      <Calendar setSelectedDate={setSelectedDate} />
    </CalendarPageWrapper>
  )
}

export default CalendarPage
