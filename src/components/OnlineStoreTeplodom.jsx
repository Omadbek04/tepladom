import { store } from "../assets";

function OnlineStoreTeplodom() {
  return (
    <div className=" lg:container mx-auto px-4 mb-[40px] sm:mb-[120px]">
      <h1 className="text-center text-[20px] sm:text-3xl sm:text-start font-semibold mb-2">Интернет магазин Теплодом</h1>

      <div className=" flex flex-col md:flex-row justify-center items-center sm:justify-between gap-[30px] sm:gap-[57px] ">
        <div className=" ">
          <p className=" hidden sm:block  text-[18px] font-normal">
            Компания <span className=" font-bold">Teplodom</span> является лидером строительных материалов на локальном рынке и предлагает широкий ассортимент строительных, отделочных материалов и товаров для дома всем клиентам Узбекистана.
            <br />
            В каталоге на сайте Teplodom представлена продукция самых известных брендов от крупнейших мировых производителей, а также популярные отечественные торговые марки. Благодаря удобной навигации, легко найти необходимый товар и отложить его в корзину для оформления онлайн заказа.
            <br />
            Высокое качество, экспертные знания, качественные ресурсы и улучшение производства с каждым днем является обязательным требованием для нашего бренда!
          </p>
          <p className=" blcok sm:hidden">
            Компания <span className=" font-bold">Teplodom</span> является лидером строительных материалов на локальном рынке и предлагает широкий ассортимент строительных, отделочных материалов и товаров для дома всем клиентам Узбекистана.
          </p>
        </div>
        <img src={store} alt="Интернет магазин Теплодом" className=" w-full sm:w-[539px]" />
      </div>
    </div>
  );
}

export default OnlineStoreTeplodom;
