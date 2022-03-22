import React from 'react';
import './staking.scss';
import BannerTwo from '../components/BannerTwo';
import { Row, Col } from 'react-bootstrap';
import list from "../images/list-icon.svg";

const Staking = () => {
  return (
    <div className="staking">
      <title>USDAO Staking</title>

      <BannerTwo
        highlightedTitle="Earn Staking"
        bannerTwoTitle="Rewards Using USDAO"
      />

      <div className="steps padding-x">
        <p className="title-line text-center">
          Staking in <span>Easy Steps</span>
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            USDAO is a stable, decentralized currency that does not
            discriminate. Any individual or business can realize the advantages
            of digital money.
          </p>
        </div>
        <Row className="step-padding">
          <Col md={6} className='mb-xs-3'>
            <div className="step-wrap">
              <Row>
                <Col md={3}>
                  <p className="step-count">1</p>
                </Col>

                <Col md={9}>
                  <p className="fw-bold">Deposit USDAO</p>

                  <p className="step-info">
                    Simply deposit 1 USDAO to your account to begin staking.
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
                  <p className="fw-bold">Deposit USDAO</p>

                  <p className="step-info">
                    If you don’t have USDAO buy it from our app by providing ETH
                    or you can convert them with leading cryptocurrencies in
                    Exchanges
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="extra-note padding-x">
        <div className="note-wrap">
          <p className="note-text">
            If you don’t have USDAO, Then you need to buy it with 1 US Dollar or
            You can Convert your other cryptocurrency into USDAO!
          </p>

          <a
            href="https://test.usdao.io/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-border-gradient fs-4"
          >
            Buy Now
          </a>
        </div>
      </div>

      <div className="stacks padding-x">
        <p className="title-line text-center">
          STAKE ON <span>USDAO</span>
        </p>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <p className="content text-secondary text-center">
            Earn rewards by staking your USDAO to help secure the network.
            Choose your staking preference, start earning with a few clicks, and
            use your staked fundsas collateral on USDAO.
          </p>
        </div>

        <div className="protocol-list glassBox">
          <Row>
            <Col md={6} xl={3}>
              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">Earn 6% APY</p>
              </div>
            </Col>
            <Col md={6} xl={3}>
              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">Compound your stake</p>
              </div>
            </Col>
            <Col md={6} xl={3}>
              <div className="list-wrap mb-md-0">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">Unlock liquidity</p>
              </div>
            </Col>
            <Col md={6} xl={3}>
              <div className="list-wrap mb-0">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">Choose your rewards</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Staking
