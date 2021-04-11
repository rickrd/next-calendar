import React from 'react'
import { useSelector } from 'react-redux'
import { ReminderFormWrapper } from '../../../styles/reminder/ReminderForm'

const ReminderForm = () => {
  const isModalVisible = useSelector((state: any) => state.calendar.isModalVisible)
  return isModalVisible ? (
    <ReminderFormWrapper draggable={true}>
      <span>Title</span>
      <input id='title' name='title' placeholder='title' type='text'></input>
      <span>description</span>
      <input id='description' name='description' placeholder='description' type='datetime-local'></input>
    </ReminderFormWrapper>
  ) : null
}

export default ReminderForm
