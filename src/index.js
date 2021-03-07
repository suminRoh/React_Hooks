import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState,useEffect,useRef } from "react";
import ReactDOM from "react-dom";
-

const App=()=>{
  return(
    <div className="App" >
    </div>
  );
};


 
const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);
