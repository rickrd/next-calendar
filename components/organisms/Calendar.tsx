import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper, CalendarFlexRow, CalendarFlexCol } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'
import CalendarDetail from '../molecules/calendar/CalendarDetail'
import { setReminderFormType, setReminderFormVisibility } from '../../store/actions/reminders'
import CalendarHeaderYears from '../molecules/calendar/CalendarHeader/CalendarHeaderYears'
import Button from '../atoms/Button'

const Calendar = () => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const reminderFormType = useSelector((state: any) => state.reminders.reminderFormType)

  const dispatch = useDispatch()

  const reminders = useSelector((state: any) => state.reminders.reminders)
  const selectedDate = useSelector((state: any) => state.calendar.selectedDate)
  const isModalVisible = useSelector((state: any) => state.reminders.isModalVisible)

  return (
    <CalendarWrapper>
      <CalendarFlexRow>
        <Button
          style={{ border: '1px solid lightgrey' }}
          children={'New reminder'}
          onClick={() => {
            dispatch(setReminderFormVisibility(!isModalVisible))
            dispatch(setReminderFormType('create'))
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

export default Calendar
