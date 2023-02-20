import React from "react";
import Latest from "./Latest";
import Navbar from "./Navbar";
import News from "./News";

const Home = () => {
  return (
    <div className="flex-col flex-1 bg-[#ffe8d7] relative">
      <Navbar />
      <div className="sm:flex h-[85%] ">
        <News />
        <Latest />
      </div>
    </div>
  );
};

export default Home;
