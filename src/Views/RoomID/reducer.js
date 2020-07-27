import { actions } from './actions';
import { initialState } from './constants';
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.startRoom:
      return {
        ...state,
        start: action.payload,
        modal: false,
      };
    case actions.selectLetter:
      let fail = false;
      let newABC = state.abecedario;
      newABC.splice(action.payload, 1, {
        ...state.abecedario[action.payload],
        status: false,
      });
      let newText = state.text;
      newText.map((item, idx) => {
        if (state.abecedario[action.payload].letter === item.letter) {
          fail = true;
          return newText.splice(idx, 1, {
            ...newText[idx],
            status: true,
          });
        }
      });
      if (!fail) {
        if (state.fails.length === 5) {
          return {
            ...state,
            abecedario: newABC,
            text: newText,
            fails: [...state.fails, ''],
            derrota: true,
          };
        } else {
          return {
            ...state,
            abecedario: newABC,
            text: newText,
            fails: [...state.fails, ''],
          };
        }
      } else {
        let victoria = true;

        newText.map(item => {
          if (item.status === false) {
            return (victoria = false);
          }
        });
        if (victoria) {
          return {
            ...state,
            abecedario: newABC,
            text: newText,
            victoria: true,
          };
        } else {
          return {
            ...state,
            abecedario: newABC,
            text: newText,
          };
        }
      }

    case actions.setWord:
      let palabra = action.payload;
      let newPalabra = palabra.split('');
      let text = newPalabra.map(item => {
        return {
          status: false,
          letter: item,
        };
      });
      return {
        ...state,
        text,
      };
    case actions.setFailt:
      return {
        fails: [...state.fails, ''],
      };
    case actions.resetAll:
      let xd = state.abecedario.map((item, idx) => {
        return {
          ...item,
          status: true,
        };
      });
      return {
        ...initialState,
        abecedario: xd,
      };
    default:
      return state;
  }
};
