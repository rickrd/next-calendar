import React from 'react'
import styled from 'styled-components'
import CalendarHeader from '../molecules/CalendarHeader'
import CalendarBody from '../molecules/CalendarBody'

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarBody />
    </CalendarWrapper>
  )
}

export default Calendar

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
