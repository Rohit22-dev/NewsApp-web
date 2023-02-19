import React, { createContext, useEffect, useState } from "react";
import Clock from "./components/Clock";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const UserContext = createContext();
const App = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const func = async () => {
      try {
        await fetch(
          "https://newsapi.org/v2/everything?q=marvel&apiKey=28fcd7cc4ca447d4ba11db91d8982618"
        )
          .then((res) => res.json())
          .then((data) => setNews(data.articles));
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);
  return (
    <UserContext.Provider value={{ news }}>
      <div className="flex h-screen">
        <Sidebar />
        <Home />
        {/* <div>clock</div>
      <div className="container">
       <Clock></Clock>
      </div> */}
      </div>
    </UserContext.Provider>
  );
};

export { UserContext };
export default App;
