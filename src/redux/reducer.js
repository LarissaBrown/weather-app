/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */


import {
  LOAD_DATA_SUCCESS,
  // LOAD_DATA,
  // LOAD_DATA_ERROR,
  // IS_CHECKED_TEMP_TOGGLE,
  // GET_WEATHER,
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
 
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>{
  // console.log('ACTION::::', action)
  switch(action.type) {
    case GET_WEATHER_SUCCESS:
      return {...state,
      weather: [...state.weather, action.payload]
      }
    case FETCH_FIVE_DAY_DATA:
      return {...state,
      fiveDayData: [...state.fiveDayData, action.payload]
      }
    case GET_PLAYERS:
      return {...state,
      _players: [...state._players, action.payload]
    }
    case LOAD_DATA_SUCCESS:
      return {...state,
      loaded: !state.loaded
      } 
    default:
      return  state;
  }
}


export default reducer;
