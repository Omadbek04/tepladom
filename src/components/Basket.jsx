import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { l2, l3 } from "../assets";
import { deleteBasket } from "../reducers/basketReducer";
import PlacingOrder from "../features/placingAnOrder/PlacingOrder";
import { useNavigate } from "react-router-dom";

function Basket() {
  const { basket } = useSelector((state) => state.basket);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteBasket(id));
  };
  const handleOrder = (text) => {
    setOpen(true);
    setTitle(text.brand);
    setId(text.id);
  };
  return (
    <>
      <div className="lg:container mx-auto px-4 mb-20">
        <h2 className=" text-[20px] font-bold mb-[30px] sm:text-[30px]">Корзинка</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4">
          {basket &&
            basket
              .filter((item) => item.id == item.id)
              .map((item, ind) => (
                <div key={ind} className=" rounded-lg  pt-[5px] px-[10px] pb-3 bg-white ">
                  <img src={item.thumbnail} alt={item.title} className=" h-[142px] mx-auto mb-2  object-cover" />
                  <p className=" capitalize font-semibold text-1xl line-clamp-1 mb-1 ">{item.brand}</p>
                  <p className=" capitalize font-medium text-xl  mb-[22px] line-clamp-1">{item.category}</p>
                  <p className=" font-semibold text-xl mb-[18px]">{item.price} сум</p>
                  <div className=" flex gap-2 items-center">
                    <button onClick={() => handleOrder(item)} className="bg-yellow-500 hover:bg-yellow-400 py-2 px-[6px] flex items-center text-white rounded-lg cursor-pointer  border-2 ">
                      <img src={l3} alt="" />

                      <span className="ml-1">Оформить</span>
                    </button>

                    <button onClick={() => deleteItem(item.id)} className="text-white rounded-lg cursor-pointer bg-yellow-500 py-2 px-[6px] hover:bg-red-500 border-2 hover:border-2  hover:border-red-500 hover:text-red-500 ">
                      <img src={l2} alt="" />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {open && <PlacingOrder title={title} id={id} />}
    </>
  );
}

export default Basket;
