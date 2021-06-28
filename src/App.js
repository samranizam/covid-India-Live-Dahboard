import "./App.css";

import Covidapi from "./component/Covidapi.js";
import Perstate from "./component/state/Perstate";
//import { useEffect, useState } from "react";
//import axios from "axios"
const App = () => {
  return (
    <>
      {" "}
      <Covidapi />
      <Perstate />
    </>
  );
};
export default App;
