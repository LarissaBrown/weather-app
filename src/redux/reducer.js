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
  GET_PLAYERS,
  FETCH_FIVE_DAY_DATA,
} from "../constants";

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  isCheckTemp: false,
  weather: [],
  fiveDayData: [],
  _players: [],
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        draft.weather = action.weather;
        draft.fiveDayData = action.fiveDayData;
        draft._players = action._players;
        break;
        
      case GET_WEATHER:
        draft.loading = true;
        draft.error = false;
        draft.weather = action.weather;
        break;

      case FETCH_FIVE_DAY_DATA:
        draft.loading = true;
        draft.error = false;
        draft.fiveDayData = action.fiveDayData;
        break;

      case GET_PLAYERS:
        draft.loading = true;
        draft.error = false;
        draft._players = action._players;
        break;

      case IS_CHECKED_TEMP_TOGGLE:
        draft.isCheckedTemp = !state;
        break;

      case LOAD_DATA_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default globalReducer;
