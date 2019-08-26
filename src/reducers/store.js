import get from "lodash/get";
import filter from "lodash/filter";

export const STORE_ADD = "store.add";
export const STORE_REMOVE = "store.remove";

// Une liste d'objets contenant les éléments du store.
// La propriété "place" désigne le lieu où l'objet sera placé.
const initialState = {
  items: [
    {
      name: "tv",
      icon: "tv.png",
      place: "/"
    },
    {
      name: "umbrella",
      icon: "umbrella.png",
      place: "/garden"
    },
    {
      name: "bear",
      icon: "bear.png",
      place: "/night"
    }
  ]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_ADD:
      state.items.push(get(payload, "addedItem"));
      return {
        ...state,
        items: state.items
      };
    case STORE_REMOVE:
      let removedItem = get(payload, "removedItem");
      console.log(state.items);
      return {
        ...state,
        items: filter(state.items, item => item.name !== removedItem.name)
      };
    default:
      return state;
  }
};

export default reducer;
