import empty from '../assets/empty_news.jpeg'

const LatestNewsBox = ({ data }) => {
  return (
    <div className="m-1 mx-2 border border-gray-400 rounded-lg flex overflow-hidden shadow-md cursor-pointer transition duration-200 hover:scale-105 ease-out ">
      {data.image_url ? (
        <img src={data.image_url} width={70} height={70} />
      ) : (
        <img src={empty} width={70} height={70}/>
      )}

      <p className="p-1 tracking-tighter leading-normal line-clamp-2">{data.title}</p>
    </div>
  );
};

export default LatestNewsBox;
