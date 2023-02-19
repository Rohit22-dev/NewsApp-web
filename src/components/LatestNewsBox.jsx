import empty from "../assets/empty_news.jpeg";

const LatestNewsBox = ({ data }) => {
  return (
    <div className="border-2 border-red-700 bg-red-800  w-full mb-1 h-20 rounded-lg flex gap-1 cursor-pointer hover:shadow-md hover:shadow-red-600 hover:scale-105">
        <img src={data.urlToImage} className="h-full w-20 object-fill rounded-md"/>
        <p className="text-ellipsis text-sm overflow-hidden leading-3 p-1 tracking-tight text-gray-200">{data.title}</p>
    </div>
  );
};

export default LatestNewsBox;
