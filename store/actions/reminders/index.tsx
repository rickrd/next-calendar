import { ADD_REMINDER } from '../'

export interface Reminder {
  id: number
  title: string
  date: Date
  city: string
}

export const addReminder = (reminder: Reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
})
