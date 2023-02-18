import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
