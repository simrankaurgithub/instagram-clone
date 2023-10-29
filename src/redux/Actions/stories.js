import { Types } from "../../constants/ActionTypes";
import axios from "axios";

export const getStories = () => {
    return dispatch => {
        axios.get("http://localhost:3001/stories")
            .then((posRes) => {
                // dispatch({type: Types.GET_STORIES, payload : posRes.data})
            })
            .catch((errRes) => { console.log(errRes) })
    }
} 