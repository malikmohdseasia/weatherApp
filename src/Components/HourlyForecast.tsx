import CLEAR from "../assets/clear 2.svg";
import NAVIGATION from "../assets/navigation 1.svg";

const HourlyForecast = ({dark}:any) => {
  return (
    <div className={`w-[65%] rounded-2xl  shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
   <h1 className={`text-center font-poppins font-bold text-[32px] ${!dark?"text-white":""}`}>Hourly Forecast:</h1>


   <div className="flex items-center gap-3.75 justify-center py-4">

    <div className={`${dark?"bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]":"bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
        <h1 className={`text-[24px] font-bold font-poppins ${!dark? 'text-white':''}`}>12:00</h1>
      <img src={CLEAR} alt="" />
        <h2 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>26°C</h2>
        <img src={NAVIGATION} alt="" />
        <h1 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>3km/h</h1>
    </div>

    <div className={`${dark?"bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]":"bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
        <h1 className={`text-[24px] font-bold font-poppins ${!dark? 'text-white':''}`}>15:00</h1>
      <img src={CLEAR} alt="" />
        <h2 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>27°C</h2>
        <img src={NAVIGATION} alt="" className="-rotate-45" />
        <h1 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>3km/h</h1>
    </div>
    <div className={`${dark?"bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]":"bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
        <h1 className={`text-[24px] font-bold font-poppins ${!dark? 'text-white':''}`}>18:00</h1>
      <img src={CLEAR} alt="" />
        <h2 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>27°C</h2>
        <img src={NAVIGATION} alt="" />
        <h1 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>2km/h</h1>
    </div>

    <div className={`${dark?"bg-[linear-gradient(180deg,#443D64_0%,#6582C6_100%)]":"bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
        <h1 className={`text-[24px] font-bold font-poppins ${!dark? 'text-white':''}`}>21:00</h1>
      <img src={CLEAR} alt="" />
        <h2 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>25°C</h2>
        <img src={NAVIGATION} alt="" className="rotate-45" />
        <h1 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>2km/h</h1>
    </div>
    <div className={`${dark?"bg-[linear-gradient(180deg,#443D64_0%,#6582C6_100%)]":"bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
        <h1 className={`text-[24px] font-bold font-poppins ${!dark? 'text-white':''}`}>00:00</h1>
      <img src={CLEAR} alt="" />
        <h2 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>22°C</h2>
        <img src={NAVIGATION} alt="" />
        <h1 className={`text-[20px] font-bold font-poppins ${!dark? 'text-white':''}`}>3km/h</h1>
    </div>
   </div>
    </div>
  )
}

export default HourlyForecast
