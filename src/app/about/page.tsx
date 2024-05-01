"use client"
import { useRouter } from 'next/router'
//import { ScriptWithCleanup } from '../(componenets)/ScriptWithCleanup';
import Head from 'next/head';
import Script from 'next/script';
function about(){
  
    return(


      <>
        <Script id="show-banner" strategy="lazyOnload">
  {``}
</Script>

      <section
        className="page-title-button-style ipad-top-space-margin big-section pb-0 md-pt-0 cover-background overflow-hidden"
        style={{ backgroundImage: 'url("/images/demo-data-analysis-title-bg.jpg")' }}
      >
          <div className="container position-relative h-100">
            <div className="position-absolute top-30px left-50px xs-left-10px d-none d-sm-block animation-rotation">
              <img
                className="sm-w-75px"
                src="images/demo-data-analysis-bg-01.png"
                data-bottom-top="transform: rotate(-10deg) translateY(-50px);"
                data-top-bottom="transform:rotate(10deg) translateY(10px)"
                alt="" />
            </div>
            <div className="position-absolute bottom-150px right-50px xs-right-10px d-none d-sm-block animation-rotation">
              <img
                className="sm-w-75px"
                src="images/demo-data-analysis-bg-03.png"
                data-bottom-top="transform: rotate(-10deg) translateY(-50px)"
                data-top-bottom="transform:rotate(10deg) translateY(50px)"
                alt="" />
            </div>
            <div className="row align-items-center justify-content-center extra-small-screen">
              <div
                className="col-xl-5 col-lg-6 col-md-7 col-sm-9 position-relative text-center page-title-extra-small"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h1 className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-15px">
                  About company
                </h1>
                <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px mb-0">
                  Analytics
                  <span className="text-highlight">
                    solutions
                    <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                  </span>
                  for new business
                </h2>
              </div>
            </div>
          </div>
          <Script type="text/javascript" src="https://speroedu.com/js/jquery.js" onLoad={() => {
          console.log(' From about page JQuery Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From about page Jquery Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/vendors.min.js" onLoad={() => {
          console.log(' From about page Vendor Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From about page vendor Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/main.js" onLoad={() => {
          console.log(' From about page  Main Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From about page Main Script failed to load', e);
        } }></Script>
        </section></>
       
    )
}
export default about;