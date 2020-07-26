import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setterNick: {
      return {
        ...state,
        user: {
          nick: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
