import { ADD_REMINDER, SET_REMINDER, REMOVE_REMINDER, SET_REMINDER_FORM_VISIBILITY, SET_REMINDER_FORM_TYPE, SET_REMINDER_FORM_INITIAL_VALUES, SET_REMINDER_FORECAST } from '../'
import { Reminder } from '../../../types/reminder'

export const addReminder = (reminder: Reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
})

export const setReminder = (id: number, reminder: Reminder) => ({
  type: SET_REMINDER,
  payload: { id, reminder },
})

export const removeReminder = (id: number) => ({
  type: REMOVE_REMINDER,
  payload: id,
})

export interface ForecastData {
  data: any
  forecastIcon: string
  forecastDescription: string
  forecastDate: string
}

export const setReminderForecast = (id: number, forecastData: ForecastData) => ({
  type: SET_REMINDER_FORECAST,
  payload: { id, forecastData },
})

export const setReminderFormVisibility = (isModalVisible: boolean) => ({
  type: SET_REMINDER_FORM_VISIBILITY,
  payload: isModalVisible,
})

export const setReminderFormType = (formType: string) => ({
  type: SET_REMINDER_FORM_TYPE,
  payload: formType,
})

export interface ReminderFormInitialValues {
  inputId: number
  inputTitle: string
  inputDescription: string
  inputDate: string
  inputTime: string
  inputCity: string
}

export const setReminderFormInitialValues = (initialValues: ReminderFormInitialValues) => ({
  type: SET_REMINDER_FORM_INITIAL_VALUES,
  payload: initialValues,
})
