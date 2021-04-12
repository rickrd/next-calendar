import React from 'react'
import CalendarReminderFlag from '../../../atoms/CalendarReminderFlag'

export interface CalendarReminderListParams {
  style?: any
  childrens?: { title: string }[]
}

const CalendarReminderList = ({ childrens, style }: CalendarReminderListParams) => {
  return (
    <ul style={style}>
      {childrens.map(({ title }, index) => (
        <CalendarReminderFlag key={index} title={title} color={'lightgreen'} />
      ))}
    </ul>
  )
}

export default CalendarReminderList
