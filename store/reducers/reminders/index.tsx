import { HYDRATE } from 'next-redux-wrapper'
import { ADD_REMINDER, SET_REMINDER_FORM_VISIBILITY, SET_REMINDER_FORM_TYPE } from '../../actions'

const initialState = {
  reminders: [],
  isModalVisible: false,
  reminderFormType: '',
}

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case ADD_REMINDER:
      return { ...state, reminders: [action.payload, ...state.reminders] }

    case SET_REMINDER_FORM_VISIBILITY:
      return { ...state, isModalVisible: action.payload }

    case SET_REMINDER_FORM_TYPE:
      return { ...state, reminderFormType: action.payload }

    default:
      return state
  }
}

export default reducer
