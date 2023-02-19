import React, { useEffect, useState } from "react";
import LatestNewsBox from "./LatestNewsBox";

const Latest = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=28fcd7cc4ca447d4ba11db91d8982618"
        )
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log(error);
      }
    };
    func();
    // console.log(Data.results);
  }, []);

  return (
    <div className="hidden md:flex flex-[0.4] lg:flex-[0.3] justify-center items-start ">
      <div className="rounded-lg shadow-inner shadow-neutral-400 h-[90%] w-11/12 flex flex-col items-center justify-start py-1 px-4 overflow-scroll scroll-hide gap-1">
        <div className="text-xl font-bold my-4 tracking-widest">
          Latest News
        </div>
          {Data &&
            Data.articles.map((item, i) => (
              <LatestNewsBox data={item} key={i} />
            ))}
      </div>
    </div>
  );
};

export default Latest;
