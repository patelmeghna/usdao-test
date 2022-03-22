import React from "react";
import { Col, Row } from "react-bootstrap";
import BannerTwo from "../components/BannerTwo";
import "./mediakit.scss";
import usdaoLight from "../images/mediakit/white.png";
import usdaodark from "../images/mediakit/dark.png";
import monotonLight from "../images/mediakit/monoton-white.png";
import monotondark from "../images/mediakit/monoton-black.png";
import favicon from "../images/mediakit/filled-favicon.png";
import faviconTrans from "../images/mediakit/transperant-favicon.png";
import favicondark from "../images/mediakit/favicon-black.png";
import faviconLight from "../images/mediakit/favicon-white.png";
import asset from "../images/mediakit/asset.png";
import assetdark from "../images/mediakit/assetdark.png";
import assetfav from "../images/mediakit/assetfav.png";
import assetfavdark from "../images/mediakit/assetfavdark.png";
import assetfavTrans from "../images/mediakit/assetfavTrans.png";
import assetfavwhite from "../images/mediakit/assetfavwhite.png";
import assetTrans from "../images/mediakit/assetTrans.png";
import assetwhite from "../images/mediakit/assetwhite.png";
import dao from "../images/mediakit/dao.png";
import daoblack from "../images/mediakit/daoblack.png";
import daodark from "../images/mediakit/daodark.png";
import daofav from "../images/mediakit/daofav.png";
import daofav2 from "../images/mediakit/daofav2.png";
import daofavdark from "../images/mediakit/daofavdark.png";
import daofavwhite from "../images/mediakit/daofavwhite.png";
import daowhite from "../images/mediakit/daowhite.png";
import shadow from "../images/mediakit/shadow.png";
import stretch from "../images/mediakit/stretch.png";
import transform from "../images/mediakit/transform.png";

const MediaKit = () => {
  return (
    <div className="mediakit">
    <title>Brand Assets</title>
      <BannerTwo
        highlightedTitle="USDAO Media Kit and Brand"
        bannerTwoTitle="Resources"
        bannerTwoDesc="USDAO is a stable, decentralized currency that does not discriminate. Any individual or business can realize the advantages of digital money."
      />

      <div className="extra-note padding-x">
        <div className="note-wrap">
          <p className="note-text">
            If you don’t have USDAO, Then you need to buy it with 1 US Dollar or
            You can Convert your other cryptocurrency into USDAO!
          </p>

          <a
            href="https://app.usdao.io/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-border-gradient fs-4"
          >
            Connect Wallet
          </a>
        </div>
      </div>

      <div className="logos-section padding-x">
        <p className="title-line text-center">
          <span>USDAO Media Kit -</span> Logos
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            The USDAO brand logos displayed in the official colors and usage
            patterns. Do not place the logo on top of other objects and leave a
            reasonable amount of margin around the outside so the logo is
            clearly visible.
          </p>
        </div>

        <Row className="gx-5 gy-5">
          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={usdaodark} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={monotonLight} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={monotondark} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={usdaoLight} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={favicon} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={faviconTrans} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={favicondark} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={faviconLight} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}
        </Row>
      </div>

      <div className="logos-section padding-x">
        <p className="title-line text-center">
          <span>Our</span> Logos
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            The USDAO brand logos displayed in the official colors and usage
            patterns. Do not place the logo on top of other objects and leave a
            reasonable amount of margin around the outside so the logo is
            clearly visible.
          </p>
        </div>

        <Row className="gx-5 gy-5">
          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={dao} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={daodark} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={daoblack} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={daowhite} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={daofav} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={daofav2} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={daofavdark} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={daofavwhite} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}
        </Row>
      </div>

      <div className="logos-section padding-x">
        <p className="title-line text-center">
          <span>Our</span> Logos
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            The USDAO brand logos displayed in the official colors and usage
            patterns. Do not place the logo on top of other objects and leave a
            reasonable amount of margin around the outside so the logo is
            clearly visible.
          </p>
        </div>

        <Row className="gx-5 gy-5">
          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={asset} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={assetTrans} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={assetdark} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={assetwhite} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={assetfav} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={assetfavTrans} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={assetfavdark} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={assetfavwhite} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone white</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}
        </Row>
      </div>

      <div className="logos-section padding-x">
        <p className="title-line text-center">
          <span>Logo</span> Don'ts
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            Here are a few things that you should avoid doing when using the
            logo
          </p>
        </div>

        <Row className="gx-5 gy-5 justify-content-center">
          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={stretch} alt="" />
              </div>

              <p className="logo-title fw-bold">Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible.
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo">
                <img src={transform} alt="" />
              </div>

              <p className="logo-title fw-bold">Inverted Primary Logo</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}

          {/* ============= logo =============== */}
          <Col md={4} lg={3}>
            <div className="media-logo-wrap">
              <div className="media-logo logo-bg-gray">
                <img src={shadow} alt="" />
              </div>

              <p className="logo-title fw-bold">Monotone black</p>
              <p className="aboutLogo">
                This is the main USDAO logo. It should be used in this form
                whenever possible
              </p>

              <div className="download-btn">
                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6"
                >
                  SVG
                </a>

                <a
                  href="/"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="btn btn-border-gradient fs-6 ms-3"
                >
                  PNG
                </a>
              </div>
            </div>
          </Col>
          {/* ============= logo =============== */}
        </Row>
      </div>
    </div>
  );
};

export default MediaKit;
