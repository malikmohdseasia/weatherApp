import { useEffect, useState } from "react"
import { LogoutIcon, SearchIcon } from "../assets/Icons";
import LocationIcon from "../assets/current location icon.svg"
import Time from "./Time";
import LiveData from "./LiveData";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";
import axios from "axios";
import { toast } from "react-toastify";
import LogoutModal from "./Logout";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [dark, setDark] = useState(false);
  const [city, setCity] = useState('');
  const [details, setDetails] = useState<any>(null)
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const { logout }:any = useAuthStore();



  const getCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ea6a849b02947fd1562b96f557909d9&units=metric`
          );
          setDetails(data);
        } catch (err) {
          console.log(err);
          setError("Failed to fetch weather");
        }
      },
      () => {
        setError("Location permission denied");
      }
    );
  };


  const SearchCity = async () => {
    if (!city && city.trim() === '') {
      return
    }
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ea6a849b02947fd1562b96f557909d9&units=metric`);
      setDetails(data)
      setCity('')
    } catch (error) {
      toast.error('City Not Found!')
    }
  }

  const getCityDate = () => {
    if (!details) return "";

    return new Date(
      (details.dt + details.timezone) * 1000
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getCityTime = () => {
    if (!details) return "";

    const utcTime = details.dt * 1000;
    const localTime = new Date(utcTime + details.timezone * 1000);

    return localTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });
  };


  const handleWarn = ()=>{
    setShowModal(true)
  }



  const logoutHandle = () => {
    logout();
    toast.success('Successfully Logout!')
    navigate('/')
  }


  useEffect(() => {
    if (!city) {
      getCurrentLocationWeather()
    }
  }, [])


  return (
    <div className={`w-container mx-auto ${!dark ? "bg-linear-to-r from-[#444444] to-black" : "bg-[linear-gradient(90deg,#D9D9D9_0%,#292929_100%)]"} px-3 md:px-10 `}>

      <div className="flex justify-center md:justify-start items-center py-15 text-center font-bold font-poppins gap-2 md:gap-15 ">
        <div className="">

          <div className={`px-0.5 md:px-2 border rounded-full w-12 md:w-25 md:h-9 bg-[#D9D9D9] flex cursor-pointer items-center ${dark ? 'justify-start' : 'justify-end'}`}
            onClick={() => setDark((pre: any) => !pre)}
          >
            <div className="bg-black rounded-full w-6 h-6 md:h-7 md:w-7 cursor-pointer"

            ></div>
          </div>
          {
            !dark ? <h1 className="font-poppins text-white hidden md:block text-[12px]">Light Mode</h1> : <h1 className="hidden md:block font-poppins text-[12px]">Dark Mode</h1>
          }
        </div>

        <div className={`w-[60%] lg:w-full border flex items-center justify-start gap-2 px-5 md:h-15 rounded-full md:flex-1 ${!dark ? "drop-shadow-[0_4px_6px_#444444] bg-[#444444] border-none " : "bg-[#D9D9D9]"}  `}>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="search" name="" id="" className={`w-full h-full outline-none font-medium placeholder:font-medium ${dark ? '' : 'text-white'} `} placeholder="Search city..." />
          <button className="cursor-pointer" onClick={SearchCity}>  {SearchIcon}</button>
        </div>

        <div className="h-8 md:mt-15 md:ml-20 absolute md:static top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-15 flex md:bg-[#4CBB17] rounded-full md:flex items-center justify-center md:px-4 gap-1.5 cursor-pointer"
          onClick={getCurrentLocationWeather}
        >
          <img src={LocationIcon} alt="" className="h-full md:h-8"  />
          <button className={`font-bold font-poppins cursor-pointer ${!dark ? 'text-white':''}`}

          >Current Location</button>
        </div>

        <div className=" md:-ml-25">
      <button onClick={handleWarn} className={`${!dark ? 'text-white':""} w-10 h-10 cursor-pointer font-poppins font-semibold rounded-xl`}>
        {LogoutIcon}
      </button>

</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-13.75 ">
        <Time dark={dark} details={details} date={getCityDate} time={getCityTime} />
        <LiveData dark={dark} details={details} />
      </div>

      <div className="flex flex-col lg:flex-row gap-13.75 py-5 items-center">

        <Forecast dark={dark} />
        <HourlyForecast dark={dark} details={details} time={getCityTime} />
      </div>

      <LogoutModal
      dark={dark}
        showModal={showModal}
        setShowModal={()=>setShowModal(false)}
        onConfirm={logoutHandle}
      />

    </div>
  )
}

export default Home
