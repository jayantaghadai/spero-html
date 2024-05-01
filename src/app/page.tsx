//@ts-nocheck
"use client"
import Image from "next/image";
import Link from "next/link";
import Commonscripts from "./(componenets)/commonscripts/commonscripts";
import Script from 'next/script';
const  Home = (props) => {
  return (
    
    <div>
     <section className="top-space-padding pb-0 bg-gradient-very-light-gray overflow-hidden position-relative lg-pb-30px"> 
            <div className="container h-100">
                <div className="position-absolute top-120px left-40 animation-rotation d-none d-xl-block">
                    <Image src="/images/demo-data-analysis-bg-01.png" width={117} height={100} data-bottom-top="transform: rotate(-50deg) translateY(-50px)" data-top-bottom="transform:rotate(10deg) translateY(50px)" alt="Image ICON" />
                </div> 
                <div className="position-absolute top-20 right-10 animation-rotation d-none d-sm-block">
                    <Image src="/images/demo-data-analysis-bg-03.png" width={90} height={80} data-bottom-top="transform: rotate(-50deg) translateY(-50px)" data-top-bottom="transform:rotate(10deg) translateY(50px)" alt="Image ICON" />
                </div> 
                <div className="position-absolute bottom-50px left-0px animation-float d-none d-xl-block">
                    <Image src="/images/demo-data-analysis-bg-02.png" width={220} height={350} data-bottom-top="transform: translateY(150px)" data-top-bottom="transform: translateY(-150px)" alt="Image ICON" />
                </div> 
                <div className="row align-items-center h-100 md-mt-50px">
                    <div className="col-xl-7 col-lg-7 mb-9 position-relative z-index-1" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>  
                        <div className="d-flex align-items-start align-items-sm-center alt-font mb-30px">
                            <div className="flex-shrink-0 bg-cabaret-red fw-600 text-white text-uppercase ps-20px pe-20px fs-12 me-15px border-radius-100px">Get started</div>
                            <span className="fs-18 fw-500" data-fancy-text='{ "effect": "rotate", "string": ["Real-time data score analysis", "Exploratory data analysis", "Tailored pricing plans"], "speed": 50, "duration": 3500 }'></span> 
                        </div>
                        <h1 className="alt-font text-dark-gray fw-700 ls-minus-2px mb-20px">Analytical solutions for <span className="text-highlight">career guidance1<span className="bg-cabaret-red opacity-3 h-12px bottom-15px"></span></span></h1> 
                        <div className="alt-font fw-500 fs-19 w-85 sm-w-100 mb-35px xs-mb-25px">Qualitative and quantitative approach to unlock your child's potential, mental health and emotional well-being.</div>
                        <Link href="#" className="btn btn-extra-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left me-25px">
                            <span> 
                                <span className="btn-text">How it works</span>
                                <span className="btn-icon"><i className="feather icon-feather-youtube"></i></span>
                                <span className="btn-icon"><i className="feather icon-feather-youtube"></i></span>
                            </span>
                        </Link>
                        <Link href="mailto:support@speroedu.com" className="btn btn-link btn-hover-animation-switch btn-extra-large text-dark-gray btn-icon-left align-middle p-0 xs-mt-20px xs-mb-20px">
                            <span>
                                <span className="btn-text">support@speroedu.com</span>
                                <span className="btn-icon"><i className="feather icon-feather-mail"></i></span>
                                <span className="btn-icon"><i className="feather icon-feather-mail"></i></span>
                            </span> 
                        </Link>
                    </div> 
                    <div className="col-xl-5 col-lg-5 align-self-end">
                        <div className="position-absolute right-0px bottom-20px md-bottom-5 lg-w-65 md-w-100">
                            <Image src="/images/demo-data-analysis-bg-05.png" className="" width={875} height={725} alt="Image ICON" />
                        </div>
                        <div className="outside-box-right-20 text-end position-relative z-index-9 animation-float">
                            <Image src="/images/demo-data-analysis-bg-04.png" width={888} height={925} alt="Image ICON" /> 
                        </div>
                    </div>
                </div> 
            </div>
        </section>
      <section className="p-0 position-relative">
        <Image
          src="/images/demo-data-analysis-bg-06.png"
          className="position-absolute top-20 left-0px"
          data-bottom-top="transform: translateY(150px)"
          data-top-bottom="transform: translateY(-150px)"
          alt="icon image" width={"235"} height={"490"} />
        <Image
          src="/images/demo-data-analysis-bg-07.png"
          className="position-absolute top-10 right-0px lg-w-30 lg-bottom-0px"
          data-bottom-top="transform: translateY(150px)"
          data-top-bottom="transform: translateY(-150px)"
          alt="icon image" width={"410"} height={"850"} />
        <div className="container">
          <div
            className="row justify-content-center mb-2"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 text-center">
              <div className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-15px">
                Navigate your career path
              </div>
              <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px">
                Career
                <span className="text-highlight">
                  Counselling
                  <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                </span>
              </h2>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-3"
            data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box bg-ghost-white text-start justify-content-start h-100 border-radius-6px p-16 lg-p-10">
                <div className="feature-box-icon mb-25px">
                  <Image src="/images/demo-data-analysis-icon-01.png" alt="ICON" width={"60"} height={"60"} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray fw-600 fs-20 alt-font mb-5px">
                    Class 9th and 10th
                  </span>
                  <p>Guidance for stream and subject selection</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box bg-cosmic-latte-white text-start justify-content-start h-100 border-radius-6px p-16 lg-p-10">
                <div className="feature-box-icon mb-25px">
                  <Image src="/images/demo-data-analysis-icon-02.png" alt="ICON" width={"60"} height={"60"} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray fw-600 fs-20 alt-font mb-5px">
                    Class 11th and 12th
                  </span>
                  <p>Guidance for course and college selection</p>
                </div>
                <div className="bg-white fw-600 text-dark-gray text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-30px position-absolute right-25px top-25px box-shadow-medium-bottom">
                  Popular
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box bg-chablis-red text-start justify-content-start h-100 border-radius-6px p-16 lg-p-10">
                <div className="feature-box-icon mb-25px">
                  <Image src="/images/demo-data-analysis-icon-04.png" alt="ICON" width={"60"} height={"60"} />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block text-dark-gray fw-600 fs-20 alt-font mb-5px">
                    College Students
                  </span>
                  <p>Guidance for career transition and course selection</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col-auto text-center">
              <div className="d-inline-block">
                <Image src="/images/demo-data-analysis-01.png" alt="ICON" width={"60"} height={"60"} />
              </div>
              <div className="d-inline-block text-dark-gray fs-22 alt-font fw-500">
                World-class <span className="fw-700">30,000+ companies</span> are
                already work with crafto.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative pb-0">
        <Image
          src="/images/demo-data-analysis-bg-08.png"
          className="position-absolute top-50px lg-top-120px left-0px lg-w-50"
          data-bottom-top="transform: translateY(150px)"
          data-top-bottom="transform: translateY(-150px)"
          alt="ICON" width={"740"} height={"850"} />
        <div className="container position-relative">
          <div className="row align-items-center mb-4 sm-mb-25px">
            <div
              className="col-xl-6 col-lg-6 text-center text-lg-start md-mb-30px"
              data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <Image
                src="/images/demo-data-analysis-02.png"
                className="md-w-70 sm-w-100"
                data-bottom-top="transform: translateY(-50px)"
                data-top-bottom="transform: translateY(50px)"
                alt="ICON" width={"580"} height={"740"} />
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-1"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-25px">
                Effective benefits
              </div>
              <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px w-95">
                Expert Career
                <span className="text-highlight">
                  Guidance.
                  <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                </span>
              </h2>
              <p>
                Career Counselling is a specialized service that needs multiple
                resources ranging from trained counsellors, to an updated databased
                and psychometric tests. We combine this all and bundle it as a
                service of schools of repute eager to benefit their students.
              </p>
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray" />
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-500">
                      Counsel from the best experts
                    </span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray" />
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-500">
                      Scientific backed and proven technique
                    </span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray" />
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-500">
                      Captivating sessions
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-35px">
                <a
                  href="#"
                  className="btn btn-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left me-30px"
                >
                  <span>
                    <span className="btn-text">Explore services</span>
                    <span className="btn-icon">
                      <i className="feather icon-feather-briefcase" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather icon-feather-briefcase" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row position-relative">
            <div
              className="col swiper text-cente"
              data-slider-options='{ "slidesPerView": "auto", "spaceBetween":0, "centeredSlides": true, "speed": 10000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":1, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
            >
              <div className="swiper-wrapper swiper-width-auto pb-60px sm-pb-30px marquee-slide">
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    predictive analytics
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    data engineers
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    statistical modeling
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    predictive analytics
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    data engineers
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="fs-120 lh-120 alt-font text-outline text-outline-color-extra-medium-gray fw-700">
                    <span className="w-20px h-20px border border-radius-100 border-2 border-color-extra-medium-gray d-inline-block align-middle ms-50px me-50px sm-ms-30px sm-me-30px" />
                    statistical modeling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative overflow-hidden pb-4">
        <Image
          src="/images/demo-data-analysis-bg-07.png"
          className="position-absolute top-minus-100px lg-top-0px right-0px lg-w-25"
          data-bottom-top="transform: translateY(150px)"
          data-top-bottom="transform: translateY(-150px)"
          alt="ICON" width={"410"} height={"850"} />
        <div className="position-absolute top-20 right-minus-50px sm-right-15px animation-rotation d-none d-sm-block">
          <Image
            className="lg-w-120px"
            src="/images/demo-data-analysis-bg-10.png"
            data-bottom-top="transform: rotate(-10deg) translateX(-80px)"
            data-top-bottom="transform:rotate(10deg) translateX(80px)"
            alt="ICON" width={"125"} height={"129"} />
        </div>
        <div className="container position-relative">
          <div className="position-absolute top-minus-50px left-0px sm-top-minus-30px left-15px animation-rotation d-none d-sm-block">
            <Image
              className="lg-w-140px"
              src="/images/demo-data-analysis-bg-09.png"
              data-bottom-top="transform: rotate(-50deg) translateY(-50px)"
              data-top-bottom="transform:rotate(10deg) translateY(50px)"
              alt="ICON" width={"165"} height={"140"} />
          </div>
          <div
            className="row justify-content-center mb-1"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col-lg-6 text-center position-relative">
              <div className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-15px">
                How it works
              </div>
              <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px">
                Our
                <span className="text-highlight">
                  Simple Process
                  <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                </span>
              </h2>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center position-relative"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="col process-step-style-10 last-paragraph-no-margin ps-5 pe-5 pt-6 pb-6 position-relative lg-ps-4 lg-pe-4 lg-pt-8 sm-pt-60px">
              <div className="process-step-icon-box position-absolute top-0px left-20px xs-left-10px">
                <div className="number d-inline-block fs-110 fw-700 text-outline text-outline-color-extra-medium-gray">
                  01
                </div>
              </div>
              <h6 className="alt-font fw-700 text-dark-gray mb-10px position-relative">
                Assessment
              </h6>
              <p className="w-85 xl-w-100">
                Provide Mental health care for students, the first step is to
                identify those who need support through education , observations,
                referrals, or assessments.
              </p>
            </div>
            <div className="col process-step-style-10 last-paragraph-no-margin ps-5 pe-5 pt-6 pb-6 position-relative lg-ps-4 lg-pe-4 lg-pt-8 sm-pt-60px">
              <div className="process-step-icon-box position-absolute top-0px left-20px xs-left-10px">
                <div className="number d-inline-block fs-110 fw-700 text-outline text-outline-color-extra-medium-gray">
                  02
                </div>
              </div>
              <h6 className="alt-font fw-700 text-dark-gray mb-10px position-relative">
                Advice
              </h6>
              <p className="w-85 xl-w-100">
                Omplementation plan is developed &amp; implemented through
                individual or group therapy sessions, participation in school-based
                interventions or programs or other forms of support.
              </p>
            </div>
            <div className="col process-step-style-10 last-paragraph-no-margin ps-5 pe-5 pt-6 pb-6 position-relative lg-ps-4 lg-pe-4 lg-pt-8 sm-pt-60px">
              <div className="process-step-icon-box position-absolute top-0px left-20px xs-left-10px">
                <div className="number d-inline-block fs-110 fw-700 text-outline text-outline-color-extra-medium-gray">
                  03
                </div>
              </div>
              <h6 className="alt-font fw-700 text-dark-gray mb-10px position-relative">
                Achieve
              </h6>
              <p className="w-80 xl-w-100">
                Assess the effectiveness of the interventions through regular
                check-ins and tracking symptoms or evaluating changes in behavior.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0 position-relative">
        <Image
          src="/images/demo-data-analysis-bg-08.png"
          className="position-absolute top-50px left-0px lg-w-50"
          data-bottom-top="transform: translateY(150px)"
          data-top-bottom="transform: translateY(-150px)"
          alt="ICON" width={"740"} height={"850"} />
        <div className="w-100 overflow-hidden d-block position-absolute top-minus-80px sm-top-minus-50px">
          <div
            className="alt-font fw-600 fs-225 ls-minus-7px text-gradient-orange-sky-blue text-nowrap opacity-3 text-center"
            data-bottom-top="transform: translate3d(100px, 0px, 0px);"
            data-top-bottom="transform: translate3d(-100px, 0px, 0px);"
          >
            we love data analytics
          </div>
        </div>
        <div className="container">
          <div className="row align-items-end mb-4">
            <div
              className="col-xl-6 col-lg-6 animation-float text-center text-lg-start"
              data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <Image
                src="/images/demo-data-analysis-05.png"
                className="md-w-70 sm-w-100"
                data-bottom-top="transform: translateY(-50px)"
                data-top-bottom="transform: translateY(50px)"
                alt="ICON" width={"580"} height={"840"} />
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-1"
              data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-20px">
                Our Groundbreaking Approach
              </div>
              <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px mb-50px sm-mb-35px">
                Paving a path for your
                <span className="text-highlight">
                  Bright future
                  <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                </span>
              </h2>
              <div
                className="accordion pricing-table-style-04 mb-50px"
                id="accordion-style-01"
                data-active-icon="fa-angle-up"
                data-inactive-icon="fa-angle-down"
              >
                <div className="accordion-item bg-white active-accordion box-shadow-quadruple-large mb-25px">
                  <div className="accordion-header">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-01-01"
                      aria-expanded="true"
                      data-bs-parent="#accordion-style-01"
                    >
                      <div className="accordion-title position-relative d-flex align-items-center pe-20px mb-0 text-dark-gray fw-600 fs-20 alt-font ls-05px">
                        Accessibility
                        <span className="icon-round bg-extra-medium-gray text-dark-gray w-25px h-25px">
                          <i className="fa-solid fa-angle-up" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-01-01"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion-style-01"
                  >
                    <div className="accordion-body last-paragraph-no-margin">
                      <p className="opacity-4 alt-font ls-05px w-80 xl-w-90">
                        We offer remote mental health care through our telehealth
                        services, so everyone can get help, no matter where they
                        are.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-white box-shadow-quadruple-large mb-25px">
                  <div className="accordion-header">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-01-02"
                      aria-expanded="false"
                      data-bs-parent="#accordion-style-01"
                    >
                      <div className="accordion-title position-relative d-flex align-items-center pe-20px mb-0 text-dark-gray fw-600 fs-20 alt-font ls-05px">
                        Affordability
                        <span className="icon-round bg-extra-medium-gray text-dark-gray w-25px h-25px">
                          <i className="fa-solid fa-angle-down" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-01-02"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-style-01"
                  >
                    <div className="accordion-body last-paragraph-no-margin">
                      <p className="opacity-4 alt-font ls-05px w-80 xl-w-90">
                        Our community-based mental health services, combined with
                        technology, make mental healthcare affordable for everyone.
                      </p>
                      <div className="d-sm-flex align-items-end mt-25px">
                        <h5 className="text-white mb-0 alt-font ls-05px fw-500 xs-mb-20px">
                          $39.99
                          <span className="fs-17 opacity-4 fw-400">/ Monthly</span>
                        </h5>
                        <a
                          href="demo-data-analysis-pricing.html"
                          className="btn btn-transparent-white-light btn-round-edge btn-small border-1 ms-auto fw-500"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-white box-shadow-quadruple-large mb-25px">
                  <div className="accordion-header">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-01-03"
                      aria-expanded="false"
                      data-bs-parent="#accordion-style-01"
                    >
                      <div className="accordion-title position-relative d-flex align-items-center pe-20px mb-0 text-dark-gray fw-600 fs-20 alt-font ls-05px">
                        Awareness
                        <span className="icon-round bg-extra-medium-gray text-dark-gray w-25px h-25px">
                          <i className="fa-solid fa-angle-down" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-01-03"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-style-01"
                  >
                    <div className="accordion-body last-paragraph-no-margin">
                      <p className="opacity-4 alt-font ls-05px w-80 xl-w-90">
                        Educating students about mental health help reduce stigna
                        and make it easier for students to seek help without feeling
                        judged.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-white box-shadow-quadruple-large mb-25px">
                  <div className="accordion-header">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-01-04"
                      aria-expanded="false"
                      data-bs-parent="#accordion-style-01"
                    >
                      <div className="accordion-title position-relative d-flex align-items-center pe-20px mb-0 text-dark-gray fw-600 fs-20 alt-font ls-05px">
                        Availability
                        <span className="icon-round bg-extra-medium-gray text-dark-gray w-25px h-25px">
                          <i className="fa-solid fa-angle-down" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-01-04"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-style-01"
                  >
                    <div className="accordion-body last-paragraph-no-margin">
                      <p className="opacity-4 alt-font ls-05px w-80 xl-w-90">
                        Our socio emotional learning program equips educators to
                        identify students who need mental health support and provide
                        help as quickly as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-very-ghost-white pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative text-center text-lg-start">
              <div className="bg-base-color fw-600 text-white text-uppercase ps-20px pe-20px fs-12 border-radius-100px d-inline-block mb-20px">
                Customer support
              </div>
              <h2 className="fw-700 alt-font text-dark-gray ls-minus-1px w-50 mb-10px lg-w-100">
                Have you
                <span className="text-highlight">
                  question?
                  <span className="bg-base-color opacity-3 h-10px bottom-10px" />
                </span>
              </h2>
              <div className="row align-items-center g-0">
                <div className="w-100 sm-mt-5px d-flex align-items-center justify-content-center justify-content-lg-start">
                  <Image src="/images/demo-data-analysis-08.png" alt="ICON" width={"156"} height={"113"} />
                  <span className="alt-font fw-500 lh-26 fs-18 position-relative text-start">
                    Support executive
                    <span className="fw-700 text-dark-gray d-block">
                      1000+ satisfied.
                    </span>
                  </span>
                </div>
              </div>
              <Image
                src="/images/demo-data-analysis-07.png"
                className="position-absolute right-50px top-minus-180px animation-float xl-w-45 d-none d-lg-block"
                alt="ICON" width={"280"} height={"390"} />
            </div>
            <div className="col-lg-6">
              <div
                className="accordion accordion-style-02"
                id="accordion-style-02"
                data-active-icon="icon-feather-minus"
                data-inactive-icon="icon-feather-plus"
              >
                <div className="accordion-item active-accordion">
                  <div className="accordion-header border-bottom border-color-extra-medium-gray">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-02-01"
                      aria-expanded="true"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray">
                        <i className="feather icon-feather-minus" />
                        <span className="fs-18 alt-font fw-600">
                          What are some examples of AI technologies?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-02-01"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                      <p>
                        Lorem ipsum is simply dummy text of the printing typesetting
                        industry. Industry's standard dummy text ever since the
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header border-bottom border-color-extra-medium-gray">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-02-02"
                      aria-expanded="false"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray">
                        <i className="feather icon-feather-plus" />
                        <span className="fs-18 alt-font fw-600">
                          What is potential for AI in customer service?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-02-02"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                      <p>
                        Lorem ipsum is simply dummy text of the printing typesetting
                        industry. Industry's standard dummy text ever since the
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header border-bottom border-color-transparent">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-style-02-03"
                      aria-expanded="false"
                      data-bs-parent="#accordion-style-02"
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray">
                        <i className="feather icon-feather-plus" />
                        <span className="fs-18 alt-font fw-600">
                          Do you charge by the job or by the hour?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    id="accordion-style-02-03"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion-style-02"
                  >
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                      <p>
                        Lorem ipsum is simply dummy text of the printing typesetting
                        industry. Industry's standard dummy text ever since the
                        dummy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <Commonscripts /> 


      <Script type="text/javascript" src="https://speroedu.com/js/jquery.js" onLoad={() => {
          console.log(' From index page JQuery Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From index page Jquery Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/vendors.min.js" onLoad={() => {
          console.log(' From index page Vendor Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From index page vendor Script failed to load', e);
        } }></Script>
        <Script type="text/javascript" src="https://speroedu.com/js/main.js" onLoad={() => {
          console.log(' From index page  Main Script has loaded');
        } } onError={(e: Error) => {
          console.error(' From index page Main Script failed to load', e);
        } }></Script>
      </div>
  );
}
export default Home