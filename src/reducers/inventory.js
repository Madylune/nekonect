import get from "lodash/get";
import filter from "lodash/filter";

export const INVENTORY_ADD = "inventory.add";
export const INVENTORY_REMOVE = "inventory.remove";

const initialState = {
  items: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVENTORY_ADD:
      state.items.push(get(payload, "addedItem"));
      return {
        ...state,
        items: state.items
      };
    case INVENTORY_REMOVE:
      let removedItem = get(payload, "removedItem");
      return {
        ...state,
        items: filter(state.items, item => item.name !== removedItem.name)
      };
    default:
      return state;
  }
};

export default reducer;
