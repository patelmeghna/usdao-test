import React from "react";
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const CSection = () => {
  const cSectionRef = useNav("C");

  return (
    <section ref={cSectionRef} id="cSectionContent">
      <div className="titleWrap">
        <p className="title-line">C</p>
      </div>
      <Row className="gy-4">
        <Col lg={12}>
          <ContentComponent title="C++">
            <p>
              A programming language widely used in application development. C++
              is a compiled language which is an extension to the general
              purpose C programming language.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Call Option">
            <p>
              A call option is a form of derivatives contract which exists in
              the traditional financial market, and is gaining popularity in the
              more volatile cryptocurrency market.{" "}
            </p>
            <p className="my-4">
              A call option gives the holder (the buyer of the call) the right
              (but not the obligation) to purchase an asset at a specific price
              (the strike price) on a specific date (the options expiry date).
              The holder pays a premium to the seller of the call option for the
              right to hold the option.{" "}
            </p>
            <p>
              If on the options expiry date, the price of the asset is above the
              strike price, the holder has the right to exercise his options,
              and the seller of the call option must deliver the assets for the
              strike price. This is called being “in the money”.{" "}
            </p>
            <p className="my-4">
              If however on the options expiry date, the asset is below the
              strike price, the option expires “out of the money” and
              essentially the holder has lost the premium they paid for the
              option.{" "}
            </p>
            <p>The opposite of a call option is a ‘put’.</p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Candlestick">
            <p>
              Candlesticks are charting tools used in all financial markets, and
              provide a graphical representation of the movement of price of an
              asset on a specific time frame.{" "}
            </p>
            <p className="my-4">
              The candlestick consists of a five main elements which provide
              visual information at a glance. The session open price, the
              session close price, the highest and lowest prices and the current
              price in the session.
            </p>
            <p>
              Normally, candlesticks are color coordinated to make viewing
              simpler, with green candlestick denoting a position currently
              higher than the open price, and red denoting a current position
              lower than the open price.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Canister">
            <p>
              On the DFINITY Internet Computer, a canister is defined as an
              advanced smart contract featuring enhanced scaling ability and
              computational units. Similar to a container in some blockchain
              systems, a canister also stores data relating to the current
              software state along with a record of historic transactions.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="CAP Theorum">
            <p>
              CAP theorem is a concept in computer science which states that a
              distributed network cannot provide more than 2 out of 3 guarantees
              of Consistency, Availability and Partition tolerance, with the
              first letters of each of these guarantees making up the name CAP.{" "}
            </p>
            <p className="mt-4">
              It is essentially the basis upon which the blockchain trilemma
              theory is based, which states that a blockchain cannot be fully
              decentralized, fully scalable and fully secure, and some trade-off
              needs to be built into the blockchain to ensure it is in some ways
              functional.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Cardano">
            <p>
              Cardano is a proof of stake (PoS) blockchain which boasts smart
              contract functionality, high throughput and a green (energy
              efficient) concensus system. The native token of the Cardano
              ecosystem is ADA.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Casascius Coins">
            <p>
              Casascius coins are physical bitcoin products, essentially metal
              coins featuring a tamper-resistant sticker which concealed a
              private key. Because they were tangible physical goods, they could
              be exchanged by hand, and they came preloaded with fixed amounts
              of Bitcoin up to 1000 BTC. Casascius coins have not been available
              since 2013, and unredeemed coins are highly valued by collectors,
              and thus often fetch a large premium on the market.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="CashFusion">
            <p>
              CashFusion is a privacy tool on the Bitcoin Cash network which is
              used for concealing data relating to transactions, preventing
              everyday transactions being tracked by chain-analysis companies.{" "}
            </p>
            <p className="mt-4">
              It achieves this by “fusing” different amounts, in many ways
              similar to the way Monero and cryptocurrency mixers work.
              CashFusion uses the Tor protocol, hiding the users IP address from
              the server.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Casper">
            <p>
              Casper is the name of the Ethereum 2.0 concensus mechanism which
              began being rolled out in March 2021. It essentially migrates
              Ethereum from a Proof of Work (PoW) blockchain to one which uses
              the Proof of Stake concensus mechanism.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="CasperLabs">
            <p>
              CasperLabs is the software development company which is the lead
              on the creation and implementation of the Casper upgrade to the
              Ethereum network.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Catalysts">
            <p>
              In the Sandbox metaverse game, Catalysts are tokens which define
              the scarcity of user generated assets.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Celo">
            <p>
              A mobile-device focused blockchain payments platform which allows
              all smartphone users to access their services. Celo is a fork from
              the Ethereum blockchain, and developers cLabs claim that Celo will
              allow users to access decentralized financial products which
              require much less technical knowledge than many existing DeFI
              applications.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Censorship Resistance">
            <p>
              Censorship resistance refers to how resistant a network is to
              extraneous tampering by any actor, whether that be an individual,
              government, regulator or institution. A blockchain with a high
              degree of decentralized features makes censorship of data
              difficult if not impossible to achieve.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Central Bank Digital Currency (CBDC)">
            <p>
              A Central Bank Digitial Currency (or CBDC for short) is a
              cryptocurrency which, although built on the principles of
              blockchain concensus for speed and transaction finalization,
              ultimately one the token supply is controlled by a central bank
              (and perhaps by definition a government).{" "}
            </p>
            <p className="mt-4">
              CBDC’s are very contentious, as they are designed to replace the
              current financial system, including cash, and give ultimate
              control of the money supply to the central authority. This
              provides the central authority with the power to make money
              ‘programmatic’, for example preventing spending on certain goods,
              or even revoking access to the financial system completely.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="CPU Miner">
            <p>
              A CPU miner is a cryptocurrency mining system which uses the
              Central processing unit (CPU) of a computer system to solve the
              hash problems and thus validate blocks.
            </p>

            <p className="mt-4">
              CPU Mining has largely been superceded by other mining methods,
              particularly by GPU and ASIC mining, although some blockchains
              have implemented ASIC resistance which still provides CPU Miners
              with the ability to compete as block validators.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Centralization">
            <p>
              Centralization means the control and authority of a network,
              application or system by a single person or entity. This means
              that this authority is essentially the ‘final arbiter’ and has
              ultimate power to control the access to data, privileges and so
              on.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Centralized Exchange / CEX">
            <p>
              A centralized exchange (sometimes abbreviated as a CEX) is a
              platform whereby users can trade digital assets. The exchange
              essentially acts as an intermediary between sellers and buyers,
              and almost always require token holders to give up the control of
              their assets, locking them instead into the platform’s own
              wallets.{" "}
            </p>
            <p className="mt-4">
              Whilst centralized exchanges are powerful in the sense that they
              allow for free trading of digital assets, they are not recommended
              for long term storage of cryptocurrencies, due to the lack of
              control users have over their funds.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="CENTRE">
            <p>
              Centre is a FinTech company launched as a collaboration between
              Circle and Coinbase, and is the creator and governing body of the
              USDC stablecoin.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Certificate Authority">
            <p>
              A certificate authority is an independent organization which
              issues certificates which are required to cryptographically verify
              digital signatures on the internet. For example, they may provide
              the management and issuance of SSL (secure socket layer)
              certificates, which are widely regarded as best practice for
              securing all websites.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Chain Key">
            <p>
              A chain key is a 48-byte public chain key on the DFINITY Internet
              Computer protocol, which is responsible for finalizing
              transactions on the network. Chain Key technology also allows for
              communication between the varied components of the ICP system.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Chain Migration">
            <p>
              Chain migration refers to when a blockchain project chooses to
              move its main operation onto a different blockchain protocol.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="ChainLink">
            <p>
              Chainlink is a decentralized network which provides price oracles
              in real time to various smart contracts on the blockchain via an
              API. The native currency of the platform is the LINK token.{" "}
            </p>
          </ContentComponent>
        </Col>
      </Row>
    </section>
  );
};

export default CSection;
