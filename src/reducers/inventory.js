import get from 'lodash/get'

export const INVENTORY_ADD = 'inventory.add'

const initialState = {
  items: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVENTORY_ADD:
      state.items.push(get(payload, 'addedItem'))
      return {
        ...state,
        items: state.items
      }
    default:
      return state
  }
}

export default reducer
