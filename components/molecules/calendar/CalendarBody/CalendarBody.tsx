import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { CalendarBodyWrapper } from '../../../../styles/calendar/CalendarBody'
import { fillCalendar } from './utils'
import CalendarBodyRow from './CalendarBodyRow'
import { connect, useSelector } from 'react-redux'

const CalendarBody = ({ calendarDate: { year, month, day } }) => {
  const [calendar, setCalendar] = useState<any>([])
  const today = moment().format('YYYY-MM-DD')

  useEffect(() => {
    fillCalendar(setCalendar, year, month, day)
  }, [year, month, day])

  return (
    <CalendarBodyWrapper>
      {calendar.map((calendarRow: { days: any[] }, index: string | number) => {
        return <CalendarBodyRow key={index} calendarRow={calendarRow} today={today}></CalendarBodyRow>
      })}
    </CalendarBodyWrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    calendarDate: state.calendar.date,
  }
}

export default connect(mapStateToProps)(CalendarBody)
