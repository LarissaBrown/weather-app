import React, { useEffect } from "react";
import spin from "./spin.svg";
import WeatherInfo from "./WeatherInfo";
// import Bargraph from "../components/Bargraph";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../redux/actions'
import { getWeather } from '../redux/actions'

const mapStateToProps = function(state) {
  
  return {
    loaded: state.loaded,
    weather: state.weather,
    fiveDayData: state.fiveDayData,
    _players: state._players


  }
}

const mapDispatchToProps = function (dispatch) {
  
  return bindActionCreators({
    getWeather: actionCreators.getWeather,
    loadDataSuccess: actionCreators.loadDataSuccess
  }, dispatch)
}



function Loading(props) {


  const dispatch = useDispatch()
  // const {loaded, _players, weather, getWeather, loadDataSuccess, fiveDayData} = props
  // console.log(props)

  const  _players  = useSelector(state => state._players)
  const weather = useSelector(state => state.weather)
  const fiveDayData = useSelector(state => state.fiveDayData)
  const loaded = useSelector(state => state.loaded)


useEffect(() => {

!loaded && dispatch(getWeather())

},[dispatch,loaded])


 
  return (
    <>
  
      {loaded
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

        <Carousel  _players={_players} fiveDayData={fiveDayData} weather={weather}loaded={loaded}/> 

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




export default connect(mapStateToProps, mapDispatchToProps)(Loading)

