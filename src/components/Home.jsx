import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import DetailedNews from "./DetailedNews";
import Dropdown_Nav from "./Dropdown_Nav";
import Latest from "./Latest";
import Navbar from "./Navbar";
import News from "./News";

const Home = () => {
  const { Data } = useContext(UserContext);
  const [Daata, setdata] = useState(null);

  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d41eaf42f9304394a5a2143e787e40ab&category=general`;

  useEffect(() => {
    const func = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => setdata(data));
      } catch (error) {
        console.log("hello", error.message);
      }
    };
    func();
    // console.log(Daata);
  }, []);
  return (
    <div className="flex-col flex-1 bg-[#ffe8d7] relative overflow-hidden">
      <Navbar />
      {/* <Dropdown_Nav /> */}
      <marquee
        behavior="scroll"
        scrollamount="10"
        direction="left"
        width="100%"
        className="bg-[#c21636] text-white"
      >
        {Daata
          ? Daata.articles[0].title
          : "Waiting for data....  | if the problem is for long time check network connection or contact the owner."}
      </marquee>
      <div className="flex h-[85%] ">
        {Data.newsExpand ? <DetailedNews /> : <News />}
        <Latest />
      </div>
    </div>
  );
};

export default Home;
