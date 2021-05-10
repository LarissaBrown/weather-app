import React, { useEffect } from "react";
import spin from "./spin.svg";
import WeatherInfo from "./WeatherInfo";
// import Bargraph from "../components/Bargraph";
// import { connect } from 'react-redux'
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from 'react-redux';
import { getWeather , loadDataSuccess } from '../redux/actions'








function Loading() {



  const  _players  = useSelector(state => state._players)
  const weather = useSelector(state => state.weather)
  const fiveDayData = useSelector(state => state.fiveDayData)
  const loaded = useSelector(state => state.loaded)
  const dispatch = useDispatch()



useEffect(() => {

 !loadDataSuccess() && dispatch(getWeather(weather, fiveDayData, _players))
 console.log(_players)

}, [dispatch, _players, weather, fiveDayData])




 
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

export default Loading

// const mapStateToProps = function(state) {
  
//   return {
//     loaded: state.loaded,

//   }
// }
// export default connect(mapStateToProps)
//   (Loading)

