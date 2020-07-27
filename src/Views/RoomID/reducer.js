import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.startRoom:
      return {
        ...state,
        start: action.payload,
        modal: false,
      };
    case actions.SetValue:
      return {
        ...state,
        [action.var]: action.payload,
      };
    default:
      return state;
  }
};
