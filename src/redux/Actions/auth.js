import { Types } from "../../constants/ActionTypes";
import axios from "axios";

export const signUp = (user) => {
    return dispatch => {
        axios.post("http://localhost:3001/users",user)
            .then((posRes) => {
                console.log(posRes.data)
                // dispatch({type: Types.SIGNUP})
            })
            .catch((errRes) => { console.log(errRes) })
    }
} 