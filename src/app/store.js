import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


 import { combineReducers } from 'redux';

 import reducer from '../redux/reducer';

 


   const rootReducer = combineReducers({
     reducer: reducer,
     
   });
 
   


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancer)















    




