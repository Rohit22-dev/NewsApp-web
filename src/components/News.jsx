import React, { useContext } from "react";
import { UserContext } from "../App";
import NewsCard from "./NewsCard";

const News = () => {
  const { news } = useContext(UserContext);
  return (
    <div className="flex flex-[0.7] justify-center items-start ml-3 p-2 overflow-y-scroll scroll-hide">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 ">
        {news && news.map((item, i) => <NewsCard data={item} key={i} />)}
      </div>
    </div>
  );
};

export default News;
