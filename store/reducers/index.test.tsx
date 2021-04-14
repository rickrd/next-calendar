import reducer from './reminders'
import { ADD_REMINDER } from '../actions'
import { MOCKED_REMINDER } from '../../utils/__TEST_MOCKS__'

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

const afterState = {
  reminders: [MOCKED_REMINDER],
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

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_REMINDER', () => {
    expect(
      reducer(initialState, {
        type: ADD_REMINDER,
        payload: MOCKED_REMINDER,
      })
    ).toEqual(afterState)
  })
})
