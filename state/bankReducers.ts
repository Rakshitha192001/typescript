import { actionTypes } from "./actionTypes";
import { Action } from "./index";

const initialState=0
 const bankReducers=(state:number=initialState,action:Action)=>{
    switch(action.type){
        case actionTypes.DEPOSIT:
            return state + action.payload;
        case actionTypes.WITHDRAW:
            return state - action.payload;
        case actionTypes.BANKRUPT:
            return 0;
        default:
        return state

    }

}
export default bankReducers