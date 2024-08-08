import { b5, b6 } from "../../assets";

function Slider({ children }) {
  return (
    <div className=" flex justify-between items-start">
      <h2 className=" font-bold  text-2xl sm:text-3xl">{children}</h2>
      <div className=" flex items-center gap-3">
        <div className=" rounded-full bg-white    w-10  sm:w-14    h-10  sm:h-14 flex justify-center items-center cursor-pointer">
          <img src={b5} alt="icons" />
        </div>
        <div className=" rounded-full bg-white    w-10  sm:w-14    h-10  sm:h-14 flex justify-center items-center cursor-pointer">
          <img src={b6} alt="icons" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
