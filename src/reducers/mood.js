import get from 'lodash/get'

export const MOOD_CHANGE = 'mood.change'
export const MOOD_CHANGED_HAPPY = 'mood.changed.happy'
export const MOOD_CHANGED_UNHAPPY = 'mood.changed.unhappy'

const initialState = {
  value: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOOD_CHANGE:
      return {
        ...state,
        value: get(payload, 'value')
      }
    case MOOD_CHANGED_HAPPY:
      return {
       ...state,
       makeHappyVal: get(payload, 'makeHappyVal')
      }
    default:
      return state
  }
}

export default reducer
