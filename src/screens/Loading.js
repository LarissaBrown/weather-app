import React, { useEffect } from "react";
import spin from "./spin.svg";
import WeatherInfo from "./WeatherInfo";
// import Bargraph from "../components/Bargraph";
import { connect } from 'react-redux'
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from 'react-redux';
import { loadData } from '../redux/actions'
import {
  makeSelectWeather,
  makeSelectFiveDayData,
  makeSelectLoaded,
  makeSelect_Players,
} from "../redux/selectors"







function Loading() {
  
  const weather = makeSelectWeather(state => state.weather)
  const fiveDayData = makeSelectFiveDayData(state => state.fiveDayData)
  const _players = makeSelect_Players(state => state._players)
  const loaded = makeSelectLoaded(state => state.loaded)

  const dispatch = useDispatch()
 
  useEffect(() => {
   
    !loaded && dispatch(loadData(weather, loaded, fiveDayData, _players));
      
    
      
  }, [loaded, weather, fiveDayData, _players, dispatch]);


 
  return (
    <>
  
      {!loaded
      ? 
      (
        <Grid>
          <p style={{ color: "white", fontSize: "7vw" }}>Weather App</p>
          <img src={spin} alt="spin" className="App-spin" />
          <p style={{ color: "white", fontSize: "4vw" }}>Loading ...</p>
        </Grid>
      ) 
      : 
      (
        
        <Grid
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
         
          <Grid container style={{ position: "relative", height: "auto" }}>
            
            <WeatherInfo />
          </Grid>

          <Carousel /> 

          <Grid
            container
            style={{ position: "relative", height: "100px" }}
          ></Grid>
          {/* <Grid container style={{ position: "relative", height: "auto" }}>
            <Bargraph />
          </Grid> */}
        </Grid>
      )}
    </>
  );
}

const mapStateToProps = function(state) {
  
  return {
    loading: state.loading,

  }
}
export default connect(mapStateToProps)
  (Loading)

// const weather = selectGlobal(state => state.weather)
// // const _localItems = selectGlobal(state => state._localItems)
// const loaded = selectGlobal(state => state.isLoaded)
// const fiveDayData = selectGlobal(state => state.fiveDayData)
// const eightTimes = selectGlobal(state => state.eightTimesData)

// const dispatch = useDispatch()

// useEffect(() => {

//     if(weather && fiveDayData){
//         dispatch(fetchWeather())
//         return
//     }

//     if(weather !== []){
//         dispatch(isLoaded())
//         dispatch(getPlayers())
//         dispatch(eightTimesData())
//         return
//     }

// }, [dispatch, fiveDayData, weather]
// )


