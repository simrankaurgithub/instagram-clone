import { Types } from "../../constants/ActionTypes";

const initialState = {
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_STORIES:
            return {
            }
        default:
            return state;
    }
} 