import { userActionTypes } from "./userTypes"
const INITIAl_STATE={
    currentUser:null
}

const userReducer=(state = INITIAl_STATE ,action)=>{

    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state
    }
}
export default userReducer