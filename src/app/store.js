import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
/**
 * Combine all reducers in this file and export the combined reducers.
 */

 import { combineReducers } from 'redux';

 import globalReducer from '../redux/reducer';

 
 /**
  * Merges the main reducer with the router state and dynamically injected reducers
  */

   const rootReducer = combineReducers({
     global: globalReducer,
     
   });
 
   


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancer)

console.log('Initial State: ', store.getState(global))













    




