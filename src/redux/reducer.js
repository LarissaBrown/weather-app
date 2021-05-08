/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  IS_CHECKED_TEMP_TOGGLE,
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_PLAYERS,
  FETCH_FIVE_DAY_DATA,
} from "../constants";

// The initial state of the App
export const initialState = {
  loaded: false,
  error: false,
  isCheckTemp: false,
  weather: [],
  fiveDayData: [],
  _players: [],
  currentWeather: {test: 'test'}
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>{
  console.log('ACTION::::', action)
  switch(action.type) {
    case GET_WEATHER_SUCCESS:
      return {...state,
      weather: [...state.weather, action.payload]
      }
    case FETCH_FIVE_DAY_DATA:
      return {...state,
      fiveDayData: [...state.fiveDayData, action.payload]
      }
    case LOAD_DATA_SUCCESS:
      return {...state,
      loaded: !state.loaded
      } 
    default:
      return  state;
  }
}
  // produce(state, (draft) => {
    // switch (action.type) {
      // case LOAD_DATA:
        // draft.currentWeather = {
        // loaded: true,
        // error: false,
        // weather: action.weather,
        // fiveDayData: action.fiveDayData,
        // _players: action._players,
        // }
        // break;
        // 
      // case GET_WEATHER:
        // draft.loaded = true;
        // draft.error = false;
        // draft.weather = action.weather;
        // weather: [...weather, action.paylod]
        // break;
// 
      // case FETCH_FIVE_DAY_DATA:
        // draft.loaded = true;
        // draft.error = false;
        // draft.fiveDayData = action.fiveDayData;
        // break;
// 
      // case GET_PLAYERS:
        // draft.loaded = true;
        // draft.error = false;
        // draft._players = action._players;
        // break;
// 
      // case IS_CHECKED_TEMP_TOGGLE:
        // draft.isCheckedTemp = !state;
        // break;
// 
      // case LOAD_DATA_SUCCESS:
        // draft.userData.repositories = action.repos;
        // draft.loaded = false;
        // draft.currentWeather = action.currentWeather;
        // break;
// 
      // case LOAD_DATA_ERROR:
        // draft.error = action.error;
        // draft.loaded = false;
        // break;
    // }
  // });

export default globalReducer;
