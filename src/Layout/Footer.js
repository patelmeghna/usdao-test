import React from 'react';
import './footer.scss';
import logo from "../images/logo.svg";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col md={3}>
          <div className="footer-about">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <p className="footer-content">
                USDAO is a decentralized, community-based, multi
                collateral-backed cryptocurrency soft-pegged to the US dollar.
                It is designed to be resilient during market crash and
                hyperinflation which is ensured by ASSET token which is a USDAO
                pool stabilizer, USDAO offers owning US dollar without having a
                bank account and provide economic freedom and opportunity
                globally to anyone.
              </p>
            </div>
          </div>
        </Col>

        <Col md={9} className="footer-link-wrap">
          <Row className="gy-5">
            <Col md={3} xs={6}>
              <p className="footer-title">About</p>
              <ul>
                <li>
                  <Link to="/community" className="footer-link">
                    Community
                  </Link>
                </li>

                <li>
                  <Link to="/gov" className="footer-link">
                    Governance
                  </Link>
                </li>

                <li>
                  <Link to="/asset" className="footer-link">
                    Asset Token
                  </Link>
                </li>

                <li>
                  <Link to="/daogov" className="footer-link">
                    DAOGOV
                  </Link>
                </li>

                <li>
                  <a
                    href="https://docs.usdao.io/docs/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    USDAO Docs
                  </a>
                </li>

                <li>
                  <Link to="/stablecoin" className="footer-link">
                    USDAO Stablecoin
                  </Link>
                </li>

                <li>
                  <a
                    href="https://docs.usdao.io/docs/usdao-foundation/role-of-usdao-foundation"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    USDAO Foundation
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <p className="footer-title">Explore</p>
              <ul>
                <li>
                  <Link to="/mediakit" className="footer-link">
                    Mediakit
                  </Link>
                </li>

                <li>
                  <Link to="/staking" className="footer-link">
                    Staking
                  </Link>
                </li>

                <li>
                  <Link to="/community" className="footer-link">
                    Community
                  </Link>
                </li>

                <li>
                  <Link to="/ecosystem" className="footer-link">
                    Ecosystem
                  </Link>
                </li>

                <li>
                  <Link to="/contributors" className="footer-link">
                    Contributors
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <p className="footer-title">Library</p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://app.usdao.io/whitepaper"
                    className="footer-link"
                  >
                    Whitepaper
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://storageapi.fleek.co/b7509115-f99e-40d6-a7ce-b1dd48869279-bucket/USDAO%20Pitch%20deck%20(Biz+Tech+Innovation).pdf"
                    className="footer-link"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <p className="footer-title">Developers</p>
              <ul>
                <li>
                  <a
                    href="https://docs.usdao.io/docs/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    Docs
                  </a>
                </li>

                <li>
                  <a
                    href="https://docs.usdao.io/docs/getting-started/for-developers"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    Developer Resources
                  </a>
                </li>

                <li>
                  <a
                    href="https://docs.usdao.io/docs/usdao-stack/smart-contract-modules/oracle-module"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    Price Feeds
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <p className="footer-title">Contact</p>
              <ul>
                <li>
                  <a
                    href="https://app.usdao.io/contactus"
                    className="footer-link"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="https://usdao.medium.com/" className="footer-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="https://app.usdao.io/contactus"
                    className="footer-link"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    href="https://app.usdao.io/contactus"
                    className="footer-link"
                  >
                    Press inquiries
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <p className="footer-title">Partners</p>
              <ul>
                <li>
                  <a href="/#/contributors" className="footer-link">
                    USDAO Contributors
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer
