import React from "react";
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const OSection = () => {
  const oSectionRef = useNav("O");

  return (
    <section ref={oSectionRef} id="oSectionContent">
      <div className="titleWrap">
        <p className="title-line">O</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Observers (Elrond Network)"
            description="Viewers are special network nodes designed to read and transmit visual connector information. Viewer notes can be categorized as Full, which means they have a whole blockchain history, or light, which means they only last 2 episodes of network history. It should be noted that Spectators are not obliged to hold EGLD coins in order to participate in the network and are not rewarded for their services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OceanDAO (Ocean Protocol)"
            description="OceanDAO is a community-led grant proposal program available as part of the Ocean Protocol platform. As a non-governmental organization (DAO), OceanDAO empowers public governance by allowing OCEAN token holders to vote for funding for community projects and ongoing ecosystem development. One of OceanDAO's main objectives is to help the Ocean Protocol ecosystem become fully integrated over time, a goal that the Ocean team has been aiming for since the project's inception."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Odysee"
            description="Odysee is a site created by the team following the LBRY blockchain and its list of downloadable LBRY apps that allow users to watch and post videos. Odysee is a web-based version of the LBRY web-streamed web browser and was known as albry.tv."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Off-Chain"
            description="Off-chain categories refer to any type of activity or method (including domination, token creation, compliance design, etc.) that takes place outside of the blockchain network protocol. Off-chain mechanism is often performed outside the real blockchain network with other methods that recommend on-chain methods. For example, voting for a governing body or steering committee to determine the governance structure of a blockchain ecosystem and its basic protocol is carried out without a chain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Off-Chain Governance"
            description="Chain management is a blockchain-based approach that usually takes place outside of the blockchain network protocol, usually in a face-to-face manner with several related groups. This process usually refers to the process of establishing on-chain protocol rules and the blockchain ecosystem, often through a voting process conducted by various individuals working to determine the overall project direction. Chain-free governance also takes into account the basic global blockchain community and a few on-chain restrictions in order to achieve a strong overall governance system. The rule of Blockchain is changing and changing over time with the aim of improving the system over time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Office of Foreign Asset Control (OFAC)"
            description="Part of the U.S. Treasury Department, Office of the Export Control Agency (OFAC) is responsible for enforcing economic and trade sanctions in the context of U.S. foreign policy. and national security. These include foreign powers, terrorists, drug traffickers, and others involved in illegal activities. OFAC also has the power to suspend assets, levy fines, and prevent businesses from operating within the U.S."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Offshore Account"
            description="Offshore account is a bank account or related service located outside of the account holder's home country, usually to protect compliance laws as it relates to tax evasion and asset protection. Coastal banking areas are often island states used by businesses or high-income individuals (HNWI) to establish companies, investments, and other types of businesses with the aim of saving money on operating costs by paying less taxes. Offshore banking providers and financial services providers, while legal, are often used for illegal purposes such as money laundering, criminal activity, and tax evasion."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OKEx (Cryptocurrency Exchange)"
            description="OKEx is a cryptocurrency exchange launched in 2017 by CEO Jay Hao. China-based exchanges provide services to both institutional investors and retailers in the form of features such as spot trading, exit trading, and staking. OKEx unveiled its blockchain, OKExChain, in the first half of 2021. The series was developed using a modified version of the Cosmos Tendermint consensus mechanism, the Cosmos SDK, and the Cosmos Inter-Blockchain Communication (IBC) protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OKEx Chain"
            description="OKEx Chain is a related blockchain designed for OKEx cryptocurrency exchange to build blockchain-based trading structures. OKEx Chain is designed to maximize the speed, security, and confidentiality of the fixed financial framework (DeFi) required to build a decentralized exchange (DEX) - using transparent trading rules and community-based operations that allow users to control. their personal property. OKEx Chain uses the Cosmos SDK and the Cosmos Tendermint algorithm, as well as the Cosmos Inter-Blockchain Communication (IBC) protocol to achieve the various assets and data transfers required to achieve full chain and chain interaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OMG Foundation"
            description="The OMG Foundation (formerly known as the OMG Network and OmiseGo) is a non-stop, Layer-2 rating solution designed to compliment the Ethereum network by significantly reducing transaction times and increasing overall network ratings. This is reflected in the development of Ethereum's ability to send and receive Ethereum (ETH) sub-network assets and token assets based on Ethereum ERC-20. The OMG Foundation uses a special Layer-2 measurement technology called More Viable Plasma (MoreVP) to make this operation possible. Also, the OMG Foundation uses utility network equipment (OMG) to drive the blockchain platform and its entire ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="On-Balance-Volume (OBV) (Technical Indicator)"
            description="On-Balance-Volume (OBV) metric is a technical indicator that analyzes changes in the daily trading volume to gain broader market sentiment. This market sentiment can help to make price predictions often more useful than the green or red histograms commonly found in price charts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="On-Chain"
            description="On-chain categories refer to any type of activity or method (including domination, token creation, compliance structure, etc.) that takes place within a blockchain network protocol. The on-chain method is usually automated using cryptographic and algorithmic computer code under the blockchain platform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="On-Chain Data Availability (OCDA)"
            description="On-chain Data Access (OCDA) is a hybrid data storage system that allows users to choose whether their data is stored in a chain or outside a chain. OCDA was introduced as one of the recently developed features with the release of Loop 3.0. While this feature is turned off, and data is stored in a chain, the network gains 2,025 transactions per second (TPS). However, if OCDA is turned on and data is stored off the chain (using Validium mode), the output can be up to 16,400 TPS. However, at that speed, network security is what the blockchain blockchain is and it is not always good. These flexible scalability solutions are known as volitions. In short, OCDA and zk-Rollup technologies work together to allow Looping 3.0 to compare transactions that not only match the performance of their central competitors, who end up preparing for faster transactions and working hours."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="On-chain management"
            description="On-chain management is a blockchain-based approach that takes place within the computer structure of a blockchain network protocol. This process usually means how to establish rules for on-chain protocol features and blockchain ecosystem, often using automated cryptographic algorithms. On-chain management also takes into account the global blockchain community and several off-chain boundaries in order to achieve a strong overall governance framework. Both on-chain and off-chain governance systems work together to improve the blockchain ecosystem (and its core protocol) as it grows over time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="One-time password (OTP)"
            description="One-time password (OTP) is a special verification code used to log in to a specific server, network, or service usually via a mobile device. OTPs are usually time sensitive and last until the next code is generated (usually every 30 seconds). OTPs are commonly used with a mobile authentication app such as Google Authenticator. Although OTPs are much more secure than passwords alone, the technology will need to be continuously upgraded over time to keep up with new technological innovations and security threats."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ontology Trust Anchor"
            description="Trust Anchor is a qualified third-party trust provider of Ontology blockchain authentication services using a three-pronged approach that includes: (1) 'guarantees' that guarantee and enforce trust from (2) a 'trustee' entrusted to (3) a trustor (or anchor). reliable). Each of the three types of elements work together to validate data cryptographically and algorithmically in a transparent Ontology blockchain. Examples of trust anchors could be government agencies, universities, banks, third-party authentication service providers, or biometric technology companies, and form part of the Ontology network of multifaceted trust - many of which include verification agreements from many different sources."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ontorand Consensus (Ontology) Engine"
            description="The Ontology blockchain protocol uses the Ontorand Consensus Engine (OCE) compliant method. OCE is an updated version of the Byzantine Fault Tolerance (dBFT) agreement that also uses unplanned unconfirmed technology (VRF) and Proof-of-Stake PoS technology). OCE is based on Onchain's Distributed Networks Architecture (DNA) designed by the creators of NEO. OCE in theory can achieve endless measurement and requires a relatively low hashing rate, with the speed of creating a block that is limited only by the user's internet speed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Opcode"
            description="Opcode is short for operational code and refers to guidelines for low-level human readable programs. At Ethereum, the opcode refers to 140 unique commands that can be made by Ethereum Virtual Machine (EVM), the environment and the fixed rule where there are contracts and smart Ethereum accounts. Writing programs in a low-level language like opcode is possible, although it is much harder than using a standard language like Solidity. Basic examples of opcode commands are ‘PUSH’ and ‘POP’, which add and delete data to EVM respectively."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Open"
            description="Open, or open, price is one of the four key data points used on day trading in the stock market. The other three are called low, high, and closed - and the combined four are known as OHLC. Traditionally, stock market trading was done on normal market times, usually between 9am and 4pm local time, with markets closing on weekends. Cryptocurrency markets open 24/7, so while it is assumed that there is no opening price for crypto assets, OHLC is still included in many charting platforms to indicate the opening time of the regular stock market each day."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Open Finance"
            description="Open funds refer to the integration of banking and blockchain-based technology applications designed to transform the traditional financial sector. Open Finance aims to empower financial institutions, large businesses, and large banks to conduct their business processes in a transparent, efficient, automated, and data-driven manner. There are three main frameworks that should be used to facilitate the creation of a strong and transparent financial ecosystem. First, to establish a settlement layer that includes different stable coins; second, for local businesses and to build a data base to help empower technology; and lastly, to allow financial institutions to make financial products using reliable business data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Open Advocate Vote (Nano)"
            description="Open Representative Voting (ORV) is a Nano network algorithm. Nano users select representatives by sending the balance of their accounts to their chosen representatives. Representatives voted for the legitimacy of the transaction, and the blocks were confirmed when a quorum was reached."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Open Source"
            description="Open source refers to the public access to computer software source code under a patented license that gives users the right to use, analyze, modify, and distribute to anyone, at any time, for any purpose. Open source software is often developed by various software developers in the form of social interaction, and can be developed from its own intended use to suit other conditions of use. Open source software development frameworks are prominent in the development of blockchain-based network agreements because open source represents the same credible, public, unlimited, neutral, open, and researchable blockchain systems and cryptocurrencies known for it."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OpenSea"
            description="OpenSea is one of the world's leading peer-to-peer market places for buying, selling, and selling free digital token (NFTs). OpenSea, like many of its competitors, allows users to purchase, sell, and acquire a wide variety of digital art formats, from digital collections of Nike basketball shoes, to drawings of well-known crypto entrepreneurs like Vitalik Buterin, and anything in between. The OpenSea market, like many NFT markets in the industry, accepts NFTs payments with the Ethereum, ether (ETH) token."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Opera Mainnet (Fantom)"
            description="Opera is a powerful mainnet of the Asynchronous Byzantine Fault Tolerant (aBFT) using the Fantom Lachesis protocol. Opera is an unauthorized development and open source platform designed for the construction of internationally distributed applications (dApps) on the Fantom network. Opera mainnet is made up of many smart contracting capabilities that can interact with the Ethereum network thanks to both Solidity programming language support and integration with the Ethereum Virtual (EVM) machine."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Operating System (OS)"
            description="Operating System (OS) is a computer system software that is responsible for performing various tasks that allow the device to operate. The OS is responsible for managing computer hardware and software and provides standard software for computer programs. Operating systems are responsible for functions such as memory management, disk management, upload and execution, device restart, process management, data security and privacy, external device control, and providing better user interaction (UI). The most popular computer apps are Microsoft Windows and Apple MacOS, as well as mobile apps like Google's Android and Apple's iOS."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hope (Ethereum Scalability Stack)"
            description="Optimism is an application designed to work within the Ethereum network to increase Ethereum rating and output performance through optimistic rollup (OR) technology. ORs are a special measurement solution designed to make Ethereum transactions more efficient, faster, and cheaper. Hope uses Optimistic Virtual Machine (OVM) to facilitate the integration of Ethereum Virtual Machine (EVM) so that developers can write smart contracts that are uncontrollable in Ethereum. Not to be confused with sidechain, Optimism remains within the Ethereum network as a series of smart contracts capable of performing Ethereum transactions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Optimistic Rollup (NOMA)"
            description="Optimistic Rollup (OR) is a type of Layer-2 rating solution that runs across the Ethereum network. Optimistic Rollups are similar to the implementation of the Plasma scale used by Ethereum, but unlike Plasma, Optimistic Rollups allows the operation of the compatible Ethereum Virtual Machine (EVM) Optimistic Virtual Machine (OVM), which performs additional technological functions. -Optimistic Rollup. The term ‘Optimistic Rollup’ refers to the way in which ‘hopeful’ collaborators usually work without fraud and instead give evidence in the event of fraud, while ‘wrapping’ comes from a process of using ‘wrapped’ workloads and allowing that. network performance speed to increase significantly."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Optimistic Virtual Machine (OVM)"
            description="Optimistic Virtual Machine (OVM) is a virtual machine (VM) created by the Optimism blockchain team to help measure Ethereum with Optimistic Rollup (OR) technology. OVM is designed to make Ethereum transactions faster and less expensive; and provides a framework for developers to evaluate smart contracts with its Ethereum Virtual Machine (EVM) Layer-2 compatibility. This technology has been used on Uniswap decentralized exchange (DEX) in conjunction with Optimism."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Options Contract"
            description="An option contract is a contractual agreement that transcends an agreement between two parties to perform a probable function of the underlying security at a predetermined price (called strike value) on or before the expiry date of the contract. Optional contracts are usually classified according to the deposit option or call option, both purchased for stock forecasting or stock indicators, or sold for revenue. Generally, the call option is purchased as a profitable bet on potential stock or index information, while the placement option is purchased for profit in the future price hike."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Options market"
            description="Option market is an investment market for derivative contracts that facilitate an agreement between two parties to perform a function that may have a substantial collateral at a predetermined price before or on the expiry date of the contract. Option markets allow investors to bet on a potential asset, which is classified as a deposit option - a profitable bet on a possible increase in the stock price or index - or a call option, with the hope of future profits. price decline."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Oracle"
            description="Oracle is a third-party information service provider that sends real-world external data to a blockchain protocol (usually on a smart contract or multiple smart contracts). Oracle provides the blockchain network protocol with great power because it is able to continuously protect, verify, and validate the data obtained by the blockchain network and use it (because blockchains and smart contracts are often shut down by systems). Oracle can be categorized and relied on multiple data sets, or be integrated into a single entity and controlled by a single entity. Currently, one of the main uses of blockchain-based oracle is to provide the amount and data feeds needed to reliably execute smart contracts used financially in the DeFi sector."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Oracle problem"
            description="The oracle problem refers to inefficiencies in the external data delivery system in independent blockchain systems. By default, on-chain network agreements cannot access external data. Separation makes blockchains more secure and reliable, but also makes it harder to access and share external data used by smart contractors. Data forecasts exist to deliver reliable, offline chain data on an internal, on-chain environment. If a blockchain network cannot access this data to allow it to function properly, it is known as an oracle problem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Orchestrator (Livepeer)"
            description="In the Livepeer Network, Orchestrator is a user who provides computer services to the network, sends video to Transcoders, and ensures that the videos are converted properly."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Orchid Blockchain Protocol"
            description="Orchid is a peer-to-peer marketplace for providers and users of a virtual private network (VPN) that allows any network user to purchase bandwidth (off-chain and without the cost of gas and Ethereum network congestion) on a participating VPN service. provider. The Orchid network uses a payment method called probabilistic nanopayment so that users can purchase bandwidth by paying with the traditional Orchid service token (OXT)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Order and Management System (OEMS)"
            description="Caspian's Order and Execution Management System (OEMS) is a software platform, exchange aggregator, and a range of advanced trading tools and portfolio management tools for institutional investors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Order Book"
            description="An order book is an electronic list of orders for the purchase and sale of a particular security, asset, or financial instrument (or in the blockchain industry, a particular cryptocurrency asset) organized at a price level. Order books are usually accessed through an exchange service provider's online interface - such as a computer or mobile device - and help traders and investors improve market visibility by providing valuable trading and investment data. The order book is made up of a number of shares or financial assets (or tokens) that are bought and sold at a certain price in sequence (with the green part seen as the purchase list, and the red part, the seller list)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Order Ring (Loopring)"
            description="An order ring is the process by which a ring miner completes an order through a smart Loopring contract to determine the best way to complete an order. If the ring miner is able to place an order on both sides of the trade, the smart contractor will use the atomic switch - a direct transfer from the smart contract to the user's wallet. Orders of rings also facilitate ring matching, which is the process of fulfilling orders by tying them together. Order rings separate the Loopring protocol from other exchanges with a domain such as Wave, IDEX, and Bancor. Order sharing is also made possible by ringing orders. When a smart Loopping contract is unable to place an order for a single trade, order sharing will split the orders into certain portions until the total amount of the actual order has been met."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Order cutting"
            description="Order cutting is a strategy used by large-scale institutional investors to buy large items or trade (usually through an order book and an online exchange interface) for a particular asset in small, highly segregated amounts. Cutting orders are done to prevent major market fluctuations and to maintain confidentiality. Order cutting is also used to achieve the best intermediate entry value, as well as to protect investment funds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Organization for the Development of Organized Information Standards (OASIS)"
            description="The Organization for the Advancement of Structured Information Standards (OASIS) is an international non-profit organization that assists with the general development of open source software, blockchain, Internet of Things (IoT), artificial intelligence (AI), and other related technologies. . OASIS works with a few hundred technology partners around the world to create a coherent and cohesive framework for global software development and collaboration. OASIS was founded in 1993 with world headquarters outside Boston, Massachusetts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Orphans Block"
            description="An orphanage block (commonly referred to as a stale block) is a block that has not been accepted within the blockchain network due to the critical time when two blocks were dug at the same time. Theoretically, a soft fork is formed when two blocks are excavated at the same time, but this is only practical because orphan blocks usually form four consecutive blocks apart from the main network from which they originate. Orphanage blocks that are legal and certified blocks exist in isolation from the original blockchain and do not serve the purpose after they have been rejected."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ouroboros Praos (Cardano)"
            description="Ouroboros Praos is a Proof-of-Stake (PoS) compliant system developed by the IOHK team that built the Cardano blockchain. Its novel approach provides protection from completely evolving corruption in a slightly more consistent environment. A vicious actor can destroy any participant from a changing audience at any time as long as the distribution of participants keeps a large part honest - and this approach helps to protect such concerns. Ouroboros Praos is considered the most comprehensive, innovative, and secure way to build a Proof-of-Stake blockchain-based system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Over-Optimization"
            description="Excellence is a process that occurs when traders create a trading algorithm (usually using an excessive curve-fitting) into a computer program that looks great in theory, but when actually used in a real-time trading market it does not work as desired. This happens when the algorithmic trading system is too complex for a computer to handle, leading to the completion of a calculation system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Over-the-Counter (OTC) Trading"
            description="Over-the-Counter (OTC) trading is usually a process in which a trade agreement is concluded between two parties without the need for a medium-term trade (CEX). OTC desks are often used to purchase large quantities of goods in order to improve transparency, save time and payments, and maintain the safety of purchased goods. Typically, OTC trading involves a third-party solution. Also, OTC desks often trade in goods or securities that are not included in the standard crypto trading list, because small exchanges do not meet regulatory requirements to be included in a specific asset."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Over-buying"
            description="Overbought is a term based on what refers to newly sold goods at an increase in value relative to the estimated internal or fair value, and may be expected to decrease in value in the near future. However, the situation of over-buying can last for a long time, which means that the immediate decline in prices is not a short-term result. Technical indicators are one of the main methods used to identify over-the-counter or over-selling assets using data from multiple metrics such as relative strength index (RSI), Bollinger Bands, trading volume, and other metrics."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Overledger Network (Mass)"
            description="Overledger is a collaborative platform for the Quant Network blockchain. The program uses an application programming interface (API) designed for banking financial services including stablecoin minting, CBDCs, supply chain management, payments and small payments, market creation, and invoice support, among others. Overledger also allows developers to build apps on Bitcoin, Ethereum, and Ripple as well as business applications such as R3's Coida platforms, as well as Hyperledger's Besu and Fabric."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Oversold"
            description="Oversold is an imaginary term that refers to newly sold commodities at a discounted price in relation to its perceived potential for inflation or inflation. However, the condition of the best-selling price can last a long time, which means that the increase in price is not a short-term result. Technical indicators are one of the main methods used to identify over-the-counter or over-selling assets using data from multiple metrics such as relative strength index (RSI), Bollinger Bands, trading volume, and other metrics."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="OXT"
            description="OXT is a traditional Orchid crypto asset that helps deploy blockchain network infrastructure supported by Orchid VPN and the community. The Orchid network uses a payment method called probabilistic nanopayment so that users can purchase bandwidth via OXT. OXT is also used by VPN providers to participate in the Orchid network. Orchid is a peer to peer-to-peer marketplace provider of private network (VPN) providers that allows any network user to purchase bandwidth from a participating VPN service provider."
          />
        </Col>
      </Row>
    </section>
  );
};

export default OSection;
