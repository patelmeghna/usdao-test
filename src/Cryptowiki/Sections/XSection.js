import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const XSection = () => {
    const xSectionRef = useNav("X");

    return (
      <section ref={xSectionRef} id="xSectionContent">
        <div className="titleWrap">
          <p className="title-line">X</p>
        </div>
        <Row className="gy-4">
          <Col lg={6}>
            <ContentComponent
              title="X16R (Hashing Algorithm)"
              description="The X16R is a hashing algorithm designed, created, and implemented by the Ravencoin blockchain network. The X16R is designed to minimize application-specific integrated (ASIC) mining blockchain. ASIC miners are expensive, a computer hardware specialist who many believe makes the mining process more profitable for industry operations and leaves miners behind. Therefore, the X16R was designed by Ravencoin as a proof of unique performance (PoW) that strongly opposed centralization."
            />
          </Col>
          <Col lg={6}>
            <ContentComponent
              title="XBT (Another Bitcoin Tick)"
              description="XBT is a unique bitcoin token (BTC) token used for certain exchanges. Its format is based on a code of practice developed by the International Organization for Standardization (ISO) which stipulates that higher currency codes should start with an 'X'."
            />
          </Col>
          <Col lg={6}>
            <ContentComponent
              title="XEM (NEM Blockchain)"
              description="XEM is a traditional NEM blockchain symbol and is used for payments on the network. Additionally, users must hold XEM to participate in the NEM compliance process. NEM uses the Proof-of-Importance (POI) algorithm for agreement, which determines who can generate a block by calculating the user-related value in the network. The user-related value result is based on the number of XEM tokens they carry, in addition to the number of tasks performed to and from the user's NEM wallet. Users with the most important points are more likely to produce blocks in the blockchain."
            />
          </Col>
          <Col lg={6}>
            <ContentComponent
              title="XRP (Ripple)"
              description="XRP is the traditional Ripple Ledger Network coin. It is designed to be a means of exchange and transfer of value, and is intended to be used as a low-cost bridge between fiat currencies for a wide range of global operations."
            />
          </Col>
          <Col lg={6}>
            <ContentComponent
              title="XYM (Symbol Blockchain)"
              description="XYM is a traditional cryptocurrency Symbol blockchain launched in March 2021. XYM will be used to pay for network transactions. In order to receive XYM, qualified XEM owners - holders of the NEM blockchain native token, created by the same group and the previous symbol - may require the same XYM number."
            />
          </Col>
        </Row>
      </section>
    );
}

export default XSection
