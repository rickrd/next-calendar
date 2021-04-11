import { HYDRATE } from 'next-redux-wrapper'
import moment from 'moment'
import { SET_SELECTED_DATE } from '../../actions'

const initialState = {
  selectedDate: moment().format('YYYY-MM-DD'),
}

const reducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload }

    default:
      return state
  }
}

export default reducer
