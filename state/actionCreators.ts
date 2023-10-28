import { Action } from "./index"
import { actionTypes } from "./actionTypes"
import { Dispatch } from "redux"


export const depositMoney=(amount:number)=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:actionTypes.DEPOSIT,
            payload:amount
        })
    }
}
export const withdrawMoney=(amount:number)=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:actionTypes.WITHDRAW,
            payload:amount
        })
    }
}
export const bankruptMoney=()=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:actionTypes.BANKRUPT,
            
        })
    }
}