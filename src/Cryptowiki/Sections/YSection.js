import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const YSection = () => {
  const ySectionRef = useNav("Y");

  return (
    <section ref={ySectionRef} id="ySectionContent">
      <div className="titleWrap">
        <p className="title-line">Y</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Year to date (YTD)"
            description="Year to date (YTD) refers to a period of time from the first day of the current calendar year, or financial year, to the present day. YTD data are important in analyzing financial and business trends over time or comparing performance data between investments within the same or different industries. The term is commonly used in the traditional investment industry but can also be used as it is related to blockchain and crypto investments to keep track of asset performance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Yearn Improvement Proposal (YIP)"
            description="Yearn Improvement Proposal (YIP) is a machine used by the Yearn.Finance ecosystem to propose new features and processes to help determine the direction of the Yearn.Finance project and its basic blockchain protocol. Suggestions are submitted by members of the Yearn.Finance community and voted on by the owners of YFI tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Yearn.Financial"
            description="Yearn.Finance is an expanded community focused on creating a series of automated, financial (DeFi) products for Ethereum. Calling themselves ‘a group of donors,’ the Yearn community is a testament to sectarianism, mass investment, and product development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="YFI Token"
            description="YFI is the management symbol of the Yearn.Finance protocol. YFI owners can submit, discuss, and vote on proposals to change protocols through the Yearn Improvement Proposal (YIP) process. The total YFI total is 30,000, although most tokens can be made if approved through the governance process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Yield Curve"
            description="Yield curve is a way of arranging data on a graph to measure profits from different investments at different times. Commonly used to plan profits on financial instruments such as bonds, yield curves are also useful for yielding yields in crypto. Yield curves indicate the relationship between interest rates (or borrowing costs) and the period (or maturity period) of an asset or group of assets. There are three main types of crop curves that include distorted, regular, and flat. Regular or high reversal curves indicate economic growth, while reversible or reversible curves indicate economic downturn or recession."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Yield Farming"
            description="Crop farming is the practice of inserting or closing cryptocurrensets within a blockchain protocol in order to generate token rewards. Many decentralized finance (DeFi) projects rely on crop farming to encourage users to contribute to the financial viability and stability of the network, as these projects do not depend on the medium market facilitator."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Yield Sensitivity"
            description="Yield sensitivity, or interest rate sensitivity, estimates of how much the price of a fixed income asset will fluctuate due to changes in interest rate. In general, securities and other types of assets that are more sensitive to sales have higher price volatility than those with less yield sensitivity. Yield sensitivity should be considered when selecting a fixed asset that an investor can sell in a secondary market. Yield sensitivity always affects both the purchase and sale of goods, and interest rates and fixed income prices are related to the opposite."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Yokokens"
            description="Yokokens cryptocurrency transaction tokens are issued by Yearn.Finance liquidity (LPs) providers when depositing goods in a protocol. Examples of yTokens include yCRV, which comes from Curve (CRV) and yaLINK, which comes from Aave's aLINK, which is itself based on the LINK token."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="yVaults"
            description="YVaults is a feature of the Yearn.Finance protocol that enables the process of crop harvesting. Users deposit tokens in yVault, and Yearn lends stablecoins against the user's assets. Stablecoins are then used for crop farming in various contracts, with vault-changing strategies as opportunities change. As profits are gained through stablecoins, Yearn converts profits back to the user's original position and user rewards are paid on that asset. Each yVault has an annual average yield (APY)."
          />
        </Col>
      </Row>
    </section>
  );
}

export default YSection
