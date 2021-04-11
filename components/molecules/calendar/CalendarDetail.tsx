import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Reminder } from '../../../types/reminder'
import { CalendarDetailWrapper, SelectedDateWrapper } from '../../../styles/calendar/CalendarDetail'

const CalendarDetail = ({ date, reminders }) => {
  console.log(reminders)
  const filteredReminders = reminders.filter((reminder: Reminder) => reminder.date === date)
  return moment(date).isValid() ? (
    <CalendarDetailWrapper>
      <SelectedDateWrapper>Selected date: {date}</SelectedDateWrapper>
      <p>Reminders length: {filteredReminders.length}</p>
      {filteredReminders.length ? (
        filteredReminders.map((reminder: Reminder) => {
          return (
            <div>
              <div>{reminder.title}</div>
              <div>{reminder.city}</div>
            </div>
          )
        })
      ) : (
        <p>Reminder length: 0</p>
      )}
    </CalendarDetailWrapper>
  ) : (
    <p>Not a valid date.</p>
  )
}

const mapStateToProps = (state: any) => {
  return {
    reminders: state.reminders.reminders,
  }
}

export default connect(mapStateToProps)(CalendarDetail)
