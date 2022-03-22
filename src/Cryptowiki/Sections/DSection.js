import React from 'react'
import { Row, Col } from 'react-bootstrap';
import useNav from '../CustomHooks/useNav';
import ContentComponent from '../ContentComponent';

const DSection = () => {
  const dSectionRef = useNav("D");

  return (
    <section ref={dSectionRef} id="dSectionContent">
      <div className="titleWrap">
        <p className="title-line">D</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Daedalus Wallet (Cardano)"
            description="Daedalus Wallet is Cardano's open source software wallet and is supported by all major computer applications. It is a hierarchical-deterministic (HD) desktop case that gives users more control over how they manage and make a backup copy of their funds. Daedalus is also a full-fledged node wallet, which provides excellent software wallet security, as this allows the wallet to be less reliable. Other notable features include automated interaction and integrated news feeds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Daemon"
            description="A daemon is a computer program that acts as a background on a computer device rather than as a user-interaction. Daemons are usually started at the beginning of a computer, rather than working on their own. They usually manage tasks such as responding to network requests and getting the hardware done."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dagger"
            description="Dagger is a special notification engine used to track accounts and data events within the Ethereum network in real time. Dagger is designed as a JavaScript (JS) based framework that allows developers to use MoregonP Polygon rating technology to build high-quality dApp applications on the Ethereum network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DAI"
            description="The DAI ERC-20 stablecoin token issued by the Ethereum-based MakerDAO protocol used to facilitate collateral-based lending without a mediator. DAI is linked to the US dollar at a ratio of 1: 1 so that each DAI always costs $ 1 USD. DAI is a crypto-backed stablecoin split, and thus retains its USD peg by using securities in the form of cryptocurrencies like ETH."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DAppChain (Loom Network)"
            description="In Loom Network, dAppChain is a dApp-specific transaction sidechain built on the basis of the Ethereum blockchain to maximize efficiency. DAppChain can handle complex processing tasks and handle all dApps, all while interacting slightly with the base blockchain on which it is based. Apps developed using Loom Network incorporate the unique dAppChain to create different compatibility models, protocols, and enhancements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dapper Labs"
            description="Dapper Labs is a Canadian blockchain development firm owned by Axiom Zen. Dapper Labs became known for the launch of Crypto Kitties in 2017, and later for the development of several other notable blockchain projects. Dapper Labs focuses on building blockchain systems that are commonly used for set-aside funds (DeFi), games and eSports, and seamless tokens (NFTs). Flow Blockchain - created by Dapper Labs - helped create the NBA Top Shot (NBA NFT platform for trading, collecting, buying, and selling) by 2020, and is expected to release similar platforms and products in the coming years."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dark Web"
            description="The black web is an online segment that is deliberately hidden in standard search engines and is only accessible through special software. The most widely used web browsers to access the black web are Tor and I2P, which use encrypted IP addresses to hide the identity of black web users and site owners. The black web is often associated with cybercrime and illegal activity. The black web forms a small piece of deep, deep web, which is also hidden from the usual search engines, but is usually not associated with illegal activity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Darknode (Ren)"
            description="RenVM is an inter-blockchain liquidity network made up of thousands of independent nodes called Darknodes. Anyone can use Darknode, but each node must use RenVM software via Virtual Private Server and enter 100,000 REN tokens in the Darknode Registration Contract. This machine encourages node operators to avoid malicious behavior at risk of losing their deposit. Darknode Combined acts as a trusted, suspended provider of digital assets that users lock on the RenVM platform. Allows users to collect payments each time RenVM converts digital assets into an ERC-20 token."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Data Access Layer (DAL)"
            description="Capitulation refers to a significant market downturn during a strong trading session, in which investors may sell their assets at an unprecedented price to avoid further financial losses. Capitulation is sometimes called panic trading. An example of a long-term commitment to the crypto market is sales that occurred after the price of bitcoin (BTC) reached a high (ATH) of $ 20,000 USD in December 2017 and later fell to $ 6,500 for three months. later. Short captions may be followed by an escalation in value."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Data Anchoring"
            description="In Klaytn blockchain platform, the data anchoring process connects data from a series of helpful services to mainchain. Packing data from time to time saves block hashs from a fast, customized service chain to highly secure mainchain. This process is intended to increase the security of service chains, which may be less secure than mainchain due to the number of smaller nodes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Data packet"
            description="A data packet is a unit of data that can be transmitted over a network. They are usually measured in megabytes (MB) or megabytes (GB). A live Internet connection contains continuous exchanges and retrieval of data packets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Data Science (DS)"
            description="Data Science (DS) is a multidisciplinary data study to create data that is possible for a growing amount of data used by the world in many fields. DS generally integrates mathematical application, artificial intelligence (AI), and scientific methods to compile, store, interpret, and process large amounts of data. DS can be used in almost any industry you can think of, and it helps organizations, businesses, and other entities learn from the data they use, often to help ensure greater technological innovation and higher profitability levels."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Data Verification Mechanism (DVM)"
            description="Data Verification Mechanism (DVM) is a voice process used to resolve disputes in the UMA protocol. In the event of a price dispute between the two parties regarding an outgoing token exit contract, DVM asks UMA token holders to vote for the appropriate amount. DVM then transfers the correct amount to the applicant and rewards UMA token holders for their vote."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Datatoken (Ocean Protocol)"
            description="The ERC-20 data tokens represent sets of data tokens and data services in Ocean Protocol. By purchasing a specific data token in the Ocean data market area, users gain access to certain data sets and data services represented by datatoken. Datatokens act as both on-ramp and off-ramp so that data can enter a limited financial space (DeFi) and make money with Ocean Protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Day Trader"
            description="In traditional markets, day traders make a trading strategy that only involves holding intraday positions and not holding open positions overnight. Day traders try to take advantage of temporary price fluctuations between highly volatile commodities. Day trading is often regarded as a risky investment rather than a long-term strategy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DBFT 2.0"
            description="The NEO blockchain uses a highly advanced framework (dBFT 2.0) such as Proof-of-Stake (PoS) called Delegated Byzantine Fault Tolerance or dBFT. NEO's dBFT 2.0 solves several inefficiencies of the first version of dBFT that struggled with it. DBFT 1.0 was sometimes easily infiltrated by a single block fork, which means that messaging problems between system nodes often occur, resulting in network malfunction. To fix this issue, dBFT 2.0 modified the message request system that allows nodes to communicate, adding a retrieval message option. This option enables the network's main Consensus Nodes to recover quickly in the event of a message problem, and thus to maintain effective compliance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dead Cat Bounce"
            description='Dead cat jumping is a chart of technical analysis chart that refers to the temporary reversal of the price of an asset experiencing a long-term decline, followed by a further decline. Jumping a dead cat is actually a fraud in recovering the price of the property. The name is based on the Wall Street saying "even a dead cat will jump if it falls from a high place."'
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dead Coin"
            description="Dead coins are cryptocurrencies that have been left behind by existing projects. Certain terms are used to understand dead coins: inactive web pages, lack of development updates, lack of active nodes, and trading volume of less than $ 1,000 USD within three months. More than 1,000 1,000 dead coins have been recorded since 2020."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Death Cross"
            description="The death cross is a trading signal of a bearish technology in which a 50-day moving average falls below the 200-day moving average, which often results in huge sales. It contradicts the Golden Cross trading signal, and appeared before the collapse of the largest stock market in history."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Debt Instrument"
            description="A debt instrument is a tool that an individual, government, or business can use to raise money. Credit cards, credit cards, loans, and bonds can all be types of debt tools. The term debt tool is primarily used in institutions that are trying to raise money, usually in the form of a rotating credit line that can be associated with a primary or secondary market. Complex credit tools that include advanced contract formation and the involvement of multiple lenders or investors, often using a structured market place."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Debugging"
            description="A debugger is a special software application designed to identify and remove errors - a process called error correction - on a software system, computer network, or related infrastructure. Proofreaders test computer systems by checking for correct performance. If the system shows a large number of bugs, or crashes together, it is important to pause the system to temporarily repair it. Debuggers are often used to pinpoint the exact location of problems using a variety of methods such as command-set templates, step-by-step code analysis, and computer modification, among others."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentraland (MANA)"
            description="Decentraland is a virtual state integrated with Ethereum. On the Decentraland platform, users can explore multi-episode, user-generated space that includes commercials, games, and social media. MANA, the ERC-20 token, is a digital token used to pay for goods and services in Decentraland, while the LAND is an ERC-721 token that does not have a mold representing visible land ownership."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralize application (dApp)"
            description="The extended app - or dApp - uses blockchain technology to address usage from ranging from investment to borrowing to gaming and control. While dApps may seem similar to web applications in terms of user experience (UX), dApp backing processes test central servers for distributed and peer-to-peer operation. Instead of using the central Hypertext Transfer Protocol (HTTP) to communicate, dApps relies on wallet software to integrate smart contracts with automated networks such as the Ethereum blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Application Programming Interface (dAPI)"
            description="Decentralized application programming interfaces (dAPIs) - the new implementation of the API3 protocol - are API services that are naturally compatible with blockchain technology. Although dAPIs work very similar to legacy APIs, legacy APIs are static and do not align with traditional blockchain technologies. In the API3 protocol, API providers are able to use a server-free oracle node, called Airnode, to sell their data feeds to the blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Non-Governmental Organization (DAO)"
            description="The Non-Governmental Organization (DAO) is a blockchain-based organization that is democratically managed by members through an open source code of compulsion and often legalized by smart contractors. DAOs do not have centralized management structures. All decisions are voted on by network participants. DAOs often use a native service token to promote network participation, and provide equal voting power to participants based on their stake size. Since the DAOs are built on top of the blockchains - usually Ethereum - their transactions are made explicitly on the lower blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Exchange (DEX)"
            description="The Decentralized Exchange (DEX) is a platform for financial services for buying, trading, and selling digital assets. In DEX, users exchange directly and meet-to-peer on the blockchain without a central arbitrator. DEXs do not function as custodians of consumer finances, and are generally managed by the democratic and the ruling party. In addition to the middle-charge charging fees for services, DEXs are often cheaper than their local counterparts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Exchange (DEX) Aggregator"
            description="Decentralized exchange (DEX) aggregator is a system that uses DEX to give traders the ability to buy, sell, and trade different tokens and coins from multiple trades with a simple simple interface. 1inch is an example of a DEX aggregator designed to get users the best price from DEX protocols such as Uniswap, Balancer, SushiSwap, Bancor, KyberSwap, and more - all in one place. This type of special automated market maker (AMM) program offers users many options and better user experience (UX) when using DEX."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Exchange Protocol"
            description="The space-allocated exchange protocol describes certain mechanisms that govern the operation of the order book, how trades operate when the same is achieved, and the distribution of potential rewards that encourage buyers and sellers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Finance (DeFi)"
            description="Decentralized finance (DeFi) is a major blockchain growth platform that provides peer-to-peer financial services and Ethereum-based technology. DeFi trading, loans, investments, and tokens are characterized by this, unauthorized, unreliable, and interoperable than traditional financial services, and are prone to organizational management practices divided into equal stakeholder ownership. The integration of the platform into DeFi has led to the opening of the market through new inventions such as crop farming and cash tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Rule"
            description="In blockchain networks and dApps, divisive governance refers to processes in which different, equal domain management is used. Includes various voting methods on the tech platform, strategy, updates, and rules. Blockchain domination is usually done using two different systems: on-chain domination and chain control. On-chain domination relies on blockchain-based systems, typically using automated cryptographic algorithms for network computing and basic compliance. Chain-free governance refers to free blockchain decision-making, often on online or in-person forums."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Identifier (DID)"
            description="Decentralized identity (DID) is a type of digital identification commonly used on blockchain social networks. Once verified, the DID allows its users to verify and use their identity without a central authority, identity provider, or related third party. This is achieved by using an identity document that uses key-pair cryptography to verify identity. Another exciting DID program is the ability to create different DIDs that share certain data with certain online companies. For example, you can verify your nationality without revealing your name or date of birth (DOB)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Network"
            description="A state-of-the-art system is a combination of connected, but separate businesses that communicate with each other without a central authority or server. They differ from centralized systems, which include an important point of governance. Blockchains are an example of a nationally distributed system: a blockchain data book is distributed among all shared network participants (nodes), who must reach agreement on data content for the network to work. With the exception of a single authoritative point, systems divided by blockchains also do not have a single point of failure, which means that a single corrupt environment cannot disable the entire blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Oracle Network (DON)"
            description="Typically, oracle network (DON) refers to a network of blockchain oracles that provide external data to blockchains or request intelligent contracts. With a wide range of different data sources and a voice system that can be controlled by a single business, DONs provide enhanced security and transparency to greatly improve the performance of smart contracts. Chainlink is an example of the famous DON."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized Storage Network (DSN)"
            description="The Decentralized Storage Network (DSN) is a network that provides peer-to-peer access to users who have the ability to rent their own hardware storage area. With the help of encrypted encryption methods, clients transfer files privately to peers through DSNs that provide cryptographic proof of security. Sia, Filecoin, and Storj are examples of blockchain-based storage networks that aim to reduce the risk of possible data failure by a single point of failure. In DSN communication forums, smart contracts are used to make terms legal between providers and users."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Decentralized / Decentralization"
            description="Multipurpose spatial is a central and descriptive feature of blockchain technology. Implementing spatial and technological processes can reduce or eliminate the role of mediators in all industries and operating cases. For example, by removing banking institutions from financial instruments, expanded financial platforms (DeFi) can spread profits and domination to consumers and the wider community rather than the mediator. At an even more fundamental level, the integration of shared social media is limited, making it extremely difficult for any one organization to control or block the data trading on that network. However, many experts believe that gaining the right expansion can reduce network usage."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DeCloud (Akash Network)"
            description="The DFINITY series key technology is the key to a 48-bit public network that allows the DFINITY Internet Computer to complete the transaction. The method is used to make old blocks within the system unnecessary, and allows Internet Computer Protocol to run at high speed by completing the tasks required to update smart contracts within 1 to 2 seconds. Chain key technology is also responsible for the communication of the various components within the Internet Computer (such as subnet, canisters, and Network Nervous System (NNS)) as well as network compatibility."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deleting encryption"
            description="Associated with blockchain and cryptography, coding is the process of using coded or encrypted text (ciphertext) or data and is converted into vague text that can easily be read by a computer program created. Deleting encryption from blockchain is often related to methods of removing data encryption directly, with a different reference code, or using special cryptographic keys."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deep Web"
            description="The deep web is part of the World Wide Web (WWW) that is more subtle and more difficult to access than the extra web. The deep web contains web pages that are not indexed by standard web search engines like Google. The deep web is said to make up over 99% of the internet, and it contains web email, social media accounts, online banking, and other websites that sometimes need a password to access them. The deep web also contains private data and statistics from international government agencies, non-governmental organizations (NGOs), large corporations, and other regions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DeFi Pulse Index (DPI)"
            description="DeFi Pulse Index (DPI) is an asset management indicator created by DeFi Pulse using the Set Protocol. Originally created in 2020, DPI represents a basket of various ERC-20 tokens focused on DeFi. DPI is designed to track the most effective and relevant DeFi tokens, giving DPI owners exposure to the DeFi market as a whole with one single token."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deflation"
            description="Inflation is counterproductive to inflation and refers to a gradual decline in prices in the economy compared to real value, which increases the purchasing power of the currency over time. Inflation is often accompanied by a decline in the supply of funds to a particular economy, while inflation is often the result of increased inflation. For example, Bitcoin owes its value, at least in part, because of its deflationary nature, which is embedded in a network code that minimizes the circulation of bitcoin over time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Delegated Byzantine Fault Tolerance (dBFT)"
            description="Byzantine Fault Tolerance (dBFT) relay (dBFT) is a consensus system created by Neo for the most advanced version of the Stake evidence. The consensus approach is similar to the standard Byzantine Fault Tolerance (BFT) except that it uses a method where anyone can be a messenger who meets certain requirements. In this case, delegates are allowed to share and compare suggestions from other potential delegates. The system has very fast end times and performance speeds, but some argue that it is placed in one very remote place because Neo uses only 7 major Consensus Nodes to maintain network compatibility."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dedicated Proof of Donation (DPoC) (ICON Network)"
            description="Dedicated Proof of Donation (DPoC) is a separate economic management protocol used in the ICON Network using the ICON Incentives Scoring System (ISIS). DPoC differs from the Poor Transfer Proof (PoS) in that participants submit votes on block verification rights, but DPoC sees ICX owners transmit tokens to individuals who have played a positive role in the network instead of specific nodes. The selected business then verifies the blocks in the messenger's name, and receives the token rewards accordingly."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dedicated Proof of Stack (DPoS)"
            description="As the most widespread Proof-of-Stake (PoS) system, Sticker Transfer Proof (or DPoS) encourages users to authenticate network data and ensure system security by making a deposit. However, a distinct feature of DPos is their voting and power transfer framework. In contrast to PoS, where nodes are often enabled to process new blocks based solely on the total value of each node, the DPoS system allows users to assign their share to a selected location - known as a messenger - and vote. so that nodes gain access to block verification. Selected Creditors receive block prizes after verification is performed locally, and those prizes are then distributed to users who send them as guarantors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Delegation"
            description="Transfer refers to the provision of a certain amount of cryptocurrency or token to another user to participate in a network path to participate in blockchain protocols of Delegated Proof-of-Stake (DPoS). It is useful for users who want to earn tangible rewards and participate in the network, but who do not have a large enough share to meet the small needs themselves. DPoS aims to achieve a higher level of equality and democracy through the transfer of power."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Delegator"
            description="Messenger is a type of node commonly used in blockchain Proof-of-Stake (PoS) networks. Senders have a variety of purposes depending on the specific blockchain protocol they are working on, but they are usually used to help full nodes or validator nodes, which are key nodes responsible for achieving network compatibility. Those who wish to participate in the agreement, but do not want to use the full node, may become a delegator node and hold their tokens through a public validator node - a process called delegation - to share part of the block rewards."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deleting from the list"
            description="Unsubscribe crypto assets from trading. Unsubscribe may occur when a project no longer meets the listing requirements set out in the initial exchange. Common reasons for removing from the list include a lack of normal trading volume, poor network and / or strategic contract stability, evidence of deceptive or dangerous behavior, lack of protocol development, non-business and customer communication, and a few other factors. Once the goods are removed from the exchange, they can no longer be bought and sold locally. Unsubscribe is usually permanent, but in rare cases project assets can be re-listed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Denial-of-Service (DoS) Attack."
            description="Denial-of-Service (DoS) is a type of digital attack on a network that attempts to disable the system by confusing it with repeated requests. DoS Attack is a vicious attempt to disrupt normal traffic to a website or other online property in order to temporarily crash the sub-network and make it inoperable."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deposit (Cryptocurrency Transaction)"
            description="Deposit is a process in which a user deposits his money (usually in the form of a cryptocurrency or fiat) from one place to another. Deposits are usually made from cryptocurrency trading, a cryptocurrency wallet, a reserved provider, or from a fiat-to-crypto on-ramp. Deposit is a form of blockchain activity, and usually comes with transaction fees charged on the basic blockchain network used to perform the activity. Deposits, as well as withdrawals, are commonly used to move assets between wallets and exchanges, as well as to exchange fiat money between a bank account and a fiat on-ramp service provider."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deposit contract"
            description="A deposit contract is a smart contract that allows users to enter cryptocurrency in a blockchain protocol, usually with a verification code. Although deposit contracts usually allow users to place tokens in a secure location to help maintain network efficiency, they can sometimes be used within a decentralized finance (DeFi) protocol that allows the use of certain financial instruments (such as staking., Borrowing, and lending), allowing users to receive recommended token awards."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Depository Trust & Clearing Corporation (DTCC)"
            description="The Depository Trust & Clearing Corporation (DTCC), as well as the National Securities Clearing Corporation (NSCC) and its subsidiaries, are a U.S. corporation. providing U.S. institutional investors by the cancellation of post-trade transactions and payments for other services. DTCC also provides stockpiling of securities exporters from the U.S. and more than 60 countries around the world. The company also provides municipal and corporate debt related services, joint ventures, prices, exits, unit trust trusts, insurance contributions, and U.S. deposit receipts. DTCC is the world's largest financial processor and is responsible for resolving most of the securities operations in the United States."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Depth Limited Search (DLS) Algorithm"
            description="Depth Limit Search (DLS) is a special compatibility algorithm used within the Cosmos Network blockchain. It is designed to solve a specific technical problem of the endless method as it is related to inexperienced search algorithms. While the DLS algorithm works very well on memory, it suffers from a lack of completeness."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Derivative"
            description="A derivative is a financial contract that derives its value from the asset's assets, index, or interest rate. Future contracts and options are examples of alternatives. There are a variety of blockchain-enabled cryptocurrency exits, including cryptocurrency transactions and futures bitcoin, which represent bitcoin trading agreements at a future date at a predetermined price."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deshielding performance"
            description="Deshielding transaction is a type of activity used in the Zcash blockchain sent from a private sender, anonymous to the public wallet, showing through. Deshielding performance uses zN-SNARK cryptographic proof technology to maintain data privacy, with the exception of different settings for sender and receiver."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Design Axiom (DA)"
            description="Design axiom (DA) is a term given the key features of Crypto.com blockchain's technical architecture. The Crypto.com technology white paper identifies six design axioms that are critical to the overall success of the project: modern security construction; high-speed network with transaction throughput; distribution; development; data privacy; and inclusive network design."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Desktop Wallet"
            description="Desktop wallet is a cryptocurrency software wallet and digital assets that are downloaded directly from a computer device. Desktop wallets are almost always natural, which means users control their private keys. Desktop bags are hot bags, which means they are connected to the internet - unless the computer device is turned off or the wallet is installed on a second offline computer. Many desktop pockets offer password protection and can generate a recovery phrase as a backup key."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Deterministic Module"
            description="Determining module for a component of independent electronic circuits built into the circuit board that provides functions to a computer system that does not include any random level. The deterministic module will always produce the same output from a given initial condition or initial condition. A blockchain-based computer system usually decides naturally."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Devnet"
            description="Similar to testnet, the development network or devnet operates independently of the mainnet. Some classify these areas based on their intended use. While not all blockchain rules use devnet or testnet, many use it as a test platform to try new features and as a way to test stress blockchain updates with speed, reliability, and safety metrics before mainnet releases."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dharma Wallet"
            description="Dharma is a limited fundraiser (DeFi) built to operate on the Ethereum blockchain. According to the Dharma website, the wallet provides users with the ability to purchase approximately 74,000 different assets with the help of 55 different trading platforms (DEXs). Dharma offers very low fees compared to many traditional exchange competitors and wallets. Dharma also facilitates faster connection to any bank account in the United States. The platform provides strong investment sponsors including Coinbase, Aave, Y Combinator, Polychain Capital, and others, and strengthens its value proposition in the market."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Art"
            description="Digital art can be defined as old art on your computer with programs such as Adobe Illustrator, Photoshop, or MS Paint. You can also use the most advanced tools to create animated or interactive digital art. Digital art files are very common .tiff, .gif, .jpg, .pdf, and .mp4 files. Digital art is one of the less popular forms of modern art. Once in the blockchain, however, cryptoart."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Inheritance"
            description="Digital assets are the term for capturing all digital assets. The term covers a wide range of assets, including confidentiality, utility tokens, security tokens, digital stocks, and digital collections. All cryptocurrensets are digital assets, while not all digital assets are crypto currencies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Money"
            description="Digital money is a type of money that is only available in a digital way, without the appearance of material things. Digital currencies have many advantages over traditional counterparts, which include reduced operating costs, greater visibility, increased transaction speed, and geographical distribution. Different types of digital currencies have existed since the late 1980s, but it was not until 2009 that the problem of double-digit spending was resolved with the Bitcoin blockchain protocol and the cryptocurrency bitcoin (BTC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Currency Electronic Payment (DCEP)"
            description="Digital Currency Electronic Payment, or DCEP, is a digital banking system of China (CBDC). Continuing from 2014, DCEP aims to convert tangible money into China's RMB digital system that can be exchanged between digital wallets without involving a bank. Contrary to established blockchains, the Chinese government will maintain a moderate authority over the platform and funding, which has faced a number of major public temptations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital dollar"
            description="'Digital Dollar' is a commonly used reference to the digital currency of the largest bank of the United States (CBDC). U.S. government agencies are researching the potential benefits and risks associated with creating the CBDC, but no clear way forward has been shown."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Identity"
            description="Digital identity is the data used to represent a person, organization, or device. For individuals, digital ownership can be digital versions of government documents confirming a person's date of birth (DOB), nationality, gender, and other important information. It also refers to personal profiles of social media, email, and Internet usage history. Concerns about digital identity - especially individuals - often focus on security and personal privacy. Typically in a blockchain, digital identity is directly linked to Decentralized Identity (DID), once established, allowing blockchain-based IDs that can be verified by key-pair cryptography."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Signature"
            description="Digital signature in cryptocurrency is the process of using a secret key to sign digital transactions. With public key cryptography, a digital signature verifies the sender and receiver of the transaction. Allows anyone with the sender's public key to verify the digital signature or authenticity of the message, transaction, or data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Digital Signature Algorithm (DSA)"
            description="Digital Signature Algorithm (DSA) is a special set of digital signatures used within public key cryptography systems such as blockchains or related computer infrastructure. The DSA was made fit for the U.S. Federal Information Processing Standard 1991 in partnership with the National Institute of Standards and Technology (NIST). At its inception, the DSA’s common patent was made available for use worldwide, but it is expected that future revisions to the suspension could make it obsolete and unusable."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dilution"
            description="Dilution is an economic term that refers to the release of new assets that reduce the existing percentage of shareholders. Depreciation can occur with assets ranging from stocks to cryptocurrencies. In the case of cryptocurrency, the purification refers to a reduction in the value of a single unit of currency, or the total market value of the cryptocurrency protocol, due to the creation of new tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Direct Market Access (DMA)"
            description="Direct market access (DMA) refers to the ability of investment institutions to conduct trade and investment - securities and other types of assets - through an exchange order book or investment platform that they rarely have access to. This direct access is usually only available to companies, or purchasing third-party firms, who meet certain conditions and are acquired by third parties such as investment banks, or third party firms. DMA is often achieved by using algorithmic electronic trading software to fulfill certain types of orders and investment strategies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Direct Public Delivery (DPO)"
            description="Direct Public Offering (DPO) - sometimes known as Direct Listing or Direct Setting - is a way to give shares directly to the public, without a mediator such as an investment banker, broker, or subscriber. Another potential benefit of this method is that it can ultimately help reduce the general costs incurred during the First Ordinary Initial Offering (IPO). DPOs are often used by small companies with reliable clients and are designed to give the company that offers shares more flexibility in budgeting. Prior to the DPO, a company must submit compliance documents to regulators from each region when planning to allocate shares, but the entity generally does not need to register with the Securities and Exchange Commission (SEC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Directed Acyclic Graph (DAG)"
            description="The directed acyclic graph (DAG) is a type of Distributed Ledger Technology (DLT). In contrast to the blockchain, which combines transactions into blocks and directs them directly, DAG is a network of individual services that are only connected to other payments other than blocks. While blockchains require block authentication, in DAG, each transaction provides authentication to each other. All network users at DAG are simultaneously miners and guaranteed, so transaction fees are often much lower than those common in blockchain networks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Direct Trading"
            description="Direct trading refers to trading strategies where the only investment factor is the future direction of the entire market. It is often associated with trading options because different direct trading strategies can earn money on the ups and downs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Disagreement"
            description="Discord is an instant messaging (IM), voice over internet protocol (VOIP), and digital distribution platform for creating online communities. Discord allows users to communicate via voice calls, video calls, and instant messaging, and share media and files in private chat rooms organized into 'servers'. Discord is now well known in the blockchain industry (and Telegram) as a community that manages where blockchain projects offer regular updates and allow fans, investors, and users to ask questions and keep in touch with the founding team members."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Discounted cash flow Model"
            description="The discounted cash flow (DCF) model is a measurement strategy that helps investors determine the current value of an investment by estimating how much money they will make in the future. DCF analysis reveals future cash flows through a series of assumptions about how a company or asset will perform in the future, and then predicts how these operations translate into generating revenue. Future income is reduced to the current depreciation rate (NPV), which represents the amount that an investor must be willing to pay today in order to achieve future cash flows."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Disk Operating System (DOS)"
            description="Disk operating system, or DOS, is a text-based user interface (TUI) that works with disk drive. DOS are no longer widely used because technology has been replaced by more sophisticated operating systems as the computer is developed, but they are considered the basis of computer architecture. DOSs are commonly used on hard disk drives (HDDs) and optical and floppy disks, and are characterized by a basic file system used to read, write, and edit files in their archive. The most popular disk operating system is called MS-DOS, which was launched in 1981 by Microsoft's IBM."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Distributed Denial-of-Service (DDoS) Attack"
            description="Similar to Denial-of-Service (DoS) attacks, Distributed Denial-of-Service (DDoS) is a type of malicious network attack caused by a number of systems against the target. In a DDoS attack, hackers use traffic from many different sources to fill a connected machine or service with requests in an attempt to shut down their network and make it unavailable for use. Because most traffic sources are very difficult to detect, DDoS attacks are much more challenging to fight than DoS attacks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Distributed Hash Table (DHT)"
            description="A Distributed hash table (DHT) is a type of distributed database that is able to store and extract data associated with a network of peer notes that can join and leave the network at any time. DHTs are generally designed to measure in a way that allows a large number of participating nodes to be systematically organized and based on a network topology algorithm. These network nodes work together to authenticate and store data on the DHT network without relying on a central network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Distributed Ledger Technology (DLT)"
            description="Distributed Ledger Technology (DLT) refers to a shared website where transactions and related information are recorded in multiple locations simultaneously. The DLT model can be in the form of a network approved under central control, or an unauthorized network maintained by a separate node network with no central authority. Blockchains and Directed Acyclic Graphs (DAGs) are both examples of different types of DLT."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Distributed Randomness Generation (DRG)"
            description="The Distributed Randomness Generation (DRG) is a validation protocol used on most Stake proof Proof block (PoS) as a security measure. Utilizing both certified random function (VRF) and certified delay function (VDF), DRG prevents a fixed authentication from random conversion or does not send the last random number generated. This is because the preimage of randomness (pRnd), which is used to confirm the current block in DRG-enabled blockchains, has already been written in the previous block and thus cannot be changed. DRG is designed to be measurable, reliable, consistent, and predictable (i.e., random)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Diversion"
            description="In the context of an investment, a split is where two data points go in the opposite direction when charting a technical analysis, such as when the current asset price rises, and its relative strength index (RSI) decreases. The opposite is a merger, in which the two technical indicators rise or fall in the same direction. Divergence may also refer to a process in which the price of a future contract moves away from the price of the underlying asset as the date of delivery of the contract expires. This type of separation can lead to termination of the contract."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Diversification"
            description="Shares are regular payments made by a company that issues stock to its company's shareholders. Although not all stocks pay dividends, the exact distribution of shares is determined by the company's board of directors. Shares are usually paid in cash, although sometimes they are paid with new stock in excess stock."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dividend Recovery Program (DRIP)"
            description="The dividend reinvestment plan (DRIP) takes advantage of the investment that the company receives from the company and automatically replenishes it in additional stocks of that company, usually at a reduced price. DRIP allows for increased profitability: Shares are re-invested in large stocks, which also generate more profits, and so on. However, investors are often given the option to re-invest their profits or withdraw them before DRIP begins."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DNV (Accredited Registrar Enterprise)"
            description="DNV (formerly known as DNV GL) is a Norwegian registered registration company with approximately 14,500 employees and 350 offices in more than 100 countries. DNV has a direct partnership with VeChain to provide verification and research services for most of the businesses VeChain works with, and provides supply chain management data, carbon-neutral vehicles, logistics, natural gas, and more."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Do Your Own Research (DYOR)"
            description="Do Your Own Research (DYOR) is a term used in the blockchain investment environment to encourage potential investors to learn, analyze, and develop the right skills for the project they are considering investing in. As with any investment opportunity, there is always a risk involved. Failure to research or understand the project as a whole can often lead to financial losses and a negative investment outcome."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Docking"
            description="Docking is a process of combining two protocols - for example from Ethereum 1.0 to Ethereum 2.0 - to become better and stronger over time. The docking process usually involves the transfer of data and information from the oldest and most technologically advanced protocol to the newest and most modern version. Docking is a very complex process and can take weeks to complete due to the steps involved in sharing the same data types between network infrastructure which is often very different from one another (due to language planning and structural variability)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dollar-Cost Averaging (DCA)"
            description="Dollar-cost averaging (DCA) is an investment strategy in which the investor divides his investment capital into buying assets from time to time to get the best total entry value. DCA is often regarded as one of the most sophisticated crypto investment strategies due to the natural flexibility of the industry. DCA helps investors avoid the purchase of large amounts that have an incorrect timing. An example of DCA would be an investor who buys $ 100 USD of bitcoin (BTC) each week for a long time, regardless of whether the BTC price occurs at the time of purchase."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Domain Name Service (DNS)"
            description="Domain Name Service (DNS) is a nationally distributed system, a system for naming network infrastructure, computers, and other similar resources connected to the Internet or a private network. DNS is often used to translate the most common domain names into numerical IP addresses that are used to locate and identify specific computer devices and services within their network protocols. By providing a globally distributed list of domain names, the Domain Name system has been an integral part of Internet infrastructure since 1985."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="DOT (Polkadot)"
            description="DOT is the native cryptocurrency of the Polkadot blockchain protocol and its basic ecosystem. It is used to help maintain the safety and compliance of Polkadot Relay Chain and other components within the network (parachains, aggregators, fishermen, and operators). DOT can be tied to parachains, secured with whips, and used for other purposes. It is usually awarded to users who have participated in DOT to use the verification site. DOT assists Polkadot's ecosystem to maintain a fair and transparent management framework through authentication and other means."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Double-Spend Problem"
            description="The problem of double spending refers to the significant risk of digital currency where the same currency can be copied and used more than once. In fiat currency, the operator transfers tangible money to the recipient, who can use it again. With digital currency, blockchain programs are designed to prevent digital tokens, such as bitcoin, from being sent to more than one address. The risk of double investing in cryptocurrencies is reduced by various means that ensure the authenticity of all transactions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dow Jones Industrial Average (DJIA)"
            description="DJIA, or Dow, is a widely used indicator and barometer of stock market performance comprising 30 shares from multiple sectors. Dow-listed companies are known as blue chip stocks because of their importance to the entire United States economy. DJIA is calculated by adding stock prices and dividing the final amount by the Dow divider."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Drawdown"
            description="Depreciation is a metaphor used to quantify the decline of financial markets over a period of time. Drawdowns use a high-throughput approach. For example, if a particular market or stock drops from the original $ 100,000 to $ 60,000, and then goes back above the original position, the decline could be 40%. Market downtime is important to consider when the seller or fund manager is carrying a large amount of assets in an investment portfolio or fund. Gravity is usually not considered a loss, but simply represents the movement of an asset from its peak (up) to the hole (bottom)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Due diligence"
            description="In finance, due diligence refers to the evaluation of financial records that take place prior to the performance of the proposed activity with another party. Careful consideration refers to research, auditing, or review that has been done to verify the accuracy of the information being considered. The name originated in the US with the Securities Act of 1933 which made mortgage sellers and traders liable to fully disclose important information about securities they were selling at risk of criminal prosecution. Now, it is a common process in business trading and systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dust"
            description="Dust is a very small part of the cryptocurrency or token of between one hundred and a few hundred Satoshi, which is a small separable unit of bitcoin. Dust is a residual product of trading and cooperating with cryptocurrensets, and it represents small currency systems that retain a small amount of money."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dust Limit"
            description="Any address or output of unused transactions (UTXO) with a lower balance than the current fee charged for operating that blockchain is less than the so-called dust limit. The dust limit varies according to market strength in the network and varies between different cryptocurrency networks, but funds are issued out of service unless the balance is reimbursed in excess of the transaction fee sufficient for the transaction or withdrawal."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dust attack"
            description="Dust attack is an attack when a cryptocurrency value track, called dust, is sent to thousands - sometimes even hundreds of thousands - of wallet addresses. This attack is used to trace these addresses in the hope of 'not disclosing' or retrieving their names. Many of these dust can also be used as a stress test, in which a large amount of dust is sent in a short time to test the output, or bandwidth, of a network. Some say that this kidnapping is also a way to get spam on the network, by sending large amounts of useless work that closes and delays too much."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dutch East India Company"
            description="The Dutch East India Company was a large trading company founded in the early 17th century to trade spices with India and, later, with Southeast Asia. The company is considered to be the first modern organization due to its complex structure and function. It was also the first publicly owned company and its shares were sold on the Amsterdam Exchange. At its peak, the company is estimated to be worth $ 7.9 billion while calculating inflation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Dynamically typed Program Language"
            description="Powerfully typed editing languages ​​are the only languages ​​that test the code after a successful submission of the program. Strongly typed languages ​​are generally considered to be slow and complex enough to be written compared to mathematically typed languages. Syntax (the way a code is formulated and compiled to form a large sequence) of languages ​​is usually categorized as duplicate or mathematically typed. Evaluation of the type of dynamically typed languages ​​usually occurs during the operational phase (start time) of the system, in contrast to the statistically typed languages ​​that are affected during the integration phase (integration period)."
          />
        </Col>
      </Row>
    </section>
  );
}

export default DSection
