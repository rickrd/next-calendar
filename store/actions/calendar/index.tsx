import { SET_SELECTED_DATE } from '../'

export const setSelectedDate = (date: string) => ({
  type: SET_SELECTED_DATE,
  payload: date,
})
