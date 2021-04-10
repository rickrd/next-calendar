import React from 'react'
import styled from 'styled-components'

const CalendarHeader = () => {
  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']
  const weeklyDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <CalendarHeaderWrapper>
      <HeaderRow>
        <HeaderCell bold padding='1em'>{`<`}</HeaderCell>
        {years.map((year: string, index: number) => {
          return (
            <HeaderCellWrapper key={index}>
              <HeaderCell padding='1em'> {year}</HeaderCell>
            </HeaderCellWrapper>
          )
        })}
        <HeaderCell bold padding='1em'>{`>`}</HeaderCell>
      </HeaderRow>
      <HeaderRow>
        {weeklyDays.map((weeklyDay: string, index: number) => {
          return (
            <HeaderCellWrapper key={index}>
              <HeaderCell bold={weeklyDay == 'Sun' || weeklyDay == 'Sat'} padding='0 7em 0 7em'>
                {weeklyDay}
              </HeaderCell>
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
  justify-content: flex-end;
`

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const HeaderCellWrapper = styled.div``

export interface HeaderCellParams {
  bold?: boolean
  padding?: string
}

const HeaderCell = styled.div`
  padding: ${({ padding }: HeaderCellParams) => (padding ? padding : 0)};
  font-weight: ${({ bold = false }: HeaderCellParams) => (bold ? 'bold' : 'normal')};
`

export default CalendarHeader
