import get from 'lodash/get'

export const CODE_LOAD_SUCCESS = 'time.change.to.night'

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case CODE_LOAD_SUCCESS:
      return {
        ...state,
        id: get(payload, 'id')
      }
    default:
      return state
  }
}

export default reducer
