import SunRise from "../assets/sunrise-white 1.svg";
import SunSet from "../assets/sunset-white 1.svg";
import SunRiseBLACK from "../assets/sunrise-white 1-BLACK.png";
import SunSetBLACK from "../assets/sunset-white 1-BLACK.png";
import SUN from "../assets/day.svg";
import SCATTERED_CLOUD from "../assets/scattered-cloud.svg";
import SHOWER_RAIN from "../assets/shower-rain.svg";
import RAIN from "../assets/rain.svg";
import THUNDERSTROM from "../assets/thunder.svg";
import SNOW from "../assets/snowy-6.svg";
import MIST from "../assets/mist.png";
import NIGHT from "../assets/night.svg";
import NIGHT_CLOUD from "../assets/cloudy-night-3.svg";
import CLOUD_DAY from "../assets/cloudy-day-3.svg";
import HUMIDITYICON from '../assets/humidity 1.svg'
import WINDICON from '../assets/wind 1.svg'
import PICON from '../assets/pressure-white 1.svg';
import UVICON from '../assets/uv-white 1.svg';

import HUMIDITYICON_BLACK from '../assets/humidity 1-BLACK.svg'
import WINDICON_BLACK from '../assets/wind 1-BLACK.svg'
import PICON_BLACK from '../assets/pressure-white 1-BLACK.svg';
import UVICON_BLACK from '../assets/uv-white 1-BLACK.svg';

const LiveData = ({ dark, details }: any) => {

    let temp = details?.main?.temp;


    const weatherImages:any = {
        "01d": SUN,
        "01n": NIGHT,

        "02d": CLOUD_DAY,
        "02n": NIGHT_CLOUD,

        "03d": SCATTERED_CLOUD,
        "03n": SCATTERED_CLOUD,

        "04d": SCATTERED_CLOUD,
        "04n": SCATTERED_CLOUD,

        "09d": SHOWER_RAIN,
        "09n": SHOWER_RAIN,

        "10d": RAIN,
        "10n": RAIN,

        "11d": THUNDERSTROM,
        "11n": THUNDERSTROM,

        "13d": SNOW,
        "13n": SNOW,

        "50d": MIST,
        "50n": MIST,
    };

    const getSunriseTime = () => {
        if (!details) return "";

        const utcTime = details.sys.sunrise * 1000;
        const localTime = new Date(utcTime + details.timezone * 1000);

        return localTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "UTC",
        });
    };


    const getSunsetTime = () => {
        if (!details) return "";

        const utcTime = details.sys.sunset * 1000;
        const localTime = new Date(utcTime + details.timezone * 1000);

        return localTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "UTC",
        });
    };



    const getWeatherImage = () => {
        if (!details) return SUN;
        return weatherImages[details.weather[0].icon] || SUN;
    };


    return (
        <div className={`flex items-center rounded-2xl w-[70%] px-6  shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
            <div className="">
                <div>
                    <h1 className={`font-poppins font-bold text-[65px] ${!dark ? 'text-transparent [-webkit-text-stroke:2px_#000] bg-linear-to-r from-[#D9D9D9] to-[#444444] bg-clip-text' : ""}`}>{Math.round(temp)} °C</h1>
                    <h2 className={`font-poppins  text-[20px] ${!dark ? 'text-white opacity-80' : ""}`}>Feels like: <span className="text-[25px]  opacity-80 font-bold">{Math.floor(details?.main?.feels_like)} °C</span></h2>
                </div>

                <div className="flex items-center gap-1">
                    <div>
                        <img src={dark ? SunRiseBLACK : SunRise} alt="" />
                    </div>

                    <div>

                        <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ""}`}>Sunrise</h1>
                        <h2 className={`text-[16px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>{getSunriseTime()}</h2>
                    </div>

                </div>
                <div className="flex items-center gap-1 mt-2.5">
                    <div>
                        <img src={dark ? SunSetBLACK : SunSet} alt="" />
                    </div>

                    <div>

                        <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ""}`}>Sunset</h1>
                        <h2 className={`text-[16px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>{getSunsetTime()}</h2>
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img src={getWeatherImage()} alt="" className="h-60 object-contain" />
                <h1 className={`text-[32px] font-semibold font-poppins capitalize ${!dark ? 'text-white' : ""}`}>{details?.weather[0]?.main}</h1>
            </div>

            <div className="flex flex-col gap-3.75">
                <div>
                    <div className="flex gap-4.25 items-center ">
                        <div className="flex flex-col items-center text-center"><img src={dark ? HUMIDITYICON_BLACK : HUMIDITYICON} alt="" />
                            <div>
                                <h1 className={`text-[20px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>{details?.main?.humidity} %</h1>
                                <h2 className={`text-[20px]  font-poppins ${!dark ? 'text-white' : ""}`}>Humidity</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center"><img src={dark ? WINDICON_BLACK : WINDICON} alt="" />
                            <div>
                                <h1 className={`text-[20px] font-semibold font-poppins ${!dark ? 'text-white' : ""}`}>{Math.floor(details?.wind?.speed)}km/h</h1>
                                <h2 className={`text-[20px] font-poppins ${!dark ? 'text-white' : ""}`}>Wind Speed</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-12.5 items-center">
                    <div className="flex flex-col items-center text-center"><img src={dark ? PICON_BLACK : PICON} alt="" />
                        <div>
                            <h1 className={`text-[20px] font-semibold  font-poppins ${!dark ? 'text-white' : ""}`}>{details?.main?.pressure}hPa</h1>
                            <h2 className={`text-[20px]  font-poppins ${!dark ? 'text-white' : ""}`}>Pressure</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center"><img src={dark ? UVICON_BLACK : UVICON} alt="" />
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
