import { komanda } from "../assets";
import Slider from "./slider/Slider";

const comanda = [
  {
    id: 1,
    img: komanda,
    author: "Ӯткуров Сардор",
    title: "Директор фирмы",
  },
  {
    id: 2,
    img: komanda,
    author: "Рахматуллаев Хаб",
    title: "Менеджерпо продажам",
  },
  {
    id: 3,
    img: komanda,
    author: "Усмонов Нодир",
    title: "Менеджерпо продажам",
  },
  {
    id: 4,
    img: komanda,
    author: "Йолдошев Донийор",
    title: "Менеджерпо продажам",
  },
];
function Comanda() {
  return (
    <div className=" lg:container mx-auto px-4">
      <Slider>Наши команда</Slider>
      <div className=" mb-14 mt-10 overflow-x-scroll lg:overflow-hidden flex justify-between items-center gap-6 box-border">
        {comanda.map((item) => {
          return (
            <div key={item.id} className=" bg-white py-[30px] px-[30px] rounded-[15px] w-[257px]">
              <img src={item.img} alt={item.author} className=" cursor-pointer object-contain mb-[30px] mx-auto w-[156px] h-[165px]" />
              <h3 className=" w-44 mx-auto text-center text-[18px] font-medium  mb-[10px]">{item.author}</h3>
              <p className=" w-44 mx-auto text-sm text-stone-500 text-center font-medium">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comanda;
