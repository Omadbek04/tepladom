import { useSelector } from "react-redux";
import Info from "./Info";

function Categories() {
  const { list } = useSelector((state) => state.categoriesList);
  return (
    <>
      <div className="lg:container mx-auto px-4  relative mb-10 ">
        <Info>Категории</Info>

        <div className="  w-full  flex justify-center sm:justify-between items-center flex-wrap gap-6 md:gap-3  mt-6  px-3 capitalize">
          {list &&
            list.map((item) => {
              return (
                <div key={item.id} className=" w-[188px]  h-[213px] md:w-[255px] md:h-[222px]  flex items-center  flex-col bg-white rounded-md px-[10px] pt-2 pb-6 " onClick={() => handleCategories(item.category)}>
                  <img src={item.thumbnail} alt="" className=" h-[116px]   w-[100%] object-contain mb-7" />
                  <p className=" w-[148px] text-center text-[15px]  line-clamp-1 font-medium ">{item.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
