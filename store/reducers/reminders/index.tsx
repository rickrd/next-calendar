import { HYDRATE } from 'next-redux-wrapper'
import { ADD_REMINDER } from '../../actions'

const initialState = {
  reminders: [],
}

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case ADD_REMINDER:
      return { ...state, reminders: [action.payload, ...state.reminders] }
    default:
      return state
  }
}

export default reducer
