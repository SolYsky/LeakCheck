import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
import {persistStore, persistReducer} from 'redux-persist'

/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
// Import reducers and state type
import { ICheckDataState, checkDataReducer } from '../reducers/checkDataReducer';  

const persistConfig = {
  key:'root',
  storage: AsyncStorage,
  blacklist:[

  ]
}
// Create an interface for the application state
export interface IAppState {
  checkDataState: ICheckDataState, 
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  checkDataState: checkDataReducer,  
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  //const store = createStore(rootReducer, undefined, applyMiddleware(thunk)); 
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    compose(
      applyMiddleware(
        thunk
      ),
      compose
    )
  );


  return store;
}