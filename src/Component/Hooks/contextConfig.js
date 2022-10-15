import React, { createContext } from 'react';
import UseFirebase from '../useFirebase/useFirebase';


export const MyContext = createContext();
const ContextConfig = ({ children }) => {
   const item = UseFirebase();
   return (
      <MyContext.Provider value={item}>
         {children}
      </MyContext.Provider>

   );
};

export default ContextConfig;