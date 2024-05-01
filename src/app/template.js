'use client'
import { useEffect } from "react";
import Script from "next/script";
const useScript = (url) => {
    useEffect(() => {
      console.log('Logging page view')

      const script = document.createElement("script")
  
      script.src = url
      script.async = true
  
      document.body.appendChild(script)
  
      return () => {
        document.body.removeChild(script)
      }
    }, [url])
  }
  
  //export default function Home({ posts }) {
  export default function RootLayout({ children }) {
    useScript("https://speroedu.com/js/jquery1.js","https://speroedu.com/js/main1.js")
    return (
          <div>
            {children} <h1>From Template.js</h1>

            <Script type="text/javascript" src="https://speroedu.com/js/jquery.js" onLoad={() => {
          console.log(' From Template page JQuery Script has loaded');
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/vendors.min.js" onLoad={() => {
          console.log(' From Template page Vendor Script has loaded');
        } } ></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/main.js" onLoad={() => {
          console.log(' From Template page  Main Script has loaded');
        } } ></Script>
            
            </div>
      );
    }