import React from 'react';
import './bannerTwo.scss';

const BannerTwo = (props) => {
  return (
    <div className="banner-two">
      <div className="banner-text-wrap">
        <p className="banner-two-title">
          <span>{props.highlightedTitle}</span> {props.bannerTwoTitle}
        </p>

        <p className="banner-two-desc text-center"> {props.bannerTwoDesc}</p>
      </div>
    </div>
  );
}

export default BannerTwo
