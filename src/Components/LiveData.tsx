import SunRise from "../assets/sunrise-white 1.svg";
import SunSet from "../assets/sunset-white 1.svg";
import SunRiseBLACK from "../assets/sunrise-white 1-BLACK.png";
import SunSetBLACK from "../assets/sunset-white 1-BLACK.png";
import CLEARSKY from "../assets/clear 1.svg";
import HUMIDITYICON from '../assets/humidity 1.svg'
import WINDICON from '../assets/wind 1.svg'
import PICON from '../assets/pressure-white 1.svg';
import UVICON from '../assets/uv-white 1.svg';

import HUMIDITYICON_BLACK from '../assets/humidity 1-BLACK.svg'
import WINDICON_BLACK from '../assets/wind 1-BLACK.svg'
import PICON_BLACK from '../assets/pressure-white 1-BLACK.svg';
import UVICON_BLACK from '../assets/uv-white 1-BLACK.svg';


const LiveData = ({ dark }: any) => {
    return (
        <div className={`flex items-center rounded-2xl w-[60%] px-6  shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
            <div className="">
                <div>
                    <h1 className={`font-poppins font-bold text-[90px] ${!dark ? 'text-transparent [-webkit-text-stroke:2px_#000] bg-linear-to-r from-[#D9D9D9] to-[#444444] bg-clip-text' : ""}`}>24°C</h1>
                    <h2 className={`font-poppins  text-[20px] ${!dark ? 'text-white opacity-80' : ""}`}>Feels like: <span className="text-[25px]  opacity-80 font-bold">22°C</span></h2>
                </div>

                <div className="flex items-center gap-1">
                    <div>
                        <img src={dark? SunRiseBLACK:SunRise} alt="" />
                    </div>

                    <div>

                        <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ""}`}>Sunrise</h1>
                        <h2 className={`text-[16px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>06:37 AM</h2>
                    </div>

                </div>
                <div className="flex items-center gap-1 mt-2.5">
                    <div>
                        <img src={dark?SunSetBLACK :SunSet} alt="" />
                    </div>

                    <div>

                        <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ""}`}>Sunset</h1>
                        <h2 className={`text-[16px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>20:37 AM</h2>
                    </div>

                </div>
            </div>


            <div className="flex flex-col items-center justify-center">
                <img src={CLEARSKY} alt="" className="h-60" />
                <h1 className={`text-[32px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>Sunny</h1>
            </div>

            <div className="flex flex-col gap-3.75">
                <div>
                    <div className="flex gap-[17px] items-center ">
                        <div className="flex flex-col items-center text-center"><img src={dark?HUMIDITYICON_BLACK:HUMIDITYICON} alt="" />
                            <div>
                                <h1 className={`text-[20px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>41%</h1>
                                <h2 className={`text-[20px]  font-poppins ${!dark ? 'text-white' : ""}`}>Humidity</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center"><img src={dark?WINDICON_BLACK:WINDICON} alt="" />
                            <div>
                                <h1 className={`text-[20px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>2km/h</h1>
                                <h2 className={`text-[18px] font-poppins ${!dark ? 'text-white' : ""}`}>Wind Speed</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[50px] items-center">
                    <div className="flex flex-col items-center text-center"><img src={dark ?PICON_BLACK:PICON} alt="" />
                        <div>
                            <h1 className={`text-[20px] font-semibold  font-poppins ${!dark ? 'text-white' : ""}`}>997hPa</h1>
                            <h2 className={`text-[20px]  font-poppins ${!dark ? 'text-white' : ""}`}>Pressure</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center"><img src={dark?UVICON_BLACK:UVICON} alt="" />
                        <div>
                            <h1 className={`text-[20px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>8</h1>
                            <h2 className={`text-[18px] font-poppins ${!dark ? 'text-white' : ""}`}>UV</h2>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default LiveData
