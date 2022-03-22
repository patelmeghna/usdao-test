import React, {useState} from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const LSection = () => {
  const lSectionRef = useNav("L");

  const [truncate, setTruncate] = useState(false);

  const removeTruncate = () => {
    setTruncate(!truncate);
  };

  return (
    <section ref={lSectionRef} id="lSectionContent">
      <div className="titleWrap">
        <p className="title-line">L</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Lachesis (Fantom)"
            description="Lachesis is a compact method used by the Fantom blockchain network. Lachesis is a Byzantine Fault Tolerant (aBFT) compliant method using a Proof-of-Stake (PoS) non-lead framework. Provides speed and security on Fantom protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="LAND (The Sandbox)"
            description="In the Sandbox game, LAND is the digital component of the market area with a metallic area measuring 96x96 meters. LAND token ERC-721. When a player combines multiple WORLDS into one place, it is called Inheritance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Large Cap"
            description="In the blockchain space, 'big coin' refers to a cryptocurrency asset with a large market capitalization. Market capitalization, or the total value of cryptocurrency assets and the underlying blockchain business, is determined by the number of publicly distributed currencies, multiplied by the value of each coin. As a speculative term, there is no specific market limit indicating that an asset is a major currency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Last Irreversible Block (LIB)"
            description="The last non-refundable block (LIB) is the last block to be verified by a series and cannot be changed or altered. Found in blockchain protocols using the Asynchronous Byzantine Fault Tolerant (aBFT) compliance method, the blockchain verification process is doubled. First, block manufacturers offer what is called a non-removable block with a record of operations. Then, when most of the blockchain manufacturers agree to the proposed block, they reach an unstoppable level, and the transaction is considered guaranteed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Last Mile Delivery"
            description="Delivery of miles to keep the last movement of the product from the transport hub to the final delivery point. In many cases, this is a complex and widely used step in the life cycle of product delivery."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Latency"
            description="In trading, delays (not to be confused with network delays) refer to the time elapsed between the placement of an order and the execution of that order. High delays bring unwanted delays between actions, while low delays cause minor delays that are usually just milliseconds. High delays can significantly and negatively affect trading strategies, especially on volatile assets, as market prices may fluctuate in the past between placement and performance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Law of Accelerating Returns"
            description="The theory 'Law of Accelerating Returns developed by Ray Kurzweil in 1999 states that technological advances in the 21st century will be 20,000 times more than a century ago. This view indicates that technological advances are rising at an unprecedented rate in human history. The Speed ​​Recovery Act has in many ways changed the public perception of Moore's Law that the number of transistors in an integrated circuit (IC) doubles a year, representing a duplication of technological innovation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Law Of Supply And Demand"
            description="Supply and demand law is one of the most basic economic rules used to define how a market economy provides services and sets prices for goods and services. Generally, the greater the availability of a particular device, the less expensive it will be. Conversely, if a product or service is difficult to obtain, demand for it will result in an increase in price, but if there is a similar product or service that is readily available, its cost will decrease. Products and services must ultimately meet price equality in relation to their supply and demand."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Layer-1 Blockchain"
            description="Layer-1 blockchain is generally a term used to describe a key blockchain network protocol such as Ethereum or Bitcoin. The name Layer 1 comes from its relationship with Layer-2 measurement solutions such as circuit channels, rollups, nested blockchains, and separate plasma chains. The Layer-1 blockchains are the main network layout solution the Layer-2 has attached to to improve the measurement and output of a key chain, or Background 1. Layer-1 blockchains can also be known as a parent chain or root chain. chain, among other categories."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Layout Resolution Solution 2"
            description="Layer-2 measurement solutions are a process that integrates blockchains such as Bitcoin and Ethereum as separate layers, the second of which is designed to increase performance and reduce transaction costs. Examples of Layer-2 solutions include Bitcoin Lightning Network and Ethereum's Plasma."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leader"
            description="In the Solana network, the leader is a transaction guarantor who adds entries to the blockchain block. To ensure equity and land allocation, the 'leader schedule' determines which authority becomes a leader over a period of time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leaf Node"
            description="Leaf buds are found under the Merkle tree. Leaf nodes represent crypto trades in the form of transaction hashes - commonly called transaction IDs (TXIDS)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leakware or Doxware"
            description="Doxware is a type of ransomware that first infiltrates a computer, and then threatens to infiltrate sensitive or confidential information stored on a machine unless a ransom is paid."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leased Proof of Stake (LPoS) (Wave)"
            description="Proof of Leased Stake (LPoS) is a modified version of Proof of Stake (PoS) that allows network operators to hire miners who apply compliance. In return, miners share a certain percentage of their profits with the employer, allowing users to make a profit on the mines without having to participate in the mines themselves. Leased Stake Proof (LPoS) is a consensus method used by the Waves platform. Includes Waves-NG protocol for easy measurement and output."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ledger"
            description="Ledger is a record keeping system for tracking financial transactions. Blockchains are often referred to as distributed ledgers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leg"
            description="Leg is one part of a multi-step exit trading strategy where a trader combines a few option contracts, futures contracts, or a combination of both, to benefit from arbitrage or spread, or to frame a trading position."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Legacy System"
            description="An asset system on a computer is defined as an outdated system or technology that is in use but that needs to be modified or improved to remain relevant in the market place. In a blockchain, asset systems may be systems that need to be extensively modified to generate permanent value and be used for many different purposes. The continuous development of blockchain systems is critical to the widespread adoption and long-term use of technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Lending pool"
            description="Borrowing pools are a type of money pool designed to help peer lending (P2P). When borrowing from a lender, users should provide adequate security for the asset. For example, if the mortgage lending rate at USDC is 200%, and the user provides $ 1,000 USDC, the user will not be able to borrow more than $ 500 USD. Next, consumers who borrow their goods are rewarded with a certain percentage of the total amount they borrowed. Intelligent contractors perform the automatic borrowing and borrowing process at different predetermined borrowing rates depending on the assets and legal processes involved."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leverage"
            description="In the case of an investment, the profit is the use of the loan to finance the investment. If a position, individual, or organization is 'heavily funded,' it means that they are spending most of the loan. Leverage usually refers to the loan amount provided by a trader in a trade that is used to increase the availability of funds for trading the genes. It is often used to increase the purchasing power of a foreign exchange - in fact, to borrow money. While there are potential benefits to using energy, there is also the added risk of losing money. For example, if a trade opens at a rate of 10x, this means that the purchasing power is 10 times that, and if the price of the commodity fluctuates, the investor will lose or gain an average of 10x."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Leveraged Token (FTX Exchange)"
            description="The tokens used in FTX crypto exchanges allow traders to place higher positions without trading on the margins. By buying strong tokens in USD, traders can get more market exposure without having to manipulate their margin or bond. Used tokens actually have a built-in benefit to the tokens themselves. BULL tokens trace a basic asset with almost three times as much return and BEAR tokens can do the same with about three times as much as when the value of the asset decreases."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="libp2p"
            description="Libp2p is a modular network of modular protocols, libraries, and specifications designed for peer-to-peer (P2P) applications and systems designed to allow developers to use plug-and-play networking within their distributed applications. The program started as a network component of the InterPlanetary File System (IPFS), but later evolved into its own project. It is designed to solve problems related to data transfer, digital identity, security, routing, content acquisition, and other applications, and is available in JavaScript, Go, Rust, Python, and C ++. For example, the Polkadot team created its own Rust libp2p installation to work with Polkadot and Substrate."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Library (Software Library)"
            description="In computer science, a library is a collection of specialized resources used by computer programs to develop software. These services may include text, message templates, configuration data, and pre-coded code among other things."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Light-Client Node"
            description="Light client, or light node, software that connects to full nodes in a blockchain network. Unlike full nodes, light nodes do not store a full copy of the blockchain, or communicate directly with the blockchain. Instead, simple clients rely on full nodes as mediators. Simple clients can be used to send other transactions and verify account balances, but they do not work much better than full nodes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Lightning Network"
            description="Lightning Network is a Layer-2 measurement technology that works on blockchains such as Bitcoin. It creates a private, dual channel between users that allows multiple transactions to take place without the main blockchain. This transaction is listed next as a single transaction in the main blockchain. This multi-functional process reduces network congestion and increases scalability."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Limit order"
            description="Common in stock trading, a limit order is the activity of buying or selling goods at a certain price. When a seller sets an order limit, he or she usually sets the purchase price below the current market price in anticipation of a downward spiral. Conversely, when a seller sets an order for a sale limit, it is usually set to be higher than the current market price, expecting an asset to rise in value. Specified limit orders may remain incomplete if the price of the goods does not meet the expectations of the trader. In contrast, market orders are always supplemented by the current trading price of a particular asset without setting a limit price."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Limited Purpose Trust Charter"
            description="The trust charter for the purpose is limited to a special license issued by the U.S. district government. which allows the receiving company to perform a specific set of functions, such as acting as an accountant or a trustee of certain securities. A company that legally operates in accordance with the policies set out in a trust charter with limited objectives is called a 'limited-purpose trust company'."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Line Processing"
            description="Linear Processing is a way to process data directly from distributed computer or blockchain network infrastructure. Line processing usually processes one calculation at a time using one core processor, while parallel processing can simultaneously complete multiple calculations simultaneously to maximize output output and total processing power. This can be compared to having one horse drawn by your chariot against four horsemen."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="LINK (Chainlink)"
            description="The LINK ERC-677 token is a traditional symbol of the Chainlink network divided into expressions. It is used to reward operator nodes by providing external data to smart contracts. Additionally, smart contract creators may need nodes to include LINK as a payment fee to ensure they fulfill external information requests."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Linux"
            description="Linux is a software program originally developed and designed by Finnish computer scientist Linus Torvalds in 1991. Linux is famous for its technology circles because of its robust security, overall speed, efficiency, free distribution, platform compatibility, various computer configuration, and more. Also, Linux is best known for performing well in multi-user networks. Linux is based on the Linux Kernel and is built in the same way as Unix. Linux has a very different user experience compared to traditional operating systems like Microsoft Windows and macOS, but it can use both."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Linux Foundation"
            description="The Linux Foundation is a San Francisco-based nonprofit organization dedicated to helping the development of the Linux operating system and the development of open source software in general. The consortium allows for widespread collaboration and teaching among members, and hosts many events and conferences each year. The Linux Foundation has more than 1,000 members worldwide, including some of the world's largest technology companies such as Facebook, Microsoft, and Google."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquid Market"
            description="The liquid market is a market with strong currencies. Liquidity means the ability to buy or sell an item at the current market price without interrupting it. Orders in liquid markets should be issued immediately - or soon - after ordering. Examples of liquid markets could include trading in stocks, commodities, and fiat currencies - as well as many large cryptocurrencies. Typically, small liquid markets will combine fine art and real estate, often with few participants and unable to sell without waiting (weeks or more) or changing property prices."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquid Proof of Stake (LPoS)"
            description="Liquid Proof of Stake (LPoS) is a consensus approach designed behind the concept of liquid democracy. Liquid Democracy is a system that allows people to vote directly on the news, or to elect delegates who will vote for them. Delegates can also transfer voting responsibilities assigned to another delegate - a process called transitivity. If the person who cast his or her vote does not agree with the way his or her delegate voted, the person may withdraw his or her vote and vote directly. In LPoS systems, users set their tokens to gain the right to participate in the blockchain compliance process, and to participate directly or through a messenger."
          />
        </Col>
        <Col lg={6}>
          <div className="glossary-content">
            <p className="title">Liquid Staking (Fantom)</p>
            <p className={!truncate ? "content truncate" : "content"}>
              Liquid Staking is a feature that allows participants to make a
              sFTM coin in a 1: 1 scale on their FTM stakes, in order to provide
              a guarantee on Fantom Finance, which is a program for Fantom DeFi
              applications. This functionality allows users to find additional
              uses for their rooted FTM. Collateralized Liquid Staking services
              through the Fantom network help users to participate in Fantom
              Finance through:
              <ul>
                <li>
                  fUSD: a stablecoin based on Fantom based on the US dollar
                </li>
                <li>
                  FSwap: a commercially manufactured commodity trading platform
                </li>
                <li>
                  FLend: a liquidity pool that users can borrow or borrow from
                </li>
              </ul>
              <button className="btn remove" onClick={removeTruncate}>
                {!truncate ? "Read More" : "Read Less"}
              </button>
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidation"
            description="Term Termination refers to a process in which a trader has an open rating position - usually a future contract - that goes against their intended goal, resulting in the loss of all initial position. For example, suppose a trader opens a position to buy ether (ETH) which can cost $ 1,000 USD at the current price of $ 2,000 USD per 10X per ETH, betting price will go up, but the market takes an unexpected turn and falls sharply below their termination point of $ 1,500 USD ETH - resulting in the loss of their first $ 1,000 USD."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity"
            description="In the case of an asset, liquidity refers to the ability to change an asset without changing its value during the process, and how the asset can easily be converted into cash. The easier it is to turn an item into cash, the more liquid the material becomes. In terms of markets, liquidity refers to the number of trading activities in the market. The higher the trading volume in the market, the more liquid the market becomes. Liquid markets tend to increase the liquidity of goods."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Aggregator"
            description="The liquidity aggregator collects money from centralized and privately owned sources to raise money, reduce inflation, and facilitate a more efficient trading activity - especially in decentralized trading (DEXs)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Mining"
            description="In Extended Finance (DeFi), liquidity mines refer to a way to promote community-based funding where traders supply goods to a particular pool, lock them in, and earn interest in the form of tokens (usually native token)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Pool"
            description="A liquidity pool is a pool full of crypto currency sources or tokens locked on a smart contract used to facilitate trading between those assets in a country-divided trade."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Premium"
            description="Liquidity premium is compensation given to investors to encourage investment in non-cash assets. In contrast, the more liquid goods have a higher trading volume and are easily converted into cash without affecting the price of the asset. For example, long-term bonds may have poor liquidity, so they generally carry a higher interest rate compared to most short-term bonds. The highest return on a long-term bond is a liquidity payment offered by the investor because it has a higher investment risk. As a rule, when the investment liquidity becomes poor, it becomes higher with the liquidity premium."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Provider"
            description="A liquidity provider is a user who inserts tokens into a liquidity pool. As a refund for the provision of cash, users are usually provided with a money laundering (LP) tokens representing the share of the pool of user spending."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Liquidity Provider (LP) Token"
            description="Cashier token (LP token) is a token that is created and issued to a consumer who installs goods in a cash register. LP tokens represent a pool of liquidity share a liquidity provider owns. LP tokens ERC-20 tokens can be transferred, exchanged, and placed on a pole."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Listing"
            description="The exchange list is when the exchange first chooses to offer pairs to trade with certain crypto assets. If an asset is listed on a large crypto exchange, with a good reputation and given to large trading pairs such as BTC or ETH, it means trust in the project and its founders. A large exchange list often means that the newly listed assets have a sufficient amount of revenue. The listing of Crypto exchanges is similar to when ordinary company shares are first listed for trading in a particular stock exchange that shows in a similar way that the company is trusted by trading."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Litecoin (LTC)"
            description="Litecoin (LTC) is a cryptocurrency introduced in 2011 by Charlie Lee. Litecoin was created by breaking the Bitcoin code and retaining many aspects of Bitcoin, while being prepared for transactions at a lower cost. It is considered the first altcoin, and was the second cryptocurrency to be widely used in digital currency trading and accepted in the wider economy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Life"
            description="Associated with a compatible computer, life refers to the ability of a timely operating system, so that a distributed system can continue to use statistics. This structure allows the system to evolve despite the fact that its calculation processes may need to be rotated in order to be completed correctly rather than simultaneously performed. The opposite of life does not work, which means that the system cannot perform calculations quickly enough for the system to work properly."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Livepeer Token (LPT)"
            description="Livepeer Token (LPT) is a traditional symbol of the Livepeer network. Users who wish to do the job of transmitting codes and distributing videos on the network should hold the LPT."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Loan-to-Value Rate (LTV)"
            description="Loan-To-Value (LTV) is a financial term that determines the rate of a loan (usually in US dollars) to the total collateral - usually the same as a percentage. In other words, LTV is a loan balance compared to the value of collateral. In a general financial situation, lenders check credit score points to determine their credit eligibility. In a particular blockchain context, the same process is performed algorithmically with the blockchain protocol, and usually no credit check is completed - it lowers the login bar for potential users. The LTV rate is determined as LTV = LA ÷ CA, where LA = Loan Amount and CA = Credit Amount."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Locker Ransomware"
            description="Locker Ransomware is a type of ransomware that locks victims out of their devices until a ransom is paid."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="London Bullion Market Association (LBMA)"
            description="The London Bullion Market Association (LBMA) is an international trading organization representing the Over-the-Counter (OTC) gold market. The LBMA has more than 150 member companies trading, refining, producing, buying, selling, storing, and transporting precious metals."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="London Good Delivery"
            description="Established by the London Bullion Market Association (LBMA), London Good Delivery is a precursor to the required gold and silver markers used to pay at the London Bullion Market. Specification also describes the ways in which they should be measured, packaged, and delivered, while defining the requirements and standards for authorized refining facilities."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="London Stock Exchange Group (LSEG)"
            description="London Stock Exchange Group (LSEG) is one of the largest financial services companies in the world and is the largest shareholder in the United Kingdom and Europe. LSEG is made up of a number of grants, large stock exchanges, and related organizations in Europe and the United States, including acquisitions and mergers with Deutsche Börse, FTSE Russell, and others. The organization was founded in 2007 and provides products and services to customers around the world in a number of areas including erasing and occupation, infrastructure, data and statistics, storage, and more."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Longing (Longing)"
            description="Long-term travel (also known as 'longing') is an investment process in which an investor buys a mortgage, derivative, cryptocurrency, or other type of asset that he believes will increase in value (especially in the long run), as opposed to a shortfall in investor expectations. the price of a particular commodity to fall in value."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Loom (LOOM)"
            description="Loom is an Ethereum-based platform originally focused on providing scaled-up international applications. It later focused on enterprise blockchain applications for industries such as healthcare."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="LoRaWAN"
            description="LoRaWAN is a Low Power, Wide Area (LPWA) network protocol that enables Internet of Things (IoT) devices to connect to the Internet. LoRaWAN relies on LoRa patented technology, which uses radio frequency to provide long-distance communication. LoRa represents a long distance, and the network acts as a wireless platform for IoT devices that are widely distributed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Lovelace"
            description="Very small cardano system (ADA), which is divided into 6 decimal places (1 lovelace = 0.000001 ADA)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Low"
            description="The lowest price, or the lowest, is one of the four key data points used on day trading in the stock market. The other three are called open, high, and closed - and the combined zones are known as OHLC. The low is generally considered to be the lowest price earned during the 24-hour trading period since the opening of the markets. Cryptocurrency markets are open 24 hours a day, all days of the year unlike the normal stock market, which is closed for trading on weekends."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Low Level Planning Language"
            description="Low-level editing languages ​​are editing languages ​​with very little editing concepts, which means they are often more complex and less efficient than standard editing languages. They are written using a structure such as machine code or compiling language. They are written in the same way as the processor instructions and usually take longer to use compared to standard editing programs because of their complexity. Other features of low-level programming languages ​​include memory functionality, portability (ability to use with different computer programs), and high difficulty correction and maintenance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Lump sum"
            description="Total amount of capital payable by one installment."
          />
        </Col>
      </Row>
    </section>
  );
}

export default LSection
