import React from "react";
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";

function App() {
  return (
    <div className="App">
      <CakeView></CakeView>
      <IceCreamView></IceCreamView>
    </div>
  );
}

export default App;
