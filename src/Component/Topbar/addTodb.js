const addToDb = (id) => {
   const exsist = localStorage.getItem('shopping_cart');
   let addls = {};
   if (!exsist) {
      addls[id] = 1;
   }
   else {
      addls = JSON.parse(exsist);
      if (addls[id]) {
         let newAdd = addls[id] + 1;
         addls[id] = newAdd;
      }
      else {
         addls[id] = 1;
      }
   }
   localStorage.setItem('shopping_cart', JSON.stringify(addls))
}

//remove db
const removeDb = (id) => {
   const exsist = localStorage.getItem('shopping_cart');
   if (!exsist) {

   }
   else {
      const addItem = JSON.parse(exsist);
      delete addItem[id];
      localStorage.setItem('shopping_cart', JSON.stringify(addItem))
   }
}
//clene cart
const CleneDb = () => {
   // const exsist = localStorage.getItem('shopping_cart');
   localStorage.removeItem('shopping_cart')
}

//getUp ls

const getUp = (id) => {
   const exsist = localStorage.getItem('shopping_cart');
   return exsist ? JSON.parse(exsist) : {};
}



export { addToDb, removeDb, CleneDb, getUp };