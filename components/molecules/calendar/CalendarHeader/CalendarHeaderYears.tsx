import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCalendarDate } from '../../../../store/actions/calendar'
import { CalendarHeaderCell, CalendarHeaderCellWrapper, CalendarHeaderYearsWrapper } from '../../../../styles/calendar/CalendarHeader'

const CalendarHeaderYears = ({ years }) => {
  const calendarDate = useSelector((state: any) => state.calendar.date)
  const dispatch = useDispatch()
  console.log(calendarDate)
  return (
    <CalendarHeaderYearsWrapper>
      {years.map((year: string, index: number) => {
        return (
          <CalendarHeaderCellWrapper
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(setCalendarDate({ ...calendarDate, year: year }))
              console.log({ ...calendarDate, year: year })
            }}
          >
            <CalendarHeaderCell style={{ fontWeight: calendarDate.year === year ? 'bold' : 'normal' }} padding='1em'>
              {year}
            </CalendarHeaderCell>
          </CalendarHeaderCellWrapper>
        )
      })}
    </CalendarHeaderYearsWrapper>
  )
}

export default CalendarHeaderYears
