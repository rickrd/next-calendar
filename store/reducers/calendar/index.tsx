import { HYDRATE } from 'next-redux-wrapper'
import moment from 'moment'
import { SET_CALENDAR_DATE, SET_SELECTED_DATE } from '../../actions'

const initialState = {
  selectedDate: moment().format('YYYY-MM-DD'),
  isModalVisible: false,
  date: {
    year: moment().format('YYYY'),
    month: moment().format('MM'),
    day: moment().format('DD')
  },
}

const reducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload }

    case SET_CALENDAR_DATE:
      return { ...state, date: action.payload }

    default:
      return state
  }
}

export default reducer
