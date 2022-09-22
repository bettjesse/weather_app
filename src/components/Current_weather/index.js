import React from "react";

const Current_weather = ({data}) => {
  return (
    <div className="w-[300px] rounded-[6px] shadow-md text-white bg-[#333] mt-[20px] mx-[auto] mb-0 pt-0 px-[20px] pb-[20px]">
      <div className=" flex justify-between items-center ">
        <div>
          <p className="leading-[1] font-bold text-[16px] m-0 tracking-[1px]">
           {data.city}
          </p>
          <p className="font-light  text-[14px] leading-[1] m-0">{data.weather[0].description}</p>
        </div>
        <img className="w-[100px]" alt="sunny" src= {`icons/${data.weather[0].icon}.png`}/>
      </div>
      <div className=" flex justify-between items-center">
        <p className="font-bold text-[70px] tracking-[-5px] w-auto my-[10px] mx-0 ">{Math.round(data.main.temp)}°C</p>
        <div className="w-[100%] pl-[20px] ">
          <div className="flex justify-between">
            <span className="text-left font-[400] text-[12px]" >details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-[400] text-[12px]">Feels like</span>
            <span className="text-[12px] text-right font-bold"> {Math.round(data.main.feels_like)}°C</span>
          </div>
          <div  className="flex justify-between">
            <span className="text-left font-[400] text-[12px]">Wind</span>
            <span className="text-[12px] text-right font-bold">2 m/s</span>
          </div>
          <div  className="flex justify-between">
            <span className="text-left font-[400] text-[12px]">Humidity</span>
            <span className="text-[12px] text-right font-bold">50%</span>
          </div>
          <div  className="flex justify-between">
            <span className="text-left font-[400] text-[12px]">Pressure</span>
            <span className="text-[12px] text-right font-bold">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current_weather;
