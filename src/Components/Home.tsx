import { useState } from "react"
import { SearchIcon } from "../assets/Icons";
import LocationIcon from "../assets/current location icon.svg"
import Time from "./Time";
import LiveData from "./LiveData";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";

const Home = () => {

    const [dark, setDark] = useState(false);

  return (
    <div className={`w-container mx-auto ${!dark ? "bg-linear-to-r from-[#444444] to-black": "bg-[linear-gradient(90deg,#D9D9D9_0%,#292929_100%)]"} px-10 h-full`}>
        <div className="flex items-center py-15 text-center font-bold font-poppins gap-15">
            <div className="">

            <div className={`px-2 border rounded-full w-25 h-9 bg-[#D9D9D9] flex cursor-pointer items-center ${dark ? 'justify-start':'justify-end'}`}
              onClick={()=>setDark((pre:any)=>!pre)}
            >
            <div className="bg-black rounded-full h-7 w-7 cursor-pointer"
              
                ></div>
            </div>
               {
                !dark ? <h1 className="font-poppins text-white">Light Mode</h1> : <h1 className="font-poppins">Dark Mode</h1>
               }
            </div>

            <div className={`border flex items-center justify-start gap-2 px-5 h-15 rounded-full flex-1 ${!dark ? "drop-shadow-[0_4px_6px_#444444] bg-[#444444] border-none ":"bg-[#D9D9D9]"}  `}>
                {SearchIcon}
                <input
                type="search" name="" id="" className={`w-full h-full outline-none font-medium placeholder:font-medium ${dark?'':'text-white'} `} placeholder="Search for your preffered city..."/>
            </div>

            <div className="h-15 bg-[#4CBB17] rounded-full flex items-center justify-center px-4 gap-1.5">
                <img src={LocationIcon} alt="" />
                <button className="font-bold font-poppins text-white">Current Location</button>
            </div>
        </div>

       <div className="flex gap-13.75">
         <Time dark={dark} />
        <LiveData dark={dark}/>
       </div>

       <div className="flex gap-13.75 py-5 items-center">

        <Forecast dark={dark}/>
        <HourlyForecast dark={dark}/>
       </div>
     
    </div>
  )
}

export default Home
