import {
    selectGlobal,
    makeSelectCurrentWeather,
    makeSelectLoading,
    makeSelectError,
    makeSelectFiveDayData,
    makeSelectLocation,
  } from '../selectors';
  
  describe('selectGlobal', () => {
    it('should select the global state', () => {
      const globalState = {};
      const mockedState = {
        global: globalState,
      };
      expect(selectGlobal(mockedState)).toEqual(globalState);
    });
  });
  
  describe('makeSelectCurrentWeather', () => {
    const currentWeatherSelector = makeSelectCurrentWeather();
    it('should select the current weather', () => {
      const weatherCard = [];
      const mockedState = {
        global: {
          currentWeather: weatherCard,
        },
      };
      expect(currentUserSelector(mockedState)).toEqual(username);
    });
  });
  
  describe('makeSelectLoading', () => {
    const loadingSelector = makeSelectLoading();
    it('should select the loading', () => {
      const loading = false;
      const mockedState = {
        global: {
          loading,
        },
      };
      expect(loadingSelector(mockedState)).toEqual(loading);
    });
  });
  
  describe('makeSelectError', () => {
    const errorSelector = makeSelectError();
    it('should select the error', () => {
      const error = 404;
      const mockedState = {
        global: {
          error,
        },
      };
      expect(errorSelector(mockedState)).toEqual(error);
    });
  });
  
  describe('makeSelectFiveDayData', () => {
    const fiveDayDataSelector = makeSelectFiveDayData();
    it('should select the repos', () => {
      const repositories = [];
      const mockedState = {
        global: {
          fiveDayData: {
            repositories,
          },
        },
      };
      expect(fiveDayDataSelector(mockedState)).toEqual(repositories);
    });
  });
  
  describe('makeSelect_Players', () => {
    const _playersSelector = makeSelect_Players();
    it('should select the repos', () => {
      const repositories = [];
      const mockedState = {
        global: {
          _players: {
            repositories,
          },
        },
      };
      expect(_playersSelector(mockedState)).toEqual(repositories);
    });
  });

  describe('makeSelectLocation', () => {
    const locationStateSelector = makeSelectLocation();
    it('should select the location', () => {
      const router = {
        location: { pathname: '/foo' },
      };
      const mockedState = {
        router,
      };
      expect(locationStateSelector(mockedState)).toEqual(router.location);
    });
  });
 
  