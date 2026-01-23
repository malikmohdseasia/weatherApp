import axios from "axios"
import { useEffect, useState } from "react";

const Time = ({ dark, details, date, time}: any) => {

  const [locationData, setLocationData] = useState<any>(null);

  const getData = async () => {
    try {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=30.7046&lon=76.7179&appid=7ea6a849b02947fd1562b96f557909d9&units=metric');
      setLocationData(data);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="lg:w-[40%] ">
      <div className={`rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.15)] p-10 flex flex-col items-center justify-cente ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
        <h1 className={`font-poppins font-bold text-[30px] md:text-[50px] ${!dark ? 'text-white' : ''}`}>
          {
          details && details?.name }</h1>

        <div className="text-center">
          <h1 className={`font-poppins font-bold text-[60px] md:text-[70px] pt-2 md:pt-5 ${!dark ? 'text-white' : ''}`}>{locationData && time()}</h1>
          <h2 className={`font-poppins text-[20px] ${!dark ? 'text-white text-center' : ''}`}>{locationData && date()}</h2>
        </div>
      </div>

    </div>
  )
}

export default Time
