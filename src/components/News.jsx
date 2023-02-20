import React, { useContext } from "react";
import { UserContext } from "../App";
import NewsCard from "./NewsCard";

const News = () => {
  const { news } = useContext(UserContext);
  return (
    <div className="flex flex-1 lg:flex-[0.7] justify-center items-start xs:ml-3 p-2 overflow-y-scroll scroll-hide">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-5 ">
        {news && news.map((item, i) => <NewsCard data={item} key={i} />)}
      </div>
    </div>
  );
};

export default News;
