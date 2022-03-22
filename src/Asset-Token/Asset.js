import React from "react";
import InfoBox from "../components/InfoBox";
import InnerBanner from "../components/InnerBanner";
import logo from "../images/logos/asset-logo.png";
import "./asset.scss";
import asset1 from "../images/shapes/Asset1.png";
import asset2 from "../images/shapes/Asset2.png";
import chainlink from "../images/logos/chainlink.svg";
import compund from "../images/logos/compund.svg";
import uniswap from "../images/logos/uniswap.svg";
import { Col, Row } from "react-bootstrap";
import ImagePattern from "../components/ImagePattern";

const Asset = () => {
  return (
    <div className="asset-page">
      <title>Asset Token</title>
      <InnerBanner
        title="ASSET"
        titlehighlight="TOKEN"
        desc="Liquidity providers deposit ETH in return for ASSET tokens, which represent a proportion of the liquidity pool"
        img={logo}
      />

      <ImagePattern />

      <InfoBox infoDesc="Asset token holders are stakeholders in the liquidity pool, assuming both the risks and harvesting the rewards of a well-functioning stablecoin ecosystem." />

      <div className="about-asset">
        <Row className="aboutRowOne">
          <Col
            md={6}
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <p className="text">
              The USDAO pool is funded with Ether (ETH), providing the backing
              that the system needs to be always fully collateralized. Users who
              wish to fund the pool do so by buying the ASSET token with ETH.
            </p>

            <p className="text">
              The transaction fees paid by users of the USDAO stablecoin go into
              the reserve pool, essentially increasing the amount of ETH always
              in the liquidity pool, thus ASSET holders increase their ETH
              holdings over time by providing liquidity to the ecosystem, as the
              ASSET tokens they hold essentially denote their ownership of
              proportion of the digital assets in the pool.
            </p>
          </Col>

          <Col md={6}>
            <img src={asset1} alt="" className="asset-img" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src={asset2} alt="" className="asset-img" />
          </Col>

          <Col
            md={6}
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <p className="text">
              The price of the ASSET token changes based upon the current value
              of ETH and total collateralization in the USDAO pool. This means
              that when the price of ETH falls, it allows liquidity providers to
              buy more ASSET tokens at cheaper ETH prices, and realise the
              profit when the price rises again.
            </p>

            <p className="text">
              Liquidity providers are not restricted by minimum deposit amounts
              or length of time they are required to hold the ASSET token.
            </p>
          </Col>
        </Row>
      </div>

      <div className="price-calculation">
        <div className="price-calculation-wrap">
          <Row>
            <Col md={7}>
              <p className="heading">ASSET TOKEN</p>
              <p className="title-line">PRICE CALCULATION</p>

              <p className="content text-secondary">
                The buy and sell prices of the ASSET token are determined by the
                ecosystem’s multiple on-chain Oracles, provided by Chainlink,
                UniSwap and Compound. This use of multiple oracles ensures that
                price accuracy is maintained at all times, and ensures the
                system continues to function normally in the event of
                malfunction of one of the oracles.
              </p>
            </Col>

            <Col md={5}>
              <div className="asset-logo">
                <img src={chainlink} alt="" />
              </div>

              <div className="asset-logo">
                <img src={compund} alt="" />
              </div>

              <div className="asset-logo">
                <img src={uniswap} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="info d-flex flex-column align-items-center justify-content-center">
        <p className="title-line text-center mb-5">
          <span>More information</span>
        </p>

        <p className="infoText">
          For full details about the ASSET token, including technical details
          for developers, in-depth calculations and information about how the
          liquidity pool works, please refer to the official{" "}
          <a href="https://docs.usdao.io/docs" target="_blank" rel="noreferrer">
            {" "}
            USDAO protocol documentation.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Asset;
