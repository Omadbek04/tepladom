import { useDispatch, useSelector } from "react-redux";
import { basket, like } from "../../assets";
import { NavLink } from "react-router-dom";
import Info from "../Info";
import { setBasket, setLike } from "../../reducers/basketReducer";
import { message } from "antd";
import { getCategories } from "../../reducers/siteSlice";

function FilterAll() {
  const dispatch = useDispatch();
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
  const { filter } = useSelector((state) => state.site);
  return (
    <div className=" lg:container mx-auto px-4 mb-8">
      <Info>Категории</Info>
      <div className="  w-full flex flex-wrap  mt-6 justify-center md:justify-between   capitalize gap-4 md:gap-[30px] lg:gap-0">
        {filter &&
          filter.map((item) => {
            return (
              <div key={item.id} className=" mt-[23px] w-[255px] pt-[23px] px-[12px]  pb-[12px]  sm:pt-5  sm:px-[15px]  sm:pb-[28px] rounded-[15px] shadow-[ 0px 2px 2px 0px rgba(237, 237, 237, 0.25)] bg-white ">
                <NavLink to={`/itemsSite/${item.id}`}>
                  <img src={item.thumbnail} className=" w-full object-cover h-124px sm:h-[179px]" alt="" onClick={()=>dispatch(getCategories(item.categoryId))}/>
                </NavLink>
                <div className=" flex flex-col sm:mt-[18px] mt-[16px]">
                  <span className=" line-clamp-1 text-[18px] font-bold">{item.brand}</span>
                  <span className=" line-clamp-2 font-medium">{item.category}</span>
                </div>
                <p className=" text-[16px] font-bold mt-[22px] sm:mt-[32px] mb-[18px]">{item.price} cум</p>

                <div className=" flex gap-[10px] ">
                  <div onClick={() => handlerBasket(item)} className="  cursor-pointer  bg-yellow-500 text-white py-[12px] pl-[5px] md:pl-[22px] flex gap-2 rounded-[10px] pr-[5px] lg:pr-[29px] hover:bg-yellow-400  w-[122px] sm:w-[171px]">
                    <img src={basket} alt="log" className=" text-[15px] w-[22px] h-[22px]" /> В корзину
                  </div>
                  <div onClick={() => handlerLike(item)} className="  cursor-pointer bg-yellow-500 rounded-[10px] py-[12px] px-[10px] hover:bg-yellow-400  w-[40px] sm:w-[44px]">
                    <img src={like} alt="log" className=" text-[15px] w-[22px] h-[22px]" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FilterAll;
