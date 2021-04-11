import React from 'react'
import styled from 'styled-components'

const CalendarReminderFlag = ({ title, color }) => {
  return <CalendarReminderFlagWrapper style={{ backgroundColor: color }}>{title}</CalendarReminderFlagWrapper>
}

const CalendarReminderFlagWrapper = styled.li``

export default CalendarReminderFlag
