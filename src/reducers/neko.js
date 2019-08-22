export const NEKO_CREATE_SUCCESS = 'neko.create.success'
export const NEKO_DELETE_SUCCESS = 'neko.delete.success'

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case NEKO_CREATE_SUCCESS:
      return {
        ...payload
      }
    case NEKO_DELETE_SUCCESS:
      return {
        state: []
      }
    default:
      return state
  }
}

export default reducer
