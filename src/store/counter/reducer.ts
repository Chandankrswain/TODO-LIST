import { COUNTERACTIONS } from "./action";

const counterDefaultState = 0;

export function counterReducer(state = counterDefaultState, action: any) {
  switch (action.type) {
    case COUNTERACTIONS.INCREMENT_COUNTER:
      return state + 1;

    case COUNTERACTIONS.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
