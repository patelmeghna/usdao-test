import React from 'react';
import './infobox.scss';

const InfoBox = (props) => {
  return (
    <div className="decentralize">
      <div className="decentralize-box">
        <div className="box-title-wrap">
          <p className="box-title">{props.infoTitle}</p>
        </div>

        <p>{props.infoDesc}</p>

        <p>{props.infoDesc2}</p>

        <p>{props.infoDesc3}</p>
      </div>
    </div>
  );
}

export default InfoBox
