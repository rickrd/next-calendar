import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const CalendarDetail = ({ date }) => {
  return moment(date).isValid() ? (
    <DateDetailWrapper>
      <SelectedDateWrapper>A data escolhida foi {date}</SelectedDateWrapper>
    </DateDetailWrapper>
  ) : (
    <p>Not a valid date.</p>
  )
}

const DateDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SelectedDateWrapper = styled.div`
  display: flex;
`

export default CalendarDetail
