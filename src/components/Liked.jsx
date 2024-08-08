import { useDispatch, useSelector } from "react-redux";
import { deleteLike, setBasket } from "../reducers/basketReducer";
import { message } from "antd";
import { l1, l2 } from "../assets";

function Liked() {
  const dispatch = useDispatch();
  const { like } = useSelector((state) => state.basket);
  const handlerBasket = (item) => {
    dispatch(setBasket(item));
    message.open({
      type: "success",
      content: "добавлено в корзину",
    });
  };
  const deleteItem = (id) => {
    dispatch(deleteLike(id));
  };
  return (
    <div className="lg:container mx-auto px-4 mb-20">
      <h2 className=" text-[20px] font-bold mb-[30px] sm:text-[30px]">Избранные товары</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-3">
        {like &&
          like.map((item, ind) => (
            <div key={ind} className=" rounded-lg  pt-[5px] px-[10px] pb-3 bg-white  ">
              <img src={item.thumbnail} alt={item.title} className=" h-[142px] mx-auto mb-2  object-cover" />
              <p className=" capitalize font-semibold text-1xl line-clamp-1 mb-1 ">{item.brand}</p>
              <p className=" capitalize font-semibold text-xl  mb-[22px] line-clamp-1">{item.category}</p>
              <p className=" font-semibold text-xl mb-[18px]">{item.price} сум</p>
              <div className=" flex gap-2 items-center">
                <button className="bg-yellow-500 py-2 hover:bg-yellow-400 px-[6px] flex items-center text-white rounded-lg cursor-pointer  border-2 " onClick={() => handlerBasket(item)}>
                  <img src={l1} alt="" />
                  <span className="ml-1">В корзину</span>
                </button>

                <button onClick={() => deleteItem(item.id)} className="text-white rounded-lg cursor-pointer bg-yellow-500 py-2 px-[6px] hover:bg-red-500 border-2 hover:border-2  hover:border-red-500 hover:text-red-500 ">
                  <img src={l2} alt="" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Liked;
