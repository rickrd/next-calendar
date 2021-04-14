import React from 'react'
import moment from 'moment'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Reminder } from '../../../types/reminder'
import { CalendarDetailWrapper, SelectedDateWrapper } from '../../../styles/calendar/CalendarDetail'
import ReminderListFlag from '../reminder/ReminderListFlag'
import { setReminderFormInitialValues, setReminderFormType, setReminderFormVisibility } from '../../../store/actions/reminders'
import Button from '../../atoms/Button'

const CalendarDetail = ({ reminders, calendar, isModalVisible }) => {
  const filteredReminders = reminders.filter((reminder: Reminder) => moment(reminder.date).format('YYYY-MM-DD') === calendar.selectedDate)
  const dispatch = useDispatch()
  console.log(filteredReminders)
  return moment(calendar?.selectedDate).isValid() ? (
    <CalendarDetailWrapper>
      <CalendarDetailRow>
        <SelectedDateWrapper>
          <div style={{ color: 'indianred' }}>{moment(calendar?.selectedDate).format('LL')}</div>
        </SelectedDateWrapper>
        <Button
          style={{ border: '1px solid lightgrey', outline: 'none', cursor: 'pointer' }}
          children={'New reminder'}
          onClick={() => {
            if (!isModalVisible) dispatch(setReminderFormVisibility(true))
            dispatch(setReminderFormType('create'))
            dispatch(setReminderFormInitialValues({ inputId: reminders.length + 1, inputTitle: '', inputDescription: '', inputDate: '', inputTime: '', inputCity: '' }))
          }}
        ></Button>
      </CalendarDetailRow>
      <p>Reminders for this day: {filteredReminders.length}</p>
      <ReminderListWrapper>
        {filteredReminders.length ? (
          filteredReminders.map(({ id, title, description, city, date, time, forecastData }: Reminder) => {
            return (
              <ReminderListFlag
                key={id}
                reminder={{ id, title, description, city, date, time, forecastData }}
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
  max-height: 340px;
  padding: 0 1em 0 0;
`

const CalendarDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const mapStateToProps = (state: any) => {
  return {
    reminders: state.reminders.reminders,
    isModalVisible: state.reminders.isModalVisible,
    calendar: state.calendar,
  }
}

export default connect(mapStateToProps)(CalendarDetail)
