/*
 * redux/
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';
export const FETCH_FIVE_DAY_DATA = 'FETCH_FIVE_DAY_DATA';
export const GET_PLAYERS = 'GET_PLAYERS';
export const IS_CHECKED_TEMP_TOGGLE = 'IS_CHECKED_TEMP_TOGGLE';
export const GET_WEATHER = 'GET_WEATHER'
