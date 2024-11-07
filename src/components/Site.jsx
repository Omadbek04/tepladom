import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { useEffect } from "react";
import { getProduct } from "../reducers/siteSlice";

function Site() {
  const { product } = useSelector((state) => state.site);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="lg:container px-4 mx-auto">
      <div className="  w-full flex  flex-nowrap sm:flex-wrap  mt-6 justify-center md:justify-between   overflow-x-scroll lg:overflow-hidden capitalize gap-[30px] lg:gap-0">
        {product &&
          product.map((item, ind) => {
            if (ind <= 7) {
              return <Cart  item={item} key={item.id} />
            } else {
              return;
            }
          })}
      </div>
    </div>
  );
}

export default Site;
