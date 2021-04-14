import { combineReducers } from 'redux'
import remindersReducer from './reminders'
import calendarReducer from './calendar'

export default combineReducers({
  reminders: remindersReducer,
  calendar: calendarReducer,
})
