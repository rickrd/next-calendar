import React from 'react'
import { ReminderFormWrapper } from '../../../styles/reminder/ReminderForm'

const ReminderForm = () => {
  return (
    <ReminderFormWrapper>
      <span>Title</span>
      <input id='title' name='title' placeholder='title' type='text'></input>
      <span>description</span>
      <input id='description' name='description' placeholder='description' type='datetime-local'></input>
    </ReminderFormWrapper>
  )
}

export default ReminderForm
