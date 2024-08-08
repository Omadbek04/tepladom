import { useState } from "react";
import nav1 from "../assets/nav1.svg";
import nav2 from "../assets/nav2.svg";
import nav3 from "../assets/nav3.svg";
import nav4 from "../assets/nav4.svg";
import nav5 from "../assets/nav5.svg";
import nav6 from "../assets/nav6.svg";
import nav7 from "../assets/nav7.svg";
import nav8 from "../assets/nav8.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../reducers/siteSlice";
import { basket2, like2 } from "../assets";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.basket);
  const links = [
    { id: 1, title: "Товары по акции", link: "/aksiya" },
    { id: 2, title: "Новинки", link: "/novinki" },
    { id: 3, title: "Поставщикам", link: "/postavshikam" },
    { id: 4, title: "Контакты", link: "/contact" },
    { id: 5, title: "Возврат товара", link: "/vozvrat" },
  ];
  const [search, setSearch] = useState("");
  const [nav, setNav] = useState(false);

  const handlerFilter = () => {
    dispatch(getFilter(search));
    navigate("/filter");
    setSearch("");
  };

  const { pathname } = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleExit = () => {
    navigate("/login");
  };

  return (
    <nav className=" lg:container mx-auto px-4 ">
      <section className=" flex  justify-between items-center ">
        {/* logo */}
        <div className=" flex justify-between items-center gap-1">
          <NavLink to={"/"}>
            <img src={nav1} alt="navbar logo" className="  w-[49px] h-[49px] sm:w-[70px] sm:h-[70px] object-contain" />
          </NavLink>
          <NavLink to={"/"}>
            <div className=" flex flex-col items-center">
              <h2 className=" text-[14]  sm:text-[24px] font-bold text-orange-500">TEPLODOM</h2>
              <p className=" flex flex-col text-[9.1px] items-center font-normal sm:text-[13px] leading-[105%]">
                <span>Интернет магазин</span> <span>строй материалов</span>
              </p>
            </div>
          </NavLink>
        </div>

        {/* input */}
        <div className=" hidden sm:flex  gap-2  items-center bg-[white] py-[16px] px-3 md:w-[200px] lg:w-[390px] rounded-[15px] shadow-[0px 2px 2px 0px rgba(180, 180, 180, 0.25);]">
          <img src={nav2} alt="search" className=" cursor-pointer w-[16px] h-[16px] object-contain" onClick={handlerFilter} />
          <input className=" outline-none md:w-full" type="text" placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>

        {/* icons basket like  */}
        <div className="flex items-center gap-[10px] xs:gap-[20px] sm:gap-[30px]">
          <Link to={"/liked"} className="bg-[white] h-[44px] w-[44px] sm:h-[56px] sm:w-[56px] rounded-full flex items-center  justify-center cursor-pointer  relative">
            {arr.like.length > 0 ? (
              <div
                className=" absolute  bg-red-500 rounded-full w-5 h-5  text-center  text-[12px] font-semibold  text-white
              top-[-6px] right-0 "
              >
                {arr.like.length}
              </div>
            ) : null}

            <img src={pathname == "/liked" ? like2 : nav3} alt="" className="h-[22px] w-[22px]" />
          </Link>

          <Link to={"/basket"} className=" relative bg-[white] h-[44px] w-[44px] sm:h-[56px] sm:w-[56px] rounded-full flex items-center justify-center  cursor-pointer  transition-colors duration-300">
            {arr.basket.length > 0 ? (
              <div
                className=" absolute  bg-red-500 rounded-full w-5 h-5  text-center  text-[12px] font-semibold  text-white
            top-[-6px] right-0 "
              >
                {arr.basket.length}
              </div>
            ) : null}
            <img src={pathname == "/basket" ? basket2 : nav4} alt="basket icon" className="h-[22px] w-[22px]" />
          </Link>
          {user ? (
            <button onClick={handleExit} className=" bg-[white]   h-[44px] sm:h-[56px] px-4 font-medium rounded-lg cursor-pointer">
              Войти
            </button>
          ) : (
            <Link to={"/account"} className=" bg-[white]  flex gap-3 items-center h-[44px] sm:h-[56px] px-3 rounded-lg cursor-pointer">
              <img src={nav5} alt="account icon" className="h-[22px] w-[22px]" />
              <p className="  hidden sm:flex flex-none  ">Профиль</p>
            </Link>
          )}
        </div>
      </section>

      {/* navbar top hiden block */}
      <section className="flex justify-between items-center my-4 sm:hidden ">
        <div className=" h-[44px] w-[44px] bg-[white]  rounded-full flex items-center justify-center  cursor-pointer">
          <img src={nav6} alt="like icon" className=" h-[22px] w-[22px]" onClick={() => setNav((prev) => !prev)} />
        </div>
        <div className="flex  gap-2  items-center bg-[white] h-[44px] px-3 max-w-[200px]  rounded-[15px] shadow-[0px 2px 2px 0px rgba(180, 180, 180, 0.25)]">
          <img src={nav2} alt="search" className=" w-[16px] h-[16px] object-contain cursor-pointer" onClick={handlerFilter} />
          <input className=" outline-none w-full " type="text" placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>
        <div className=" h-[44px] w-[44px] bg-[white] rounded-full flex items-center justify-center  cursor-pointer">
          <img src={nav7} alt="like icon" className=" h-[22px] w-[22px]" />
        </div>
      </section>

      {/* navbar bottom */}
      <section className="hidden sm:flex items-center justify-between  mt-16 ">
        {links.map(({ id, title, link }) => (
          <Link key={id} to={link} className="navbar__bottom  hover:bg-btnsBgColor focus:bg-btnsBgColor active:text-white focus:text-white transition-colors duration-300 py-3 px-6 bg-white  rounded-[10px] text-[18px] font-bold text-center">
            {title}
          </Link>
        ))}
      </section>

      {/* navbar bottom sidebar */}
      {nav && (
        <section className={`flex flex-col pt-[30px] absolute z-10 bg-white  w-full h-screen px-2 top-0 left-0 rounded-r-[15px] sidebar`}>
          <div className=" flex items-center justify-between">
            <div className=" flex justify-start items-center gap-1">
              <img src={nav1} alt="navbar logo" className="  w-[49px] h-[49px] sm:w-[70px] sm:h-[70px] object-contain" />
              <div className=" flex flex-col items-center">
                <h2 className=" text-[14]  sm:text-[24px] font-bold text-orange-500">TEPLODOM</h2>
                <p className=" flex flex-col text-[9.1px] items-center font-normal sm:text-[13px] leading-[105%]">
                  <span>Интернет магазин</span> <span>строй материалов</span>{" "}
                </p>
              </div>
            </div>
            <div className=" h-[44px] w-[44px] bg-slate-200  rounded-full flex items-center justify-center  cursor-pointer">
              <img src={nav8} alt="like icon" className=" h-[16px] w-[16px]" onClick={() => setNav((prev) => !prev)} />
            </div>
          </div>
          <div className="my-10 flex flex-col ">
            {links.map(({ id, title, link }) => (
              <Link key={id} to={link} className={`py-3  text-[18px] font-bold ${id == links.length ? "" : "border-b-2  border-black pr-4"} active:-rotate-1  focus:-rotate-1 transition-all duration-300 `}>
                {title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
