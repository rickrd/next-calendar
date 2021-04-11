import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper, CalendarFlexRow, CalendarFlexCol } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'
import CalendarDetail from '../molecules/calendar/CalendarDetail'
import { setReminderFormInitialValues, setReminderFormType, setReminderFormVisibility } from '../../store/actions/reminders'
import CalendarHeaderYears from '../molecules/calendar/CalendarHeader/CalendarHeaderYears'
import Button from '../atoms/Button'

const Calendar = ({ reminders, selectedDate, isModalVisible }) => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const reminderFormType = useSelector((state: any) => state.reminders.reminderFormType)

  const dispatch = useDispatch()

  return (
    <CalendarWrapper>
      <CalendarFlexRow>
        <Button
          style={{ border: '1px solid lightgrey' }}
          children={'New reminder'}
          onClick={() => {
            if (!isModalVisible) dispatch(setReminderFormVisibility(true))
            dispatch(setReminderFormType('create'))
            dispatch(setReminderFormInitialValues({ inputId: reminders.length + 1, inputTitle: '', inputDescription: '', inputDate: '', inputCity: '' }))
          }}
        ></Button>
        <CalendarHeaderYears years={years} />
      </CalendarFlexRow>
      <CalendarFlexRow>
        <CalendarDetail />
        <CalendarFlexCol>
          <CalendarHeader />
          <CalendarBody />
        </CalendarFlexCol>
      </CalendarFlexRow>
      <ReminderForm type={reminderFormType} />
    </CalendarWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    reminders: state.reminders.reminders,
    selectedDate: state.calendar.selectedDate,
    isModalVisible: state.reminders.isModalVisible,
  }
}

export default connect(mapStateToProps)(Calendar)
