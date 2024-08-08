import { useDispatch } from "react-redux";
import { getCategories } from "../reducers/siteSlice";
import { Link } from "react-router-dom";
import { basket, like } from "../assets";
import { setBasket, setLike } from "../reducers/basketReducer";
import { message } from "antd";
function Cart({ item }) {
  const dispatch = useDispatch();
  const handler = (categoryId) => {
    dispatch(getCategories(categoryId));
  };

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
      content: "добавлен в избранное",
    });
  };
  return (
    <div className=" mt-[23px] w-[210px] sm:w-[255px] pt-[23px] px-[12px]  pb-[12px]  sm:pt-5  sm:px-[15px]  sm:pb-[28px] rounded-[15px] shadow-[ 0px 2px 2px 0px rgba(237, 237, 237, 0.25)] bg-white ">
      <div onClick={() => handler(item.categoryId)}>
        <img src={item.thumbnail} className=" w-full object-cover h-124px sm:h-[179px]" alt="" />

        <div className=" flex flex-col sm:mt-[18px] mt-[16px]">
          <Link to={`/itemsSite/${item.id}`} className=" font-bold cursor-pointer line-clamp-1">
            {item.brand}
          </Link>
          <span className=" line-clamp-2">{item.category}</span>
        </div>
        <p className=" text-[16px] font-bold mt-[22px] sm:mt-[32px] mb-[18px]">{item.price} cум</p>
      </div>

      <div className=" flex gap-[10px] ">
        <div onClick={() => handlerBasket(item)} className="   cursor-pointer bg-yellow-500 text-white py-[12px] pl-[5px] md:pl-[22px] flex gap-2 rounded-[10px] pr-[5px] lg:pr-[29px] hover:bg-yellow-400  w-[122px] sm:w-[171px]">
          <img src={basket} alt="log" className=" text-[15px] w-[22px] h-[22px]" /> В корзину
        </div>
        <div onClick={() => handlerLike(item)} className="  cursor-pointer bg-yellow-500 rounded-[10px] py-[12px] px-[10px] hover:bg-yellow-400  w-[40px] sm:w-[44px]">
          <img src={like} alt="log" className=" text-[15px] w-[22px] h-[22px]" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
