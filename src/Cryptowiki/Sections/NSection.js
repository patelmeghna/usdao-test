import React from "react";
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const NSection = () => {
  const nSectionRef = useNav("N");

  return (
    <section ref={nSectionRef} id="nSectionContent">
      <div className="titleWrap">
        <p className="title-line">N</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Nude Phone"
            description="A nude call, or 'uncovered', is an options strategy in which an investor sells a stock exchange or security option without being the owner of basic security. Since an investor is selling a property that does not belong to him, it requires less security to sell a nude phone than a covered phone, where the investor fully supports the call option by holding the underlying asset. As a result, nude phone trading strategies are more risky than integrated phones, because the investor must have enough money to buy basic stocks to sell to the counterparty at the agreed price in case the nude buyer chooses to do so. option agreement."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NASDAQ"
            description="The NASDAQ, based in New York City, ranks second in the world in terms of market value, following the New York Stock Exchange (NYSE). The stock exchange is a global electronic marketplace for buying, selling, and trading securities introduced in 1971. NASDAQ was founded by the National Association of Securities Dealers (NASD) and later became the Financial Industry Regulatory Authority (FINRA). Most of the world's largest tech stocks, including Amazon, Apple, Google, Tesla, and Facebook are listed on the NASDAQ, making its impact almost immeasurable worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NASDAQ Composite Index"
            description="The NASDAQ Composite Index is a stock index based on more than 2,500 stocks listed on the NASDAQ stock exchange. About half of the index is made up of shares representing technology businesses. To be included in the NASDAQ Composite Index, an asset must be stocks from a regular company, ie preferred stocks, exchange trades (ETFs), and many other securities are not included. The NASDAQ 100 (the top 100 NASDAQ non-financial stocks with market capitalization) makes up more than 90% of the NASDAQ Composite Index."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="National Securities Clearing Corporation (NSCC)"
            description="The National Securities Clearing Corporation (NSCC) was founded in 1976 as a registered clean-up corporation controlled by the U.S. Securities and Exchange Commission (SEC). NSCC is part of the Depository Trust & Clearing Corporation (DTCC), which provides clarification, resolution, and risk management in the US financial industry. The NSCC also provides international netting to enable registered brokers to buy and sell positions into a single payment obligation to reduce exposure and financial capital requirements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="National Stock Exchange (NSE)"
            description="The National Stock Exchange (NSE) is the largest and most respected stock exchange in India. Launched in 1992, the NSE became the first stock exchange to offer customers automatic electronic trading and a variety of investment products on a national scale. One of the NSE's most well-known brands is offering its stock index NIFTY 50 which was launched in 1996. The NIFTY 50 index allows investors to invest in 50 major stocks that form a large part of the Indian economy. As of May 2021, the NSE had market capitalization estimated at $ 3.1 trillion USD."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Near-Field Communication (NFC)"
            description="Near-Field Communication (NFC) is a protocol that allows devices to communicate wirelessly at intervals of 4cm. NFC devices can be used as key cards and to make payment without touch. VeChain uses NFC to track products on supply chains."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NEM Foundation"
            description="The NEM Foundation was established in Singapore in 2016 to promote the growth of the NEM ecosystem. The foundation sells NEM technology and pursues projects in support of its development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NEM N1S1"
            description="NEM N1S1 is the official name of the original NEM blockchain. NEM plans to roll out Symbol, a new and separate blockchain protocol intended to build on the strengths of the original NEM series while incorporating new features. The two blockchains will not be compatible."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Neo (NEO)"
            description="NEO and GAS (not to be confused with gas costs found in the Ethereum network) are two traditional Neo blockchain protocol coins. NEO serves as the primary transaction fee and gives owners the right to vote on network proposals. Users can also access GAS by setting their NEO. GAS is also used to pay for network usage: service fees, storage costs, and fees related to the use of smart contracts. All NEO coins are made in protocol development, and GAS coins are made with each new block."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Neo File Storage (NeoFS)"
            description="NeoFS, or Neo File Storage, is a distributed, distributed storage network designed to allow internationally distributed applications (dApps) to store files in the same way to execute final agreements such as Storj and Filecoin. NeoFS platform allows users to rent storage by exchanging Neo GAS coins or using GAS to store files on the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NeoID"
            description="NeoID is a digital ID ID solution for NEO. Allows various assets and node owners to be tested with a blockchain-based diagnostic program. This means that Consensus Node ownership can be linked to real organizations or individuals to ensure their suitability. NeoID integration helps ensure the validity of the Network Consensus Nodes and their components. NeoID also assists with the registration and use of compliant financial assets in the NEO network. This functionality has great potential for use with stablecoins, artificial assets, security tokens, non-rise tokens (NFTs), and other extended financial applications (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nested Blockchain"
            description="The nest-built blockchain is a type of nationally distributed network infrastructure that uses a key blockchain to set broader network boundaries, while executions are performed on a connected web of second chains. Many blockchain levels are built into this basic series, with these levels using parent-child interaction. The parent chain sends the function to the child's chains which he returns to the parent after completion. The basic blockchain does not participate in network activities unless dispute resolution is required. The OMG Foundation's plasma project is an example of a Layer-2 blockchain infrastructure deployed on top of Layer 1 Ethereum to facilitate faster and cheaper transactions. The distribution of work under this model reduces the processing load on the mainchain in order to improve the height measurement."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="NET"
            description="NET is the amount of network bandwidth a user is allowed to use in the EOS network. NET is calculated by transaction bytes, and users must hold EOS tokens in order to use them."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Net Interest Income (NII)"
            description="Revenue (NII) is a financial metaphor used to measure the difference between income and interest paid on various types of assets such as securities, loans, debts, and other financial instruments. NII depends on a number of factors including interest rate and whether interest rate is adjusted or variable. Banks and other financial institutions often use interest rates to determine the difference between the debt and the interest-bearing assets in order to determine their income from a particular investment or loan."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Net Present Value (NPV)"
            description="Total current value (NPV) is a measure of cash flow over a period of time that is often used to determine profitable budget strategies and the allocation of funds for different types of investments. NPV is calculated by comparing the difference between cash inflows and outflows. The NPV considers the time required to generate revenue, comparing the initial amount spent with the current refund value. In addition, NPV typically uses four key metrics including time, current value, future value, and discount rate to determine whether investment returns are acceptable or bad."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network Baseline Model (Filecoin)"
            description="The Network Baseline Model is Filecoin's token-making schedule, tied to the growth of the final volume of protocol. Although tokens are only made with block prizes, 70% of the rewards are distributed proportionally with the increase in the total amount of network storage. The remaining 30% of prizes are distributed according to the defined decay model, where the block prizes become larger at the beginning of the protocol and decrease over time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network congestion"
            description="Network congestion occurs when the speed or quality of network service is reduced due to the large volume of operations. Overcrowding can occur when a network encounters an abnormal increase in activity exceeding the capacity of a network designed to capture, or in the case of malicious attacks such as Distributed Denial-of-Service (DDoS) attacks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network Result"
            description="The impact of the network arises as the network grows from a small reach to having a very large network, thereby increasing the use of the goods and services it provides. The internet itself is probably the biggest example of a network effect. When the Internet was first created it had very few users, but as it grew, its power and usefulness increased significantly. In the case of a blockchain, blockchain agreements such as Bitcoin and Ethereum have a very large network effect due to their size, reliability, and usability which they offer to a very large number of users."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network Delay"
            description="Network delays, or network conveniences, are the time it takes for data to be transferred from its source to its destination. Low network latency (meaning very fast data transfer times) is a critical feature of a highly efficient blockchain or computer network because the faster the network is able to process data, the more suitable it is for large business use. Network delays are directly related to the task at hand and the number of tasks per second (TPS) a computer network can perform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network Nervous System (NNS) (DFINIITY)"
            description="The Network Nervous System (NNS) is an independent software program from DFINITY that helps streamline Internet Computer Protocol (ICP) capabilities by managing its overall economic and network infrastructure. The NNS is hosted within the ICP network itself and is an integral part of the system of agreements that securely connect the computer network of nodes to operate the Internet in a dominant and flexible manner. The Network Nervous System operates as an independent 'master' blockchain that uses a special public key to verify all transactions occurring on the Internet Computer Protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Network Pruning"
            description="Network pruning is a process by which developers transform a computer network - in particular a blockchain network - to make it easier and more resource efficient. This process is usually done by training a complex network, which is overloaded to function properly, and then 'pruned' based on certain conditions, and finally fine tuned to achieve comparable performance with its original version. Network erosion is often seen when full blockchain network nodes become cut nodes or light nodes (sometimes called client-light)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Neuron (DFINITY)"
            description="A neuron is a machine within the Internet Computer Protocol (ICP) where network participants can lock their ICP tokens to gain voting power, which can be used to vote for public administration proposals and receive voting prizes. Neurons can also be programmed to follow and copy the voting patterns of other trusted neurons, making the voting process automatic. As neurons grow, their voting power and voting rewards increase. To withdraw ICP tokens included, neurons must be 'dispersed', while released ICP tokens may be used for other purposes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="New York Finance Department (NYDFS)"
            description="The New York Department of Financial Services (NYDFS) is a New York regional government department responsible for overseeing financial services and product delivery. The purpose of the NYDFS is to facilitate the growth and health of the financial sector in New York, to promote economic development in a regulated and compliant manner, and to ensure the reliability, security, and soundness of financial products and services in the region. The NYDFS works to ensure that financial products and services are provided in an honest and transparent manner through equitable business practices that eliminate financial fraud, misconduct, and other forms of criminal conduct."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="New York Stock Exchange (NYSE)"
            description="The New York Stock Exchange (NYSE) is an American stock exchange. It is the world's largest stock market in terms of market capitalization of listed companies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nick Szabo"
            description="Nick Szabo is a well-known and respected cryptographer and software developer known for creating Bit Gold (pre-Bitcoin) and for creating and developing smart contracts. Szabo's first goal of smart contracts was to bring what he referred to as 'highly flexible practices' to contract law in the construction of e-commerce contracts between strangers online. Nick Szabo is also considered by some to be a force to be reckoned with. people who created Bitcoin, but has repeatedly denied allegations that he is Satoshi Nakomoto."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nifty Gateway"
            description="Nify Gateway is a platform that gives users an easy way to buy, exchange, and manage non-affiliate tokens (NFTs). The platform offers a wide range of digital art and NFT collections, and offers fiat onramp, thus allowing users to access NFTs with fiat and cryptocurrencies. Gemini acquired Nifty Gateway in November 2019."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nightfall Blockchain (Ernst and Young)"
            description="Nightfall is a series of blockchain agreements formed by the world's largest accounting firm Ernst and Young (EY), the latest translation of Nightfall 3. Nightfall blockchain is intended to operate as a multidisciplinary network because it uses public components and is intended for employment as a version. a separate Ethereum network. Nightfall seems to be the fastest and cheapest as it is designed to help eliminate Ethereum's high gas bills. It also allows for modern private transactions with cryptography of anonymous evidence."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Node"
            description="In blockchain tech, a node is a computer connected to a blockchain network that serves many important purposes in the maintenance of a distributed system. Some nodes authenticate transactions, while others monitor activity in the blockchain. The design of the Nodal network is also an important factor in maintaining security in the blockchain network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Node.js"
            description="Node.js is an open source, multi-platform JavaScript workspace running the Google Chrome V8 JavaScript engine. Node.js is used to use JavaScript code outside a web browser and allows developers to use JavaScript to compose server-side scripting tools to create dynamic web page content before it is sent to a user's browser. Node.js allows developers to create a JavaScript web-based paradigm, blockchain, and application development that integrates a single programming language instead of using different languages ​​to create front and back scripts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nodeos Core (EOS)"
            description="Nodeos is the main service daemon that works behind all EOSIO nodes in the EOS network. Nodeos can be used to verify transactions, process smart contracts, generate and verify blocks, and record transactions on the EOS blockchain network protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nominated Proof of Stake (NPoS)"
            description="Designated Proof of Stake (NPoS) is a variation of the Proof-of-Stake (PoS) compliant approach employed by Polkadot blockchain's main Relay Chain and Polkadot-based parachains (independent blockchains or special charts). Instead of using the standard PoS method, NPoS is used to select authenticators through Polkadot network selectors. Nominators usually select only validator nodes they trust but can lose DOT, Polkadot's native cryptocurrency, if they select malicious verification sites through a process called cutting."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nominator (Polkadot)"
            description="The nominator is a node used to protect Polkadot's main Relay Chain by selecting reliable authentication sites and focusing on DOT, Polkadot's native cryptocurrency. In this process algorithm selectors automatically select network authenticates by merging their DOT assets to generate blocks in the Polkadot network, and in turn receive part of the validator node awards. However, voters are also at risk of hacking (losing one of their DOTs) if their voting verdicts are malicious."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Not limited"
            description="Deposits and assets are the categories used to separate the services that a financial institution provides to its customers to manage securities or other assets, including crypto. In the blockchain industry, negligence means that the user has full control over his or her crypto and needs to manage his or her private keys (special algorithmic passwords are required to generate transactions and manage assets). This usually means that no foreign business is responsible for the management, insurance, and operations of the assets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Custodial Wallet"
            description="Unsecured wallets are cryptocurrency wallets that are controlled only by the person who created the wallet, that is, the wallet creator has full control of the private keys (a special algorithmic password used to make crypto transactions)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Deterministic (ND) Wallet"
            description="A Non-Deterministic Wallet (ND) is a type of unsecured crypto wallet designed to generate, store, and manage multiple private keys independent of each other. Non-Deterministic wallets usually keep their private keys in pairs (because they use random) and were upgraded as soon as the Bitcoin blockchain network started live. A major problem with Non-Deterministic (ND) wallets is that their storage keys must be created each time a new wallet is created. This problem was later reduced by wallets using BIP 32 (generator key deterministic technology)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Fungibility"
            description="Uncompromising means that an asset is distinct or distinct from another in nature. Non-sworn token (NFT) is a special type of cryptographic token that works within a blockchain domain and is not exchanged with any related assets. NFTs are inseparable and cannot be separated or altered in any way."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Fungible (NFT) Token"
            description="A free token (NFT) is a special type of cryptographic token that represents a unique digital asset that can be exchanged for another type of digital asset. This feature is different from cryptocurrensets and blockchain service tokens (such as Bitcoin and Ethereum) that can be automatically locked. NFTs are built on smart contract technology and are classified within the ERC-721 token standard."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Leaf Node"
            description="Non-leaf nodes are found in the body of the Merkle tree. They are found above the leaf-node layer (below the Merkle tree) and below the Merkle root (located at the top of the Merkle tree). Using hashing, these nodules connect the leaf nodules and the Merkle root of the Merkle tree."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Nonce"
            description="A nonce (meaning 'used only once') is a number added to all data in a block before that block is changed in the Proof of Proof mining process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Noninteractive Distributed Key Generation (NIDKG)"
            description="The encrypted encryption protocol released by the Dfinity Foundation, Noninteractive Distributed Key Generation (NIDKG) uses pre-encryption, Zero-Knowledge Confirmation (ZKPs), and other advanced encryption features to secure Internet Computer Protocol (ICP). ICP has moving nodes within its subnet; The NIDKG protocol allows nodes to securely join new subnet by making it possible to publicly and privately resize private keys and receive their subnet signing key allocation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Notional Volume"
            description="Notional volume is a different measure of trading volume over a period of time and is generally considered in the context of market value, which is the present value of a bond that can be bought or traded through a brokerage or exchange service. For example, suppose a stock option representing 100 shares in a particular stock with a strike price of $ 30 may actually trade the market for $ 1.50 per contract (100 x $ 1.50 = $ 150 market value) but its normal value is $ 3,000 (100 x $ 30). This is an example of concept volume separation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Numeraire (NMR)"
            description="Numeraire is a blockchain-based protocol designed to be an algorithmic institutional trading platform. Numeraire uses a multi-resource predictive trading analysis platform to host weekly trading competitions and is designed to allow users to make better trading and investment decisions. The core cryptographic assets of the NMR project contribute to the widespread use of the Numeraire blockchain ecosystem."
          />
        </Col>
      </Row>
    </section>
  );
};

export default NSection;
