import * as React from "react"; 
import { Provider } from 'react-redux' 
import { PersistGate } from 'redux-persist/integration/react'; 
import { persistStore, persistReducer } from 'redux-persist';  
import Navigator from "./Navigator";
import configureStore from './src/store/store'; 

const store = configureStore(); 
const persistor = persistStore(store);  

const App = (props) => {  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navigator />
      </PersistGate>
    </Provider>
  ) 
};
 
export default App;
