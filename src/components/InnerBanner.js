import React from 'react';
import './innerBanner.scss';
import { Col, Row } from "react-bootstrap";

const InnerBanner = (props) => {
  return (
    <>
      <div className="gov-banner">
        <Row className="gov-row">
          <Col md={6} className="gov-content-wrap">
            <p className="big-title">
              {props.title} <span>{props.titlehighlight}</span>
            </p>

            <p className="gov-content">
              {props.desc}
            </p>

            <button className="btn btn-border-gradient">Buy Now</button>
          </Col>

          <Col md={6} className="gov-img-wrap">
            <img src={props.img} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default InnerBanner