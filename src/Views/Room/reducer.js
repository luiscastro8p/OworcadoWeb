import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.Modal:
      return {
        ...state,
        modal: action.payload,
      };
    case actions.SetValue:
      return {
        ...state,
        [action.var]: action.payload,
      };
    case actions.fetchRooms:
      return {
        ...state,
        room: action.payload,
      };
    default:
      return state;
  }
};
