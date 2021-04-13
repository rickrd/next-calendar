import React from 'react'
import { connect, useSelector } from 'react-redux'
import moment from 'moment'

import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper, CalendarFlexRow, CalendarFlexCol } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'
import CalendarDetail from '../molecules/calendar/CalendarDetail'
import CalendarHeaderYears from '../molecules/calendar/CalendarHeader/CalendarHeaderYears'
import CalendarHeaderMonth from '../molecules/calendar/CalendarHeader/CalendarHeaderMonth'

const Calendar = ({ reminders, selectedDate, isModalVisible }) => {
  let years = []
  const minYear = moment().subtract(5, 'years')
  const maxYear = moment().add(5, 'years')
  const minYearFormatted = parseInt(minYear.format('YYYY'))
  const maxYearFormatted = parseInt(maxYear.format('YYYY'))

  for (let i = minYearFormatted; i <= maxYearFormatted; i++) {
    years.push(i.toString())
  }

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const reminderFormType = useSelector((state: any) => state.reminders.reminderFormType)

  return (
    <CalendarWrapper>
      <CalendarFlexRow>
        <CalendarHeaderYears years={years} />
      </CalendarFlexRow>
      <CalendarFlexRow>
        <CalendarHeaderMonth month={month} />
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
