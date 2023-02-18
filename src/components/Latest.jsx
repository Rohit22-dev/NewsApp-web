import React, { useEffect, useState } from "react";
import LatestNewsBox from "./LatestNewsBox";

const Latest = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_15166dda739eec2fd13572edf999e308802d8&language=en"
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
    <div className="hidden md:flex flex-[0.4] lg:flex-[0.3] justify-center items-center ">
      <div className="rounded-lg shadow-inner shadow-neutral-400 h-5/6 w-11/12 flex flex-col items-center justify-start py-1 px-2 overflow-y-scroll scroll-hide">
        <span className="text-xl font-bold my-4 tracking-widest">Latest News</span>
        {Data && Data.results.map((item) => (
          <LatestNewsBox data={item} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
