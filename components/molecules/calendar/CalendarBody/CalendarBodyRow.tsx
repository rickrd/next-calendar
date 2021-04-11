import React from 'react'
import moment from 'moment'
import { CalendarBodyCell, CalendarBodyCellWrapper, CalendarBodyRowWrapper } from '../../../../styles/calendar/CalendarBody'

const CalendarBodyRow = ({ calendarRow, today, setSelectedDate }) => {
  return (
    <CalendarBodyRowWrapper>
      {calendarRow.days.map((day: { label: string; date: string }) => {
        console.log(moment(day.date).day())
        return (
          <CalendarBodyCellWrapper key={day.date}>
            <CalendarBodyCell
              color={day.date === moment(today).format('YYYY-MM-DD') ? 'red' : '#000'}
              background={moment(day.date).day() === 0 || moment(day.date).day() === 6 ? '#fafafa' : '#fff'}
              onClick={() => {
                setSelectedDate(day.date)
              }}
            >
              {day.label}
            </CalendarBodyCell>
          </CalendarBodyCellWrapper>
        )
      })}
    </CalendarBodyRowWrapper>
  )
}

export default CalendarBodyRow
