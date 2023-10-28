import { actionTypes } from "./actionTypes"
interface depositAction{
    type:actionTypes.DEPOSIT,
    payload:number
}
interface withdrawAction{
    type:actionTypes.WITHDRAW,
    payload:number
}
interface bankruptAction{
    type:actionTypes.BANKRUPT
}
 export type Action=depositAction|withdrawAction|bankruptAction

