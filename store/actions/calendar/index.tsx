import { SET_SELECTED_DATE, SET_CALENDAR_DATE } from '../'

export const setSelectedDate = (date: string) => ({
  type: SET_SELECTED_DATE,
  payload: date,
})

export const setCalendarDate = (date: { year: string; month: string; day: string }) => ({
  type: SET_CALENDAR_DATE,
  payload: date,
})
