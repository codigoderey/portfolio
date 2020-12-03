import React from 'react';

const PortfolioImage = ({
  title,
  about,
  altDesc,
  imgUrl,
  extLink,
  madeWith,
}) => {
  return (
    <div className="col-lg-6 h-translatey-3 tf-ts">
      <a href={extLink} className="portfolio-item" target="_blank">
        <div className="portfolio-image">
          <img src={imgUrl} alt={altDesc} />
          <div className="bg-overlay">
            <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
              <h3 className="mb-0 mt-1">{title}</h3>
              <h5>{about}</h5>
            </div>
            <div className="bg-overlay-content align-items-start justify-content-end p-4">
              <div
                className="overlay-trigger-icon bg-light text-dark animated"
                data-hover-animate="fadeInDownSmall"
                data-hover-animate-out="fadeOutUpSmall"
                data-hover-speed="350"
                style={{ animationDuration: '350ms' }}
              >
                <i className="icon icon-external-link"></i>
              </div>
            </div>
          </div>
        </div>
        <p>{madeWith}</p>
      </a>
    </div>
  );
};

export default PortfolioImage;
