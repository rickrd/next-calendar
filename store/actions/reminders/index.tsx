import { ADD_REMINDER, SET_REMINDER_FORM_VISIBILITY, SET_REMINDER_FORM_TYPE } from '../'
import { Reminder } from '../../../types/reminder'

export const addReminder = (reminder: Reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
})
export const setReminderFormVisibility = (isModalVisible: boolean) => ({
  type: SET_REMINDER_FORM_VISIBILITY,
  payload: isModalVisible,
})

export const setReminderFormType = (formType: string) => ({
  type: SET_REMINDER_FORM_TYPE,
  payload: formType,
})

