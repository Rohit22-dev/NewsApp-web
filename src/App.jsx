import React, { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const UserContext = createContext();
const App = () => {
  const [news, setNews] = useState(null);
  const [search, setSearch] = useState("cars");
  const [lsearch, setLsearch] = useState("science");
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=28fcd7cc4ca447d4ba11db91d8982618`;
  useEffect(() => {
    const func = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setNews(data.articles));
      } catch (error) {
        console.log(error);
      }
    };
    func();
    // console.log(search, url);
  }, [search]);
  return (
    <UserContext.Provider
      value={{ news, search, setSearch, lsearch, setLsearch }}
    >
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
