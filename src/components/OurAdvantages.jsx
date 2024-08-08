import { n1, n2, n3, n4, n5 } from "../assets";
import Info from "./Info";

const ourAdventages = [
  {
    id: 1,
    img: n1,
    title: "50 000 довольных клиентов по всей страна",
    style: "rgba(0, 83, 224, 0.15)",
  },
  {
    id: 2,
    img: n2,
    title: "99% заказов приходит в назначенное время",
    style: "rgba(133, 0, 180, 0.15)",
  },
  {
    id: 3,
    img: n3,
    title: "  5 лет на рынке инструмента и техники",
    style: "rgba(49, 206, 255, 0.15)",
  },
  {
    id: 4,
    img: n4,
    title: "Боле 5 000 позиций товаров на складах",
    style: "rgba(255, 163, 11, 0.15)",
  },
  {
    id: 5,
    img: n5,
    title: "Бесплатная доставка по городу Ташкент (при заказе от 3 млн.)",
    style: "rgba(0, 224, 22, 0.15)",
  },
];

function OurAdvantages() {
  return (
    <div className=" lg:container mx-auto px-4 mt-14 mb-[50px]">
      <Info />
      <div className="flex justify-center items-center flex-wrap gap-[50px]">
        {ourAdventages.map((item) => (
          <div key={item.id} className=" flex gap-[20px]  flex-col xs:flex-row  justify-center items-center ">
            <div style={{ backgroundColor: `${item.style}` }} className="  w-[72px] h-[72px] rounded-full flex items-center justify-center">
              <img src={item.img} alt={item.title} className=" w-[30px] h-[30px] sm:w-11 sm:h-[42px] object-contain" />
            </div>
            <p className=" line-clamp-2  font-bold w-full xs:w-[222px]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurAdvantages;
    