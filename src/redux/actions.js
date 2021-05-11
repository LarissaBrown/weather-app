import axios from "axios";
import { v4 } from "uuid";



import {
  // LOAD_DATA,
  FETCH_FIVE_DAY_DATA,
  GET_PLAYERS,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
  IS_CHECKED_TEMP_TOGGLE,
  GET_WEATHER_SUCCESS,
  GET_WEATHER,
} from "../constants";



export const isCheckedTempToggle = (isCheckedTemp) => {

  console.log("isCheckedTemp", isCheckedTemp)
  return {
    type: IS_CHECKED_TEMP_TOGGLE,
    payload: !isCheckedTemp,
  };
};
export const getWeatherAction = (weather) => {

  return {
    type: GET_WEATHER_SUCCESS,
    payload: weather
  }
}


export function loadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}



export const fetchFiveDayData = (weather) => {
  const arr = weather
  console.log("arr", arr)
  const fiveDayData = []
                                                                                
  weather.forEach((item, index) => {
   
    if(arr[index+1] !== undefined ){
    const currentDate = item.dt_txt.split(" ")[0]
    const nextDate = arr[index+1].dt_txt.split(" ")[0];
  
    if(fiveDayData.length <= 5) {
      currentDate !== nextDate && fiveDayData.push(item)
    }
  
  }else if(fiveDayData.length === 4){
  
    fiveDayData.push(item)
  }

})
  console.log('fiveDayData', fiveDayData)
 
  return {
    type: FETCH_FIVE_DAY_DATA,
    payload: fiveDayData,
  }
  
};


export const getPlayers = (fiveDayData) => {

  let arr = fiveDayData.payload
  try{ 
  const _players = arr.map(_player => {

    const key = v4();
    const celcius = Math.floor(_player.main.temp - 273.15);
    const fahrenheit = Math.floor(((_player.main.temp - 273.15) * 9) / 5 + 32);
    const date = _player.dt_txt.split(" ")[0];
    const desc = _player.weather[0].main;
    // let image = require(`"./reducers/assets/${_player.weather[0].main}_Munich.jpg"`)

   return   {
      player: {
        key: key,
        celcius: celcius,
        fahrenheit: fahrenheit,
        date: date,
        desc: desc,
        // image: image
      },
    }
   
  })

  console.log("_players results", _players)

  
  return {
    type: GET_PLAYERS,
    payload: _players,

  };
} catch (error){
 console.error(error)
}
};


export const getWeather = () => {

  return async (dispatch) => {
   
      let res = await axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
      );
      const weather = res.data.list
      console.log("axios", weather)
      dispatch({
        type: GET_WEATHER,
        payload: weather
      })
 try{
   const fiveDayData = fetchFiveDayData(weather)
  dispatch({
    type: FETCH_FIVE_DAY_DATA,
    payload: fiveDayData})

  const _players = getPlayers(fiveDayData)
  dispatch({
    type: GET_PLAYERS,
    payload: _players})

 }catch(error){
  console.error(error)
 }
  }


  }



export function loadDataSuccess(_players) {
  
  return {
    type: LOAD_DATA_SUCCESS,
    payload: false,
  };
}



// export const loadData = (weather, fiveDayData, _players) => {
//   // console.log(weather, loaded, fiveDayData, _players, error);
//   return async (dispatch) => {
//     try {
//       dispatch({type: GET_WEATHER, weather: weather});
      
     
//     } catch {
//       dispatch({type: LOAD_DATA_ERROR});
//     }
//     try {
//       // console.log(weather, loaded, fiveDayData, _players, error);
     
//      dispatch({type: FETCH_FIVE_DAY_DATA, fiveDayData});
     
   
    
//     } catch {
//       dispatch({type: LOAD_DATA_ERROR});
//     }
//     try {
//       // console.log(weather, loaded, fiveDayData, _players, error);
     
//      dispatch({type: GET_PLAYERS, _players});
     
  
//     } catch {
//       dispatch({type: LOAD_DATA_ERROR});
//     }
//     try {
//       // console.log(weather, loaded, fiveDayData, _players, error);
//       dispatch({type: LOAD_DATA_SUCCESS, loaded: true});

//     } catch {
//       dispatch({type: LOAD_DATA_ERROR});
//     }
  
//   return {
//     type: LOAD_DATA,
//     weather,
//     fiveDayData,
//     _players,
    

//   };
//   }
// };
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
// 