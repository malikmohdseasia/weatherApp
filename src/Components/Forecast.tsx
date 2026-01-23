
import CLOUD from "../assets/clouds 1.svg";
import MIST from "../assets/mist 1.svg";
import CLEAR from "../assets/clear 2.svg";
import DRIZZLE from "../assets/drizzle 1.svg";
import RAIN from "../assets/rain 1.svg";

const Forecast = ({ dark }: any) => {

   const items = [
        { img: CLOUD, temp:"20°C", day: "Friday, 1 Sep" },
        { img: MIST, temp: "22°C", day: "Saturday, 2 Sep" },
        { img: CLEAR, temp: "27°C", day: "Sunday 3 Sep" },
        { img: DRIZZLE, temp: "18°C", day: "Monday, 4 Sep" },
        { img: RAIN, temp: "16°C", day: "Tuesday, 5 Sep" }
    ]



    return (
        <div className={`w-full lg:w-[35%] rounded-2xl px-6 py-3.75 shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
            <h1 className={`text-center font-poppins font-bold text-[32px] ${!dark ? "text-white" : ""}`}>5 Days Forecast:</h1>
            <div className="flex flex-col justify-center">
               {
                items && items.map((item, index):any=>(
                    <div key={index} className="flex items-center gap-10 md:justify-between">
                    <img src={item.img} alt="" />
                    <h1 className={`font-semibold font-poppins ${!dark ? 'text-white' : ''}`}>{item.temp}</h1>
                    <h1 className={`font-semibold font-poppins ${!dark ? 'text-white' : ''}`}>{item.day}</h1>
                </div>
                ))
               }
            </div>

        </div>
    )
}

export default Forecast
