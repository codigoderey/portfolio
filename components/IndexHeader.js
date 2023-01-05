import React from "react";

const IndexHeader = () => {
  return (
    <section
      id='slider'
      className='slider-element min-vh-md-100 py-4 include-header'
      style={{
        backgroundColor: "#fff",
        backgroundImage: "url('/hero-bg.svg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}>
      <div className='slider-inner'>
        <div className='vertical-middle slider-element-fade'>
          <div className='container text-center py-5'>
            <div className='emphasis-title mb-2'>
              <h4 className='text-uppercase ls3 font-weight-bolder mb-0'>
                I'm <span style={{ color: "orange" }}>Reynaldo</span>, a
                Freelance Full Stack
              </h4>
              <h1>
                <span
                  id='oc-images'
                  className='owl-carousel image-carousel carousel-widget'
                  data-items='1'
                  data-margin='0'
                  data-autoplay='3000'
                  data-loop='true'
                  data-nav='false'
                  data-pagi='false'
                  data-animate-in='fadeInUp'>
                  <div className='oc-item gradient-text gradient-red-yellow text-uppercase'>
                    Developer
                  </div>
                  <div className='oc-item gradient-text gradient-red-yellow text-uppercase'>
                    Designer
                  </div>
                </span>
              </h1>
            </div>
            <div className='mx-auto' style={{ maxWidth: "600px" }}>
              <p className='lead font-weight-normal text-dark mb-5'>
                Welcome to my site, I am a full stack web developer. I love to
                work in the JavaScript environment and create apps to achieve
                goals or solve problems. Please take a look and contact me if
                you have an idea on mind or an issue to solve. Enjoy.
              </p>
              <div className='d-flex align-items-center justify-content-center'>
                <a
                  href='/portfolio'
                  className='button button-dark button-hero h-translatey-3 tf-ts button-reveal overflow-visible bg-dark text-right'>
                  <span>View my work</span>
                  <i className='icon-line-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexHeader;
