import React from 'react'
import styled from 'styled-components'

const CalendarHeader = () => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const weeklyDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <CalendarHeaderWrapper>
      <CalendarYears>
        {years.map((year: string) => {
          return (
            <HeaderCellWrapper>
              <HeaderCell type='year'> {year}</HeaderCell>
            </HeaderCellWrapper>
          )
        })}
      </CalendarYears>
      <CalendarWeeks>
        {weeklyDays.map((weeklyDay: string) => {
          return (
            <HeaderCellWrapper>
              <HeaderCell type='week'>{weeklyDay}</HeaderCell>
            </HeaderCellWrapper>
          )
        })}
      </CalendarWeeks>
    </CalendarHeaderWrapper>
  )
}

const CalendarHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
`

const CalendarYears = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: center;
`

const CalendarWeeks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: center;
`

const HeaderCellWrapper = styled.div`
  &:not(last-child) {
    margin-right: 10em;
  }
`

export interface HeaderCellParams {
  type: string
}

const HeaderCell = styled.div`
  padding: 1em;
  font-weight: ${({ type }: HeaderCellParams) => (type === 'week' ? 'bold' : 'normal')};
`

export default CalendarHeader
