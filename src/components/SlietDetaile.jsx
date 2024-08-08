import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetailProduct } from "../services/getDetail";
import { detail, k, date, basket, like } from "../assets";
import nav3 from "../assets/nav3.svg";
import nav4 from "../assets/nav4.svg";
import { useDispatch, useSelector } from "react-redux";
import { setBasket, setLike } from "../reducers/basketReducer";
import { message } from "antd";

function SlietDetaile() {
  const { ctList } = useSelector((state) => state.site);
  const { id } = useParams();
  const url = "https://online-json-server-api.up.railway.app/project/66b4aedd340dd55056fb5a7c/products/" + id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDetailProduct(url);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

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
  
  return (
    <>
      <div className=" lg:container mx-auto px-4 bg-white  rounded-lg pb-6 pt-[30px] mb-[50px] flex  sm:flex-row flex-col items-center gap-3">
        {data && (
          <>
            <div className=" w-full sm:flex-1 ">
              <h2 className=" block sm:hidden text-[30px] font-semibold mt-3 line-clamp-1">{data.brand}</h2>
              <img src={data.thumbnail} alt="" className="w-full h-[356px] xs:w-[420px] xs:h-[393.4px]  mb-2" />
            </div>
            <div className=" sm:flex-1  items-center">
              <h2 className="hidden sm:block  text-[30px] font-semibold mb-[30px] line-clamp-1">{data.brand}</h2>
              <p className=" text-[20px] font-normal mb-[33px]">{data.category}</p>
              <div className=" flex gap-[14px] items-center mb-[33px]">
                <img src={detail} alt="dasdasdada " className=" w-[28px] h-[21px]" />
                <p className="text-[20px] font-normal">(1.185*0.585)(20мм)</p>
              </div>
              <div className=" flex items-center gap-3  mb-[20px]">
                <span className=" text-[28px] text-red-500 font-medium">{data.discount ? data.price - +data.discount : data.price} cум </span>
                {data.discount && <span className="  pt-2 line-through text-gray-500 font-medium text-[18px]"> {data.discount} сум</span>}
              </div>
              <div className=" flex gap-[10px]">
                <img src={k} className=" w-[40px] h-[40px] bg-orange-500  rounded-md py-2 px-2  object-contain border-black " alt=" logo" />
                <img src={date} className=" w-[40px] h-[40px] border-[2px]  rounded-md py-2 px-2 object-contain border-black " alt=" logo" />
                <img src={nav3} onClick={() => handlerLike(data)} className=" cursor-pointer w-[40px] h-[40px] border-[2px]  rounded-md py-2 px-2  object-contain border-black " alt=" logo" />
                <img src={nav4} onClick={() => handlerBasket(data)} className=" cursor-pointer w-[40px] h-[40px] border-[2px]  rounded-md py-2 px-2 object-contain border-black " alt=" logo" />
                <div className=" flex items-center border-2 border-gray-500 rounded-md px-2 gap-1">
                  <button className="text-[25px]  h-full font-semibold cursor-pointer">-</button>
                  <p className=" text-[20px] border-x-[1px]  h-full  border-black px-2 font-semibold cursor-pointer">2</p>
                  <button className="text-[25px] h-full  font-semibold cursor-pointer">+</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="  lg:container mx-auto px-4 w-full flex flex-wrap  mt-6 justify-center md:justify-between   capitalize gap-4 md:gap-[30px] lg:gap-0">
        {ctList &&
          ctList.map((item) => {
            return (
              <div key={item.id} className=" mt-[23px] w-[255px] pt-[23px] px-[12px]  pb-[12px]  sm:pt-5  sm:px-[15px]  sm:pb-[28px] rounded-[15px] shadow-[ 0px 2px 2px 0px rgba(237, 237, 237, 0.25)] bg-white ">
                <img src={item.thumbnail} className=" w-full object-cover h-124px sm:h-[179px]" alt="" />

                <div className=" flex flex-col sm:mt-[18px] mt-[16px]">
                  <span className=" line-clamp-1 font-bold">{item.brand}</span>
                  <span className=" line-clamp-2">{item.category}</span>
                </div>
                <p className=" text-[16px] font-bold mt-[22px] sm:mt-[32px] mb-[18px]">{item.price} cум</p>

                <div className=" flex gap-[10px] ">
                  <div onClick={() => handlerBasket(item)} className=" bg-yellow-500 text-white py-[12px] pl-[5px] md:pl-[22px] flex gap-2 rounded-[10px] pr-[5px] lg:pr-[29px] hover:bg-yellow-400  w-[122px] sm:w-[171px] cursor-pointer">
                    <img src={basket} alt="log" className=" text-[15px] w-[22px] h-[22px]" /> В корзину
                  </div>
                  <div onClick={() => handlerLike(item)} className="bg-yellow-500 rounded-[10px] py-[12px] px-[10px] hover:bg-yellow-400  w-[40px] sm:w-[44px] cursor-pointer">
                    <img src={like} alt="log" className=" text-[15px] w-[22px] h-[22px] " />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SlietDetaile;