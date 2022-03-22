import React from "react";
import { Col, Row } from "react-bootstrap";
import BannerTwo from "../components/BannerTwo";
import "./community.scss";
import doc from '../images/icons/doc.svg';
import resource from '../images/icons/resource.svg';
import logo from '../images/favicon.svg';
import Devlopers from '../components/Developers';
import Social from "../components/Social";
import Contributers from "./Contributers";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Community = () => {
  return (
    <div className="community-page">
      <Helmet>
        {/* ================ begin::meta tags =============== */}
        <title>Community</title>
        <meta
          name="title"
          content="USDAO Community - Get The Best Resources to Learn More"
        />
        <meta
          name="description"
          content="Join USDAO community today to get yourself educated and learn more from the best resources"
        />
        <meta
          name="keywords"
          content="USDAO Community, Crypto Community, StableCoin Community"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-16" />
        <meta name="language" content="English" />
        <meta name="author" content="USDAO" />
        <meta
          property="og:title"
          content="USDAO Community - Get The Best Resources to Learn More"
        />
        <meta
          property="og:description"
          content="Join USDAO community today to get yourself educated and learn more from the best resources."
        />
        <meta property="og:site_name" content="USDAO" />
        <meta property="og:url" content="https://usdao.io/community" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://usdao.io/seo/community.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@usdao_io" />
        <meta
          name="twitter:description"
          content="Join USDAO community today to get yourself educated and learn more from the best resources"
        />
        {/* ================ end::meta tags =============== */}
      </Helmet>

      <BannerTwo
        highlightedTitle="Join"
        bannerTwoTitle="the USDAO Community"
        bannerTwoDesc="Looking to learn more? Here are the best resources available in order
          to get educated, and become part of the USDAO Community."
      />

      <div className="about-company padding-x">
        <Row className="align-items-center">
          <Col md={5}>
            <p className="title-line">
              {" "}
              <span>The World's</span> Most Balanced Stablecoin
            </p>

            <p className="content text-secondary">
              USDAO is a stable, decentralized currency that does not
              discriminate. Any individual or business can realise the
              advantages of digital money.
            </p>
          </Col>

          <Col md={7} className="d-flex justify-content-center">
            <div className="community-icon-wrap">
              <a
                href="https://app.usdao.io/whitepaper"
                target="_blank"
                rel="noreferrer"
                className="community-icon-box"
              >
                <img src={doc} alt="" />
                <p>Explore the Whitepaper</p>
              </a>

              <a
                href="https://test.usdao.io/"
                target="_blank"
                rel="noreferrer"
                className="community-icon-box"
              >
                <img src={logo} alt="" />
                <p>Get started with USDAO</p>
              </a>
            </div>

            <div className="community-icon-wrap">
              <a
                href="https://gateway.pinata.cloud/ipfs/QmUHnrVc3r4NRdtGh8biD4z4v4xsc7DDFdDLfgy136VNVq"
                target="_blank"
                rel="noreferrer"
                className="community-icon-box"
              >
                <img src={logo} alt="" />
                <p>Check Our Portfolio</p>
              </a>

              <a
                href="https://docs.usdao.io/docs/"
                target="_blank"
                rel="noreferrer"
                className="community-icon-box"
              >
                <img src={resource} alt="" />
                <p>Resources</p>
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <Devlopers />

      <div className="contributerTitle d-flex align-items-center justify-content-between">
        <p className="title-line">
          {" "}
          USDAO <span>Contributors</span>
        </p>

        <Link to="/contributors" className="btn btn-border-gradient">
          View All
        </Link>
      </div>

      <Contributers />

      <Social
        socialHighlight="Join"
        socialTitle="A Global Open Source Community"
      />
    </div>
  );
};

export default Community;
