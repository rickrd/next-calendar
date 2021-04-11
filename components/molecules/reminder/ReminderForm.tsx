import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { addReminder, setReminderFormVisibility } from '../../../store/actions/reminders'
import { ReminderFormWrapper, ReminderFormBody } from '../../../styles/reminder/ReminderForm'
import Button from '../../atoms/Button'
import FormInput from '../../atoms/FormInput'
import FormLabel from '../../atoms/FormLabel'
import { Dispatch } from 'redux'

const handleFormSubmit = (data: { title: string; description: string; date: string; city: string }, reminders: any[], dispatch: Dispatch<any>, type: string) => {
  if (type === 'create') dispatch(addReminder({ id: reminders.length + 1, title: data.title, description: data.description, date: moment(data.date).format('YYYY-MM-DD'), city: data.city }))
  else if (type === 'update') null
  //dispatch set reminder
}

const handleModalDrag = (e: React.DragEvent<HTMLElement>, setModalPosition: { (value: any): void; (arg0: { top: any; right: any }): void }) => {
  setModalPosition({ top: e.pageY, left: e.pageX })
}

const ReminderForm = ({ type }) => {
  if (type === '') return null
  const [modalPosition, setModalPosition] = useState<any>({ top: '259', left: '582' })
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputDescription, setInputDescription] = useState<string>('')
  const [inputDate, setInputDate] = useState<string>('')
  const [inputCity, setInputCity] = useState<string>('')
  const isModalVisible = useSelector((state: any) => state.reminders.isModalVisible)
  const reminders = useSelector((state: any) => state.reminders.reminders)
  const dispatch = useDispatch()

  return isModalVisible ? (
    <ReminderFormWrapper style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }} draggable={true}>
      <nav style={{ borderBottom: '1px solid lightgrey', marginBottom: '0.5em' }} draggable={true} onDragEnd={(e) => handleModalDrag(e, setModalPosition)}>
        <h2 style={{ marginTop: '0', marginBottom: '0.5em', textAlign: 'center', paddingTop: '1em' }}>New reminder</h2>
        <Button style={{ position: 'absolute', top: '0.5em', right: '0.5em' }} onClick={() => dispatch(setReminderFormVisibility(false))} children={'X'} />
      </nav>
      <ReminderFormBody>
        <FormLabel label='Title' />
        <FormInput id='title' name='title' placeholder='title' type='text' value={inputTitle} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputTitle(e.target.value)} />
        <FormLabel label='Description' />
        <FormInput
          id='description'
          name='description'
          placeholder='description'
          type='textarea'
          value={inputDescription}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputDescription(e.target.value)}
        />
        <FormLabel label='Date' />
        <FormInput
          id='date'
          name='date'
          placeholder='date'
          type='datetime-local'
          value={inputDate}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputDate(e.target.value)}
        />
        <FormLabel label='City' />
        <FormInput id='city' name='city' placeholder='city' type='text' value={inputCity} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputCity(e.target.value)} />
        <Button
          style={{ maxWidth: '30em', border: '1px solid lightgrey', marginTop: '1em' }}
          onClick={() => handleFormSubmit({ title: inputTitle, description: inputDescription, date: inputDate, city: inputCity }, reminders, dispatch, type)}
          children={<p>Submit</p>}
        />
      </ReminderFormBody>
    </ReminderFormWrapper>
  ) : null
}

export default ReminderForm
