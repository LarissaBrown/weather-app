import axios from "axios";
import { v4 } from "uuid";

import {
  LOAD_DATA,
  FETCH_FIVE_DAY_DATA,
  GET_PLAYERS,
  GET_WEATHER,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
  IS_CHECKED_TEMP_TOGGLE,
} from "../constants";

export const isCheckedTempToggle = (isCheckedTemp) => {

  console.log("isCheckedTemp", isCheckedTemp)
  return {
    type: IS_CHECKED_TEMP_TOGGLE,
    payload: !isCheckedTemp,
  };
};

export const getWeather = async () => {
  let res = await axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
  );
  let weather = res.data.list;
  console.log("weather results", weather)
  return {
    type: GET_WEATHER,
    weather: weather,
  };
};

export const fetchFiveDayData = (weather) => {
  const fiveDayData = weather.map((item, index) => {
    //first item
    const currentDate = item.dt_txt.split(" ")[0];
    //next item
    let nextDate;
    if (weather[index + 1] <= weather[weather.length]) {
      nextDate = weather[index + 1].dt_txt.split(" ")[0];
    }
    //  console.log(weather[index + 1].dt_txt.split(' ')[0])
    //  console.log(item.dt_txt.split(' ')[0])

    if (fiveDayData.length <= 4 && currentDate !== nextDate) {
      return item 
    } 
    console.log("fiveDayData", fiveDayData)
    return {
      type: FETCH_FIVE_DAY_DATA,
      fiveDayData: fiveDayData,
    };
  });
};

export const getPlayers = (fiveDayData) => {
  return async (dispatch) => {
    
  try{ 
   const results = fiveDayData.map((_player) => {
    let key = v4();
    let celcius = Math.floor(_player.main.temp - 273.15);
    let fahrenheit = Math.floor(((_player.main.temp - 273.15) * 9) / 5 + 32);
    let date = _player.dt_txt.split(" ")[0];
    let desc = _player.weather[0].main;
    // let image = require(`"./reducers/assets/${_player.weather[0].main}_Munich.jpg"`)

    return {
      player: {
        key: key,
        celcius: celcius,
        fahrenheit: fahrenheit,
        date: date,
        desc: desc,
        // image: image
      },
    };
  })

  console.log("_players results", results)
  return {
    type: GET_PLAYERS,
    _players: results,
  };
} catch {
  dispatch({type: LOAD_DATA_ERROR})
}
};
}

export function loaded(_players) {
  console.log("loaded", loaded)
  return {
    type: LOAD_DATA_SUCCESS,
    loaded: false,
  };
}

export function loadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}

export const loadData = (weather, fiveDayData, _players) => {
  // console.log(weather, loaded, fiveDayData, _players, error);
  return async (dispatch) => {
    try {
      dispatch({type: GET_WEATHER, weather: weather});
      
      return {
        type: LOAD_DATA,
        weather: weather,
      };
    } catch {
      dispatch({type: LOAD_DATA_ERROR});
    }
    try {
      // console.log(weather, loaded, fiveDayData, _players, error);
     
     dispatch({type: FETCH_FIVE_DAY_DATA, fiveDayData});
     
     return {
      type: LOAD_DATA,
      fiveDayData,
    };
    } catch {
      dispatch({type: LOAD_DATA_ERROR});
    }
    try {
      // console.log(weather, loaded, fiveDayData, _players, error);
     
     dispatch({type: GET_PLAYERS, _players});
     
     return {
      type: LOAD_DATA,
      _players
    };
    } catch {
      dispatch({type: LOAD_DATA_ERROR});
    }
    try {
      // console.log(weather, loaded, fiveDayData, _players, error);
      dispatch({type: LOAD_DATA_SUCCESS, loaded: true});

    } catch {
      dispatch({type: LOAD_DATA_ERROR});
    }
  };
};
// export const loadEightTimesData = (oneDayWeatherData) => {
//   const eightTimesData = oneDayWeatherData.map((item) => {
//     if (eightTimesData === []) {
//       eightTimesData.push(item.dt_txt.split(" ")[0]);
//     } else if (eightTimesData[0] === item.dt_txt.split(" ")[0]) {
//       eightTimesData.push(item.dt_txt.split(" ")[0]);
//     } else if (eightTimesData[0] !== item.dt_txt.split(" ")[0]) {
//       return eightTimesData;
//     }
//     return eightTimesData;
//   });

//   return {
//     type: LOAD_EIGHT_TIMES_DATA,
//     payload: { eightTimesData },
//   };
// };

// let threeHourData = [];

// export function graphDateClicked(i, weather) {
//   weather.map((cardItem, index) => {
//     if (i === index || index < i + 7) {
//       threeHourData.push(cardItem);
//     }
//     if (threeHourData.length === 8) {
//       threeHourData = [...threeHourData, cardItem];
//       console.log("threeHourDataLength", threeHourData.length);
//     }
//     return threeHourData;
//   });
//   return {
//     type: GRAPH_DATE_CLICKED,
//     payload: { threeHourData },
//   };
// }