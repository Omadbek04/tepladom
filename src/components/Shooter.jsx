import { c1 } from "../assets";
import { NavLink } from "react-router-dom";

function Shooter({ path, name }) {
  return (
    <div className="lg:container mx-auto flex justify-between items-center mt-[60px] sm:mt-[77px] px-3">
      <h3 className=" text-2xl sm:text-3xl  font-semibold ">{name}</h3>
      <div className="flex gap-2 items-center ">
        <NavLink to={`/${path}`} className={" text-1xl sm:text-2xl text-blue-800 mb-2"}>
          Смотреть все
        </NavLink>
        <img src={c1} alt="Смотреть все icon" />
      </div>
    </div>
  );
}

export default Shooter;
