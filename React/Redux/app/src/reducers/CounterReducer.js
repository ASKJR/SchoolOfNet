import * as ActionType from '../actions/ActionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case ActionType.ON_INCREMENT:
            return state + 1;
            break;

        case ActionType.ON_DECREMENT:
            return state - 1;
            break;
        default:
            return state;
    }
}