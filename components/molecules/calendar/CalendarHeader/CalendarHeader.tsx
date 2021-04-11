import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReminderFormVisibility, setReminderFormType } from '../../../../store/actions/reminders'
import { CalendarHeaderWrapper, CalendarHeaderRow } from '../../../../styles/calendar/CalendarHeader'
import Button from '../../../atoms/Button'
import CalendarHeaderWeeks from './CalendarHeaderWeeks'
import CalendarHeaderYears from './CalendarHeaderYears'

const CalendarHeader = () => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const dispatch = useDispatch()

  const reminders = useSelector((state: any) => state.reminders.reminders)
  const selectedDate = useSelector((state: any) => state.calendar.selectedDate)
  const isModalVisible = useSelector((state: any) => state.reminders.isModalVisible)
  return (
    <CalendarHeaderWrapper>
      <CalendarHeaderRow>
        <Button
          style={{ border: '1px solid lightgrey' }}
          children={'New reminder'}
          onClick={() => {
            dispatch(setReminderFormVisibility(!isModalVisible))
            dispatch(setReminderFormType('create'))
          }}
        ></Button>
        <CalendarHeaderYears years={years} />
      </CalendarHeaderRow>
      <CalendarHeaderRow>
        <CalendarHeaderWeeks weekDays={weekDays} />
      </CalendarHeaderRow>
    </CalendarHeaderWrapper>
  )
}

export default CalendarHeader
