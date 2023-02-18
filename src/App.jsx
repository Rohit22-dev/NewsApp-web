import React from "react";
import Clock from "./components/Clock";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Home />
      {/* <div>clock</div>
      <div className="container">
       <Clock></Clock>
      </div> */}
      
    </div>
  );
};

export default App;
