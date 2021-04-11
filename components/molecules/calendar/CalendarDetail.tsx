import React from 'react'
import moment from 'moment'
import { connect, useDispatch } from 'react-redux'
import { Reminder } from '../../../types/reminder'
import { CalendarDetailWrapper, SelectedDateWrapper } from '../../../styles/calendar/CalendarDetail'
import ReminderListFlag from '../reminder/ReminderListFlag'
import { setReminderFormInitialValues, setReminderFormType, setReminderFormVisibility } from '../../../store/actions/reminders'

const CalendarDetail = ({ reminders, calendar }) => {
  const filteredReminders = reminders.filter((reminder: Reminder) => moment(reminder.date).format('YYYY-MM-DD') === calendar.selectedDate)
  const dispatch = useDispatch()
  return moment(calendar?.selectedDate).isValid() ? (
    <CalendarDetailWrapper>
      <SelectedDateWrapper>
        <div style={{ color: 'indianred' }}>{moment(calendar?.selectedDate).format('LL')}</div>
      </SelectedDateWrapper>
      <p>Reminders for this day: {filteredReminders.length}</p>
      {filteredReminders.length ? (
        filteredReminders.map(({ id, title, description, city, date }: Reminder) => {
          return (
            <ReminderListFlag
              key={id}
              reminder={{ id, title, description, city, date }}
              onClick={() => {
                console.log({ id, title, description, city, date })
                dispatch(setReminderFormInitialValues({ inputId: id, inputTitle: title, inputDescription: description, inputCity: city, inputDate: date }))
                dispatch(setReminderFormType('update'))
                dispatch(setReminderFormVisibility(true))
              }}
            />
          )
        })
      ) : (
        <p>Try creating a new reminder.</p>
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
