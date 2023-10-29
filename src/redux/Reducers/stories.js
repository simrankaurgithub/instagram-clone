import { Types } from "../../constants/ActionTypes";

const initialState = {
    stories: []
}

export const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_STORIES:
            return {
                ...state,
                stories: action.payload
            }
        default:
            return state;
    }
} 