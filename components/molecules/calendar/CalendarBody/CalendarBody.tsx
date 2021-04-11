import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { CalendarBodyWrapper } from '../../../../styles/calendar/CalendarBody'
import { fillCalendar } from './utils'
import CalendarBodyRow from './CalendarBodyRow'

const CalendarBody = () => {
  const [selectedYear, setSelectedYear] = useState<any>('2021')
  const [selectedMonth, setSelectedMonth] = useState<any>('04')
  const [selectedDay, setSelectedDay] = useState<any>('10')
  const [calendar, setCalendar] = useState<any>([])

  const today = moment().format('YYYY-MM-DD')

  useEffect(() => {
    fillCalendar(setCalendar, selectedYear, selectedMonth, selectedDay)
  }, [selectedYear, selectedMonth, selectedDay])

  console.log(calendar)
  return (
    <CalendarBodyWrapper>
      {calendar.map((calendarRow: { days: any[] }, index: string | number) => {
        return <CalendarBodyRow key={index} calendarRow={calendarRow} today={today}></CalendarBodyRow>
      })}
    </CalendarBodyWrapper>
  )
}

export default CalendarBody
