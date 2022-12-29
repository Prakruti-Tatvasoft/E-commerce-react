import { SAVE_MEMBER } from "../const";

const memberReducer = (state={}, action) => {
    switch(action.type) {
        case SAVE_MEMBER:
            return {...action.payload}
        default:
            return state
    }
}

export { memberReducer}
