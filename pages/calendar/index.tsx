import React from 'react'
import Calendar from '../../components/organisms/Calendar'
import styled from 'styled-components'

const CalendarPage = () => {
  return (
    <CalendarPageWrapper>
      <Calendar />
    </CalendarPageWrapper>
  )
}

const CalendarPageWrapper = styled.div`
  display: flex;
`

export default CalendarPage
