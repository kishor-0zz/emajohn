import { useEffect, useState } from "react";
import { getUp } from "../Component/Topbar/addTodb";

const useCart = (product) => {
   const [cart, setCart] = useState([]);

   useEffect(() => {
      if (product.length) {
         const saveCart = getUp();
         let addSaveCart = [];
         for (const key in saveCart) {
            const upSaveCart = product.find(pro => pro.key === key)
            if (upSaveCart) {
               const addQuentty = saveCart[key];
               upSaveCart.quentty = addQuentty;
               addSaveCart.push(upSaveCart);
            }
         }
         setCart(addSaveCart)
      }
   }, [product]);
   return [cart, setCart]
}
export default useCart;