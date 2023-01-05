import React from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      {/* Navigation */}
      <header
        id='header'
        className='border-bottom-0 no-sticky transparent-header'>
        <div id='header-wrap'>
          <div className='container'>
            <div className='header-row'>
              <div id='logo'>
                <a href='/' className='standard-logo'>
                  <img
                    src={
                      router.pathname === "/" ? "/logo-active.png" : "/logo.png"
                    }
                    alt='Reynaldo Logo'
                  />
                </a>
                <a href='/' className='retina-logo'>
                  <img
                    src={
                      router.pathname === "/"
                        ? "/logo-active.png"
                        : "/logo@2x.png"
                    }
                    alt='Reynaldo Website Logo'
                  />
                </a>
              </div>

              <div className='header-misc'>
                <a
                  href='mailto:rnavedojr@outlook.com?subject=Contact request from reynaldo.website'
                  className='button button-border rounded-pill'>
                  Contact Me
                </a>
              </div>

              <div id='primary-menu-trigger'>
                <svg className='svg-trigger' viewBox='0 0 100 100'>
                  <path d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'></path>
                  <path d='m 30,50 h 40'></path>
                  <path d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'></path>
                </svg>
              </div>

              <nav className='primary-menu'>
                <ul className='menu-container'>
                  <li className='menu-item text-primary'>
                    <a
                      className={
                        router.pathname === "/about"
                          ? "menu-link text-orangered"
                          : "menu-link"
                      }
                      href='/about'>
                      <div>About me</div>
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      className={
                        router.pathname === "/portfolio"
                          ? "menu-link text-orangered"
                          : "menu-link"
                      }
                      href='/portfolio'>
                      <div>My work</div>
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      className={
                        router.pathname === "/portfolio"
                          ? "menu-link text-orangered"
                          : "menu-link"
                      }
                      href='/reynaldo-resume.docx'>
                      <div>Downlaod resume</div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation ends */}
    </>
  );
};

export default Navigation;
