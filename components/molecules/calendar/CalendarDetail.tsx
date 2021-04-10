import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { connect } from 'react-redux'
import { addReminder } from '../../../store/actions/reminders'

const CalendarDetail = ({ date, reminders, dispatch }) => {
  console.log(reminders)
  if (reminders.length < 5) {
    console.log('entered if')
    dispatch(addReminder({ id: 1, title: 'test title', date: new Date('2021-04-10'), city: 'Florianopolis' }))
  }
  return moment(date).isValid() ? (
    <CalendarDetailWrapper>
      <p>Reminders</p>
      <SelectedDateWrapper>A data escolhida foi {date}</SelectedDateWrapper>
    </CalendarDetailWrapper>
  ) : (
    <p>Not a valid date.</p>
  )
}

const CalendarDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SelectedDateWrapper = styled.div`
  display: flex;
`

const mapStateToProps = (state: any) => {
  return {
    reminders: state.reminders.reminders,
  }
}

export default connect(mapStateToProps)(CalendarDetail)
