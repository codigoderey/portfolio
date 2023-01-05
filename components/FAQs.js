import React from "react";

const FAQs = () => {
	return (
		<div
			className="section m-0"
			style={{
				backgroundColor: "#f1efe5",
				backgroundImage: "url('/bg2.svg')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right center",
				paddingTop: "240px"
			}}>
			<div
				className="shape-divider"
				data-shape="wave-4"
				data-height="150"
				id="shape-divider-5202">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1280 140"
					preserveAspectRatio="none"
					className="op-ts op-1">
					<path
						className="shape-divider-fill"
						d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z"
						opacity="0.3"></path>
					<path
						className="shape-divider-fill"
						d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z"
						opacity="0.5"></path>
					<path
						className="shape-divider-fill"
						d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"></path>
				</svg>
			</div>
			<div className="container px-5">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<h3 className="font-weight-bolder h1 my-5">
							A few things clients
							<br />
							normally ask me
						</h3>
						<div className="accordion" data-collapsible="true">
							<div className="accordion-header accordion-active acctitlec">
								<div className="accordion-icon">
									<i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
									<i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
								</div>
								<div className="accordion-title">
									How much do you charge for your work?
								</div>
							</div>
							<div className="accordion-content" style={{ display: "none" }}>
								It all depends on what are your needs. I can build from front
								end websites out of wordpress or templates to fully designed and
								customized full stack websites.
							</div>

							<div className="accordion-header">
								<div className="accordion-icon">
									<i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
									<i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
								</div>
								<div className="accordion-title">
									What is Our Refund Policy?
								</div>
							</div>
							<div className="accordion-content" style={{ display: "none" }}>
								I do everything contract based, once we agree I will work in
								contract terms. I normally ask for a 50% non-refundable down
								payment.
							</div>

							<div className="accordion-header" id="id-accordion-3">
								<div className="accordion-icon">
									<i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
									<i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
								</div>
								<div className="accordion-title">
									What payment processing do you use?
								</div>
							</div>
							<div className="accordion-content" style={{ display: "none" }}>
								I normally accept paypal, which by the way accept any credit or
								debit card payment. If you are close to my area and we are able
								to meet, I can also accept cash.
							</div>
						</div>
					</div>

					<div className="col-lg-7">
						<img src="/ask.svg" alt="FAQs" className="px-5" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
