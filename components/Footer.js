import React from "react";

const Footer = () => {
  return (
    <footer
      id='footer'
      className='border-0'
      style={{ backgroundColor: "#c9d6cf" }}>
      <div className='container'>
        <div className='footer-widgets-wrap m-0'>
          <div className='row justify-content-between'>
            <div className='col-md-7'>
              <div className='widget'>
                <h3 className='h1 mb-3'>
                  Got a Project?
                  <br />
                  Let's Talk!
                </h3>
                <a
                  href='https://www.linkedin.com/in/reynaldo-navedo'
                  target='_blank'
                  className='h4 text-dark d-block'>
                  <u>Contact me from LinkedIn</u>
                  <i
                    className='icon-line-arrow-right position-relative ml-2'
                    style={{ top: "3px" }}></i>
                </a>
                <a
                  href='mailto:rnavedojr@outlook.com?subject=Contact request from reynaldo.website'
                  className='h4 text-dark d-block mb-5'>
                  <u>Send me an email</u>
                  <i
                    className='icon-line-arrow-right position-relative ml-2'
                    style={{ top: "3px" }}></i>
                </a>
              </div>
            </div>

            <div className='col-md-5'>
              <h3 className='h1'>Navigation</h3>
              <ul className='list-unstyled ml-2'>
                <li>
                  <a className='text-dark' href='/'>
                    <u>Home</u>
                  </a>
                  <i className='ml-1 icon icon-arrow-right'></i>
                </li>
                <li>
                  <a className='text-dark' href='/about'>
                    <u>About Me</u>
                  </a>
                  <i className='ml-1 icon icon-arrow-right'></i>
                </li>
                <li>
                  <a className='text-dark' href='/portfolio'>
                    <u>My Work</u>
                  </a>
                  <i className='ml-1 icon icon-arrow-right'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
