import React from 'react'
import moment from 'moment'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Reminder } from '../../../types/reminder'
import { CalendarDetailWrapper, SelectedDateWrapper } from '../../../styles/calendar/CalendarDetail'
import ReminderListFlag from '../reminder/ReminderListFlag'
import { setReminderFormInitialValues, setReminderFormType, setReminderFormVisibility } from '../../../store/actions/reminders'

const CalendarDetail = ({ reminders, calendar }) => {
  const filteredReminders = reminders.filter((reminder: Reminder) => moment(reminder.date).format('YYYY-MM-DD') === calendar.selectedDate)
  const dispatch = useDispatch()
  console.log(filteredReminders)
  return moment(calendar?.selectedDate).isValid() ? (
    <CalendarDetailWrapper>
      <SelectedDateWrapper>
        <div style={{ color: 'indianred' }}>{moment(calendar?.selectedDate).format('LL')}</div>
      </SelectedDateWrapper>
      <p>Reminders for this day: {filteredReminders.length}</p>
      <ReminderListWrapper>
        {filteredReminders.length ? (
          filteredReminders.map(({ id, title, description, city, date, time, forecastData }: Reminder) => {
            return (
              <ReminderListFlag
                key={id}
                reminder={{ title, description, city, date, time, forecastData }}
                onClick={() => {
                  console.log({ id, title, description, city, date })
                  dispatch(setReminderFormInitialValues({ inputId: id, inputTitle: title, inputDescription: description, inputCity: city, inputDate: date, inputTime: time }))
                  dispatch(setReminderFormType('update'))
                  dispatch(setReminderFormVisibility(true))
                }}
              />
            )
          })
        ) : (
          <p>Try creating a new reminder.</p>
        )}
      </ReminderListWrapper>
    </CalendarDetailWrapper>
  ) : (
    <p>Not a valid date.</p>
  )
}

const ReminderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 800px;
  padding: 0 1em 0 0;
`

const mapStateToProps = (state: any) => {
  return {
    reminders: state.reminders.reminders,
    calendar: state.calendar,
  }
}

export default connect(mapStateToProps)(CalendarDetail)
