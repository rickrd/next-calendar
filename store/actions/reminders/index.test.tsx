import { addReminder } from '.'
import { ADD_REMINDER } from '..'

describe('actions', () => {
  it('should create a reminder', () => {
    const reminder = {
      id: 1,
      title: 'Reminder title',
      description: 'Reminder description',
      date: '2021-04-12',
      time: '22:20',
      city: 'London',
    }

    const expectedAction = {
      type: ADD_REMINDER,
      payload: reminder,
    }

    expect(addReminder(reminder)).toEqual(expectedAction)
  })
})
