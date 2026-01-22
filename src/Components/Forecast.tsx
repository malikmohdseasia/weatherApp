
import CLOUD from "../assets/clouds 1.svg";
import MIST from "../assets/mist 1.svg";
import CLEAR from "../assets/clear 2.svg";
import DRIZZLE from "../assets/drizzle 1.svg";
import RAIN from "../assets/rain 1.svg";

const Forecast = ({dark}:any) => {

    

    return (
        <div className={` w-[35%] rounded-2xl px-6 py-3.75 shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
            <h1 className={`text-center font-poppins font-bold text-[32px] ${!dark?"text-white":""}`}>5 Days Forecast:</h1>
         <div className="flex flex-col">
            <div className="flex items-center gap-10">
               <img src={CLOUD} alt="" />
                <h1 className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>20°C</h1>
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>Friday, 1 Sep</h1>
            </div>
            <div className="flex items-center gap-10">
               <img src={MIST} alt="" />
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>22°C</h1>
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>Saturday, 2 Sep</h1>
            </div>
            <div className="flex items-center gap-10">
               <img src={CLEAR} alt="" />
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>27°C</h1>
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>Sunday, 3 Sep</h1>
            </div>
            <div className="flex items-center gap-10">
               <img src={DRIZZLE} alt="" />
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>18°C</h1>
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>Monday, 4 Sep</h1>
            </div>
            <div className="flex items-center gap-10">
               <img src={RAIN} alt="" />
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>16°C</h1>
                <h1  className={`font-semibold font-poppins ${!dark? 'text-white':''}`}>Tuesday, 5 Sep</h1>
            </div>
         </div>
        
        </div>
    )
}

export default Forecast
