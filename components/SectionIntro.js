import React from 'react';

const SectionIntro = () => {
  return (
    <div
      className="section mb-0 pt-3 pb-0"
      style={{
        backgroundColor: '#f4f4f4',
        marginTop: '150px',
        overflow: 'visible',
      }}
    >
      <div
        className="shape-divider"
        data-shape="wave"
        data-height="150"
        data-outside="true"
        data-flip-vertical="true"
        data-fill="#F4F4F4"
        id="shape-divider-8320"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="op-ts op-1"
        >
          <path
            className="shape-divider-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-6">
            <div>
              <h3 className="font-weight-bolder h1 mb-4">
                Full Stack Mobile &amp; Web Development Solutions, Based in{' '}
                <span className="gradient-text gradient-horizon">USA</span>
              </h3>
              <p className="mb-0 lead text-black-50 font-weight-extralight">
                Nice to meet you! I do full stack development for the web and
                mobile devices using the latest technologies in the JavaScript
                environment.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center position-relative pb-5">
        <div
          className="parallax min-vh-25 skrollable skrollable-between"
          style={{
            // backgroundImage: "url('/me.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '73.4673vw',
          }}
          data-bottom-top="width: 40vw"
          data-center-top="width: 100vw;"
        >
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-auto text-center">
              <a
                href="/portfolio"
                className="button button-dark button-hero bg-dark text-right"
              >
                <span>View my portfolio</span>
                <i className="icon-line-arrow-right"></i>
              </a>
              <a
                href="https://github.com/codigoderey"
                target="_blank"
                className="button text-dark button-hero bg-light text-right"
              >
                <span>Github Profile</span>
                <i className="icon-github-alt font-weight-bold ml-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="shape-divider"
          data-shape="wave"
          data-position="bottom"
          id="shape-divider-3021"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="op-ts op-1"
          >
            <path
              className="shape-divider-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
