import empty from '../assets/empty_news.jpeg'

const LatestNewsBox = ({ data }) => {
  return (
    <div className="m-1 border border-gray-400 rounded-lg flex overflow-hidden line">
      {data.image_url ? (
        <img src={data.image_url} width={70} />
      ) : (
        <img src={empty} width={70} />
      )}

      <p className="p-1 tracking-tighter leading-normal">{data.title}</p>
    </div>
  );
};

export default LatestNewsBox;
