import React from 'react';

const Testimonies = () => {
  return (
    <div className="section bg-transparent py-5">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-lg-4">
            <h3 className="font-weight-bolder h1 mb-4">
              What Some of my Clients Say
            </h3>

            <div
              id="oc-testi"
              className="owl-carousel testimonials-carousel carousel-widget mt-5 owl-loaded owl-drag with-carousel-dots"
              data-margin="0"
              data-items="1"
              data-pagi="true"
              data-nav="false"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: 'translate3d(-690px, 0px, 0px)',
                    transition: 'all 0.25s ease 0s; width: 2070px',
                  }}
                >
                  <div className="owl-item" style={{ width: '690px' }}>
                    <div className="oc-item">
                      <div className="testimonial border-0 shadow-none bg-transparent">
                        <div className="testi-content">
                          <p>
                            Reynaldo have been a tremendous help for my hispanic
                            recruiting agency. He made it possible for me to
                            embrace technology and its advantages for my
                            business. He is the type of persons that you want in
                            your side for good.
                          </p>
                          <div className="testi-meta d-flex align-items-center">
                            <img src="/face.jpg" alt="Face" width="30" />
                            <div>
                              Carlos Santillán
                              <span className="pl-0">
                                <a
                                  href="https://santiempleo.com"
                                  target="_blank"
                                >
                                  santiempleo.com
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: '690px' }}>
                    <div className="oc-item">
                      <div className="testimonial border-0 shadow-none bg-transparent">
                        <div className="testi-content">
                          <p>
                            Reynaldo is very savvy in the development subject.
                            He build my site and now I can orientate people
                            through the website and also they can make
                            appointments. That is such a big help for my
                            bussiness.
                          </p>
                          <div className="testi-meta d-flex align-items-center">
                            <img src="/face2.jpg" alt="Face" width="30" />
                            <div>
                              Lakía Thompson
                              <span className="pl-0">
                                <a href="https://youarecreatedforgreater.com">
                                  youarecreatedforgreater.com
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: '690px' }}>
                    <div className="oc-item">
                      <div className="testimonial border-0 shadow-none bg-transparent">
                        <div className="testi-content">
                          <p>
                            I didn't know the potentials of having a website to
                            keep my visitors enganged until I met Reynaldo. He
                            built a website with an automated system to send
                            emails everytime I create a new post. I loved that!
                          </p>
                          <div className="testi-meta d-flex align-items-center">
                            <img src="/face3.jpg" alt="Face" width="30" />
                            <div>
                              Gigi Hernandez
                              <span className="pl-0">
                                <a
                                  href="https://frutodelespiritu.com"
                                  target="_blank"
                                >
                                  frutodelespiritu.com
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="icon-angle-left"></i>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="icon-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src="/bg.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
