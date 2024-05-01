'use client'
import { useEffect } from "react";

function CareerCounselling() {
      
  useEffect(() => {
        const contentDiv = document.getElementById("content");
        const newScript = document.createElement("script");
        newScript.src = "js/main.js";
        newScript.id = "script-id";
        newScript.async = true;
        // add rest of your script items
        contentDiv?.appendChild(newScript);   
    }, [])

   return (
       <div className='content'>

       </div>
  )
}
export default CareerCounselling;