import { ADD_REMINDER, SET_REMINDER, SET_REMINDER_FORM_VISIBILITY, SET_REMINDER_FORM_TYPE, SET_REMINDER_FORM_INITIAL_VALUES } from '../'
import { Reminder } from '../../../types/reminder'

export const addReminder = (reminder: Reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
})

export const setReminder = (id: number, reminder: Reminder) => ({
  type: SET_REMINDER,
  payload: { id, reminder },
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
  inputCity: string
}

export const setReminderFormInitialValues = (initialValues: ReminderFormInitialValues) => ({
  type: SET_REMINDER_FORM_INITIAL_VALUES,
  payload: initialValues,
})
