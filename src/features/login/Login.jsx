import React, { useState } from "react";
import Modal from "../../ui/Modal";
import { register } from "../../assets";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pvd, setPvd] = useState("");
  const [show, setShow] = useState(true);
  const handlerLogin = (e) => {
    e.preventDefault();
    user.userNumber != phoneNumber ? alert("Siz Telfon raqamdi notogri kiritingiz") : user.password != pvd ? alert("Siz Parolni notogri kiritingiz") : navigate("/account");
  };
  const handlerModal = () => {
    setShow(false);
    navigate("/");
  };
  const hanlerParol =()=>{
    navigate("/register")
    localStorage.removeItem("user")
  }
  return (
    <Modal open={show}>
      <div className="lg:container mx-auto px-4 relative">
        <div className=" bg-customGray rounded-[35px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <img src={register} alt="exit" className=" w-[32px] mt-[20px] sm:mt-[30px] mr-[20px] sm:mr-[30px] ml-auto cursor-pointer" onClick={handlerModal} />
          <div className=" mt-[10px] sm:mt-[20px] pb-[42px] sm:pb-[72px] pl-[30px] sm:pl-[89px] pr-[35px] sm:pr-[75px] w-[350px] xs:w-[400px]  sm:w-[629px] ">
            <form onSubmit={handlerLogin}>
              <h2 className=" font-semibold text-[28px] sm:text-[42px] mb-[18px] sm:mb-[34px]">Войти</h2>
              <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                <span className="text-[15px] font-medium">Электронная почта или номер телефона</span>
                <input required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[19px] pl-[15px] sm:pl-[19px]  w-full" />
              </label>
              <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                <span className="text-[15px] font-medium">Пароль</span>
                <input required value={pvd} onChange={(e) => setPvd(e.target.value)} type="password" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[19px] pl-[15px] sm:pl-[19px]  w-full" />
              </label>

              <div className=" flex gap-4 mb-5 items-center">
                <p onClick={hanlerParol} className=" cursor-pointer text-[15px] font-medium text-blue-500 tracking-wider">Забыли свой пароль ?</p>
              </div>
              <button className=" bg-btnsBgColor hover:opacity-80 rounded-xl text-white font-medium text-[18px] py-[19px] px-[39px]">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
