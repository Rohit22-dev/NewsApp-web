import { FaHamburger } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { setSearch } = useContext(UserContext);
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [location, setLocation] = useState({ latitude: 28.7, longitude: 77.1 });

  const handleClick = () => {
    setSearch(input);
    setInput("");
    console.log(input);
  };

  useEffect(() => {
    const func = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toFixed(2),
            longitude: position.coords.longitude.toFixed(2),
          });
          // const latitude = position.coords.latitude.toFixed(2);
          // const longitude = position.coords.longitude.toFixed(2);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.log(error.message);
        }
      );

      try {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=7ba1fbfc4aa2748f162f370158d1b94b`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeather(data.main.temp);
          });
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  return (
    <div className="flex w-full mx-auto gap-3 md:bg-transparent bg-[#042D29] justify-around py-5 mb-5">
      <p className="block md:hidden font-bold text-3xl underline text-gray-400">
        NewsApp
      </p>
      <div className="space-x-2 flex flex-[0.75] justify-center">
        <input
          placeholder="Search..."
          className="h-fit p-2 rounded-lg bg-transparent shadow-neutral-400 shadow-inner outline-none no-underline font-bold "
          onChange={(event) => setInput(event.target.value.toLowerCase())}
        />
        <button
          className="h-fit p-2 rounded-lg bg-transparent shadow-neutral-400 shadow-inner hover:scale-110 duration-150 ease-in-out"
          onClick={() => handleClick()}
        >
          <p className=" scale-125 ease-in-out duration-200">🔍</p>
        </button>
      </div>
      <button className="h-fit p-2.5 rounded-lg bg-transparent shadow-neutral-400 shadow-inner md:hidden">
        <FaHamburger
          color="rgb(156,163,175)"
          size={20}
          className="relative hover:scale-125 ease-in-out duration-200 "
        />
      </button>

      <div className="md:flex flex-[.25] items-center hidden  ">
        <b>{moment().format("Do MMM YYYY")}</b>&nbsp;&nbsp;
        {/* <b>{moment().format(" h:mm:ss a")}</b> */}
        &nbsp;&nbsp;&nbsp;
        <div className="border-[#c21636] border w-fit p-1 rounded-xl shadow-sm shadow-black">
          <b className="text-[#c21636] flex items-center ">
            {<AiFillCloud />} &nbsp;{weather}°C
          </b>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
