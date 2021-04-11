import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Reminder } from '../../../types/reminder'
import { CalendarDetailWrapper, SelectedDateWrapper } from '../../../styles/calendar/CalendarDetail'

const CalendarDetail = ({ reminders, calendar }) => {
  console.log(reminders)
  console.log('calendar state:', calendar)
  const filteredReminders = reminders.filter((reminder: Reminder) => reminder.date === calendar.selectedDate)
  return moment(calendar?.selectedDate).isValid() ? (
    <CalendarDetailWrapper>
      <SelectedDateWrapper>Selected date: {calendar?.selectedDate}</SelectedDateWrapper>
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
    calendar: state.calendar,
  }
}

export default connect(mapStateToProps)(CalendarDetail)
