import React from 'react'
import styled from 'styled-components'
import CalendarHeader from '../molecules/calendar/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody'

const Calendar = ({ setSelectedDate }) => {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody setSelectedDate={setSelectedDate} />
    </CalendarWrapper>
  )
}

export default Calendar

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`
