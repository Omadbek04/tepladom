import { Link, useNavigate } from "react-router-dom";
import { register } from "../../assets";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./RegisterSlice";
import PlacingOrder from "../placingAnOrder/PlacingOrder";
function Register() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pvd, setPvd] = useState("");
  const [pvd2, setPvd2] = useState("");
  const [showPlasing, setShowPlasing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUser = (e) => {
    e.preventDefault();
    if (pvd == pvd2) {
      const userObj = {
        id: new Date().getTime(),
        userName: name,
        userNumber: phoneNumber,
        password: pvd,
        password2: pvd2,
      };
      dispatch(createUser(userObj));
      localStorage.setItem("user", JSON.stringify(userObj));
      navigate("/");
    } else {
      alert("Подтвердить пароль неправильно");
    }
  };
  const handlerShow = () => {
    setShow(false);
    navigate("/");
  };
  return (
    <>
      <Modal open={show}>
        <div className="lg:container mx-auto px-4 relative">
          <div className=" bg-customGray rounded-[35px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <img src={register} alt="exit" className=" w-[32px] mt-[20px] sm:mt-[30px] mr-[20px] sm:mr-[30px] ml-auto cursor-pointer" onClick={handlerShow} />
            <div className=" mt-[10px] sm:mt-[20px] pb-[42px] sm:pb-[72px] pl-[30px] sm:pl-[89px] pr-[35px] sm:pr-[75px] w-[350px] xs:w-[400px]  sm:w-[629px] ">
              <form onSubmit={handleUser}>
                <h2 className=" font-semibold text-[28px] sm:text-[42px] mb-[18px] sm:mb-[34px]">Регистрация</h2>
                <div className=" flex items-center gap-3  sm:gap-5 mb-[18px] sm:mb-[40px]">
                  <span className=" text-[15px] font-medium">Иметь аккаунт?</span>
                  <Link to={"/login"} className="  text-blue-500 text-[15px] font-medium">
                    Войти
                  </Link>
                </div>
                <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                  <span className="text-[15px] font-medium">Ваше имя</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[13px] sm:py-[19px] pl-[15px] sm:pl-[19px]  w-full" required />
                </label>
                <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                  <span className="text-[15px] font-medium">Электронная почта или номер телефона</span>
                  <input type="text" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[13px] sm:py-[19px] pl-[15px] sm:pl-[19px]  w-full" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                  <span className="text-[15px] font-medium">Пароль</span>
                  <input value={pvd} onChange={(e) => setPvd(e.target.value)} required type="password" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[13px] sm:py-[19px] pl-[15px] sm:pl-[19px]  w-full" />
                </label>
                <label className=" flex flex-col gap-[12px] sm:gap-[14px] mb-[14px] sm:mb-[24px]">
                  <span className="text-[15px] font-medium">Подтвердить пароль</span>
                  <input value={pvd2} onChange={(e) => setPvd2(e.target.value)} required type="password" className=" outline-none focus:ring-2 ring-blue-400 ring-offset-4 bg-white rounded-xl py-[13px] sm:py-[19px] pl-[15px] sm:pl-[19px]  w-full" />
                </label>
                <div className=" flex gap-4 mb-5 items-center">
                  <input required type="checkbox" className=" cursor-pointer w-4 h-4 accent-inherit focus:accent-lime-600 scale-150  transition-colors duration-300" />
                  <p className="text-[15px] font-medium">Я согласен с Условиями и Политикой конфиденциальности</p>
                </div>
                <button className=" bg-btnsBgColor hover:opacity-80 rounded-xl text-white font-medium text-[18px] py-[12px] px-[39px]">Регистрация</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {showPlasing && <PlacingOrder title={title} id={id} />}
    </>
  );
}

export default Register;
