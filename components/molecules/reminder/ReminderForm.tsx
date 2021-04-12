import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import moment, { HTML5_FMT } from 'moment'
import { addReminder, setReminder, setReminderFormVisibility } from '../../../store/actions/reminders'
import { ReminderFormWrapper, ReminderFormBody } from '../../../styles/reminder/ReminderForm'
import Button from '../../atoms/Button'
import FormInput from '../../atoms/FormInput'
import FormLabel from '../../atoms/FormLabel'
import { Dispatch } from 'redux'
import { getCityGeocode } from '../../../hooks/city'
import { parseForecast } from './utils/forecast'

const clearInputs = (inputArray: any[]) => {
  inputArray.length && inputArray.map((setInput) => setInput(''))
}

const handleFormSubmit = (
  data: { id: number; title: string; description: string; date: string; time: string; city: string },
  reminders: any[],
  dispatch: Dispatch<any>,
  type: string,
  inputArray: any[]
) => {
  let reminderForecast
  let formattedCity: string = data.city

  ;(async () => {
    const citySearchResult = await getCityGeocode(data.city)

    if (citySearchResult.status === 'OK') {
      const forecastData = await parseForecast(citySearchResult, data)
      console.log(forecastData)
      formattedCity = citySearchResult.results[0].formatted_address
      if (Object.keys(forecastData).length) {
        console.log('forecast is true')
        reminderForecast = forecastData
      } else reminderForecast = { data: {}, forecastDescription: 'No forecast found', forecastDate: '', forecastIcon: '' }
    } else reminderForecast = { data: {}, forecastDescription: 'No city found', forecastDate: '', forecastIcon: '' }

    if (type === 'create') {
      console.log(data.time)
      dispatch(
        addReminder({
          id: reminders.length + 1,
          title: data.title,
          description: data.description,
          date: data.date,
          time: data.time,
          city: formattedCity,
          forecastData: reminderForecast,
        })
      )
      ;(async () => {})()

      clearInputs(inputArray)
    } else if (type === 'update') {
      dispatch(setReminder(data.id, { ...data, city: formattedCity, forecastData: reminderForecast }))
    }
  })()
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
  const [inputTime, setInputTime] = useState<string>(reminderFormInitialValues.inputTime)
  const [inputCity, setInputCity] = useState<string>(reminderFormInitialValues.inputCity)
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    setInputId(reminderFormInitialValues.inputId)
    setInputTitle(reminderFormInitialValues.inputTitle)
    setInputDescription(reminderFormInitialValues.inputDescription)
    setInputDate(reminderFormInitialValues.inputDate)
    setInputTime(reminderFormInitialValues.inputTime)
    setInputCity(reminderFormInitialValues.inputCity)
  }, [reminderFormInitialValues])

  useEffect(() => {
    if (!inputTitle || !inputDescription || !inputDate || !inputTime || !inputCity) setIsFormDisabled(true)
    else setIsFormDisabled(false)
  }, [inputTitle, inputDescription, inputDate, inputTime, inputCity])

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
          type='date'
          value={moment(inputDate, 'YYYY-MM-DD').format(moment.HTML5_FMT.DATE)}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
            setInputDate(moment(e.target.value.toString(), 'YYYY-MM-DD').format(HTML5_FMT.DATE))
          }}
        />
        <FormInput
          id='time'
          name='time'
          type='time'
          value={moment(inputTime, 'HH:mm').format(moment.HTML5_FMT.TIME)}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
            console.log(e.target.value)
            setInputTime(moment(e.target.value.toString(), 'HH:mm').format(HTML5_FMT.TIME))
          }}
        />
        <FormLabel label='City' />
        <FormInput id='city' name='city' placeholder='city' type='text' value={inputCity} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputCity(e.target.value)} />
        <Button
          style={{ maxWidth: '30em', border: '1px solid lightgrey', marginTop: '1em', cursor: isFormDisabled ? 'not-allowed' : 'pointer' }}
          onClick={() =>
            handleFormSubmit({ id: inputId, title: inputTitle, description: inputDescription, date: inputDate, time: inputTime, city: inputCity }, reminders, dispatch, type, [
              setInputTitle,
              setInputDescription,
              setInputDate,
              setInputTime,
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
