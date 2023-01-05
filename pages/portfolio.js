import React from 'react';
import PortfolioImage from '../components/PortfolioImage';
import Head from 'next/head';
const portfolio = () => {
	return (
		<>
			<Head>
				<title>Portfolio | Reynaldo Portfolio Website</title>
			</Head>
			<main>
				<section id='content'>
					<div className='content-wrap py-0'>
						<div className='container'>
							<div className='row align-items-end justify-content-between mb-5'>
								<div className='col-lg-6 offset-lg-1'>
									<div>
										<h3 className='font-weight-bolder display-4 mb-3'>
											My{' '}
											<span className='gradient-text gradient-horizon'>
												Production Projects
											</span>{' '}
											I have{' '}
											<span className='gradient-text gradient-horizon'>
												Created
											</span>
										</h3>
									</div>
								</div>
							</div>

							<div className='clear'></div>

							<div className='row justify-content-start col-mb-50 mb-5'>
								<PortfolioImage
									title='Javascript Ecosistema'
									about='Spanish JavaScript Blog and Tutorials'
									imgUrl='/javascriptes.png'
									altDesc='Javascriptes website link'
									extLink='https://www.javascriptes.com'
									madeWith='Created with ReactJS and Redux, MongoDB and ExpressJS'
								/>
								<PortfolioImage
									title='Santi Empleo'
									about='Spanish Hiring Agency'
									imgUrl='/portfolio-santiempleo.png'
									altDesc='Santi Empleo website link'
									extLink='https://www.santiempleo.com'
									madeWith='API with authentication created with NodeJS, ExpressJS, Handlebars and MongoDB'
								/>
								<PortfolioImage
									title='Santi Empleo'
									about='Spanish Hiring Agency'
									imgUrl='/santiempleomobile.png'
									altDesc='Santi Empleo Mobile App, Apple Store Link'
									// extLink="https://apps.apple.com/us/app/santi-empleo/id1481093407"
									madeWith='Created with React Native, published in both Apple and Google Play Store (removed)'
								/>
								<PortfolioImage
									title='Fruto del Espíritu'
									about='Spanish Religious Blog'
									imgUrl='/frutodelespiritu.png'
									altDesc='Fruto del Espíritu site link'
									extLink='https://frutodelespiritu.com'
									madeWith="Full Stack API using NextJS and MongoDB plus other API's"
								/>

								<PortfolioImage
									title='Compassionate Care Services'
									about='Phsychiatric and Rehabiliation Services'
									imgUrl='/compassionatecare.png'
									altDesc='Compassionate Care Portfolio Link to Site'
									extLink='https://compassionatecareservices.org'
									madeWith='Created with HTML, CSS, JS, PHP and MySQL'
								/>
								<PortfolioImage
									title='You are Created for Greater'
									about='Phsychiatric and Rehabiliation Services'
									imgUrl='/createdforgreater.png'
									altDesc='You are Created for Greater Link to Site'
									extLink='https://youarecreatedforgreater.com'
									madeWith='Created with HTML, CSS, JS, PHP and MySQL'
								/>

								<PortfolioImage
									title='Project Hope'
									about='Non profit organization I help as volunteer.'
									imgUrl='/proyectohope.png'
									altDesc='Project Hope site link'
									extLink='https://proyectohope.com/'
									madeWith='NextJS static site'
								/>

								<PortfolioImage
									title='Ciudad de Refugio Church'
									about='Non profit organization I help as volunteer.'
									imgUrl='/ciudadderefugio.png'
									altDesc='Ciudad de Refugio Church site link'
									extLink='https://miciudadderefugio.com/'
									madeWith='NextJS full stack using the MERN stack'
								/>
							</div>
							<div className='mb-5'>
								<a href='/reynaldo-resume.docx'>
									<div className='text-underline mb-1'>
										<u>Download my resume</u>
									</div>
								</a>
								<a href='https://www.youtube.com/channel/UCHML0Ene6Vj8KjjBCsjAg5w'>
									<div className='text-underline'>
										<u>Watch me coding live</u>
									</div>
								</a>
							</div>
							<div className='row align-items-end justify-content-between mb-5'>
								<div className='col-lg-6 offset-lg-1'>
									<div>
										<h3 className='font-weight-bolder display-4 mb-3'>
											Cool{' '}
											<span className='gradient-text gradient-horizon'>
												ReactJS Web Apps
											</span>{' '}
											I have{' '}
											<span className='gradient-text gradient-horizon'>
												Created
											</span>
										</h3>
									</div>
								</div>
							</div>

							<div className='clear'></div>

							<div className='row justify-content-start col-mb-50 mb-5 p-3'>
								<ul>
									<li className='list-unstyled'>
										<i className='icon icon-react mr-2'></i>
										<a
											target='_blank'
											href='https://contact-keeper-front-to-back.herokuapp.com/register'>
											Contact Manager
										</a>{' '}
										<i
											className='icon icon-arrow-right mr-2 font-weight-bold'
											style={{ color: 'orangered' }}></i>
										<p>
											Full Stack Application with authentication to manage
											contacts using the MERN stack with Redux.
										</p>
										<hr />
									</li>
									<li className='list-unstyled'>
										<i className='icon icon-react mr-2'></i>
										<a
											target='_blank'
											href='https://github-finder-traversy-media.netlify.app/'>
											Github Finder
										</a>{' '}
										<i
											className='icon icon-arrow-right mr-2 font-weight-bold'
											style={{ color: 'orangered' }}></i>
										<p>
											Here I use the Github API to find user profiles using
											ReactJS as the front end.
										</p>
										<hr />
									</li>
									<li className='list-unstyled'>
										<i className='icon icon-react mr-2'></i>
										<a
											target='_blank'
											href='https://pixabay-reactjs.netlify.app/'>
											Pixabay Picture Lookup
										</a>{' '}
										<i
											className='icon icon-arrow-right mr-2 font-weight-bold'
											style={{ color: 'orangered' }}></i>
										<p>
											Here I use the Pixabay API to find pictures based on text
											input.
										</p>
										<hr />
									</li>
									bb-quotes-react.netlify.app
									<li className='list-unstyled mb-3'>
										<i className='icon icon-react mr-2'></i>
										<a
											target='_blank'
											href='https://news-search-api.netlify.app/'>
											News Search
										</a>{' '}
										<i
											className='icon icon-arrow-right mr-2 font-weight-bold'
											style={{ color: 'orangered' }}></i>
										<p>Using the news API to fetch news based on category.</p>
										<hr />
									</li>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-react mr-2'></i>
										<a
											target='_blank'
											href='https://bb-quotes-react.netlify.app/'>
											Breaking Bad Quotes
										</a>{' '}
										<i
											className='icon icon-arrow-right mr-2 font-weight-bold'
											style={{ color: 'orangered' }}></i>
										<p>Displaying Breaking Bad quotes using an API.</p>
										<hr />
									</li>
								</ul>
							</div>

							<div className='row align-items-end justify-content-between mb-5'>
								<div className='col-lg-6 offset-lg-1'>
									<div>
										<h3 className='font-weight-bolder display-4 mb-3'>
											Other{' '}
											<span className='gradient-text gradient-horizon'>
												technologies
											</span>{' '}
											I use to create{' '}
											<span className='gradient-text gradient-horizon'>
												web apps
											</span>
										</h3>
									</div>
								</div>
							</div>

							<div className='row justify-content-start col-mb-50 mb-5 p-3'>
								<ul>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-wordpress mr-2'></i>
										WordPress
									</li>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-react mr-2'></i>
										GatsbyJS
									</li>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-ioxhost mr-2'></i>
										Hosting
									</li>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-database mr-2'></i>
										MongoDB and SQL
									</li>
									<li className='list-unstyled mb-3'>
										<i className='icon icon-node-js mr-2'></i>
										NodeJS
									</li>
									<li className='list-unstyled mb-3'>And more...</li>
								</ul>
							</div>

							<div className='clear'></div>
						</div>
					</div>
				</section>
				<script src='/jquery.js'></script>
				<script src='/functions.js'></script>
				<script src='/plugins.min.js'></script>
			</main>
		</>
	);
};

export default portfolio;
