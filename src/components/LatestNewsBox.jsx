import empty from "../assets/empty_news.jpeg";

const LatestNewsBox = ({ data }) => {
  return (
    <div className="m-1 border border-gray-400 rounded-lg flex overflow-hidden line">
      <div className="h-80 w-80">
        {data.image_url ? <img src={data.image_url} /> : <img src={empty} className='object-cover'/>}
      </div>

      <p className="p-1 tracking-tighter leading-normal line-clamp-2">
        {data.title}
      </p>
    </div>
  );
};

export default LatestNewsBox;
