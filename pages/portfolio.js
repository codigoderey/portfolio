import React from 'react';
import PortfolioImage from '../components/PortfolioImage';
import Head from 'next/head';
const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Reynaldo Portfolio Website</title>
      </Head>
      <section id="content">
        <div className="content-wrap py-0">
          <div className="section">
            <div className="container">
              <div className="row align-items-end justify-content-between mb-5">
                <div className="col-lg-6 offset-lg-1">
                  <div>
                    <h3 className="font-weight-bolder display-4 mb-3">
                      Here are some{' '}
                      <span className="gradient-text gradient-horizon">
                        Real Life Projects
                      </span>{' '}
                      I have{' '}
                      <span className="gradient-text gradient-horizon">
                        Created
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="clear"></div>

              <div className="row justify-content-start col-mb-50 mb-5">
                <PortfolioImage
                  title="Santi Empleo"
                  about="Spanish Hiring Agency"
                  imgUrl="/portfolio-santiempleo.png"
                  altDesc="Santi Empleo website link"
                  extLink="https://www.santiempleo.com"
                  madeWith="API with authentication created with NodeJS, ExpressJS, Handlebars and MongoDB"
                />
                <PortfolioImage
                  title="Santi Empleo"
                  about="Spanish Hiring Agency"
                  imgUrl="/santiempleomobile.png"
                  altDesc="Santi Empleo Mobile App, Apple Store Link"
                  extLink="https://apps.apple.com/us/app/santi-empleo/id1481093407"
                  madeWith="Created with React Native, published in both Apple and Google Play Store"
                />
                <PortfolioImage
                  title="Coding Images"
                  about="Web Development Services"
                  imgUrl="/codingimages.png"
                  altDesc="Coding Images site link"
                  extLink="https://codingimages.com"
                  madeWith="Created with GatsbyJS, using Wordpress as a headless CMS"
                />

                <PortfolioImage
                  title="Fruto del Espíritu"
                  about="Spanish Religious Blog"
                  imgUrl="/frutodelespiritu.png"
                  altDesc="Fruto del Espíritu site link"
                  extLink="https://frutodelespiritu.com"
                  madeWith="Created with GatsbyJS, GraphQL API Wordpress API as a headless CMS and Mailchimp API"
                />

                <PortfolioImage
                  title="Compassionate Care Services"
                  about="Phsychiatrinc and Rehabiliation Services"
                  imgUrl="/compassionatecare.png"
                  altDesc="Compassionate Care Portfolio Link to Site"
                  extLink="https://compassionatecareservices.org"
                  madeWith="Created with HTML, CSS, JS PHP and MySQL"
                />
                <PortfolioImage
                  title="You are Created for Greater"
                  about="Phsychiatrinc and Rehabiliation Services"
                  imgUrl="/createdforgreater.png"
                  altDesc="You are Created for Greater Link to Site"
                  extLink="https://youarecreatedforgreater.org"
                  madeWith="Created with HTML, CSS, JS PHP and MySQL"
                />

                <PortfolioImage
                  title="Liderazgo Completo"
                  about="Informational Spanish Blog"
                  imgUrl="/liderazgocompleto.png"
                  altDesc="Liderazgo Completo site link"
                  extLink="https://liderazgocompleto.now.sh"
                  madeWith="Full Stack API created with authentication using NextJS and MongoDB plus the Mailchimp and Stripe API"
                />
              </div>

              <div className="row align-items-end justify-content-between mb-5">
                <div className="col-lg-6 offset-lg-1">
                  <div>
                    <h3 className="font-weight-bolder display-4 mb-3">
                      Here are other{' '}
                      <span className="gradient-text gradient-horizon">
                        Very Cool Projects
                      </span>{' '}
                      I have{' '}
                      <span className="gradient-text gradient-horizon">
                        Created
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="clear"></div>

              <div className="row justify-content-start col-mb-50 mb-5">
                <ul>
                  <li className="list-unstyled">
                    <a href="https://contact-keeper-front-to-back.herokuapp.com/register">
                      Contact Manager
                    </a>{' '}
                    <i
                      className="icon icon-arrow-right mr-2 font-weight-bold"
                      style={{ color: 'orangered' }}
                    ></i>
                    <p>
                      Full Stack Application with authentication to manage
                      contacts using the MERN stack with Redux.
                    </p>
                    <hr />
                  </li>

                  <li className="list-unstyled">
                    <a href="https://github-finder-traversy-media.netlify.app/">
                      Github Finder
                    </a>{' '}
                    <i
                      className="icon icon-arrow-right mr-2 font-weight-bold"
                      style={{ color: 'orangered' }}
                    ></i>
                    <p>
                      Here I use the Github API to find user profiles using
                      ReactJS as the front end.
                    </p>
                    <hr />
                  </li>

                  <li className="list-unstyled">
                    <a href="https://pixabay-reactjs.netlify.app/">
                      Pixabay Picture Lookup
                    </a>{' '}
                    <i
                      className="icon icon-arrow-right mr-2 font-weight-bold"
                      style={{ color: 'orangered' }}
                    ></i>
                    <p>
                      Here I use the Pixabay API to find pictures based on text
                      input.
                    </p>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default portfolio;
