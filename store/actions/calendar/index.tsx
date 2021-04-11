import { SET_MODAL_VISIBILITY, SET_SELECTED_DATE } from '../'

export const setSelectedDate = (date: string) => ({
  type: SET_SELECTED_DATE,
  payload: date,
})

export const setModalVisibility = (isModalVisible: boolean) => ({
  type: SET_MODAL_VISIBILITY,
  payload: isModalVisible,
})
