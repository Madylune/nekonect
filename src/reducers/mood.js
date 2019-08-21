import get from 'lodash/get'

export const MOOD_CHANGE = 'mood.change'
export const MOOD_CHANGED_HAPPY = 'mood.changed.happy'
export const MOOD_CHANGED_UNHAPPY = 'mood.changed.unhappy'
export const MOOD_CHANGED_LIFE = 'mood.changed.dead'
export const MOOD_IS_MAX = 'mood.is.max'

const initialState = {
  value: null,
  isDead: false,
  moodIsMax: false
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
    case MOOD_CHANGED_LIFE:
      return {
        ...state,
        isDead: get(payload, 'isDead')
      }
    case MOOD_IS_MAX:
      return {
        ...state,
        moodIsMax: true
      }
    default:
      return state
  }
}

export default reducer
