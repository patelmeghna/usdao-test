import React from "react";
import "./stablecoin.scss";
import InnerBanner from "../components/InnerBanner";
import logo from "../images/logos/asset-logo.png";
import ImagePattern from "../components/ImagePattern";
import currency from "../images/logos/currency.svg";
import { Row, Col } from "react-bootstrap";
import backend from "../images/shapes/backend.svg";
import ecosystem from "../images/shapes/ecosystem.svg";
import security from "../images/shapes/security.svg";
import listicon from "../images/listcheck.svg";
import Helmet from "react-helmet";

const Stablecoin = () => {
  return (
    <div className="stablecoin">
      <Helmet>
        {/* ========================= begin:: meta tags ========================= */}
        <title>USDAO Stablecoin</title>
        <meta
          name="title"
          content="USDAO - Fully Balanced StableCoin in The Crypto World!"
        />
        <meta
          name="description"
          content="Your search for the world's most balanced StableCoin ends with USDAO that is pegged 1:1 with the US Dollar."
        />
        <meta
          name="keywords"
          content="StableCoins, USDAO StableCoin, Best StableCoin"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-16" />
        <meta name="language" content="English" />
        <meta name="author" content="USDAO" />
        <meta
          property="og:title"
          content="USDAO - Fully Balanced StableCoin in The Crypto World!"
        />
        <meta
          property="og:description"
          content="Your search for the world's most balanced StableCoin ends with USDAO that is pegged 1:1 with the US Dollar."
        />
        <meta property="og:site_name" content="USDAO" />
        <meta property="og:url" content="https://usdao.io/stablecoin" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://usdao.io/seo/stablecoin.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@usdao_io" />
        <meta
          name="twitter:description"
          content="Your search for the world's most balanced StableCoin ends with USDAO that is pegged 1:1 with the US Dollar."
        />

        {/* ========================= end:: meta tags ========================= */}
      </Helmet>
      <InnerBanner
        title="Truly Decentralized"
        titlehighlight="USDAO Stablecoin"
        desc="Liquidity providers deposit ETH in return for ASSET tokens, which represent a proportion of the liquidity pool"
        img={logo}
      />

      <ImagePattern />

      <div className="coin-info padding-x">
        <Row className="align-items-center justify-content-center coin-info-wrap">
          <Col md={8}>
            <p className="title-line">
              The World's Most <span>Balanced Stablecoin</span>
            </p>

            <p className="content text-secondary">
              The USDAO Stablecoin is the main token of the protocol, and as its
              name suggests, it acts as a stablecoin pegged 1:1 with the US
              Dollar.
            </p>
          </Col>

          <Col md={4}>
            <div className="img-wrap">
              <img src={currency} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="features padding-x">
        <p className="title-line text-center">
          <span>USDAO</span> Features
        </p>

        <div className="d-flex align-items-center justify-content-center">
          <p className="content text-secondary text-center">
            USDAO is a fully collateralized stablecoin designed to hold its
            dollar peg even during market downturns and black swan events.
          </p>
        </div>

        <div className="feature-wrap">
          <Row>
            <Col md={4} className="mt-50">
              <div className="feature-box">
                <div className="feature-img">
                  <img src={security} alt="" />
                </div>

                <p className="feature-title">Trustless & Open System</p>
                <p className="feature-desc">
                  The USDAO stablecoin is available to everyone to use. Simply
                  connect a compatible ERC-20 wallet, and you are set to go.
                </p>
              </div>
            </Col>

            <Col md={4} className="mt-50">
              <div className="feature-box bg">
                <div className="feature-img">
                  <img src={backend} alt="" />
                </div>

                <p className="feature-title">Fully Collateralized</p>
                <p className="feature-desc">
                  The USDAO protocol is fully crypto backed and designed to
                  ensure total collateralization at all times.
                </p>
              </div>
            </Col>

            <Col md={4} className="mt-50">
              <div className="feature-box">
                <div className="feature-img">
                  <img src={ecosystem} alt="" />
                </div>

                <p className="feature-title">Liquidity Provider Incentives</p>
                <p className="feature-desc">
                  The USDAO ecosystem has low transaction fees, which are added
                  to the USDAO pool to further incentivise liquidity providers.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="buy-sell padding-x">
          <p className="title-line text-center mb-5">
            Buy and Sell USDAO in <span>Easy Steps</span>
          </p>

          <Row>
            <Col md={6} className="mb-3">
              <div className="step-wrap">
                <Row>
                  <Col md={3}>
                    <p className="step-count">1</p>
                  </Col>

                  <Col md={9}>
                    <p className="fw-bold">Buy USDAO</p>

                    <p className="step-info">
                      To buy via the USDAO platform you need to exchange for
                      Ether (ETH), at the rate of 1 USDAO for every $1 worth of
                      ETH at the time of conversion.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={6}>
              <div className="step-wrap">
                <Row>
                  <Col md={3}>
                    <p className="step-count">2</p>
                  </Col>

                  <Col md={9}>
                    <p className="fw-bold">Sell USDAO</p>

                    <p className="step-info">
                      To sell via USDAO platform, get ETH back for USDAO
                      stablecoins at the current value. Certain crypto exchanges
                      may also allow to exchange other cryptos for USDAO.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={12} className="mt-5 text-center">
              <a
                href="https://test.usdao.io/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-border-gradient fs-4"
              >
                Check Now
              </a>
            </Col>
          </Row>
        </div>
      </div>

      <div className="feesInfo padding-x">
        <Row className="align-items-center">
          <Col md={5}>
            <p className="title-line">Transfer</p>
            <p className="heading">Fees</p>
          </Col>

          <Col md={7}>
            <div className="list-wrap">
              <img src={listicon} alt="" className="icon" />
              <p className="list-text">
                USDAO Mint: <span>0.03%</span> of the transaction total deducted
                when exchanging ETH for USDAO.
              </p>
            </div>

            <div className="list-wrap">
              <img src={listicon} alt="" className="icon" />
              <p className="list-text">
                USDAO Burn: <span>0.03%</span> of the transaction total will be
                deducted when exchanging USDAO for ETH.
              </p>
            </div>

            <div className="list-wrap">
              <img src={listicon} alt="" className="icon" />
              <p className="list-text">
                ASSET Mint: <span>0.2%</span> of the transaction deducted when
                minting ASSET.
              </p>
            </div>

            <div className="list-wrap">
              <img src={listicon} alt="" className="icon" />
              <p className="list-text">
                ASSET Burn: <span>0.3%</span> of the transaction deducted when
                burning ASSET.
              </p>
            </div>

            <div className="list-wrap">
              <img src={listicon} alt="" className="icon" />
              <p className="list-text">
                USDAO Transfer: <span>0.03%</span> of the transaction in USDAO
                will be deducted from the user when transferring USDAO from one
                account to another.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Stablecoin;
