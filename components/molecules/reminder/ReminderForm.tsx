import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import moment, { HTML5_FMT } from 'moment'
import { addReminder, setReminder, setReminderFormVisibility } from '../../../store/actions/reminders'
import { ReminderFormWrapper, ReminderFormBody } from '../../../styles/reminder/ReminderForm'
import Button from '../../atoms/Button'
import FormInput from '../../atoms/FormInput'
import FormLabel from '../../atoms/FormLabel'
import { Dispatch } from 'redux'

const clearInputs = (inputArray: any[]) => {
  inputArray.length && inputArray.map((setInput) => setInput(''))
}

const handleFormSubmit = (data: { id: number; title: string; description: string; date: string; city: string }, reminders: any[], dispatch: Dispatch<any>, type: string, inputArray: any[]) => {
  if (type === 'create') {
    dispatch(addReminder({ id: reminders.length + 1, title: data.title, description: data.description, date: moment(data.date).format(moment.HTML5_FMT.DATETIME_LOCAL), city: data.city }))
    clearInputs(inputArray)
  } else if (type === 'update') {
    dispatch(setReminder(data.id, data))
  }
}

const handleModalDrag = (e: React.DragEvent<HTMLElement>, setModalPosition: { (value: any): void; (arg0: { top: any; right: any }): void }) => {
  setModalPosition({ top: e.pageY, left: e.pageX })
}

const ReminderForm = ({ type, reminders, reminderFormInitialValues, isModalVisible }) => {
  if (type === '') return null

  const [modalPosition, setModalPosition] = useState<any>({ top: '259', left: '582' })
  const [inputId, setInputId] = useState<number>(reminderFormInitialValues.inputId)
  const [inputTitle, setInputTitle] = useState<string>(reminderFormInitialValues.inputTitle)
  const [inputDescription, setInputDescription] = useState<string>(reminderFormInitialValues.inputDescription)
  const [inputDate, setInputDate] = useState<string>(reminderFormInitialValues.inputDate)
  const [inputCity, setInputCity] = useState<string>(reminderFormInitialValues.inputCity)
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    setInputId(reminderFormInitialValues.inputId)
    setInputTitle(reminderFormInitialValues.inputTitle)
    setInputDescription(reminderFormInitialValues.inputDescription)
    setInputDate(reminderFormInitialValues.inputDate)
    setInputCity(reminderFormInitialValues.inputCity)
  }, [reminderFormInitialValues])

  useEffect(() => {
    if (!inputTitle || !inputDescription || !inputDate || !inputCity) setIsFormDisabled(true)
    else setIsFormDisabled(false)
  }, [inputTitle, inputDescription, inputDate, inputCity])

  return isModalVisible ? (
    <ReminderFormWrapper style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }}>
      <nav style={{ borderBottom: '1px solid lightgrey', marginBottom: '0.5em', cursor: 'grabbing' }} draggable={true} onDragEnd={(e) => handleModalDrag(e, setModalPosition)}>
        <h2 style={{ marginTop: '0', marginBottom: '0.5em', textAlign: 'center', paddingTop: '1em' }}>{type === 'create' ? 'New reminder' : 'Edit reminder'}</h2>
        <Button style={{ position: 'absolute', top: '0.5em', right: '0.5em', cursor: 'pointer' }} onClick={() => dispatch(setReminderFormVisibility(false))} children={'X'} />
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
          value={moment(inputDate).format(moment.HTML5_FMT.DATETIME_LOCAL)}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
            console.log(moment(e.target.value.toString()).format(HTML5_FMT.DATETIME_LOCAL))
            setInputDate(moment(e.target.value.toString()).format(HTML5_FMT.DATETIME_LOCAL))
          }}
        />
        <FormLabel label='City' />
        <FormInput id='city' name='city' placeholder='city' type='text' value={inputCity} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputCity(e.target.value)} />
        <Button
          style={{ maxWidth: '30em', border: '1px solid lightgrey', marginTop: '1em', cursor: isFormDisabled ? 'not-allowed' : 'pointer' }}
          onClick={() =>
            handleFormSubmit({ id: inputId, title: inputTitle, description: inputDescription, date: inputDate, city: inputCity }, reminders, dispatch, type, [
              setInputTitle,
              setInputDescription,
              setInputDate,
              setInputCity,
            ])
          }
          children={<p>Submit</p>}
          disabled={isFormDisabled}
        />
      </ReminderFormBody>
    </ReminderFormWrapper>
  ) : null
}

const mapStateToProps = (state: any) => {
  return {
    reminders: state.reminders.reminders,
    reminderFormInitialValues: state.reminders.reminderFormInitialValues,
    isModalVisible: state.reminders.isModalVisible,
  }
}

export default connect(mapStateToProps)(ReminderForm)
