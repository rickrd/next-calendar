import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { setModalVisibility } from '../../../store/actions/calendar'
import { addReminder } from '../../../store/actions/reminders'
import { ReminderFormWrapper } from '../../../styles/reminder/ReminderForm'
import Button from '../../atoms/Button'
import FormInput from '../../atoms/FormInput'
import FormLabel from '../../atoms/FormLabel'

const handleFormSubmit = (data, reminders, dispatch) => {
  dispatch(addReminder({ id: reminders.length + 1, title: data.title, description: data.description, date: moment(data.date).format('YYYY-MM-DD'), city: data.city }))
}

const handleModalDrag = (e: React.DragEvent<HTMLDivElement>, setModalPosition: { (value: any): void; (arg0: { top: any; right: any }): void }) => {
  setModalPosition({ top: e.pageY, left: e.pageX })
}

const ReminderForm = () => {
  const [modalPosition, setModalPosition] = useState<any>({ top: '259', left: '582' })
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [inputDate, setInputDate] = useState<string>('')
  const [inputCity, setInputCity] = useState<string>('')
  const isModalVisible = useSelector((state: any) => state.calendar.isModalVisible)
  const reminders = useSelector((state: any) => state.reminders.reminders)
  const dispatch = useDispatch()

  return isModalVisible ? (
    <ReminderFormWrapper style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }} draggable={true} onDragEnd={(e) => handleModalDrag(e, setModalPosition)}>
      <nav style={{ borderBottom: '1px solid lightgrey' }}>
        <h2>New reminder</h2>
        <Button style={{ position: 'absolute', top: '0.5em', right: '0.5em' }} onClick={() => dispatch(setModalVisibility(false))} children={'X'} />
      </nav>
      <FormLabel label='Title' />
      <FormInput id='title' name='title' placeholder='title' type='text' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
      <FormLabel label='Description' />
      <FormInput id='description' name='description' placeholder='description' type='textarea' value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
      <FormLabel label='Date' />
      <FormInput id='date' name='date' placeholder='date' type='datetime-local' value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
      <FormLabel label='City' />
      <FormInput id='city' name='city' placeholder='city' type='text' value={inputCity} onChange={(e) => setInputCity(e.target.value)} />
      <Button
        style={{ maxWidth: '30em', border: '1px solid lightgrey', marginTop: '1em' }}
        onClick={() => handleFormSubmit({ title: inputTitle, description: inputDescription, date: inputDate, city: inputCity }, reminders, dispatch)}
        children={<p>Submit</p>}
      />
    </ReminderFormWrapper>
  ) : null
}

export default ReminderForm
