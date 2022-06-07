import React from "react";
import CountryWiseCase from "./Component/CountryWiseCase/CountryWiseCase";
import StateWiseCase from "./Component/IndiaStateWiseCase/StateWiseCase";
import Navbar from "./Component/Navbar/Navbar";

import {
  Routes,
  Route
} from "react-router-dom";
import Globle from "./Component/Globle/Globle"


function App() {
  return (
    <div>
      <Navbar />
      <Globle/>

      <Routes>
        <Route exact path="/" element={<StateWiseCase />} />
        <Route path="StateWiseCase" element={<StateWiseCase />} />
        <Route path="CountryWiseCase" element={<CountryWiseCase />} />
      </Routes>


    </div>
  );
}

export default App;
