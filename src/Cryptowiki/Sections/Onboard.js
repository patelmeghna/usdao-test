import React from "react";
import { Col, Row } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const Onboard = () => {
  const onboardRef = useNav("#");

  return (
    <section ref={onboardRef} id="onboardContent">
      <div className="titleWrap">
        <p className="title-line">#</p>
      </div>

      <Row className="gy-4">
        <Col lg={12}>
          <ContentComponent title="Ox">
            <p>
              0x is a decentralized peer-to-peer exchange (DEX) allowing users
              to exchange Ethereum (ERC-20) based tokens. The protocol uses two
              separate strategies: State channels, which take transactions
              offline, thus minimizing transaction costs, and AMM’s (Automated
              Market Makers) which allow for the direct trading between parties.
            </p>

            <p className="my-4">
              The platform was developed by Will Warren and Amir Bandeali in
              2016, with the intention of creating a standard method and ability
              for anyone to trade any ERC-20 based token.
            </p>

            <p>
              0x allows developers to build and deploy their own cryptocurrency
              exchange, and the protocol has it’s own token (ZRX) which is used
              to pay for certain fees.
            </p>

            <p className="mt-4">
              In its current incarnation, 0x provides professional grade API’s
              which enable liquidity aggregation for DeFi (Decentralized
              Finance) applications.
            </p>
          </ContentComponent>
        </Col>

        <Col lg={12}>
          <ContentComponent title="1 Inch">
            <p>
              1 inch is a decentralized exchange aggregator which secures best
              prices across a range of decentralized exchanges. As of June 2021,
              1inch offers users access to over 50 liquidity sources on the
              Ethereum, Binance Smart Chain and Polygon networks.
            </p>
            <p className="mt-4">
              The 1inch token is a combined utility and governance token, and
              liquidity providers can earn 1inch tokens by staking their crypto
              into the networks liquidity pools.
            </p>
          </ContentComponent>
        </Col>

        <Col lg={12}>
          <ContentComponent title="51% Attack">
            <p>
              A 51% attack refers to a situation where a majority of the nodes
              on a blockchain are controlled by a single individual, group or
              entity, and which means that effectively there is no distributed
              concensus any more. In such a case, the entity which controls this
              majority of nodes has the power to reverse, duplicate and prevent
              transactions, which essentially destroys the purpose of a
              decentralized blockchain.
            </p>
          </ContentComponent>
        </Col>
      </Row>
    </section>
  );
};

export default Onboard;
