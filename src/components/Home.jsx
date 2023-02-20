import { useContext } from "react";
import { UserContext } from "../App";
import DetailedNews from "./DetailedNews";
import Latest from "./Latest";
import Navbar from "./Navbar";
import News from "./News";

const Home = () => {
  const { Data } = useContext(UserContext);
  return (
    <div className="flex-col flex-1 bg-[#ffe8d7] relative">
      <Navbar />
      <div className="sm:flex h-[85%] ">
        {Data.newsExpand ? <DetailedNews /> : <News />}
        <Latest />
      </div>
    </div>
  );
};

export default Home;
