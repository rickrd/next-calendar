import React from 'react'
import moment from 'moment'
import { CalendarBodyCell, CalendarBodyCellWrapper, CalendarBodyRowWrapper } from '../../../../styles/calendar/CalendarBody'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedDate } from '../../../../store/actions/calendar'
import CalendarReminderList from './CalendarReminderList'
import { setReminderFormVisibility } from '../../../../store/actions/reminders'

const CalendarBodyRow = ({ calendarRow, today }) => {
  const dispatch = useDispatch()

  return (
    <CalendarBodyRowWrapper>
      {calendarRow.days.map((day: { label: string; date: string }) => {
        const reminders = useSelector((state: { reminders: { reminders: { title: string; date: string }[] } }) => state.reminders.reminders)
        const filteredReminders = reminders.filter(({ date }) => moment(date).format('YYYY-MM-DD') === day.date)
        return (
          <CalendarBodyCellWrapper key={day.date}>
            <CalendarBodyCell
              color={day.date === moment(today).format('YYYY-MM-DD') ? '#fff' : '#000'}
              background={moment(day.date).day() === 0 || moment(day.date).day() === 6 ? '#fafafa' : '#fff'}
              onClick={() => {
                dispatch(setSelectedDate(day.date))
              }}
              onDoubleClick={() => dispatch(setReminderFormVisibility(true))}
            >
              <span style={{ backgroundColor: day.date === moment(today).format('YYYY-MM-DD') ? 'indianred' : 'unset', padding: '0.4em 0.8em' }}>{day.label}</span>

              {filteredReminders.length ? <CalendarReminderList style={{ overflowY: 'scroll', listStyle: 'none', maxHeight: '4em' }} childrens={filteredReminders} /> : null}
            </CalendarBodyCell>
          </CalendarBodyCellWrapper>
        )
      })}
    </CalendarBodyRowWrapper>
  )
}

export default CalendarBodyRow
