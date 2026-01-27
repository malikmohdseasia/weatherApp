
const Time = ({ dark, details, date, time}: any) => {

  return (
    <div className="lg:w-[40%] ">
      <div className={`rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.15)] p-10 flex flex-col items-center justify-cente ${!dark ? 'bg-[#444444]' : "bg-[#D9D9D9]"} `}>
        <h1 className={`font-poppins font-bold text-[30px] md:text-[50px] ${!dark ? 'text-white' : ''}`}>
          {
          details && details?.name }</h1>

        <div className="text-center">
          <h1 className={`font-poppins font-bold text-[60px] md:text-[70px] pt-2 md:pt-5 ${!dark ? 'text-white' : ''}`}>{details && time()}</h1>
          <h2 className={`font-poppins text-[20px] ${!dark ? 'text-white text-center' : ''}`}>{details && date()}</h2>
        </div>
      </div>

    </div>
  )
}

export default Time
