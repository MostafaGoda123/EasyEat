import { createContext, useEffect, useState } from "react";

let MobileHandlerContext = createContext()

function MobileHandlerProvider({children}) {
   const [isMobile, setIsMobile] = useState(false) ;

   let isMobileHandler = (e) => {
      setIsMobile(e.matches);
   }

   useEffect(() => {
      window.matchMedia("(max-width:768px)").addEventListener("change",isMobileHandler)
      setIsMobile(window.matchMedia("(max-width:768px)"))
      window.addEventListener("load",setIsMobile(false))
   }, [])


   return <MobileHandlerContext.Provider value={{isMobile}}>{children}</MobileHandlerContext.Provider>
}

export { MobileHandlerContext , MobileHandlerProvider }

