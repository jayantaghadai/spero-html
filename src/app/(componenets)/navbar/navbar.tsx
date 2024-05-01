//"use client"
import Link from 'next/link';
//import { useRouter } from "next/navigation";

export default function Navbar(){
  //const router = useRouter()
    return (<><div className="cursor-page-inner">
      <div className="circle-cursor circle-cursor-inner" />
      <div className="circle-cursor circle-cursor-outer" />
    </div><header className="header-with-topbar">
        <nav className="navbar navbar-expand-lg header-light bg-transparent disable-fixed border-bottom border-color-transparent-dark-very-light">
          <div className="container-fluid">
            <div className="col-auto">
            <Link className="navbar-brand" href="demo-data-analysis.html">
                <img
                  src="/images/demo-data-analysis-logo-black.png"
                  
                  alt=""
                  className="default-logo" />
                <img
                  src="/images/demo-data-analysis-logo-black.png"
                  
                  alt=""
                  className="mobile-logo" />
                  </Link>
            </div>
            <div className="col-auto menu-order left-nav">
              <button
                className="navbar-toggler float-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav alt-font">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
      Home
    </Link>
                    {/* <button type="button" onClick={() => router.push('/')} className="nav-link">
                      Home Click me
                    </button> */}
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link">
      About
    </Link>
                    {/* <button type="button" onClick={() => router.push('/about')} className="nav-link">
                      About Click me
                    </button> */}
                  </li>
                  <li className="nav-item">
                    <Link
      href="/careerCounselling"
      className="nav-link"
    >
      Career Counselling
    </Link>
                    {/* <button type="button" onClick={() => router.push('/careerCounselling')} className="nav-link">
                      Career Counselling Click me
                    </button> */}
                  </li>


                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
      Contact
    </Link>
                    {/* <button type="button" onClick={() => router.push('/contact')} className="nav-link">
                      Contact Click me
                    </button> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto ms-auto d-none d-sm-flex">
              <div className="header-icon">
                <div className="d-none d-xl-inline-block">
                  <div className="alt-font fw-600">
                    <Link href="tel:01244111683" className="widget-text">
                      <i className="feather icon-feather-phone-call me-10px" />0124-4111683
                    </Link>
                  </div>
                </div>
                <div className="header-button ms-25px">
                  <Link
                    href="demo-data-analysis-contact.html"
                    className="btn btn-small btn-white btn-hover-animation-switch btn-round-edge btn-box-shadow fw-700 ls-0px btn-icon-left"
                  >
                    <span>
                      <span className="btn-text">Get a quote</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-mail" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-mail" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header></>
    )
}