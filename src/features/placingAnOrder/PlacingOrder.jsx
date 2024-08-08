import React, { useRef, useState } from "react";
import Modal from "../../ui/Modal";
import { register } from "../../assets";
import { Link } from "react-router-dom";
import { message } from "antd";

function PlacingOrder({ title, id }) {
  const [show, setShow] = useState(true);
  const [order, setOrder] = useState(true);
  const count = useRef("");
  const name = useRef("");
  const region = useRef("");
  const phoneNumber = useRef("");
  const area = useRef("");
  const locality = useRef("");
  const adres = useRef("");
  let token = "7049866842:AAFI_3ztxY3A_H6fjqV0m2vvQJyLNkkJEJk";
  let chat_id = "-1002104676003";
  const handlerShowMOdal = () => {
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: new Date().getTime(),
      count: count.current.value,
      name: name.current.value,
      region: region.current.value,
      phoneNumber: phoneNumber.current.value,
      area: area.current.value,
      locality: locality.current.value,
      adres: adres.current.value,
    };
    const order = JSON.stringify(user).toString();
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${order}`;
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // remove();
    message.open({
      type: "success",
      content: "Ваше zakaz отправлено",
    });
    setOrder(false);
  };
  return (
    <Modal open={show}>
      {order ? (
        <div className=" md:container  bg-white  rounded-xl pt-5 sm:pt-[30px] px-[20px] sm:px-[30px] pb-[30px] sm:pb-[40px]">
          <div className=" flex justify-between items-center mb-5 sm:mb-10">
            <h2 className=" text-[20px] sm:text-[28px] font-semibold">Оформление заказа</h2>
            <img src={register} alt="close" className=" w-[20px] sm:w-[26px] cursor-pointer" onClick={handlerShowMOdal} />
          </div>
          <h3 className=" text-[18px] sm:text-xl font-medium mb-5 sm:mb-[30px]">Купить {title}</h3>
          <form className=" pr-0 sm:pr-20 " onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-24">
              <div className="flex-1">
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]">Введите Штук</span>
                  <input ref={count} type="number" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]">Введите имя</span>
                  <input ref={name} type="text" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]">Введите город / район</span>
                  <input ref={region} type="text" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
              </div>
              <div className="flex-1">
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]"> Введите номер телефона</span>
                  <input ref={phoneNumber} type="number" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]"> Введите область</span>
                  <input ref={area} type="text" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
                <label className=" mb-3 sm:mb-5 block">
                  <span className=" text-sm  block mb-[10px]">Введите населённый пункт</span>
                  <input ref={locality} type="text" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
                </label>
              </div>
            </div>
            <label className=" mb-3 sm:mb-5 block">
              <span className=" text-sm  block mb-[10px]">Введите адресс</span>
              <input ref={adres} type="text" className=" py-3 pl-5 outline-none border rounded-md w-full focus:ring-2" required />
            </label>
            <div className=" flex  flex-col sm:flex-row sm:items-center gap-2 mb-[19px]">
              <input type="checkbox" className="w-[18px] h-[18px] focus:outline-none active:accent-gray-500 outline-none border-none cursor-pointer accent-inherit focus:accent-gray-500" />
              <p>
                Я согласен с <span className=" text-blue-500">правилами публичной оферты</span>{" "}
              </p>
            </div>
            <button className="w-full sm:w-52 bg-btnsBgColor text-white py-3 px-11 hover:opacity-85 rounded-[10px] outline-none">Оформить заказ</button>
          </form>
        </div>
      ) : (
        <div className=" w-[752px]  bg-white pt-5 sm:pt-[30px] pr-[30px] pb-[100px] sm:pb-[139px] rounded-[20px]">
          <img src={register} alt="close" className=" ml-auto w-[20px] sm:w-[26px] cursor-pointer mb-[53px] sm:mb-[73px]" onClick={handlerShowMOdal} />
          <h1 className=" text-[30px] sm:text-[40px] font-semibold text-center mb-[20px]">Спасиба за покупка !</h1>
          <p className=" text-center text-[20px] font-medium mb-7 sm:mb-10">Ваш номер заказ №{id}</p>
          <Link to={"/"} className=" mx-auto block w-[201px] text-center bg-btnsBgColor text-white  py-[9px] px-5 rounded-lg">
            Главная страница
          </Link>
        </div>
      )}
    </Modal>
  );
}

export default PlacingOrder;
