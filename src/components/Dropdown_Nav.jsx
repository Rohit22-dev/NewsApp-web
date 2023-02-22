import { IoBusinessSharp } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../App";

const Dropdown_Nav = ({ toggle, setToggle }) => {
  const { Data, setData } = useContext(UserContext);
  const handleClick = (value) => {
    // console.log(value);
    // setToggle(!toggle);
    setData({ ...Data, lsearch: value, givenOptionsClicked: true, search: "" });
  };
  return (
    <div className="absolute glass w-full h-fit top-[5rem] z-10 flex p-5 md:hidden drop-shadow-lg pt-10 ease-in-0ut duration-500 transition">
      <ImCross
        className="absolute top-2 right-3 cursor-pointer hover:text-teal-900 hover:scale-[1.2] duration-150 ease-in-out transition-all"
        onClick={() => setToggle(!toggle)}
      />
      {[
        [<IoBusinessSharp size={24} />, "Business"],
        [<BiMoviePlay size={24} />, "Entertainment"],
        [<MdOutlineHealthAndSafety size={24} />, "Health"],
        [<MdOutlineScience size={24} />, "Science"],
        [<MdOutlineSportsCricket size={24} />, "Sports"],
        [<SiProbot size={24} />, "Technology"],
        [<IoNewspaperOutline size={24} />, "General"],
      ].map((Item, i) => (
        <button
          className="flex flex-col flex-grow items-center justify-center hover:text-rose-600 hover:scale-[1.2] focus:text-rose-500 focus:scale-[1.2] duration-150 ease-in-out transition-all"
          key={i}
          onClick={() => {
            handleClick(Item[1]);
          }}
        >
          <div>{Item[0]}</div>
          <p className="text-[10px] font-semibold">{Item[1]}</p>
        </button>
      ))}
    </div>
  );
};

export default Dropdown_Nav;
