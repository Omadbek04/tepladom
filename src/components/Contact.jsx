import React, { useState } from "react";
import { c11, c2, c3, c4, c5, c6 } from "../assets";
import Info from "./Info";
import { message } from "antd";

const contact = [
  {
    id: 1,
    img: c11,
    title: "Телефон",
    text: "+998 (91) 697 71 81",
  },
  {
    id: 2,
    img: c2,
    title: "Локация",
    text: " ул. Уста Ширин, рынок Джамий, дом 134, магазин 131",
  },
  {
    id: 3,
    img: c3,
    title: "Е-майл",
    text: " abdullayevomadbek709@gmail.com",
  },
  {
    id: 4,
    img: c11,
    title: "Телефон",
    text: " +998 (91) 697 71 81",
  },
  {
    id: 5,
    img: c4,
    title: "Расписание",
    text: " Мы в вашем распоряжении 7 дней в неделю!",
  },
  {
    id: 6,
    img: c5,
    title: "Время",
    text: "Каждый день с 8:00 – 18:00",
  },
];

function Contact() {
  const [phone, setPhone] = useState("");
  const [commet, setCommet] = useState("");
  const [name, setName] = useState("");
  let token = "7049866842:AAFI_3ztxY3A_H6fjqV0m2vvQJyLNkkJEJk";
  let chat_id = "-1002104676003";
  const remove = () => {
    setCommet("");
    setName("");
    setPhone("");
  };
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
      content: "Ваше сообщение было отправлено",
    });
  };

  return (
    <div className=" lg:container mx-auto px-4">
      <Info>Контакты</Info>

      <div className=" mt-5 sm:mt-10 flex justify-center items-center gap-5 sm:gap-10 text-center  flex-wrap mb-[80px]">
        {contact.map((item) => (
          <div key={item.id} className=" flex flex-col  justify-center  box-border items-center w-[100%] xs:w-[40%] sm:w-[30%] h-[215px]">
            <div className=" w-[120px] h-[120px] box-border  border-[5px] rounded-full flex-wrap  border-borderColor   flex items-center justify-center">
              <img src={item.img} alt={item.title} className=" w-[57px] h-[57px]" />
            </div>
            <h3 className=" font-bold tracking-widest text-xl">{item.title}</h3>
            <p className=" font-semibold text-[18px] line-clamp-2  sm:line-clamp-1 ">{item.text}</p>
          </div>
        ))}
      </div>
      <Info>Заказать обратный звонок</Info>

      <div className=" mt-6 flex items-center justify-between flex-col md:flex-row mb-20 gap-10 ">
        <form id="form" className=" flex flex-col gap-5 w-full sm:flex-1">
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
        <div className=" flex-1">
          <a href="https://yandex.uz/maps/10332/kokand/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>
            Qo‘qon
          </a>
          <a href="https://yandex.uz/maps/geo/771298515/?ll=70.940555%2C40.523527&utm_medium=mapframe&utm_source=maps&z=12.71" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
            Qoʻqon — Yandex Xarita
          </a>
          <iframe className=" rounded-[20px] min-w-[350px] sm:min-w-[700px]  md:min-w-full h-[400px]" src="https://yandex.uz/map-widget/v1/?ll=70.940555%2C40.523527&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTg1MTUSKU_Ku3piZWtpc3RvbiwgRmFyZ8q7b25hIHZpbG95YXRpLCBRb8q7cW9uIgoNf-GNQhUXKCJC&z=12.71" frameBorder="1" allowFullScreen={true} style={{ position: "relative" }}></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
