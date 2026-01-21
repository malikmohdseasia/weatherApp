
const Time = ({dark}:any) => {
  return (
    <div className="w-[40%] ">
       <div className={`rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.15)] p-10 flex flex-col items-center justify-cente ${!dark ?'bg-[#444444]':"bg-[#D9D9D9]"} `}>
            <h1 className={`font-poppins font-bold text-[50px] ${!dark? 'text-white':''}`}>Athens</h1>

            <div>
                <h1 className={`font-poppins font-bold text-[80px] pt-5 ${!dark? 'text-white':''}`}>09:03</h1>
                <h2 className={`font-poppins ${!dark? 'text-white':''}`}>Thursday, 31 Aug</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Time
