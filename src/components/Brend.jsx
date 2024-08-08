import React from "react";
import Slider from "./slider/Slider";
import { b1, b2, b3, b4 } from "../assets";
const brend = [
  {
    id: 1,
    img: b1,
  },
  {
    id: 2,
    img: b2,
  },
  {
    id: 3,
    img: b3,
  },
  {
    id: 4,
    img: b4,
  },
];

function Brend() {
  return (
    <div className=" lg:container mx-auto px-4 mt-[80px]">
      <Slider>Бренды</Slider>
      <div className=" mt-[20px] sm:mt-[30px] grid grid-cols-2 sm:grid-cols-4  gap-7">
        {brend.map((item) => {
          return (
            <div key={item.id} className="  flex items-center justify-center py-[11px] px-4 bg-white rounded-xl">
              <img src={item.img} alt="dasda" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brend;
