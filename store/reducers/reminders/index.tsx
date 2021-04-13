import { HYDRATE } from 'next-redux-wrapper'
import { ADD_REMINDER, SET_REMINDER_FORM_VISIBILITY, SET_REMINDER_FORM_TYPE, SET_REMINDER_FORM_INITIAL_VALUES, SET_REMINDER, SET_REMINDER_FORECAST } from '../../actions'

const initialState = {
  reminders: [],
  isModalVisible: false,
  reminderFormType: '',
  reminderFormInitialValues: {
    inputId: 1,
    inputTitle: '',
    inputDescription: '',
    inputDate: '',
    inputCity: '',
  },
}

const reducer = (state = initialState, action: { type?: any; payload?: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case ADD_REMINDER:
      return { ...state, reminders: [action.payload, ...state.reminders] }

    case SET_REMINDER:
      console.log(action.payload)
      return {
        ...state,
        reminders: state.reminders.map((reminder) => {
          if (reminder.id === action.payload.id) return action.payload.reminder
          else return reminder
        }),
      }

    case SET_REMINDER_FORECAST:
      return {
        ...state,
        reminders: state.reminders.map((reminder) => {
          if (reminder.id === action.payload.id) return {
            ...reminder,
            forecastData: action.payload.forecastData
          }
        })
      }

    case SET_REMINDER_FORM_VISIBILITY:
      return { ...state, isModalVisible: action.payload }

    case SET_REMINDER_FORM_TYPE:
      return { ...state, reminderFormType: action.payload }

    case SET_REMINDER_FORM_INITIAL_VALUES:
      return { ...state, reminderFormInitialValues: action.payload }
    default:
      return state
  }
}

export default reducer
