import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Link from 'next/link'

const fillCalendar = (calendar: any[], setCalendar: any, selectedYear: any, selectedMonth: any, selectedDay: any) => {
  const startDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().startOf('month').startOf('week')
  const endDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().endOf('month').endOf('week')

  let weeks = []

  var index = startDay.clone().subtract(1, 'day')

  while (index.isBefore(endDay, 'day')) {
    weeks.push({
      days: new Array(7).fill(0).map(() => {
        return { label: index.add(1, 'day').clone().date().toString(), date: index.clone().format('YYYY-MM-DD') }
      }),
    })
  }

  setCalendar(weeks)
}

const CalendarBody = ({ setSelectedDate }) => {
  const [selectedYear, setSelectedYear] = useState<any>('2021')
  const [selectedMonth, setSelectedMonth] = useState<any>('04')
  const [selectedDay, setSelectedDay] = useState<any>('10')
  const [calendar, setCalendar] = useState<any>([])

  const today = moment().format('YYYY-MM-DD')

  useEffect(() => {
    fillCalendar(calendar, setCalendar, selectedYear, selectedMonth, selectedDay)
  }, [selectedYear, selectedMonth, selectedDay])

  console.log(calendar)
  return (
    <CalendarBodyWrapper>
      {calendar.map((calendarRow: { days: any[] }, index: string | number) => {
        return (
          <BodyRow key={index}>
            {calendarRow.days.map((day: { label: string; date: string }) => {
              console.log(moment(day.date).day())
              return (
                <BodyCellWrapper key={day.date}>
                  <BodyCell
                    color={day.date === moment(today).format('YYYY-MM-DD') ? 'red' : '#000'}
                    background={moment(day.date).day() === 0 || moment(day.date).day() === 6 ? '#fafafa' : '#fff'}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    {day.label}
                  </BodyCell>
                </BodyCellWrapper>
              )
            })}
          </BodyRow>
        )
      })}
    </CalendarBodyWrapper>
  )
}

const CalendarBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BodyRow = styled.div`
  display: flex;
  flex-direction: row;
`

const BodyCellWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`

export interface BodyCellParams {
  color?: string
  background?: string
}

const BodyCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 15em;
  height: 10em;
  background: ${({ background }: BodyCellParams) => (background ? background : '#fff')};
  color: ${({ color }: BodyCellParams) => (color ? color : '#000')};
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
`

export default CalendarBody
