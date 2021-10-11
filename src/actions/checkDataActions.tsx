import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ICheckDataState } from '../reducers/checkDataReducer';
 
export enum CheckActionTypes {
    CheckData = 'CheckData', 
    Emails = 'Email'
} 

export interface ICheckDataAction {
    type: CheckActionTypes.CheckData;  
    checkData: [];
}
 
export interface IEmailAction {
    type: CheckActionTypes.Emails;  
    emails: [];
}

export type CheckDataActions = ICheckDataAction | IEmailAction; 
 
export const CheckAction: ActionCreator<ThunkAction<any, ICheckDataState, null, ICheckDataAction>> = (checkData: []) => 
    (dispatch: Dispatch) => dispatch({type: CheckActionTypes.CheckData, checkData: checkData}) 
 
export const EmailAction: ActionCreator<ThunkAction<any, ICheckDataState, null, IEmailAction>> = (emails: []) => 
    (dispatch: Dispatch) => dispatch({type: CheckActionTypes.Emails, emails: emails}) 