import {SAVE_PRINCIPAL, SavePrincipalAction} from './save.principal.action';
import {Principal} from './model/principal.model';

export function principalReducer(state: Principal, action: SavePrincipalAction) {


  /*switch (action.type) {
    case SAVE_PRINCIPAL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }*/

  if (action.type === SAVE_PRINCIPAL) {
    return Object.assign({}, state, action.payload);
  } else {
    return state;
  }
}
