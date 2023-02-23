import React, { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const UserContext = createContext();
const App = () => {
  const [Data, setData] = useState({
    news: null,
    search: "",
    lsearch: "",
    givenOptionsClicked: false,
    newsExpand: false,
    detailedNews: null,
  });

  useEffect(() => {
    const endpoint =
      Data.search !== ""
        ? `everything?q=${Data.search}&`
        : Data.givenOptionsClicked
        ? `top-headlines?country=in&category=${Data.lsearch}&`
        : `top-headlines?country=in&`;

    // ? `top-headlines?country=in&`
    const url = `https://newsapi.org/v2/${endpoint}apiKey=28fcd7cc4ca447d4ba11db91d8982618`;
    const func = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setData({ ...Data, news: data.articles }));
      } catch (error) {
        console.log("hello", error);
      }
    };
    func();
    // console.log(endpoint, "dfghj");
  }, [Data.search, Data.lsearch, Data.givenOptionsClicked]);
  return (
    <UserContext.Provider value={{ Data, setData }}>
      <div className="flex h-screen ">
        <Sidebar />
        <Home />
      </div>
    </UserContext.Provider>
  );
};

export { UserContext };
export default App;
