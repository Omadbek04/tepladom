import Flickity from "react-flickity-component";
import { h1, h2, h3, h4, h5, h6, h7, h8, h9 } from "../assets/index";
import Shooter from "./Shooter";
import CategoriesCart from "./Categories-cart";
import Site from "./Site";
import Brend from "./Brend";
import OurAdvantages from "./OurAdvantages";
import Comanda from "./Comanda";
import OnlineStoreTeplodom from "./OnlineStoreTeplodom";
function Home() {
  function Carousel() {
    return (
      <Flickity className="lg:container mx-auto mt-[20px] sm:mt-[60px]">
        <div className={`w-full h-[307px]  sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row-reverse xs:flex-row items-center lg:px-4 px-3`} style={{ backgroundImage: `url(${h1})` }}>
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">Пеноплекс Основа</h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 "> Пеноплэкс» — российская компания, производитель тепло- и гидроизоляционных, а также декоративно-отделочных материалов на основе полимеров, основной вид продукции — теплоизоляционные плиты из экструзионного пенополистирола</p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">производитель тепло- и гидроизоляционных материалов.</p>
          </div>
          <img src={h2} alt="Пеноплекс" className=" object-contain w-[150px] h-[151px] sm:h-[391px] sm:w-[317px]" />
        </div>

        <div className={` w-full h-[307px] sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row-reverse xs:flex-row items-center lg:px-4 px-3`} style={{ backgroundImage: `url(${h3})`, objectFit: "cover" }}>
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white  max-w-[129px]  sm:text-[48px]">Гипсакартон</h2>
            <p className="  text-white max-w-[645px] mt-4  line-clamp-4 sm:line-clamp-0"> Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.</p>
          </div>
          <img src={h4} alt="Пеноплекс" className=" object-contain w-[150px] h-[151px] sm:h-[391px] sm:w-[317px]" />
        </div>

        <div className={`w-full h-[307px]  sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row-reverse xs:flex-row items-center lg:px-4 px-3`} style={{ backgroundImage: `url(${h5})` }}>
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">Basalt wool тепло и тихо</h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 "> Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.</p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">Cтроительный материал, представляющий собой лист состоящий из двух слоёв</p>
          </div>
          <div className=" flex justify-center items-center flex-col  relative">
            <img src={h6} alt="Пеноплекс" className=" sm:absolute  sm:top-32 object-contain w-[220px] h-[251px] sm:h-[391px] sm:w-[317px]" />
            <img src={h7} alt="Пеноплекс" className=" hidden  sm:block object-contain w-[120px] h-[151px] sm:h-[391px] sm:w-[317px]" />
          </div>
        </div>

        <div className={`w-full h-[307px]  sm:h-[420px] bg-center bg-cover flex justify-between gap-9 lg:gap-0 flex-row-reverse xs:flex-row items-center lg:px-4 px-3`} style={{ backgroundImage: `url(${h8})` }}>
          <div className=" flex-1">
            <h2 className=" text-[20px] text-white line-clamp-2 w-[121px] sm:w-full sm:text-[48px]">Финская Фанера</h2>
            <p className=" hidden sm:block text-white max-w-[645px] mt-4 "> многослойный строительный материал, изготавливаемый путём склеивания специально подготовленного шпона. Для повышения прочности фанеры слои шпона накладываются так.</p>
            <p className=" block text-white sm:hidden w-[145px] line-clamp-4 mt-[12px]">Этоть материал изготавливаемый путём склеивания специально подготовленного шпона.</p>
          </div>
          <img src={h9} alt="Пеноплекс" className=" object-contain w-[10p5x] h-[151px] sm:h-[391px] sm:w-[317px]" />
        </div>
      </Flickity>
    );
  }
  return (
    <>
      <Carousel />
      <Shooter path={"categories"} name={"Категории"} />
      <CategoriesCart />
      <Shooter path={"itemsSite"} name={"Новинки на сайте"} />
      <Site />
      <Brend />
      <Shooter path={"itemsSite"} name={"Популярные товары"} />
      <Site />
      <OurAdvantages />
      <Comanda />
      <OnlineStoreTeplodom />
    </>
  );
}

export default Home;
