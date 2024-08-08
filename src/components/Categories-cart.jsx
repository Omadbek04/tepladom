import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getUser } from "../reducers/categoryReducer";

function CategoriesCart() {
  const { list } = useSelector((state) => state.categoriesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleCategories = (categoryId) => {
    dispatch(getCategories(categoryId));
  };

  return (
    <div className="lg:container mx-auto px-4 ">
      <div className="  w-full flex  justify-between flex-row gap-6 md:gap-3  mt-6  px-3 overflow-x-scroll lg:overflow-hidden capitalize">
        {list &&
          list.map((item, ind) => {
            if (ind <= 5) {
              return (
                <div key={item.id} className=" w-[160px]  flex items-center  flex-col bg-white rounded-md px-[10px] pt-2 pb-6 " onClick={() => handleCategories(item.categoryId)}>
                  <img src={item.thumbnail} alt="" className=" h-[110px] w-[120px] object-contain mb-7" />
                  <p className=" w-[148px] text-center text-[15px] font-medium line-clamp-1">{item.title}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}
export default CategoriesCart;