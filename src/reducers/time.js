import get from 'lodash/get'

export const TIME_CHANGE_TO_NIGHT = 'time.change.to.night'

const initialState = {
  timeIsNight: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TIME_CHANGE_TO_NIGHT:
      return {
        ...state,
        timeIsNight: get(payload, 'timeIsNight')
      }
    default:
      return state
  }
}

export default reducer
