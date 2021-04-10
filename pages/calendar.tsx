import React, { useState } from 'react'
import Calendar from '../components/organisms/Calendar'
import styled from 'styled-components'
import CalendarDetail from '../components/molecules/calendar/CalendarDetail'
import moment from 'moment'

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<any>(moment().format('YYYY-MM-DD'))
  return (
    <CalendarPageWrapper>
      <Calendar setSelectedDate={setSelectedDate} />
      <CalendarDetail date={selectedDate} />
    </CalendarPageWrapper>
  )
}

const CalendarPageWrapper = styled.div`
  display: flex;
`

export default CalendarPage
