import React from "react";
// , {useEffect} 
import TempToggle from "../components/TempToggle";
import Grid from '@material-ui/core/Grid';
// import { useSelector, useDispatch } from "react-redux";
// import { fetchFiveDayData } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  const {weather, isLoaded, fiveDayData} = state
  return {
    weather: weather,
    isLoaded: isLoaded,
    fiveDayData: fiveDayData
  }
}


function WeatherInfo() {
 
  return (
    <React.Fragment>
   
   <Grid container >
      <h1 style={{ paddingTop: "5%", color: "white" ,fontSize: "3em", width: "100%", textAlign: "center" }}>The Weather Report Munich</h1>
      <h2 style={{  color:'rgb(18, 48, 75)', padding: "40px" , fontWeight: "lighter"}}>
        “If enough people think of a thing and work hard enough at it, I guess
        it’s pretty nearly bound to happen, wind and weather permitting.” –
        Laura Ingalls Wilder
      </h2>
      <Grid container >
        <TempToggle />
      </Grid>
  
    </Grid>
    </React.Fragment>
  );
}


export default connect(mapStateToProps)
  (WeatherInfo)