import React from "react";
import "./ecosystem.scss";
import BannerTwo from "../components/BannerTwo";
import { Col, Row } from "react-bootstrap";
import logo from "../images/favicon.svg";
import stabledao from "../images/logos/stabledao.svg";
import gfuturetech from "../images/logos/logo.svg";
import sugarwire from "../images/logos/sugarwired.svg";
import hackmania from "../images/logos/hackmania.svg";
import grab from "../images/logos/grab.svg";
import Helmet from "react-helmet";

const Ecosystem = () => {
  return (
    <div className="ecosystem-page">
      <Helmet>
        {/* ================ begin::meta tags =============== */}
        <title>Ecosystem</title>
        <meta
          name="title"
          content="USDAO Ecosystem - Community Partners of USDAO"
        />
        <meta
          name="description"
          content="Want to contribute to USDAO ecosystem? Explore apps and services using USDAO."
        />
        <meta
          name="keywords"
          content="USDAO Ecosystem, Ecosystem, Community Partners, USDAO Community Partners"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-16" />
        <meta name="language" content="English" />
        <meta name="author" content="USDAO" />
        <meta
          property="og:title"
          content="USDAO Ecosystem - Community Partners of USDAO"
        />
        <meta
          property="og:description"
          content="Want to contribute to USDAO ecosystem? Explore apps and services using USDAO."
        />
        <meta property="og:site_name" content="USDAO" />
        <meta property="og:url" content="https://usdao.io/ecosystem" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://usdao.io/seo/ecosystem.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@usdao_io" />
        <meta
          name="twitter:description"
          content="Want to contribute to USDAO ecosystem? Explore apps and services using USDAO."
        />

        {/* ================ end::meta tags =============== */}
      </Helmet>

      <BannerTwo
        highlightedTitle="Join"
        bannerTwoTitle="Ecosystem"
        bannerTwoDesc="Explore apps and services using USDAO"
      />

      <div className="eco-foundation padding-x">
        <p className="title-line text-center">
          {" "}
          <span>The World's</span> Most Balanced Stablecoin
        </p>

        <p className="heading text-center">From</p>

        <div className="glassBox">
          <p className="title-line text-center">
            {" "}
            <span>Labs196</span>
          </p>
        </div>
      </div>

      <div className="support padding-x">
        <p className="title-line text-center">
          Supported By <span>USDAO Foundation</span>
        </p>
        <Row>
          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={3} className="partnersLogoWrap">
                  <img src={stabledao} alt="" className="support-logo" />
                </Col>

                <Col md={9}>
                  <p className="title-line">StableDAO</p>

                  <p className="content text-secondary">
                    A Truly Decentralized Reserve Currency Protocol.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={3} className="partnersLogoWrap">
                  <img src={logo} alt="" className="support-logo" />
                </Col>

                <Col md={9}>
                  <p className="title-line">NFT Marketplace</p>

                  <p className="content text-secondary">
                    An Open Marketplace For All Types of Asset.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="communityPartner padding-x">
        <p className="title-line text-center">
          Community <span>Partners</span>
        </p>
        <Row className="gy-4">
          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={4} lg={3} className="partnersLogoWrap">
                  <img src={gfuturetech} alt="" className="partnersLogo" />
                </Col>

                <Col md={8} lg={9}>
                  <p className="title-line">Gfuture Tech</p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={3} lg={2} className="partnersLogoWrap">
                  <img src={sugarwire} alt="" className="partnersLogo-square" />
                </Col>

                <Col md={9} lg={10}>
                  <p className="title-line">Sugarwired</p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={4} lg={3} className="partnersLogoWrap">
                  <img src={grab} alt="" className="partnersLogo" />
                </Col>

                <Col md={8} lg={9}>
                  <p className="title-line">Grabeasy</p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6}>
            <div className="glassBox">
              <Row className="align-items-center">
                <Col md={3} lg={2} className="partnersLogoWrap">
                  <img src={hackmania} alt="" className="partnersLogo-square" />
                </Col>

                <Col md={9} lg={10}>
                  <p className="title-line">Hackmania</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="contribute padding-x text-center">
        <p className="title-line text-center">
          Want to contribute to the <span>USDAO ecosystem?</span>
        </p>
        <p className="content text-secondary text-center w-100">
          The go-to resource for developers to start building with USDAO.
        </p>

        <a
          href="https://docs.usdao.io/docs/getting-started/for-developers"
          target="_blank"
          rel="noreferrer"
          className="btn btn-border-gradient"
        >
          Visit Developer Documentation
        </a>
      </div>
    </div>
  );
};

export default Ecosystem;
