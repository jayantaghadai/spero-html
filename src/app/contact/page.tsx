"use client"
import dynamic from 'next/dynamic'
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
 
function onClick() {
    window.location.href = "/"
  }
function contact() {

    const HeadComponent = () => {
        return (
          <>
            {/* <Head>
            <Script type="text/javascript" strategy="beforeInteractive" src="https://speroedu.com/js/jquery.js"></Script>
          <Script type="text/javascript" strategy="beforeInteractive"  src="https://speroedu.com/js/vendors.min.js"></Script>
          <Script type="text/javascript" strategy="beforeInteractive"  src="https://speroedu.com/js/main.js"></Script>
            </Head> */}
          </>
        );
      };
    return (
        
        <div>





         <section className="page-title-button-style big-section ipad-top-space-margin big-section pb-0 md-pt-0 cover-background overflow-hidden" 
        style={{ backgroundImage: 'url("/images/demo-data-analysis-title-bg.jpg")' }} > 
            <div className="container position-relative h-100">
                <div className="position-absolute top-30px left-50px xs-left-10px animation-rotation">
                    <img className="sm-w-75px" src="/images/demo-data-analysis-bg-01.png" data-bottom-top="transform: rotate(-10deg) translateY(-50px);" data-top-bottom="transform:rotate(10deg) translateY(10px)" alt="" />
                </div> 
                <div className="position-absolute bottom-150px right-50px xs-right-10px animation-rotation">
                    <img className="sm-w-75px" src="/images/demo-data-analysis-bg-03.png"  data-bottom-top="transform: rotate(-10deg) translateY(-50px)" data-top-bottom="transform:rotate(10deg) translateY(50px)" alt="" />
                </div> 
                <div className="row align-items-center justify-content-center extra-small-screen" 
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div className="col-xl-5 col-lg-6 col-md-7 col-sm-9 position-relative text-center page-title-extra-small">
                        <h1 className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-15px">Contact us</h1>
                        <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px mb-0">Do you need help? <span className="text-highlight">contact<span className="bg-base-color opacity-3 h-10px bottom-10px"></span></span> with us!</h2>
                    </div>
                    <Link href="" onClick={onClick}>This is New link</Link>
                </div>  
            </div>
        </section>
        <section className="pt-4">
        <div className="container">
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 justify-content-center text-center text-sm-start" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="col sm-mb-35px">
                    <span className="alt-font fs-18 fw-600 d-block w-90 xs-w-100 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px"><i className="feather icon-feather-map-pin d-inline-block icon-small me-10px"></i>Office location</span>
                    <div className="last-paragraph-no-margin">
                        <p>703, JMD PACIFIC SQUARE, 32ND MILE STONE,GURGAON—122001</p>
                    </div>
                </div>
                <div className="col md-mb-35px">
                    <span className="alt-font fs-18 fw-600 d-block w-90 xs-w-100 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px"><i className="feather icon-feather-mail d-inline-block icon-small me-10px"></i>Send enquiry message</span>
                    <Link href="mailto:support@speroedu.com">support@speroedu.com</Link>
                </div>
                <div className="col sm-mb-35px">
                    <span className="alt-font fs-18 fw-600 d-block w-90 xs-w-100 text-dark-gray border-bottom border-2 border-color-dark-gray pb-15px mb-15px"><i className="feather icon-feather-phone d-inline-block icon-small me-10px"></i>Call us now</span>
                    <Link href="tel:01244111683" className="d-block">0124-4111683 </Link>
                </div>
            </div>
        </div>
    </section> 
    <section className="pb-0">
    <div className="container overlap-section overlap-section-three-fourth mt-10px"  data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'> <div className="row justify-content-center" >
                    <div className="col-lg-10">
                        <div className="bg-white p-8 border-radius-6px box-shadow-double-large"> 
                            <div className="row justify-content-center">
                                <div className="col-12 text-center mb-3">
                                    <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px">Have a <span className="text-highlight">project<span className="bg-base-color opacity-3 h-10px bottom-10px"></span></span> in mind?</h2>
                                </div>
                            </div>
                            <form action="email-templates/contact-form.php" method="post" className="contact-form-style-03">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-14 text-uppercase text-dark-gray primary-font fw-600 mb-0">Your name*</label>
                                        <div className="position-relative form-group mb-25px">
                                            <span className="form-icon"><i className="bi bi-emoji-smile"></i></span>
                                            <input className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required" id="exampleInputEmail1" type="text" name="name" placeholder="What's your good name?" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-14 text-uppercase text-dark-gray primary-font fw-600 mb-0">Your phone number*</label>
                                        <div className="position-relative form-group mb-25px">
                                            <span className="form-icon"><i className="bi bi-telephone"></i></span>
                                            <input className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required" id="exampleInputEmail2" type="tel" name="phone" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-14 text-uppercase text-dark-gray primary-font fw-600 mb-0">Your email address*</label>
                                        <div className="position-relative form-group mb-25px">
                                            <span className="form-icon"><i className="bi bi-envelope"></i></span>
                                            <input className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required" id="exampleInputEmail3" type="email" name="email" placeholder="Enter your email address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-14 text-uppercase text-dark-gray primary-font fw-600 mb-0">Your subject</label>
                                        <div className="position-relative form-group mb-25px">
                                            <span className="form-icon"><i className="bi bi-journals"></i></span>
                                            <input className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control" id="exampleInputEmail4" type="text" name="subject" placeholder="How can we help you?" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-35px">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-14 text-uppercase text-dark-gray primary-font fw-600 mb-0">Your message</label>
                                        <div className="position-relative form-group form-textarea mb-0"> 
                                            <textarea className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control" name="comment" placeholder="Describe about your message" rows={4}></textarea>
                                            <span className="form-icon"><i className="bi bi-chat-square-dots"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-8 text-center text-md-start sm-mb-25px">
                                        <p className="mb-0 fs-14 lh-24 w-85 md-w-100">We are committed to protecting your privacy. We will never collect information about you without your explicit consent.</p>
                                    </div>
                                    <div className="col-xl-5 col-md-4 text-center text-md-end">
                                        <input id="exampleInputEmail5" type="hidden" name="redirect" value="" />
                                        <button className="btn btn-small btn-dark-gray btn-box-shadow btn-round-edge submit" type="submit">Send message</button>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-results mt-20px d-none"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
                <div className="row align-items-center justify-content-center mt-5 sm-mt-40px">
                    <div className="col-md-auto text-center text-md-end sm-mb-20-5px" 
                    data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <span className="alt-font fs-24 text-dark-gray fw-600 mb-0">Connect with social media </span>
                    </div>
                    <div className="col-2 d-none d-lg-inline-block" 
                    data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <span className="w-100 h-1px bg-dark-gray opacity-2 d-flex mx-auto"></span>
                    </div>
                    <div className="col-md-auto elements-social social-icon-style-04 text-center text-md-start ps-lg-0" 
                    data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <ul className="large-icon dark">
                            <li className="m-0"><a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i><span></span></a></li>
                            <li className="m-0"><a className="dribbble" href="http://www.dribbble.com" target="_blank"><i className="fa-brands fa-dribbble"></i><span></span></a></li>
                            <li className="m-0"><a className="twitter" href="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i><span></span></a></li>      
                            <li className="m-0"><a className="instagram" href="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i><span></span></a></li>
                            <li className="m-0"><a className="linkedin" href="http://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin-in"></i><span></span></a></li>
                        </ul>                  
                    </div>
                </div>
            </div>
        </section> 
        {/* <NoSSR /> */}
        {/* <script type="text/javascript" async src="js/jquery.js"></script>
          <script type="text/javascript" async src="js/vendors.min.js"></script>
          <script type="text/javascript" async src="js/main.js"></script> */}

<Script type="text/javascript" src="https://speroedu.com/js/jquery.js" onLoad={() => {
          console.log(' From Contact page JQuery Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From Contact page Jquery Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/vendors.min.js" onLoad={() => {
          console.log(' From Contact page Vendor Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From Contact page vendor Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/main.js" onLoad={() => {
          console.log(' From Contact page  Main Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From Contact page Main Script failed to load', e);
        } }></Script>



        </div>
    )
}
export default contact;