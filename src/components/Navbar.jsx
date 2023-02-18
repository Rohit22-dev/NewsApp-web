import { FaHamburger } from "react-icons/fa";
import moment from "moment";

const Navbar = () => {
  return (
    <div className="flex w-full mx-auto gap-3 md:bg-transparent bg-[#042D29] justify-around py-5">
      <p className="block md:hidden font-bold text-3xl underline text-gray-400">
        NewsApp
      </p>
      <div className="space-x-2">
        <input
          placeholder="Search..."
          className="h-fit p-2 rounded-lg bg-transparent shadow-neutral-400 shadow-inner outline-none no-underline font-bold"
        />
        <button className="h-fit p-2 rounded-lg bg-transparent shadow-neutral-400 shadow-inner">
          <p className=" hover:scale-150 ease-in-out duration-200">🔍</p>
        </button>
      </div>
        <button className="h-fit p-2.5 rounded-lg bg-transparent shadow-neutral-400 shadow-inner md:hidden">
          <FaHamburger
            color="rgb(156,163,175)"
            size={20}
            className="relative hover:scale-125 ease-in-out duration-200 "
          />
        </button>

        
        <div>
          <b>{moment().format('Do MMM YYYY')}</b>
          <br></br>
          <b>{moment().format(' h:mm:ss a')}</b>
        </div>
    </div>
  );
};

export default Navbar;
