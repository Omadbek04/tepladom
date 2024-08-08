import React from "react";
import { aksiya, basket, like } from "../assets";
import Info from "./Info";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setLike } from "../reducers/basketReducer";
import { getCategories } from "../reducers/siteSlice";
import { message } from "antd";

function Aksiya() {
  const { product } = useSelector((state) => state.site);
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
    <div className=" lg:container mx-auto px-4 mb-16">
      <Info>Товары по акции</Info>
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 mt-[30px] mb-[60px]">
        {product &&
          product.map((item) => {
            if (item.discount) {
              return (
                <div key={item.id} className=" px-[10px] pt-[3px] pb-3 bg-white rounded-xl relative">
                  <Link to={`/itemsSite/${item.id}`} className=" cursor-pointer " onClick={() => handler(item.categoryId)}>
                    <img src={aksiya} alt="aksiya" className=" absolute z-10 -top-2 -left-2" />

                    <img src={item.thumbnail} alt="" className=" h-[146px] object-contain w-full" />
                  </Link>
                  <div className=" flex flex-col sm:mt-[18px] mt-[16px]">
                    <span className=" line-clamp-2 font-medium">{item.category}</span>
                  </div>
                  <div>
                    <p className="text-[16px] mb-1 text-red-500 line-through font-medium">{item.discount} cум </p>
                    <p className=" text-[16px] font-bold  ">{item.price} cум</p>
                  </div>
                  <div className=" flex justify-between xs:justify-start gap-[10px] mt-2 ">
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
          })}
      </div>
    </div>
  );
}

export default Aksiya;
