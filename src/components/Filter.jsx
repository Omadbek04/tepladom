import { Link, NavLink, useNavigate } from "react-router-dom";
import { basket, like, search } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories, getFilter } from "../reducers/siteSlice";
import { setBasket, setLike } from "../reducers/basketReducer";
import Modal from "../ui/Modal";
const s = ">";
function Filter() {
  const { product, filter } = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [open, setOpen] = useState(false);
  const handlerBasket = (item) => {
    dispatch(setBasket(item));
    message.open({
      type: "success",
      content: "добавлено в корзину",
    });
  };
  const handlerLike = (item) => {
    dispatch(setLike(item));
    message.open({
      type: "success",
      content: "добавлен в избранное ",
    });
  };
  const deleteItem = () => {
    setId("");
    setBrand("");
    setOpen(false);
  };
  const brandID = [1, 2, 3, 4, 5, 200];
  const searchItem = () => {
    if (id == brandID[0] || id == brandID[1] || id == brandID[2] || id == brandID[3] || id == brandID[4]) {
      dispatch(getFilter(id));
      setId("");
    } else if (brand) {
      dispatch(getFilter(brand));
      setBrand("");
      setOpen(false);
    } else {
      alert("Maxsulotni togri kiting");
    }
  };
  useEffect(() => {
    if (!product.length || !filter.length) {
      return navigate("/");
    }
  }, []);
  return (
    <>
      <div className=" lg:container mx-auto px-4 mt-14 mb-16">
        <h2 className=" block sm:hidden mb-3 cursor-pointer text-2xl font-bold" onClick={() => setOpen(true)}>
          Филтр
        </h2>
        <div className=" flex items-start justify-center flex-col md:flex-row  gap-4 mb-5">
          <div className="mx-auto hidden sm:block flex-1 bg-white px-2 box-border md:px-5  pt-5 pb-[30px] rounded-xl">
            <h2 className=" text-[28px] font-bold text-left mb-[26px]">Филтр</h2>

            <div className="mb-[30px]">
              <p className=" font-medium mb-2">Страна-производитель</p>
              <div className=" bg-stone-100 rounded-md py-3 pl-5 pr-[10px] sm:pr-[200px] md:pr-[250px] text-stone-500 font-medium">Узбекистан</div>
            </div>

            <div className=" mb-[40px]">
              <p className=" font-medium mb-2">Цена</p>
              <div className=" w-full text-stone-500 font-medium flex ">
                <p className=" bg-stone-100 pl-5 pr-[118px] py-3  rounded-l-md w-[50%]">От</p>
                <p className=" bg-stone-100  py-3 pl-5 rounded-r-md border-l-2 pr-[118px] w-[50%] border-gray-400 ">До</p>
              </div>
            </div>

            <div className=" mb-[40px]">
              <p className=" font-medium mb-2">Цена</p>
              <div className=" flex justify-between items-center">
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-black ring-offset-2 ring-2 ring-black"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-slate-100 ring-offset-2 ring-2 ring-slate-100"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-red-500  ring-offset-2 ring-2 ring-red-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-orange-500   ring-offset-2 ring-2 ring-orange-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-green-500 ring-offset-2 ring-2 ring-green-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-purple-500 ring-offset-2 ring-2 ring-purple-500"></div>
              </div>
            </div>

            <div className=" mb-[40px]">
              <p className=" font-medium mb-2">Бренды товары</p>
              <input className=" outline-none w-full bg-stone-100 rounded-md py-3 pl-5  text-stone-500 font-medium " value={id} onChange={(e) => setId(e.target.value)} />
            </div>

            <div className=" mb-[40px]">
              <p className=" font-medium mb-2">Вместимость</p>
              <select className=" outline-none w-full bg-stone-100 rounded-md py-3 pl-5  text-stone-500 font-medium">
                <option defaultValue={"Вместимость"} className=" w-full bg-stone-100 my-3">
                  Вместимость
                </option>
                <option value={"Литр"} className=" w-full bg-stone-100 py-3">
                  Литр
                </option>
                <option value={"Кг"} className=" w-full bg-stone-100 py-3">
                  Кг
                </option>
                <option value={"Диаметр"} className=" w-full bg-stone-100 py-3">
                  Диаметр
                </option>
              </select>
            </div>

            <div className=" flex items-center justify-between">
              <button className="px-[20px] md:px-[32px] py-[17px] bg-stone-100 rounded-md font-medium text-[16px] md:text-xl" onClick={deleteItem}>
                &#88; Очистить
              </button>
              <div onClick={searchItem} typeof="button" className=" flex items-center gap-1 md:gap-3 bg-yellow-500 hover:bg-yellow-400 cursor-pointer rounded-md font-medium text-[16px] md:text-xl text-white px-[20px] md:px-[32px] py-[17px]">
                <img src={search} alt="search" /> <span>Найти</span>
              </div>
            </div>
          </div>

          <div className=" flex-1 md:flex-[3] w-full">
            <div className=" flex justify-between items-center">
              <h1 className="text-[20px] md:text-[25px] font-bold">Товары по поиску ({product.length})</h1>
              <Link className=" tracking-wide text-md text-blue-400 hover:text-blue-500 p-0 md:pt-5" to={"/itemsSite"}>
                Смотреть все {s}{" "}
              </Link>
            </div>

            <div className=" flex flex-col gap-[30px] w-full mt-10 md:mt-2 mb-11">
              {filter &&
                filter.map((item, ind) => {
                  if (ind <= 5)
                    return (
                      <div key={item.id} className=" bg-white  flex flex-col md:flex-row gap-7 md:gap-[40px] p-[15px] rounded-xl">
                        <NavLink to={`/itemsSite/${item.id}`} className=" border border-gray-300 w-full h-[200px] md:w-[169px] md:h-[169px] rounded-xl">
                          <img src={item.thumbnail} alt={item.brand} className=" object-contain w-full h-full" onClick={() => dispatch(getCategories(item.categoryId))} />
                        </NavLink>
                        <div className=" py-1 md:py-4 flex flex-col md:flex-row justify-between w-full">
                          <div>
                            <p className=" text-[20px] font-medium mb-[20px] md:mb-[72px] line-clamp-1 md:line-clamp-2">{item.brand}</p>
                            <p className=" font-bold text-xl">{+item.price} СУМ</p>
                          </div>
                          <div className=" flex mt-3 md:mt-0 flex-row md:flex-col gap-[35px]">
                            <div className=" bg-yellow-500 cursor-pointer hover:bg-yellow-400 p-[14px] w-[52px] rounded-md" onClick={() => handlerBasket(item)}>
                              <img src={basket} alt="" />
                            </div>
                            <div className=" bg-yellow-500 cursor-pointer hover:bg-yellow-400 p-[14px] w-[52px] rounded-md" onClick={() => handlerLike(item)}>
                              <img src={like} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
        <NavLink to={"/filterShowMore"} className=" text-center w-48  mx-auto  block bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white rounded-xl py-3 px-3">
          Показать больше
        </NavLink>
      </div>
      {open && (
        <Modal open={open}>
          <div className="mx-auto w-full bg-white px-2 box-border md:px-5  pt-5 pb-[30px] rounded-xl">
            <div className="flex justify-between">
              <h2 className=" text-[28px] font-bold text-left mb-[26px]">Филтр</h2>
              <p className=" cursor-pointer font-semibold text-2xl" onClick={() => setOpen(false)}>
                &#x58;
              </p>
            </div>

            <div className=" mb-[30px]">
              <p className=" font-medium mb-2">Категория</p>
              <select className=" outline-none w-full bg-stone-100 rounded-md py-3 pl-5  text-stone-500 font-medium" value={brand} onChange={(e) => setBrand(e.target.value)}>
                {product.map((item) => {
                  return (
                    <option key={item.id} value={item.categoryId} className=" w-full bg-stone-100 py-3">
                      {item.brand.split("").slice(0, 35)}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-[30px]">
              <p className=" font-medium mb-2">Страна-производитель</p>
              <div className=" bg-stone-100 rounded-md py-3 pl-5 pr-[10px] sm:pr-[200px] md:pr-[250px] text-stone-500 font-medium">Узбекистан</div>
            </div>

            <div className=" mb-[30px]">
              <p className=" font-medium mb-2">Цена</p>
              <div className=" w-full text-stone-500 font-medium flex ">
                <p className=" bg-stone-100 pl-5 pr-[118px] py-3  rounded-l-md w-[50%]">От</p>
                <p className=" bg-stone-100  py-3 pl-5 rounded-r-md border-l-2 pr-[118px] w-[50%] border-gray-400 ">До</p>
              </div>
            </div>

            <div className=" mb-[30px]">
              <p className=" font-medium mb-2">Цена</p>
              <div className=" flex justify-between items-center">
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-black ring-offset-2 ring-2 ring-black"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-slate-100 ring-offset-2 ring-2 ring-slate-100"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-red-500  ring-offset-2 ring-2 ring-red-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-orange-500   ring-offset-2 ring-2 ring-orange-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-green-500 ring-offset-2 ring-2 ring-green-500"></div>
                <div className=" cursor-pointer w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full bg-purple-500 ring-offset-2 ring-2 ring-purple-500"></div>
              </div>
            </div>

            <div className=" mb-[30px]">
              <p className=" font-medium mb-2">Бренды товары</p>
              <input className=" outline-none w-full bg-stone-100 rounded-md py-3 pl-5  text-stone-500 font-medium " defaultValue={brand} />
            </div>

            <div className=" mb-[30px]">
              <p className=" font-medium mb-2">Вместимость</p>
              <select className=" outline-none w-full bg-stone-100 rounded-md py-3 pl-5  text-stone-500 font-medium">
                <option defaultValue={"Вместимость"} className=" w-full bg-stone-100 my-3">
                  Вместимость
                </option>
                <option value={"Литр"} className=" w-full bg-stone-100 py-3">
                  Литр
                </option>
                <option value={"Кг"} className=" w-full bg-stone-100 py-3">
                  Кг
                </option>
                <option value={"Диаметр"} className=" w-full bg-stone-100 py-3">
                  Диаметр
                </option>
              </select>
            </div>

            <div className=" flex items-center justify-between">
              <button className="px-[20px] md:px-[32px] py-[17px] bg-stone-100 rounded-md font-medium text-[16px] md:text-xl" onClick={deleteItem}>
                &#88; Очистить
              </button>
              <div onClick={searchItem} typeof="button" className=" flex items-center gap-1 md:gap-3 bg-yellow-500 hover:bg-yellow-400 cursor-pointer rounded-md font-medium text-[16px] md:text-xl text-white px-[20px] md:px-[32px] py-[17px]">
                <img src={search} alt="search" /> <span>Найти</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Filter;
