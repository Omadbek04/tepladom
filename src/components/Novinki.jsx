import React, { useState } from "react";
import Info from "./Info";
import { message } from "antd";

function Novinki() {
  const [phone, setPhone] = useState("");
  const [commet, setCommet] = useState("");
  const [name, setName] = useState("");
  const remove = () => {
    setCommet("");
    setName("");
    setPhone("");
  };
  let token = "7049866842:AAFI_3ztxY3A_H6fjqV0m2vvQJyLNkkJEJk";
  let chat_id = "-1002104676003";
  const user = `
  Name: ${name};
  Phone: ${phone};
  Description: ${commet}
  `;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${user}`;
  const sendMessage = (e) => {
    e.preventDefault();

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    remove();
    message.open({
      type: "success",
      content: "Ваше сообщение  отправлено",
    });
  };
  return (
    <div className=" lg:container mx-auto px-4 mb-16">
      <Info>Мастерам</Info>
      <p className=" mt-5 mb-8 text-[18px]">
        Вы мастер, который чинит то, что сломано и строит что-то новое?
        <br />
        <br />
        Заявите о себе на сайте — <a className=" text-blue-500"> Teplodomshop.com!</a>
        <br />
        <br />
        <a className=" text-blue-500">Teplodomshop.com</a> — это база мастеров по ремонту квартир/домов и других специальность.
        <br />
        <br />В каталоге зарегистрированы мастера которые хотят без всяких проблем клиентов. Вы получите персональную страничку в интернете с фотографиями работ и контактами, которую сможете отправлять клиентам. А самые лучшие мастера, которые оставили свои данные нам, чтобы зарегистрироваться — получать стабильный поток клиентов
      </p>
      <Info>Заказать обратный звонок</Info>
      <form id="form" className=" w-full sm:w-[50%] flex flex-col gap-5  my-7">
        <label className=" flex flex-col gap-2">
          <span>Введите имя</span>
          <input required id="text" type="text" className="w-full pl-2  outline-none border-[2px] rounded-md border-gray-400 py-4" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className=" flex flex-col gap-2">
          <span>Введите номер телефона</span>
          <input required type="text" className="w-full pl-2  outline-none border-[2px] rounded-md border-gray-400 py-4" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label className=" flex flex-col gap-2">
          <span>Комментарии</span>
          <textarea required className="w-full pl-2  outline-none border-[2px] rounded-md border-gray-400 h-[100px] resize-none" value={commet} onChange={(e) => setCommet(e.target.value)}></textarea>
        </label>
        <button className=" bg-btnsBgColor text-white py-2 w-[106px] rounded-md outline-none hover:opacity-90" onClick={sendMessage}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Novinki;
