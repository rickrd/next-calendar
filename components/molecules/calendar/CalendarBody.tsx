import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Link from 'next/link'

const CalendarBody = ({ setSelectedDate }) => {
  const [selectedYear, setSelectedYear] = useState<any>('2021')
  const [selectedMonth, setSelectedMonth] = useState<any>('04')
  const [selectedDay, setSelectedDay] = useState<any>('10')
  console.log('moment year:', moment().year())
  console.log('moment month:', moment().month())
  console.log('moment day:', moment().day())
  const startDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().startOf('month').startOf('week')
  console.log('startDay:', startDay.format('YYYY-MM-DD'))
  const endDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().endOf('month').endOf('week')
  console.log('endDay:', endDay.format('YYYY-MM-DD'))
  const today = moment().format('YYYY-MM-DD')
  console.log('moment:', moment().format('YYYY-MM-DD'))
  console.log('today:', today)

  var calendar = []
  var index = startDay.clone()
  while (index.isBefore(endDay, 'day')) {
    calendar.push(
      new Array(7).fill(0).map(() => {
        return { dayLabel: index.add(1, 'day').date(), date: index.format('YYYY-MM-DD') }
      })
    )
  }

  console.log(calendar)
  return (
    <CalendarBodyWrapper>
      {calendar.map((calendarRow) => {
        return (
          <BodyRow>
            {calendarRow.map(({ dayLabel, date }) => {
              return (
                <BodyCellWrapper>
                  <BodyCell today={date === moment(today).format('YYYY-MM-DD')} onClick={() => setSelectedDate(date)}>
                    {dayLabel}
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

const BodyCellWrapper = styled.div``

export interface BodyCellParams {
  today: boolean
}

const BodyCell = styled.div`
  width: 15em;
  height: 15em;
  padding: 7em;
  background-color: ${({ today }: BodyCellParams) => (today ? '#cecece' : '#fff')};
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
`

export default CalendarBody
