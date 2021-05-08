

import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.scss";
import Loading from "./screens/Loading";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue, brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: brown[100],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function App() {


 
  return (
    <ThemeProvider theme={theme}>
      <audio style={{ position: "absolute", top: 0 }} controls="controls">
        <source
          src="https://ia800101.us.archive.org/35/items/78_7151-Es-geht-alles-voruber-es-geht-alles-vorbei/7151-Es-geht-alles-voruber-es-geht-alles-vorbei.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the HTML5 Audio element.
      </audio>
      {/* <Button className="theme-button" color="primary">LightTheme</Button>
        <Button className="theme-button" color="secondary" >DarkTheme</Button> */}
      <Grid container className="App">
        <Loading />
      </Grid>
    </ThemeProvider>
  );
}
export default App;
