import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const ZSection = () => {
  const zSectionRef = useNav("Z");

  return (
    <section ref={zSectionRef} id="zSectionContent">
      <div className="titleWrap">
        <p className="title-line">Z</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Z-Address (Zcash)"
            description="The z address is 'secure,' or an improved Zcash address. Actions between the z and another address do not reflect the side addresses, activity value, or content of the blockchain memo activity in blockchain. The z-address uses cryptography for non-information information to achieve these features. z-addresses interact with the obvious z-cash addresses, showing the addresses of the trading companies, the transaction value, and the content of the transaction memo. Users can therefore send transactions from a private address to a private address (two z addresses), from a public address (t-address) to a private address (z-address), or from a private address (z-address) to a public address ( t- address). z-addresses using cryptographic authentication technology zk SNARK."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Zcash (ZEC)"
            description="Zcash is a cryptocurrency-focused cryptocurrency project that aims to provide effective, confidential services to its users through its feature of secure addresses. Zcash protocol uses its traditional token, ZEC, to facilitate this transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Zerion"
            description="Zerion is a portable portfolio management portfolio for fixed investment (DeFi) investors. Offering both the web and the mobile app, Zerion allows investors to track their DeFi assets in one place, even if distributed across multiple wallets. Zerion also gives users the ability to interact with DeFi agreements directly on its site, making it possible to purchase and exchange tokens, provide financing on automated market maker (AMM) pools, and to borrow and lend goods without leaving the app."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Zero-Knowledge Proof (ZKP)"
            description="Zero-Knowledge Proof (ZKP) is a type of cryptographic proof that gives users a high level of privacy when performing digital tasks. In short, ZKP empowers one party to assure the other party that they know a certain number, without passing any other information unless they know that number. In short, this evidence allows information to be accurately verified without sharing any information about the basic information and participants' identity of the transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Zero-Knowledge Rollup (zk-Rollup)"
            description="Zero-Knowledge Rollup (zk-Rollup) - also known as Zero-Knowledge Proof Rollup or ZKR - is a Layer-2 rating solution that uses zk-SNARKs (cryptographic privacy-based evidence) to allow blockchains that integrate transactions into one. calculation before performing using a smart contract. This secure measurement solution enhances performance while enhancing protocol privacy. StarkWare, Loopring, Hermez, and Aztec blockchain networks using zk-Rollups. Sometimes used in conjunction with exchange agreements (DEX), the use of zk-Rollups on other blockchains can result in lower transaction costs, improved liquidity, improved end-to-end crypto ownership, and more."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Zero-Knowledge Anonymous Conflict of Knowledge (zk-STARK)"
            description="The transparent information argument (zk-STARK) is a special form of cryptographic proof that is used to ensure confidentiality in distributed blockchain-based distributed systems. It works by proving that one party holds certain data without disclosing the data to the network. Zk-STARK is an integral part of Zero-Knowledge Rollups (zk-Rollups), a popular Layer-2 measurement solution. Zk-STARKs is a new development based on zero-knowledge short unrelated information arguments (zk-SNARKS), and they are more distrustful than their predecessors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="zk-SNARK"
            description="Zero-Knowledge Succinct Non-Interactive Non-Interactive Argument of Knowledge (zk-SNARK) is a form of cryptographic proof that is used to ensure privacy on blockchain-based distributed systems. It works by proving that one organization owns certain data without disclosing the data to the network by using a secret key before the transaction is broadcast. Zk-SNARKS came to prominence with Zcash, Monero, and other privacy-based blockchain systems."
          />
        </Col>
      </Row>
    </section>
  );
}

export default ZSection
