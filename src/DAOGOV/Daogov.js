import React from 'react';
import './daogov.scss';
import InnerBanner from '../components/InnerBanner';
import ImagePattern from '../components/ImagePattern';
import { Row, Col } from 'react-bootstrap';
import currency from "../images/logos/currency.svg";
import logo from "../images/logos/asset-logo.png";

const Daogov = () => {
  return (
    <div className="daogov">
      <title>DAO Gov</title>
      <InnerBanner
        title="Truly Decentralized"
        titlehighlight="DAOGOV Token"
        desc="DAOGOV tokens are the governance tokens of the USDAO protocol, allowing holders to create and vote on proposals and upgrade mechanisms"
        img={logo}
      />

      <ImagePattern />

      <div className="coin-info padding-x">
        <Row className="align-items-center justify-content-center coin-info-wrap">
          <Col md={8}>
            <p className="title-line">
              DAOGOV <span>decentralized decision making</span>
            </p>

            <p className="content text-secondary mb-3">
              One of the biggest criticisms of many stablecoins is their
              centralized governance structure.
            </p>

            <p className="content text-secondary mb-3">
              The USDAO protocol is designed to be 100% decentralized, with
              decision making placed in the hands of DAOGOV token holders.
            </p>

            <p className="content text-secondary">
              DAOGOV tokens are ERC-20 tokens which allow holders the ability to
              create, and vote on, proposals which are then enacted by smart
              contracts once approved by a simple majority in the community.
            </p>
          </Col>

          <Col md={4}>
            <div className="img-wrap">
              <img src={currency} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="feature-wrap padding-x">
        <Row className="feature-row">
          <Col md={4} className="mt-50">
            <div className="feature-box">
              <div className="feature-img"></div>

              <p className="feature-title">DELEGATION​</p>
              <p className="feature-desc">
                DAOGOV token holders delegate their tokens voting power to a
                wallet, either their own or a third parties.
              </p>

              <a
                href="https://docs.usdao.io/docs/decentralized-governance/key-concepts"
                target="_blank"
                rel="noreferrer"
                className="btn btn-border-gradient mt-4"
              >
                Find out more
              </a>
            </div>
          </Col>

          <Col md={4} className="mt-50">
            <div className="feature-box bg">
              <div className="feature-img"></div>

              <p className="feature-title">PROPOSALS</p>
              <p className="feature-desc">
                Wallets with sufficient delegated voting power may create a
                proposal which is then subject to approval by the community.
              </p>

              <a
                href="https://docs.usdao.io/docs/decentralized-governance/key-concepts"
                target="_blank"
                rel="noreferrer"
                className="btn btn-border-gradient mt-4"
              >
                Find out more
              </a>
            </div>
          </Col>

          <Col md={4} className="mt-50">
            <div className="feature-box">
              <div className="feature-img"></div>

              <p className="feature-title">VOTING</p>
              <p className="feature-desc">
                Wallets with delegated voting power may vote to approve or
                reject proposals .
              </p>

              <a
                href="https://docs.usdao.io/docs/decentralized-governance/key-concepts"
                target="_blank"
                rel="noreferrer"
                className="btn btn-border-gradient mt-4"
              >
                Find out more
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Daogov
