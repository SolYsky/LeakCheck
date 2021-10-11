import { Reducer } from 'redux';
import { CheckActionTypes, CheckDataActions} from '../actions/checkDataActions';
  

export interface ICheckDataState {
    checkData: []; 
    emails:[];
}

const initialFriendState: ICheckDataState = {
  checkData: null,
  emails: null
};

export const checkDataReducer: Reducer<ICheckDataState, CheckDataActions> = (
    state = initialFriendState,
    action
  ) => {
    switch (action.type) {
      case CheckActionTypes.CheckData: {
        return {
          ...state,
          checkData: action.checkData
        };
      } 
      case CheckActionTypes.Emails: {
        return {
          ...state,
          emails: action.emails
        };
      } 
      default:
        return state;
    }
  };
