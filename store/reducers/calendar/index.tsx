import { HYDRATE } from 'next-redux-wrapper'
import moment from 'moment'
import { SET_MODAL_VISIBILITY, SET_SELECTED_DATE } from '../../actions'

const initialState = {
  selectedDate: moment().format('YYYY-MM-DD'),
  isModalVisible: false,
}

const reducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload }

    case SET_MODAL_VISIBILITY:
      return { ...state, isModalVisible: action.payload }

    default:
      return state
  }
}

export default reducer
