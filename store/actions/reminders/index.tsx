import { ADD_REMINDER } from '../'
import { Reminder } from '../../../types/reminder'

export const addReminder = (reminder: Reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
})
