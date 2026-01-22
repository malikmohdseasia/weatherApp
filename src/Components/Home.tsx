import { useEffect, useState } from "react"
import { SearchIcon } from "../assets/Icons";
import LocationIcon from "../assets/current location icon.svg"
import Time from "./Time";
import LiveData from "./LiveData";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {

  const [dark, setDark] = useState(false);
  const [city, setCity] = useState('');
  const [details, setDetails] = useState<any>(null)
  const [error, setError] = useState("");

  

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
    if(!city && city.trim()===''){
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


  useEffect(()=>{
    if(!city){
      getCurrentLocationWeather()
    }
  },[])


  return (
    <div className={`w-container mx-auto ${!dark ? "bg-linear-to-r from-[#444444] to-black" : "bg-[linear-gradient(90deg,#D9D9D9_0%,#292929_100%)]"} px-10 h-full`}>
      <div className="flex items-center py-15 text-center font-bold font-poppins gap-15">
        <div className="">

          <div className={`px-2 border rounded-full w-25 h-9 bg-[#D9D9D9] flex cursor-pointer items-center ${dark ? 'justify-start' : 'justify-end'}`}
            onClick={() => setDark((pre: any) => !pre)}
          >
            <div className="bg-black rounded-full h-7 w-7 cursor-pointer"

            ></div>
          </div>
          {
            !dark ? <h1 className="font-poppins text-white">Light Mode</h1> : <h1 className="font-poppins">Dark Mode</h1>
          }
        </div>

        <div className={`border flex items-center justify-start gap-2 px-5 h-15 rounded-full flex-1 ${!dark ? "drop-shadow-[0_4px_6px_#444444] bg-[#444444] border-none " : "bg-[#D9D9D9]"}  `}>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="search" name="" id="" className={`w-full h-full outline-none font-medium placeholder:font-medium ${dark ? '' : 'text-white'} `} placeholder="Search for your preffered city..." />
          <button className="cursor-pointer" onClick={SearchCity}>  {SearchIcon}</button>
        </div>

        <div className="h-15 bg-[#4CBB17] rounded-full flex items-center justify-center px-4 gap-1.5 cursor-pointer"
          onClick={ getCurrentLocationWeather}
        >
          <img src={LocationIcon} alt="" />
          <button className="font-bold font-poppins text-white cursor-pointer"
        
          >Current Location</button>
        </div>
      </div>

      <div className="flex gap-13.75">
        <Time dark={dark} details={details} date={getCityDate} time={getCityTime}  />
        <LiveData dark={dark} details={details} />
      </div>

      <div className="flex gap-13.75 py-5 items-center">

        <Forecast dark={dark} />
        <HourlyForecast dark={dark} details={details} time={getCityTime} />
      </div>

    </div>
  )
}

export default Home
