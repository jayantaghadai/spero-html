//@ts-nocheck
'use client'
import React from "react"
import Script from 'next/script';
const Headers = () => {
  return(
  <head>
    
      <link rel="shortcut icon" href="images/favicon.png" />
      <link rel="apple-touch-icon" href="images/apple-touch-icon-57x57.png" />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="images/apple-touch-icon-72x72.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="images/apple-touch-icon-114x114.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="css/vendors.min.css" />
      <link rel="stylesheet" href="css/icon.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/responsive.css" />
      <link rel="stylesheet" href="css/data-analysis.css" />
       {/* <Script type="text/javascript" src="js/jquery.js" onLoad={() => {
        console.log('JQuery Script has loaded');
      } } onError={(e: Error) => {
        console.error('Jquery Script failed to load', e)
      }}></Script>
      <Script type="text/javascript"  src="js/vendors.min.js" onLoad={() => {
        console.log('Vendor Script has loaded');
      } } onError={(e: Error) => {
        console.error('vendor Script failed to load', e)
      }}></Script>
      <Script type="text/javascript" src="js/main.js" onLoad={() => {
        console.log(' Main Script has loaded');
      } } onError={(e: Error) => {
        console.error('Main Script failed to load', e)
      }}></Script>  */}
      {/* <Script type="text/javascript"  src="js/jquery.js"></Script>
      <Script type="text/javascript"  src="js/main.js"></Script> */}
      <script
dangerouslySetInnerHTML={{
  __html: `
  console.log('Console message');
`,
}}
/>
    </head>
       
  )
}

export default Headers;