'use client'
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
export default function Footer(){
    return (
    <div>
<footer>
    <div className="container">
         <div className="row justify-content-center mb-30px mx-0">
            <div className="col-12 position-relative text-center bg-dark-gray p-40px border-radius-6px position-relative lg-p-30px"> 
                <h5 className="alt-font d-block d-xl-inline-block align-middle text-white mb-0 fw-600 me-35px lg-me-0 lg-mb-20px">Take the leap toward a future of endless possibilities.</h5>
                <Link href="demo-data-analysis-what-we-do.html" className="btn btn-large btn-white btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left fw-700">
                    <div>
                        <span className="btn-text">Get started</span>
                        <span className="btn-icon"><i className="feather icon-feather-mail"></i></span>
                        <span className="btn-icon"><i className="feather icon-feather-mail"></i></span>
                    </div>
                </Link>
                <div className="bg-gradient-flamingo-amethyst-green h-6px w-100 position-absolute left-0px bottom-0px"></div>
            </div>
         </div> 
         <div className="row align-items-center">
            <div className="col-12 col-lg-auto md-mb-15px text-center text-lg-start">
                <img src="images/demo-data-analysis-logo-black.png"  alt="" />
            </div>
            <div className="col">
                <ul className="footer-navbar fs-18 alt-font fw-600 text-center text-lg-end">
                    <li className="nav-item active"><Link href="demo-data-analysis.html" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link href="demo-data-analysis-about.html" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link href="demo-data-analysis-what-we-do.html" className="nav-link">What we do</Link></li>
                    <li className="nav-item"><Link href="demo-data-analysis-contact.html" className="nav-link">Contact</Link></li>
                </ul>

            </div>
        </div>
       {/* <div className="row justify-content-center align-items-center pt-30px">

            <div className="col-12 mb-30px">
                <div className="divider-style-03 divider-style-03-01 border-1 border-color-extra-medium-gray"></div>
            </div>

            <div className="col-lg-7 col-md-8 fs-14 lh-24 text-center text-md-start last-paragraph-no-margin sm-mb-20px">
            </div>

            <div className="col-lg-5 col-md-4 text-end elements-social social-icon-style-08 text-center text-md-end">
                <ul className="medium-icon dark d-inline-block">
                    <li><Link className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link className="instagram" href="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link className="twitter" href="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link className="dribbble" href="http://www.dribbble.com" target="_blank"><i className="fa-brands fa-dribbble"></i></Link></li>
                </ul>
            </div>
        </div> */}
    </div>
</footer>

{/* <Script src={`js/jquery.js?aoo=${Math.round(
    Math.random() * 100
  )}`} 
          onLoad={() => {
            console.log('Jquery Script has loaded from footer')
          }}  strategy="beforeInteractive" />
        <Script src={`js/vendors.min.js?boo=${Math.round(
    Math.random() * 100
  )}`} 
          onLoad={() => {
            console.log('Vendors Script has loaded from footer')
          }} strategy="beforeInteractive" />
        <Script src={`js/main.js?foo=${Math.round(
    Math.random() * 100
  )}`} 
          onLoad={() => {
            console.log('Main Script has loaded from footer')
          }} strategy="beforeInteractive" /> */}

 {/* <Script type="text/javascript" defer
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)}
          src="js/jquery.js"></Script>
          <Script type="text/javascript" defer  src="js/vendors.min.js"></Script>
          <Script type="text/javascript" defer   src="js/main.js"></Script>  */}

            </div>
            )
            }
