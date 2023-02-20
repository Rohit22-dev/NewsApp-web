import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import DetailedNews from "./DetailedNews";
import Latest from "./Latest";
import Navbar from "./Navbar";
import News from "./News";

const Home = () => {
  const { Data } = useContext(UserContext);
  const [Daata, setdata] = useState(null);

  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=28fcd7cc4ca447d4ba11db91d8982618&category=general`;

  useEffect(() => {
    const func = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setdata(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    func();
    console.log(Daata);
  }, []);
  return (
    <div className="flex-col flex-1 bg-[#ffe8d7] relative overflow-hidden">
      <Navbar />
      <marquee
        behavior="scroll"
        scrollamount="10"
        direction="left"
        width="100%"
        className="bg-rose-500 text-white"
      >
        {Daata ? Daata.articles[0].title : "----"}
      </marquee>
      <div className="sm:flex h-[85%] ">
        {Data.newsExpand ? <DetailedNews /> : <News />}
        <Latest />
      </div>
    </div>
  );
};

export default Home;
