import React from 'react'
import styled from 'styled-components'

const CalendarHeader = () => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const weeklyDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <CalendarHeaderWrapper>
      <HeaderRow>
        {years.map((year: string, index: number) => {
          return (
            <HeaderCellWrapper key={index}>
              <HeaderCell type='year'> {year}</HeaderCell>
            </HeaderCellWrapper>
          )
        })}
      </HeaderRow>
      <HeaderRow>
        {weeklyDays.map((weeklyDay: string, index: number) => {
          return (
            <HeaderCellWrapper key={index}>
              <HeaderCell type='week'>{weeklyDay}</HeaderCell>
            </HeaderCellWrapper>
          )
        })}
      </HeaderRow>
    </CalendarHeaderWrapper>
  )
}

const CalendarHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
`

const HeaderRow = styled.div`
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
  padding: 2em;
  font-weight: ${({ type }: HeaderCellParams) => (type === 'week' ? 'bold' : 'normal')};
`

export default CalendarHeader
