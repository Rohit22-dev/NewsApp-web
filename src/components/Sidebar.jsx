import journalist from "../assets/journalist.png"

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col flex-[0.25] bg-[#042D29] text-neutral-400 items-center py-3 ">
      <p className="font-bold text-2xl underline flex items-center text-[#c21636]">NewsApp<img src={journalist}/></p>

      <div className=" m-5  border-spacing-1 p-2 flex flex-col gap-5 md:font-extrabold text-yellow-50 ">
        {[
          "Business",
          "Entertainment",
          "Environment",
          "Food",
          "Health",
          "Politics",
          "Science",
          "Sports",
          "Technology",
          "Top",
          "World",
        ].map((item) => (
          <button className=" hover:text-red-500  focus:text-red-500 cursor-pointer self-start">
            {item}
          </button>
        ))}
      </div>
      <p className="mt-auto text-sm font-semibold mx-2">
        In collaboration🤝 of{" "}
        <a
          href="https://github.com/Rohit22-dev"
          className="font-bold italic text-teal-600 cursor-pointer"
        >
          Octivion
        </a>{" "}
        and{" "}
        <span className="font-bold italic text-teal-600 cursor-pointer">
          CrypticCode
        </span>
        .
      </p>
    </div>
  );
};

export default Sidebar;
