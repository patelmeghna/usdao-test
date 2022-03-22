import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentComponent from "../ContentComponent";
import useNav from "../CustomHooks/useNav";

const ASection = () => {
  const aSectionRef = useNav("A");

  return (
    <section ref={aSectionRef} id="aSectionContent">
      <div className="titleWrap">
        <p className="title-line">A</p>
      </div>
      <Row className="gy-4">
        <Col lg={12}>
          <ContentComponent title="Aave">
            <p>
              Aave is an Ethereum based DeFi platform which allows users to
              participate in decentralized loan making and writing as either
              borrowers or lenders (depositors). Users who wish to borrow are
              able to take out a loan provided they put up collateral in the
              form of cryptocurrency assets. Depositors provide collateral to
              the platform, receiving aTokens in return, which are interest
              bearing tokens.
            </p>
            <p className="my-4">
              Aave was one of the first platforms to develop flash loan
              capabilities, allowing for uncollateralized lending of funds as
              long as the principle was repaid within the same transaction
              block.
            </p>
            <p>
              The Aave protocol uses an ERC-20 based governance token, which
              also allows users who deposit AAVE as collateral to benefit from
              discounted transaction fees.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Account Abstraction Layer (AAL)">
            <p>
              On the Qtum prototol, the Account Abstraction Layer (AAL) is the
              infrastructure model which allows the accounts model used in the
              Ethereum network to be abstracted (transferred or mutated) to work
              on top of the UTXO (Unspent Transaction output) model used by
              Bitcoin and other chains.
            </p>
            <p className="mt-4">
              Essentially, the AAL allows blockchains which operate these two
              distinct models to be able to interact.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Account Model">
            <p>
              The account model is a blockchain architecture structure which is
              most notably used by blockchains which provide smart contract
              functionality, as opposed to the UXTO (unspent transaction output)
              model which is used by blockchains such as Bitcoin which do not.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Accredited Investor">
            <p>
              An accredited investor is defined as an individual or entity which
              meets certain threshold criteria providing access to complex
              investments which other investors (generally smaller retail
              investors) may not have access to.
            </p>
            <p className="my-4">
              Examples of accredited investors may include high net worth
              individuals, hedge funds, banks, Venture Capital (VC) funds and
              corporations.
            </p>
            <p>
              Financial products which are available only to accredited
              investors usually require higher minimum investment amounts, and
              often require a much higher risk tolerance. However the benefit to
              accredited investors is normally higher yield potential and
              increased diversification.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Acquirer Node">
            <p>
              Acquirer nodes are found on the Crypto.com (CRO) network, and come
              in two forms, one for the customer and one for the merchant. They
              are used to settle transactions, provide escrow services and user
              and merchant identity verification.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Adaptive State Sharding">
            <p>
              On the Elrond network, adaptive state sharding describes how three
              standard sharding types are combined into a single system to
              improve efficiency, including enhanced scalability and transaction
              settlement speed.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Address (Cryptocurrency Address)">
            <p>
              A cryptocurrency address is a unique string of characters which
              denote the location of a specific blockchain wallet. If a user
              wishes to send cryptocurrency to a specific wallet, they enter the
              address of that wallet.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Admin Key">
            <p>
              In the context of blockchain, an admin key generally refers to the
              private key which allows the holder to make changes to a protocol
              or smart contract. It is usually held by the founders of a
              project, although some projects state that they eliminate the
              admin key from core team control in order to maintain the
              decentralized nature of the protocol.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Airdrop">
            <p>
              An airdrop is a method whereby digital assets are transmitted to
              user wallets without purchase from the user. They are generally
              employed as a marketing tactic to grow a community around a
              project.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Airnode">
            <p>
              An Airnode is an oracle node which allows users to access the API3
              blockchain protocol and bring their own API data fees directly
              on-chain. It supports API providers to run a node with minimal
              intervention, and facilitates interfacing smart contract platforms
              with the specific API feeds.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Algorand">
            <p>
              Algorand is a proof of stake (PoS) blockchain protocol founded by
              MIT professor Silvio Micali in 2017, and launched onto mainnet in
              June 2019.
            </p>
            <p className="my-4">
              Using the native ALGO token, the protocol supports smart contract
              deployment using the ASC1 (Algorand Smart Contract) method, which
              delineates contracts into to categories, smart contracts and smart
              signatures.
            </p>
            <p>
              On chain assets, known as Algorand Smart Assets (ASAs), benefit
              from the high speed and security functionality of the Algorand
              concensus protocol, and can be fungible or non-fungible tokens.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Algorithmic Stablecoin">
            <p>
              An algorithmic stablecoin is one where collateral is not held
              using fiat or cryptocurrency reserves, rather the price is
              stabilized through algorithms and smart contracts which alter the
              circulation token supply by inflating or deflating the number
              available in the market in order to maintain their peg to the
              specific currency to which they claim parity (normally the US
              dollar).{" "}
            </p>
            <p className="mt-4">
              Examples of algorithmic stablecoins include Mithril Cash,
              Ampleforth (AMPL) and Empty Set Dollar (ESD)
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Algorithmic Trading">
            <p>
              Algorithmic trading refers to automated trading by computers which
              follow a pre-defined set of instructions to place trades in high
              speed. The algorithms used are generally quite complex and
              calculate entry and exit positions based on price, quantity,
              timing, volume and other strategies.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="All Time High (ATH)">
            <p>
              All time high refers to the recorded historical highest price of
              an asset
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="All Time Low (ATL)">
            <p>
              All time low refers to the recorded historical lowest price of an
              asset.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Allocation (Token Allocation)">
            <p>
              Allocation refers to how tokens are reserved by investors, core
              team members and so on usually prior to a pre-sale and are often
              made public providing transparency for potential investors to see
              both availability of tokens as well as how reserved tokens will be
              used (for example for marketing, team bonus etc).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Alpha Lending">
            <p>
              Alpha Lending is a decentralized DeFi platform which allows for
              lending and borrowing with interest rates being calculated
              algorithmically. Alpha Lending runs across both the Binance Smart
              Chain and Ethereum networks, and facilitates cross-chain assets
              which help maximise returns for lenders, who in return for
              providing liquidity are given interest bearing alTokens
              representing their ownership share of the pool they deposited
              into.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Alpha Version / Alpha Release">
            <p>
              Alpha version, or Alpha release, refers to an early stage in the
              software development cycle which allows developers and core users
              to test the functionality of a product or service prior to its
              wider release.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Altcoin">
            <p>
              An altcoin is any, and all, cryptocurrencies which are not
              Bitcoin.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Amazon Web Services (AWS)">
            <p>
              Amazon Web Services is the worlds biggest on-demand cloud
              computing services platform used by individuals, organisations and
              governments to host their services in a robust, highly scalable
              and widely-available manner.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Amortization">
            <p>
              Amortization refers how costs are spread across time or between
              different parties in a financial transaction by making planned and
              incremental payments of principle amounts and interest charged.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="AMP">
            <p>
              AMP is an ERC-20 based collateral token used on the Flexa network,
              which is a protocol which allows users to spend certain
              cryptocurrencies with participating retailers in physical
              locations. It essentially guarantees retail payments even whilst
              blockchain transactions are still confirming (meaning buyers don’t
              have to wait around in the store for settlement to be confirmed).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Anchor Protocol">
            <p>
              Anchor Protocol is a savings protocol on the Terra stablecoin
              ecommerce platform, which allows users to earn block rewards by
              lending out Terra to borrowers. Anchor uses its own utility token
              ANC for fee payments.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Angel Investor">
            <p>
              An Angel Investor is an individual who seeks out new investment
              opportunities in the form of startups or early growth companies.
              In addition to lending capital, they often provide other tangible
              and non-tangible services, including mentoring, business advice,
              access to existing marketing and sales teams and other benefits,
              all with a view on increasing the company’s chance of high growth.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Ankr">
            <p>
              Ankr is a decentralized Web3 infrastructure platform developed by
              Chandler Song which aims to make it simple for developers to build
              and deploy dApps and deploy nodes. The Ankr network uses the ANKR
              token as a medium of exchange on the platform for the payment of
              services as well as a governance token.{" "}
            </p>
            <p className="my-4">
              Ankr’s services can be categorized into two main functions: Node
              Infrastructure and StakeFi.{" "}
            </p>
            <p className="mb-4">
              Node infrastructure allows users to participate in launching nodes
              or participating in validation processes on Proof of Stake (PoS)
              blockchains without the need for the level of technical capability
              that is normally required.
            </p>
            <p>
              StakeFi assists users who wish to stake tokens on various
              blockchains, even smaller amounts, by making use of the
              non-custodial staking methods offered by the platform.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Annual Percentage Rate (APR)">
            <p>
              Annual Percentage Rate is the amount of interest which must be
              paid, or which will be earned, on either a loan or a deposit. It
              is expressed as a percentage of the current loan/deposit balance.{" "}
            </p>
            <p className="mt-4">
              For depositors, APR is sometimes termed Annual Percentage Yield
              (APY).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Anti Money Laundering (AML)">
            <p>
              Anti Money Laundering (AML for short) refers to the regulatory
              processes and rules which are in place to combat financial crimes
              such as money laundering, terrorist organization financing, fraud
              and cyber-theft.{" "}
            </p>
            <p className="mt-4">
              Generally financial services firms are responsible for
              implementing AML procedures and reporting to the relevant national
              authorities suspicious transactions or accounts.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Antivirus">
            <p>
              Antivirus is a form of software which is designed to prevent,
              detect and heal systems infected with computer viruses and other
              malicious software programs.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Application Binary Interface (ABI)">
            <p>
              Application Binary Interface refers to the standard method or
              framework for interacting with blockchain smart contracts, similar
              to the way that API’s are used by different computer networks to
              communicate with one another.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Application Blockchain Interface (ABCI)">
            <p>
              Application Blockchain Interface (ABCI for short) is an API which
              is designed to operate as a middle layer between distributed
              blockchain based engines, and a state-based application hosted on
              a single computer. It is generally used by developers who are in
              the process of application development for testing without having
              to deploy directly to a blockchain.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Application Programming Interface (API)">
            <p>
              An application programming interface (API for short) is a set of
              standard protocols which allow different software platforms to
              communicate and share information over the internet. API’s are
              fundamental in enhancing interoperability of websites and
              applications, and are widely used in modern software development.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Approved address (whitelisted address)">
            <p>
              An approved address refers to a wallet which is added to a list of
              addresses which are given the permission to make or receive
              transactions. This is often referred to as a ‘whitelist’ and
              addresses which are not on the whitelist are usually prohibited
              from certain (or all) transactions.{" "}
            </p>
            <p className="mt-4">
              Approved addresses are typically implemented for security,
              regulatory compliance, and to reward early adopters (for example
              providing access to a pre-sale for specific individuals).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Aragon">
            <p>
              Aragon is an open source blockchain protocol which allows
              developers to create and maintain decentralized autonomous
              organisations (DAOs) on the Ethereum blockchain. The Aragon
              network uses its own native token ANT granting owners governance
              voting rights.
            </p>
            <p className="mt-4">The Aragon network consists of: </p>
            <ul>
              <li>
                • The Aragon client, which is a toolkit for developers who wish
                to create their own DAO.{" "}
              </li>
              <li>
                • The Aragon Network, which is an organization supporting the
                interactions between the community of DAOs on the Aragon
                platform.{" "}
              </li>
              <li>
                • The Aragon Association, which is a not-for-profit organization
                which manages and allocates the funds which were raised from the
                Aragon token sale.{" "}
              </li>
            </ul>

            <p className="mt-4">
              Every Aragon DAO has three pre-installed features:{" "}
            </p>
            <ul>
              <li>Finance (transaction management)</li>
              <li>Tokens (assets used to manage membership in the DAO)</li>
              <li>Voting (DAO governance tokens)</li>
            </ul>

            <p className="mt-4">
              The Aragon court is a service which allows for the settlement of
              disputes in Aragon DAO’s where the smart contract is unable to
              provide a resolution, and convenes a number of ‘Jurors’ who
              exchange ANT tokens for ANJ tokens, which must then be locked into
              specific contracts on the network. Jurors are rewarded for their
              participation in ANT coins.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Arbitrage">
            <p>
              Arbitrage is the act of exploiting price differences between
              exchanges for profit. For example, if 1 ETH is being sold for
              $3000 on exchange A, and for $3200 on exchange B, then a profit of
              $200 will be made by buying from exchange A and selling on
              exchange B, assuming that the exchange can be made fast enough to
              benefit from the price variance.{" "}
            </p>
            <p className="mt-4">
              It is important to note that arbitrage opportunities generally
              exist for a short time, because the act of arbitration ensures
              price consistency across exchanges, as exchanges quickly balance
              their prices as a result.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="ARM Virtual Machine">
            <p>
              The ARM virtual machine is a Qtum blockchain specific virtual
              machine (VM) which allows developers to write smart contracts in a
              wide variety of programming languages, including C, C++, Python
              and Rust, as well as being compatible with Solidity (the language
              of the Ethereum network).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Artificial Intelligence (AI)">
            <p>
              Artificial intelligence refers to software programs that are
              designed to mimic human thought processes and tasks at high speed,
              which generally require intelligent thought and/or awareness of
              external stimuli (such as visual perception speech recognition or
              decision making).{" "}
            </p>
            <p className="mt-4">
              In the context of cryptocurrency, AI often refers to the processes
              behind algorithmic trading bots where AI systems analyze vast
              amounts of data in order to calculate investment strategies and
              place trades.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="ASIC Miner">
            <p>
              An ASIC (Application specific integrated circuit) miner is a
              specialized computer system designed for mining Bitcoin and
              certain other types of cryptocurrencies.{" "}
            </p>
            <p className="mt-4">
              ASIC miners superceded earlier mining computers which used either
              CPU (central processing units) or GPU (graphics processing units)
              to solve the highly complex mathematical problems which are
              required in Proof of Work mining.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="ASIC Resistance">
            <p>
              ASIC resistance refers to a design feature in some Proof of Work
              (PoW) blockchains which prevents ASIC rigs from dominating the
              mining process. This essentially makes it more equitable for
              smaller miners to compete against huge mining farms, and thus
              enabling more decentralization.{" "}
            </p>
            <p className="mt-4">
              However, over time, in order to counter this, some ASIC miners
              have managed to overcome some of the ASIC resistant functions.
              Ethereum, Vertcoin (VTC) and Monero (XMR) are examples of
              blockchains which are designed to be ASIC resistant.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Asset">
            <p>
              An asset is anything of value which can be owned, bought or sold.
              In the traditional world, this can refer to stocks, real-estate,
              precious metals etc, and in the blockchain world refers to digital
              assets such as cryptocurrencies and NFT’s.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="ASSETS">
            <p>
              In the Sandbox metaverse, ASSETS are ERC-1155 tokens representing
              user generated content.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Assets Under Management (AUM)">
            <p>
              Assets under management refers to the total current market value
              of all the assets which a financial institution or fund is
              managing.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Asymmetric Encryption">
            <p>
              Asymmetric encryption is a method in cryptography that utilizes a
              public key for data encryption, and a private key for decryption.
              This is much more secure than symmetric encryption which uses a
              single key for both encryption and decryption. Most blockchain
              networks, including Bitcoin, use asymmetric encryption due to its
              enhanced security.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Asynchronous Byzantine Fault Tolerance (aBFT)">
            <p>
              Asynchronous Byzantine Fault Tolerance is an improved concensus
              mechanism whereby nodes reach concensus independently through a
              two-stage confirmation process which relies on a 2/3
              supermajority.{" "}
            </p>
            <p className="mt-4">
              Networks such as Fantom which employ aBFT concensus methods
              benefit from faster and more secure networks thanks to the
              leaderless block creation and finalization process.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Atomic Swap">
            <p>
              Atomic swap is a decentralized peer-to-peer exchange for trading
              cryptocurrencies between parties without the need for a trusted
              third party or escrow, such as a centralized exchange. Atomic Swap
              employs smart contracts to facilitate the swap process.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Auction">
            <p>
              An auction is a market where buyers bid on assets being sold by
              sellers, with the highest bid being the winner.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Audit">
            <p>
              In the blockchain world, an audit is a process whereby a
              blockchain projects codebase and smart contracts are reviewed by
              an independent team to ensure it is free from errors and potential
              security issues. The goal of an audit is to highlight any areas
              where a potential attack could take place, and ultimately to
              reassure investors of the overall security of the project.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Augmented Reality (AR)">
            <p>
              Augmented Reality refers to an interactive experience which
              enhances physical world objects by overlaying them with digitally
              generated information, normally visual or auditory information,
              but which could also include all other representational systems
              such as touch and smell.{" "}
            </p>

            <p className="mt-4">
              Pokemon games played by users on smartphones are one popular
              example of how AR works by placing digital ‘characters’ into real
              world locations to be found by players.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Augur">
            <p>
              Augur is a decentralized prediction-market platform which allows
              users to place and take bets on the outcome of an almost unlimited
              range of events, including sports betting, economics, world
              events, plane delays and so on. Augur is powered by the Ethereum
              blockchain, and is a free, public and open-source software
              protocol.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Authentication">
            <p>
              Authentication refers to the process of successfully identifying a
              user before they are granted access to an application, account,
              platform or other system. Authentication can take many forms,
              including passwords, one time codes, SMS codes, biometrics and
              voice recognition.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Authorization">
            <p>
              Authorization refers to users degree of access to a system,
              including permissions and roles they are granted after
              authentication.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Automated Clearing House (ACH)">
            <p>
              Automated Clearing Houses are networks which process financial
              transactions, normally in the traditional world. A payment which
              is settled by an ACH withdraws funds directly from the bank
              account of the sender and deposits the funds directly into the
              recipients account.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Automated Market Maker (AMM)">
            <p>
              An automated market maker is a decentralized exchange where trades
              are executed against a pool of tokens in a liquidity pool rather
              than matching a buyer with a seller. This means that AMM’s do not
              rely on an active market of lots of buyers and sellers. The prices
              of the assets being traded is regulated by the amount and market
              value of tokens in the liquidity pool, which is balanced by
              algorithms.{" "}
            </p>
            <p className="mt-4">
              Examples of AMM’s in the crypto world include Uniswap, Curve,
              Balancer and PancakeSwap.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Ava Labs">
            <p>
              Ava Labs is the development company which designed and released
              the Avalanche blockchain and was founded by Cornell University
              professor Emin Gun Sirer.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Avalanche">
            <p>
              Avalanche is an open-source Proof of Stake (PoS) blockchain
              platform for decentralized applications (dApps) and smart contract
              deployment.{" "}
            </p>
            <p className="mt-4">
              It is designed to emulate most of the functions of the Ethereum
              blockchain at a must higher thruput rate, processing thousands of
              transactions per second, and with lower gas fees using the native
              AVAX token as a hard capped utility token as a medium of exchange.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Axie Infinity">
            <p>
              Axie Infinity is a blockchain metaverse game in which users
              collect and breed digital ‘pets’ (Axies). These Axies are used for
              competing in on platform turn based games. Axies are examples of
              Non-Fungible tokens, where each Axie is unique with it’s own
              distinct characteristics.{" "}
            </p>
          </ContentComponent>
        </Col>
      </Row>
    </section>
  );
};

export default ASection;
