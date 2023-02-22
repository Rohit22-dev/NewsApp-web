import { useContext } from "react";
import { UserContext } from "../App";
import journalist from "../assets/journalist.png";
import Clock from "./Clock";

const Sidebar = () => {
  const { Data, setData } = useContext(UserContext);

  const handleClick = () => {
    setData({
      ...Data,
      newsExpand: false,
      search: "",
      givenOptionsClicked: false,
    });
  };
  return (
    <div className="hidden md:flex flex-col flex-[0.2] bg-[#042D29] text-neutral-400 items-center py-3 ">
      <button
        className="font-bold text-2xl underline flex items-center text-[#c21636]"
        onClick={() => handleClick()}
      >
        NewsApp
        <img src={journalist} />
      </button>

      <div className=" m-5  border-spacing-1 p-2 flex flex-col gap-5 md:font-extrabold text-yellow-50 ">
        {[
          "Business",
          "Entertainment",
          "Health",
          "Science",
          "Sports",
          "Technology",
          "General",
        ].map((item, i) => (
          <button
            key={i}
            className=" hover:text-red-500  focus:text-red-500 cursor-pointer self-start"
            onClick={() => {
              setData({
                ...Data,
                lsearch: item,
                givenOptionsClicked: true,
                search: "",
              });
              console.log(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div className="absolute bottom-20 left-50 hidden scale-75 lg:block ">
        <Clock />
      </div>

      <p className="mt-auto mx-2 text-sm font-semibold">
        In collaboration🤝 of{" "}
        <a
          className="italic font-bold text-amber-600"
          href="https://github.com/Rohit22-dev"
        >
          Octivion
        </a>{" "}
        and{" "}
        <a
          className="italic font-bold text-amber-600"
          href="https://github.com/nchandra12"
        >
          CrypticCode
        </a>
        .
      </p>
    </div>
  );
};

export default Sidebar;
