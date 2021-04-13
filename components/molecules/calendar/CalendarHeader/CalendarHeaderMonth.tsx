import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCalendarDate } from '../../../../store/actions/calendar'
import { CalendarHeaderCell, CalendarHeaderCellWrapper, CalendarHeaderMonthWrapper } from '../../../../styles/calendar/CalendarHeader'

const CalendarHeaderMonth = ({ month }) => {
  const calendarDate = useSelector((state: any) => state.calendar.date)
  const dispatch = useDispatch()

  return (
    <CalendarHeaderMonthWrapper>
      {month.map((month: string, index: number) => {
        return (
          <CalendarHeaderCellWrapper
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(setCalendarDate({ ...calendarDate, month: ('0' + (index + 1)).slice(-2) }))
            }}
          >
            <CalendarHeaderCell style={{ fontWeight: calendarDate.month === ('0' + (index + 1)).slice(-2) ? 'bold' : 'normal' }} padding='1em'>
              {month}
            </CalendarHeaderCell>
          </CalendarHeaderCellWrapper>
        )
      })}
    </CalendarHeaderMonthWrapper>
  )
}

export default CalendarHeaderMonth
