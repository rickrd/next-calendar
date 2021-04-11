import React from 'react'
import { ReminderListFlagWrapper } from '../../../styles/reminder/ReminderList'

const ReminderListFlag = ({ reminder: { id, title, description, city, date }, onClick }) => {
  return (
    <ReminderListFlagWrapper onClick={onClick} style={{cursor: 'pointer'}}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{city}</div>
      <div>{date}</div>
    </ReminderListFlagWrapper>
  )
}

export default ReminderListFlag
