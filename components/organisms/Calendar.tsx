import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import CalendarHeader from '../molecules/calendar/CalendarHeader/CalendarHeader'
import CalendarBody from '../molecules/calendar/CalendarBody/CalendarBody'
import { CalendarWrapper, CalendarFlexRow, CalendarFlexCol } from '../../styles/calendar'
import ReminderForm from '../molecules/reminder/ReminderForm'
import CalendarDetail from '../molecules/calendar/CalendarDetail'
import CalendarHeaderYears from '../molecules/calendar/CalendarHeader/CalendarHeaderYears'

const Calendar = ({ reminders, selectedDate, isModalVisible }) => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const reminderFormType = useSelector((state: any) => state.reminders.reminderFormType)

  return (
    <CalendarWrapper>
      <CalendarFlexRow>
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
