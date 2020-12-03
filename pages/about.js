import React from 'react';
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>About | Reynaldo Portfolio Website</title>
      </Head>
      <section id="content">
        <div className="content-wrap pb-0">
          <div className="mw-md container mb-5">
            <h2
              className="display-4 font-weight-light"
              style={{ lineHeight: '1.5' }}
            >
              I am a Freelancer,{' '}
              <span className="gradient-text gradient-horizon">Full Stack</span>{' '}
              <span className="gradient-text gradient-horizon">
                Web and Mobile Developer
              </span>
              , Based in{' '}
              <span className="gradient-text gradient-horizon">USA</span>.
              Successful Designer with more than{' '}
              <span className="gradient-text gradient-horizon">5 years</span> of
              professional experience &amp; with lots of{' '}
              <span className="gradient-text gradient-horizon">Satisfied</span>{' '}
              Customers.
            </h2>
          </div>

          <div className="clear"></div>

          <div className="container mw-md mt-5">
            <h2 className="display-3 font-weight-bolder text-uppercase">
              What I Do{' '}
              <span className="gradient-text gradient-horizon">&amp;</span>
              <br /> How I Do It
            </h2>
            <div className="row mt-4">
              <div className="col-md-8 offset-1">
                <p className="lead">
                  I currently work full time as a contractor for Yorktel
                  Telecom. I mainly do front end web develoment in a daily
                  basis. However I also work as a freelancer on my own doing
                  from web design to front end and full stack web and mobile
                  applications.
                </p>
                <p className="lead">
                  It all depends on what the customer need. I am always willing
                  to give my customers the best solution possible based in their
                  needs.
                </p>
                <p className="lead">
                  I can develop from basic HTML templates and Wordpress sites to
                  full stack applications using technologies like NodeJS,
                  ReactJS, GraphQL, MongoDB and much more. Please continue
                  reading for a full list of the technologies that I master.
                </p>
              </div>
            </div>

            <div className="row align-wide-xxl my-5 text-center">
              <div className="col-sm-6">
                <img src="/a1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-sm-6">
                <img src="/a2.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="section text-center mb-0">
            <div className="mw-xs mx-auto ">
              <h3 className="display-4 font-weight-bolder text-uppercase">
                Technologies that{' '}
                <span className="gradient-text gradient-horizon">I use</span>
              </h3>
              <div className="mt-4 lead">
                <p>I personally love to work in the JavaScript environment.</p>
                <p>
                  When building full stack applications I usually use ExpressJS
                  and combine the API with MongoDB or MySQL databases.
                </p>
                <p>
                  For the view engines I normally like to use ReactJS for the
                  front end but also know PugJS, EJS and HandlebarsJS.
                </p>
                <p>
                  I also know about emails API like SendGrid and Mailchimp plus
                  much more based on the techonology documentation.
                </p>
              </div>

              <div className="clear"></div>

              <div className="row justify-content-center align-items-center mt-4 col-mb-30">
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-html5"></i>
                  <p>HTML</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-css3"></i>
                  <p>CSS</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-js"></i>
                  <p>JavaScript</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-node"></i>
                  <p>NodeJS</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-react"></i>
                  <p>ReactJS</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-php"></i>
                  <p>PHP</p>
                </div>
                <div className="col-md-4 col-6 center">
                  <i className="icon icon-4x icon-mailchimp"></i>
                  <p>Mailchimp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mw-md mb-5">
            <h2 className="display-3 font-weight-bolder text-uppercase mb-0">
              See{' '}
              <span className="gradient-text gradient-horizon">
                My Portfolio
              </span>
            </h2>
            <p className="mt-0 lead">Or visit my GitHub account</p>
            <div className="row align-items-center justify-content-start h-100">
              <div className="col-auto text-center">
                <a
                  href="/portfolio"
                  className="button button-dark button-hero h-translatey-3 tf-ts button-reveal overflow-visible bg-dark text-right"
                >
                  <span>View my portfolio</span>
                  <i className="icon-line-arrow-right"></i>
                </a>
                <a
                  href="#"
                  data-scrollto="#footer"
                  data-easing="easeInOutExpo"
                  data-speed="1250"
                  data-offset="70"
                  className="button button-large button-light text-dark bg-transparent m-0"
                >
                  <u>Github Profile</u>
                  <i className="icon-github-alt font-weight-bold ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
