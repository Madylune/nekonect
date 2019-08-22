export const NEKO_CREATE_SUCCESS = 'neko.create.success'

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case NEKO_CREATE_SUCCESS:
      return {
        ...payload
      }
    default:
      return state
  }
}

export default reducer
