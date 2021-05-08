
/**
 * The global state selectors
 */

 import { createSelector } from 'reselect';
 import { initialState } from './reducer';
 
 const selectGlobal = state => state.global || initialState;
 
 const selectRouter = state => state.router;
 
 const makeSelectCurrentWeather = () =>
   createSelector(
     selectGlobal,
     globalState => globalState.currentWeather,
   );
 
 const makeSelectLoading = () =>
   createSelector(
     selectGlobal,
     globalState => globalState.loading,
   );
 
 const makeSelectError = () =>
   createSelector(
     selectGlobal,
     globalState => globalState.error,
   );
 
 const makeSelectFiveDayData = () =>
   createSelector(
     selectGlobal,
     globalState => globalState.fiveDayData,
   );

   const makeSelect_Players = () =>
   createSelector(
     selectGlobal,
     globalState => globalState._players,
   );
  
 
 const makeSelectLocation = () =>
   createSelector(
     selectRouter,
     routerState => routerState.location,
   );
 
 export {
   selectGlobal,
   makeSelectCurrentWeather,
   makeSelectFiveDayData,
   makeSelectLoading,
   makeSelectError,
   makeSelect_Players,
   makeSelectLocation,
 };