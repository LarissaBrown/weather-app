
/**
 * The global state selectors
 */

//  import { createSelector } from 'reselect';
//  import { initialState } from './reducer';
 
//  const selectGlobal = state => state.global || initialState;
 
//  const selectRouter = state => state.router;
 
//  const makeSelectCurrentWeather = () =>
//    createSelector(
//      selectGlobal,
//      globalState => globalState.currentWeather,
//    );
//  const makeSelectWeather = () => 
//     createSelector(
//       selectGlobal, 
//       globalState => globalState.weather,
//     )
//  const makeSelectLoaded = () =>
//    createSelector(
//      selectGlobal,
//      globalState => globalState.loaded,
//    );
 
//  const makeSelectError = () =>
//    createSelector(
//      selectGlobal,
//      globalState => globalState.error,
//    );
 
//  const makeSelectFiveDayData = () =>
//    createSelector(
//      selectGlobal,
//      globalState => globalState.fiveDayData,
//    );

//    const makeSelect_Players = () =>
//    createSelector(
//      selectGlobal,
//      globalState => globalState._players,
//    );
  
 
//  const makeSelectLocation = () =>
//    createSelector(
//      selectRouter,
//      routerState => routerState.location,
//    );
 
//  export {
//    selectGlobal,
//    makeSelectCurrentWeather,
//    makeSelectWeather,
//    makeSelectFiveDayData,
//    makeSelectLoaded,
//    makeSelectError,
//    makeSelect_Players,
//    makeSelectLocation,
//  };