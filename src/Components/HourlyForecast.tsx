import axios from "axios";
import NAVIGATION from "../assets/navigation 1.svg";
import { useEffect, useState } from "react";
import SUN from "../assets/day.svg";
import SCATTERED_CLOUD from "../assets/scattered-cloud.svg";
import SHOWER_RAIN from "../assets/shower-rain.svg";
import RAIN from "../assets/rain.svg";
import THUNDERSTROM from "../assets/thunder.svg";
import SNOW from "../assets/snowy-6.svg";
import MIST from "../assets/mist 1.svg";
import NIGHT from "../assets/night.svg";
import NIGHT_CLOUD from "../assets/cloudy-night-3.svg";
import CLOUD_DAY from "../assets/cloudy-day-3.svg";

const HourlyForecast = ({ dark, details }: any) => {
  const [foreCast, setForeCast] = useState<any>(null);

  const getData = async () => {
    if (!details?.name) return
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${details?.name}&appid=7ea6a849b02947fd1562b96f557909d9&units=metric`)
      setForeCast(data?.list);
    } catch (error) {
      console.log(error)
    }
  }

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

  const getWeatherImage = () => {
    if (!details) return SUN;
    return weatherImages[details.weather[0].icon] || SUN;
  };


  const timeSlots = ['12:00', '15:00', '18:00', '21:00', '00:00'];






  useEffect(() => {
    getData()
  }, [details?.name])

  return (
    <div className={`w-[65%] rounded-2xl  shadow-[8px_8px_0px_rgba(0,0,0,0.15)]  ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
      <h1 className={`text-center font-poppins font-bold text-[32px] ${!dark ? "text-white" : ""}`}>Hourly Forecast:</h1>


      <div className="flex items-center gap-3.75 justify-center py-4">

        {
          foreCast && foreCast?.slice(0, 5)?.map((item: any, index: any) => (

            <div
              key={index}
              className={`
    ${index === 3 || index === 4
                  ? dark
                    ? "bg-[linear-gradient(180deg,#443D64_0%,#6582C6_100%)]"
                    : "bg-[#373636]"
                  : dark
                    ? "bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]"
                    : "bg-[#373636]"
                }
    rounded-3xl py-3.5 px-5 flex items-center flex-col
  `}
            > 

                <h1 className={`text-[24px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>{timeSlots[index]}</h1>
              

              <img src={getWeatherImage()} alt="" />
              <h2 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>{Math.floor(item?.main?.temp)}°C</h2>
              <img src={NAVIGATION} alt="" className={`${index === 1 && '-rotate-45'} ${index === 3 && 'rotate-45'}`} />
              <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>{Math.floor(item?.wind?.speed)}km/h</h1>
            </div>
          ))
        }


        {/* <div className={`${dark ? "bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]" : "bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
          <h1 className={`text-[24px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>15:00</h1>
          <img src={CLEAR} alt="" />
          <h2 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>27°C</h2>
          <img src={NAVIGATION} alt="" className="-rotate-45" />
          <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>3km/h</h1>
        </div>
        <div className={`${dark ? "bg-[linear-gradient(180deg,#F88508_0%,#F6FAD9_100%)]" : "bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
          <h1 className={`text-[24px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>18:00</h1>
          <img src={CLEAR} alt="" />
          <h2 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>27°C</h2>
          <img src={NAVIGATION} alt="" />
          <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>2km/h</h1>
        </div>

        <div className={`${dark ? "bg-[linear-gradient(180deg,#443D64_0%,#6582C6_100%)]" : "bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
          <h1 className={`text-[24px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>21:00</h1>
          <img src={CLEAR} alt="" />
          <h2 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>25°C</h2>
          <img src={NAVIGATION} alt="" className="rotate-45" />
          <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>2km/h</h1>
        </div>
        <div className={`${dark ? "bg-[linear-gradient(180deg,#443D64_0%,#6582C6_100%)]" : "bg-[#373636] "} rounded-3xl  py-3.5 px-5 flex  items-center flex-col`}>
          <h1 className={`text-[24px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>00:00</h1>
          <img src={CLEAR} alt="" />
          <h2 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>22°C</h2>
          <img src={NAVIGATION} alt="" />
          <h1 className={`text-[20px] font-bold font-poppins ${!dark ? 'text-white' : ''}`}>3km/h</h1>
        </div> */}
      </div>
    </div>
  )
}

export default HourlyForecast
