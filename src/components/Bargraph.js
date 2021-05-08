// import React, {useEffect} from "react";
// import { v4 } from "uuid";
// import Grid from "@material-ui/core/Grid";
// // import { connect } from "react-redux";
// // import {
// //   getItemsByVisibilityFilter,
// //   getItems,
// // } from "../redux/reducers/selectors";
// // import { VISIBILITY_FILTERS } from "../constants";
// import { useSelector, useDispatch } from "react-redux";
// import { loadEightTimesData } from "../redux/AppActions";


// export default function Bargraph() {
//   const eightTimesData = useSelector((state) => state.eightTimesData);
//   const weather = useSelector ((state) => state.weather)
//   const dispatch = useDispatch();

//   console.log("eightTimesData", eightTimesData);


//   useEffect(() => {
//     return async function (dispatch){
//     loadEightTimesData(weather)
//     console.log("eightTimesData", eightTimesData)
//     }
//   }, [weather, eightTimesData, dispatch])



//   return (
//     <Grid container className="bargraph">
//       <h1
//         style={{
//           position: "absolute",
//           top: "10px",
//           color: "white",
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         Temperature Throughout the Day
//       </h1>
//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "50px" }}
//           key={v4()}
//           time={eightTimesData[0].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "100px" }}
//           key={v4()}
//           time={eightTimesData[1].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "80px" }}
//           key={v4()}
//           time={eightTimesData[2].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "130px" }}
//           key={v4()}
//           time={eightTimesData[3].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "90px" }}
//           key={v4()}
//           time={eightTimesData[4].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "150px" }}
//           key={v4()}
//           time={eightTimesData[5].dt_txt.split(' ')[0]}
//         ></div>
//       </div>

//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "60px" }}
//           key={v4()}
//           time={eightTimesData[6].dt_txt.split(' ')[0]}
//         ></div>
//       </div>
//       <div className="bar-container">
//         <div
//           className="bar"
//           style={{ height: "60px" }}
//           key={v4()}
//           time={eightTimesData[7].dt_txt.split(' ')[0]}
//         ></div>
//       </div>
//     </Grid>
//   );
// }


