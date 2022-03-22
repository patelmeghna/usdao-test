import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

function ESection() {
  const eSectionRef = useNav("E");

  return (
    <section ref={eSectionRef} id="eSectionContent">
      <div className="titleWrap">
        <p className="title-line">E</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="E-business"
            description="E-business, or electronics business, is any business model that provides products and services to its customers online. The electronics business is run by large corporations, governments, non-profit organizations, individual citizens, and many other entities. E-commerce is one of the most popular forms of e-commerce, but it should not be confused with the common e-business division. E-commerce is characterized by buying and selling products and services online through an electronic platform like Amazon, but only a small fraction of the actual value of goods, services, and information traded online."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="E-commerce"
            description="E-commerce, or electronic commerce, is a business model that allows users to buy and sell products and services online. E-commerce is usually divided into four main categories: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer (C2C), and consumer-to-business (C2B). Almost any product you think of or service is available through an e-commerce website that includes books, music, electronics, financial resources, and more. E-commerce is often used instead of regular brick and mortar stores because the cost is low, and customer access is likely to be very high. Amazon, eBay, and Alibaba are some of the most popular and widely used ecommerce platforms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="E-Signature"
            description="An e-signature, or electronic signature, is a signature signed in an electronic document or form. Electronic signatures are legal in many places to replace handwritten signatures."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Earning Per Share (EPS)"
            description="Profit per share (EPS) is a method used in the basic analysis of a company's profits. Basic analysis involves evaluating a company's stock rather than earning a living. Profits and stocks combined can provide more insight into a company’s profits. EPS tells us how much profit the company has allocated to each share of the stock. EPS is calculated as revenue (after preferred stock shares) divided by the number of remaining shares."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Economic X Node (XN) and Economic Node (EN) (VeChain)"
            description="Economic X Nodes (XNs) and Economic Nodes (ENs) are two types of nodes created and used by the VeChain Foundation. They encourage coin owners to run a node to earn VET tokens prizes, and help maintain network consistency alongside Authority Masternodes. There are four different XN classes depending on the VET value set, while ENs have three different categories. XNs and ENs are managed through smart VeChainThor Node contracts and integrate with the rest of the blockchain system. As of 2020, no new XNs could be created and existing XN operators are considered long-term supporters of the project."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ecosystem Expansion Project (EEP) (ICON Network)"
            description="The Ecosystem Expansion Project (EEP) is an ICON-related project or activity that contributes to the overall growth and expansion of the ICON ecosystem. EEPs play a role in determining the ICON Network governance system, as well as P-Reps and their Decentralized Application Booster (DBP) program. All ICONists can nominate and implement EEPs and receive prizes while other ICONists send a certain amount of prize to those who nominate EEPs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Edge Node (Theta Network)"
            description="Theta Network Edge Nodes is hosted by members of the Theta community. Launched at the launch of Theta 2.0 mainnet, Edge Nodes allows users to transfer codes and transfer video content and share multiple bandwidth / processing power across the network without the need for centralized servers. This Edge Node network forms the core community-driven platform of Theta's Edgecast platform, supporting dapps network distribution for peer-to-peer. As of early 2021, there were more than 7,000 Edge Nodes worldwide. Edge Node operators receive the THET token rewards in exchange for contributing to Theta's global content sharing system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Edgecast (Theta Network)"
            description="Edgecast is a Theta Network (dApp) application for recording and distributing content. Allows Theta users to receive Theta character rewards for sharing videos with other users. As a result, Theta has developed a user-driven way to empower its growing ecosystem of entertainment-focused services - many of which focus on sports, music, TV, film, education, and business conference."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Effective Proof Stack (EPoS) (Harmony)"
            description="Strategic Active Proof (EPoS) is a Harmony patent (PoS) program designed to increase network security and distribution. EPoS allows thousands of guarantors to participate fairly and equitably, reducing the likelihood of a single location. Harmony’s EPoS staking framework supports award-winning and merger comprising and ensures 100% network uptime by both duplicates that double-sign jobs and penalize selected but not available locations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EIP-1559"
            description="EIP-1599 is an Ethereum Development Advice designed to make network transactions more efficient by using a mixed payment system and tips. In the proposal, the base fee is defined as an algorithmically determined price for all Ethereum users to pay in order to complete the transaction. Tips are defined as payments that you choose that users can combine to speed up their payments. When used, EIP-1559 can significantly reduce transaction costs and improve the overall Ethereum (UX) user experience."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="E-tailing"
            description="E-tailing the sale of goods and services online. There are many types of e-tailing that include business-to-business (B2B) and business-to-consumer (B2C) products and services. E-tailing requires companies to tailor their business models in order to capture online sales, which may include building new distribution channels and new technological infrastructure."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Elliptic Curve Digital Signature Algorithm (ECDSA)"
            description="The Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographic signature algorithm used by Bitcoin and several other highly regarded cryptocurrencies, wallets, and exchanges. By using private keys, public keys, and cryptographic signatures, the algorithm ensures that only private key owners can send bitcoin transactions. The tBTC system also uses ECDSA cryptography to create bitcoin tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Elrond in Gold (EGLD)"
            description="EGLD coin is a cryptographic asset available at Elrond Network. It helps to allow the Elrond Ecosystem to operate more efficiently through its payment methods, administration, and developer payments."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Elrond Standard Digital Token (ESDT)"
            description="The Elrond Standard Digital Token (ESDT) is similar to the standard ERC-20 token employed by the Ethereum network. ESDTs enable real estate ownership and organization with minimal transfer costs, allowing Elrond infrastructure to build a strong variety of DeFi products. Elrond Standard Digital tokens are designed to facilitate the transfer of inexpensive tokens that allow tokens to be moved from one account to another without the use of a smart contract. Because of their traditional support within the protocol, transactions sent or received by ESDTs do not require the use of the Elrond Virtual Machine (EVM) - which makes it easier to use the ecosystem token that works in the same way as the Elrond at Gold. (eGLD)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Elrond Virtual Machine"
            description="Elrond Virtual Machine (VM) or Arwen WASM Virtual Machine is a government-based VM engine designed to help efficiently and create smart contracts on the Elrond blockchain and external blockchains associated with the Elrond Network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Email Spoofing"
            description="Email spoofing is the act of creating and sending email messages with a fake sender address, usually with the intent of endangering the recipient. The most common ways to do this include copying the organization's descriptive content, such as certain phrases, fonts, logos, or color schemes used by the official website or service provider to make the fake message look real. Since many email protocols do not have verification methods, email fraud continues to be the most widely used form of online fraud."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Encryption"
            description="Encryption refers to technologies that protect data and systems, making it more difficult for hackers to gain unauthorized access to information, or to interfere with networks and services. In modern cryptography, encryption often involves the transformation of what is known as “blank text” into a “secret code.” Coding is a form of coding for only authorized people to understand."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Enhance Due Diligence (EDD)"
            description="Enhance Due Diligence (EDD) is a Know Your Customer (KYC) system that provides the highest level of consideration for potential business partnerships and highlights the potential risks of Customer Due Diligence (CDD) alone. It is designed for use with customers who are considered to be at high risk through the KYC process. Related risk factors may include high performance, high customer total value, location, political exposure, and more."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Engine (ENJ)"
            description="Enjin is a platform that enables developers to create and manage games on the blockchain. Enjin hopes to use blockchain technology to reduce high prices and common fraud through the transfer of tangible assets. ENJ token ERC-20 used to pay for digital goods and services on the Enjin platform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Enterprise Adoption"
            description="Business acceptance means the ability of a particular service or type of technology to be used by a large company, company, government, Non-Governmental Organization (NGO), or industry. The business acceptance of any technology usually means that it is widely used to solve many problems in a variety of applications in the real world. It is the hope of the blockchain community that blockchain technology will ultimately achieve business acceptance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Enterprise Blockchain"
            description="Enterprise blockchain is a term used to describe blockchain programs that are commonly used by large companies for record keeping, data storage, and many other activities and types of business. Effective blockchain plans for a long-term business must have three key components - measurement, distribution, and security - in order to be viable in real-world business use. Business blockchains are often systems that are able to measure what is needed to process what is being done quickly due to the large amount of data that is regularly sent and received by large companies. Business blockchain plans can be private, public, or mixed programs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Enterprise Ethereum Alliance (EEA)"
            description="Established in 2017, the Enterprise Ethereum Alliance (EEA) is a member-led industry organization designed to work with a wide range of businesses, academics, Fortune 500 companies, and technology professionals to advance the building and widespread adoption of Ethereum as a business - space technology platform. The EEA helps facilitate the implementation of the Ethereum blockchain for businesses through its critical, confidential, and collaborative infrastructure to use the real world. The Ethereum Enterprise Alliance also hosts member-based meetings to share access to educational materials, resources, and media that create an enabling environment for Ethereum business acceptance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Enya"
            description="Enya is a company that develops blockchain-based measurement solutions and infrastructure. Established with partners and alumni students from Stanford, Enya has been involved in many open source and blockchain projects, including the Ethereum-based Layer-2 solutions Boba Network (formerly OMGX) and the OMG Foundation (formerly OMG Network and OmiseGo)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOS"
            description="EOS Network is a smart contract and application development platform (dApp). Unlike many other blockchain networks, EOS does not charge a direct transaction fee per transaction. Instead, users who wish to create or use dApp should get enough network capacity by holding EOS coins. EOS is a traditional currency in the EOS network, used to vote and reach the network capacity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOS 1.0"
            description="EOS 1.0 was the first full version of the EOS blockchain network released on June 1st, 2018. After several improvements it replaced the highly developed EOS 2.0 launched on January 10, 2020."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOS 2.0"
            description="EOS 2.0 was launched on January 10, 2020. It is designed to improve the performance and security of its predecessor (EOS 1.0), as well as to provide new developer tools to facilitate construction on the EOS.IO platform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOS Virtual Machine (EOS VM)"
            description="EOS Virtual Machine (EOS VM) is a very effective blockchain translator WebAssembly (WASM) used by EOS blockchain. It is an engine that uses three different interpreters to make it possible to integrate, correct errors, and develop smart contracts. Its main purpose is to improve the performance and performance of smart contracts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOSIO Contract Development Toolkit (EOSIO.CDT)"
            description="The EOSIO Contract Development Toolkit (EOS.CDT) is a WASM specialized tool and set of tools designed to build, create, modify, and implement smart contracts within the EOSIO ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOSIO RPC Application Programming Interface (API)"
            description="The EOSIO RPC application programming interface (API) is a Remote Procedure Call (RPC) API used to connect to the EOSIO blockchain. An RPC occurs when a computer uses a program that activates the process using a different address location than another shared network or computer. This is done by coding and the use of a local process call without the developer providing details of the remote operation by displaying across the area."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="EOSIO Software Development Kit (SDK)"
            description="The EOSIO Software Development Kit (SDK) is an SDK designed to provide tools to make application development easier for EOS. The EOSIO SDK is built on both Java (Android) and Swift (iOS) programming languages. Allows software developers to create EOS-specific applications that can be built for Android and iOS applications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Epoch"
            description="An epoch is a division of time on the Cardano blockchain protocol. Cardano makes use of a proprietary Proof-of-Stake (PoS) consensus algorithm called Ouroboros Praos, which divides the blockchain into time-frames called epochs that last approximately 5 days. Epochs are in turn subdivided into smaller increments called slots that last about 20 seconds. There are currently a total of 432,000 slots (5 days) in each epoch. In a specific slot, zero or more block producing nodes may be selected to be the slot leader. Typically, one node is nominated every 20 seconds, totalling over 20,000 slot leaders per epoch. When randomly selected for the role, slot leaders produce blocks, of which one will be added to the blockchain, while other block candidates will be discarded."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Equihash"
            description="Equihash is an architecturally sound Proof-of-Work (PoW) cryptocurrency mining — or hashing — algorithm. The framework is designed to be application-specific integrated circuit (ASIC)-resistant and highly scalable. It is also designed to remove the centralization of large corporations operating cryptocurrency mining hardware. The algorithm was created by Alex Biryukov, Dmitry Khovratovich, and other cryptographers at the University of Luxembourg prior to its mainstream introduction in 2016."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Equity Stake (Equity)"
            description="An equity stake is classified as the percentage of a business owned by a specific individual or entity — for example as shares of stock in a company. In the blockchain industry, equity is commonly held by the founder of a company or blockchain project, in exchange for helping create, design, fund, and build the project since its inception."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Erasure Encoding"
            description="Erasure encoding is used in computer science to separate data into encoded fragments (data blocks) so they can be sent securely to another location in the system. Erasure encoding often allows data to be expanded and encoded along with unwanted data so it can be stored in different locations to preserve the most important information. In the event that a database is damaged or corrupted, erasure encoding can help allow encoded fragments of data to be saved so they are not permanently lost."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ERC-1155 Tokenization Standard"
            description="ERC-1155 is an Ethereum-based token standard that incorporates non-fungible token (NFT) technology. The ERC-1155 standard allows for a single smart contract to manage multiple token types, including both fungible, semi-fungible, and non-fungible tokens. It is purported as the new multi-token standard. Other token standards like ERC-20 and ERC-721 require a separate contract to be deployed for each token type or collection, which results in excessive and redundant code on the Ethereum blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ERC-20 Tokenization Standard"
            description="The ERC-20 standard outlines the common set of criteria and technical specifications an Ethereum token must follow to function optimally and interoperably on the Ethereum blockchain. It enables the creation of tokenized assets that can be bought, sold, and exchanged alongside cryptocurrencies like bitcoin (BTC) and ether (ETH). The ERC-20 standard utilizes smart contracts to issue tokens that can be exchanged on the Ethereum network as well as used interoperably between Ethereum-based dApps. It is the most commonly used Ethereum token standard, and has been used as a framework to create many notable digital assets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ERC-223 Tokenization Standard"
            description="ERC-223 is a tokenization standard that was proposed in 2017. It was designed to address some of the inefficiencies attributed to the ERC-20 Ethereum tokenization standard by developers building the Ethereum Classic blockchain, but for various reasons has not been implemented on a far-reaching scale. Notable for ERC-223 is a feature set designed to help prevent token losses that can occur with transfers of ERC-20 tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ERC-721 Tokenization Standard"
            description="ERC-721 is a technical standard for the implementation of non-fungible tokens (NFTs) on the Ethereum blockchain which outlines and provides rules that all NFTs must follow. NFTs that adhere to the ERC-721 standard are interoperable with each other and the wider Ethereum ecosystem. The ERC-721 standard produces provably rare assets, and is widely used for digital collectibles, games, art, and luxury items."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ERC-777 Tokenization Standard"
            description="Similar to ERC-20, ERC-777 is a tokenization standard for fungible tokens, and is designed to enable more complex interactions for token trading. It helps remove confusion around decimals, minting, and burning — and it employs a distinctly powerful feature known as a hook. A hook is a function in an informatic computer-based contract that is initiated when tokens are sent to it, and which simplifies how accounts and contracts interact while receiving tokens. Furthermore, because of this fact, ERC-777 tokens are much less likely to get ‘stuck’ in a contract (which has historically been an issue with ERC-20 tokens)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Escrow"
            description="An escrow is a contractual arrangement in which an intermediary receives and disburses funds or assets on behalf of the primary transacting parties based on predetermined conditions agreed to by the transacting parties. Traditionally, the intermediary is a trusted third-party arbitrator, but with the advent of blockchain technology, this escrow service can now be automated using algorithmically-enforced rules based on smart contracts. The automation of escrow holds massive potential implications across a broad range of industries."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ESports"
            description="Electronic games, or Esports, are a type of competition that uses video games. Esports is often composed of organized multi-player video games, usually among professional Esports participants competing in a team-based format. Normal multiplayer mode has been around console-based games for decades, but it was not until the late 2000s that the birth of competitive live streaming competitions became popular. The most common types of Esports video games are multiplayer online battlefield (MOBA), first person shooter (FPS), card, combat, royal war, and real-time strategy games (RTS)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethash"
            description="Ethash is a special proof-of-job (PoW) hashing algorithm employed by the Ethereum blockchain. Ethash is the newest version of Dagger-Hashimoto's Ethereum mining algorithm, and is seen as a fast-paced version of the application-specific integrated circuit (ASIC), while at the same time introducing a graphics processing unit (GPU) compatible with mining and light. suitable for clients unlike the previous one. Because Ethash is based on PoW, there is a good chance that it will no longer be used when Ethereum 2.0 introduces its Stake-proof (PoS) proof-of-concept."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ether (ETH)"
            description="Ether (ETH) is a traditional cryptocurrency of the Ethereum blockchain, and plays a key role in the Ethereum ecosystem. Transactions in the Ethereum blockchain are paid for with ETH micropayments called gas, while ether is also easy to interact with and between smart contracts across the Ethereum platform and ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum"
            description="Ethereum was launched in 2015 as a global blockchain-based computer to serve as the basis for an ecosystem of interoperable, decentralized applications (dApps) empowered by the token economy and automated smart contracts. The goods and applications designed in Ethereum are built with intelligent automated contracts that eliminate the need for a central authority or arbitrator. The network is promoted by its native cryptocurrency ether (ETH), which is used to pay for operational costs on the network. An open, structured, confidential, and research-resistant source, Ethereum forms the backbone of a fragmented internet, which has already undergone significant changes such as Initial Coin Offerings (ICOs), stablecoins, and extended financial services (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum 2.0"
            description="Ethereum 2.0 refers to an important set of updates to the Ethereum blockchain which aims to significantly improve its scalability and widespread use. The multi-stage development package is officially named Serenity. Includes switch from Proof-of-Work (PoW) algorithm-based compliant algorithm to Proof-of-Stake (PoS) algorithm compliant algorithm based on validator staking to keep the network moving. In implementing the Proof of Stake and initiating the introduction of separate shard chains, Ethereum 2.0 is expected to perform much better than its previous duplicate, achieving the transaction scale required to become a global supercomputer."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum deposit contract"
            description="The deposit contract as associated with the change from Ethereum 1.0 to Ethereum 2.0 is a smart contract in Ethereum 1.0 that allows the user to create a validator node in the Ethereum network - a node that contributes to network sync and creates block / authentication - by. incorporates 32 ether (ETH) into the node. The Ethereum 2.0 deposit contract came into effect on November 4, 2020 as users around the world rushed to install their 32 ETH before the November 24 deadline before the proposed launch of Ethereum 2.0 on December 1, 2020. This launch required at least 16,384 users individually to fulfill the obligation of 32 ETH."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum Dominance (ETHD)"
            description="Ethereum dominance (ETHD) is a metaphor that measures the limit of the ether market (ETH) - the world's second largest cryptocurrency - in relation to the market value of all other cryptocurrencies combined. ETHD is often seen as related to the performance of bitcoin (BTC) and other cryptocurrencies, or altcoins. In general, as the ETHD grows, the amount of other hidden funds rises to what is sometimes called the 'alt period'."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum Improvement Proposal (EIP)"
            description="Ethereum Improvement Proposal (EIP) is a method used by the Ethereum network to propose new features and processes that help determine the direction of the Ethereum network. EIPs are an integral part of Ethereum's governance system and serve as a true source of Ethereum community. They are often used to supplement the technical specifications of the Ethereum network, and contain the development and standards discussed by the Ethereum development community and the Ethereum Foundation. EIPs go through a rigorous completion and research process to determine whether they are most beneficial to the Ethereum long-term project."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum Application for Comment (ERC)"
            description="The Ethereum Note Application (ERC) is a set of technical documents used by the smart contract developers of Ethereum that define a special set of rules for the implementation of tokens applicable to the Ethereum blockchain. The standard ERC token specification is used as a way to create token interactions within the Ethereum network that allows users to send and receive all types of tokens between Ethereum addresses. In addition, there are several different ERC token-making standards, including ERC-1155 and ERC-721, most commonly the ERC-20 token standard."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethereum switch"
            description="Ethereum transaction code or set of commands that apply to a single Ethereum block. They transition from simple token transfers to intricate zero-proof information and intelligent contracts. The transaction is permanently recorded in the Ethereum blockchain database at the completion of all blocks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ethermint"
            description="Ethermint is a scalable Proof-of-Stake (PoS) blockchain, high-throughput that demonstrates comprehensive interoperability and compatibility with the Ethereum network. The platform is built using the Cosmos (SDK) software development kit, which works on the Tendermint Core compatible engine. The Ethermint program is designed to help developers build Ethereum-compatible applications within a Tendermint-based environment. With the Cosmos SDK, the platform uses the Inter Blockchain Communication (IBC) protocol to facilitate the exchange of token assets and other types of data between the Cosmos and Ethereum ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="European Central Bank (ECB)"
            description="The European Central Bank (ECB) is the central bank of the Eurozone, a financial union of 19 member states of the European Union (EU) that uses the Euro (€) as a major regional currency. The ECB is one of the world's largest banks, and it operates as one of the seven largest EU infrastructure. The ECB's main objective is to maintain price stability, regulatory guarantee, sound monetary policy, and a healthy European financial system related to banks, investments, insurance, securities, and the EUs' financial sector as a whole. The ECB is responsible for authorizing the issuance of Euro to EU member states."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="European Economic Area (EEA)"
            description="The European Economic Area (EEA), established in January 1994, is a European hub that serves as an extension of the European Union (EU) financial market. The EEA is made up of EU member states and three of the four member states of the European Free Trade Association (EFTA) - Norway, Iceland, and Liechtenstein, Switzerland refuse to enter. The EEA was established to create an open framework for law enforcement in all participating countries relating to the supply of goods, services, money, and citizens (known worldwide as four states)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trading"
            description="A cryptocurrency is a type of digital currency exchange where digital assets can be bought, sold, and traded in fiat currency or other digital assets. They are similar to a common trade in which traditional stocks are bought and sold in the form of activities and orders that users can perform. Cryptocurrency trading has changed dramatically since the initial duplication (often uncontrolled) to provide additional security and accessibility and to ensure legal compliance with the areas in which they operate. As the cryptocurrency space continues to grow, more and more trades have emerged that offer competitive trading currencies, exchange rates, and easy-to-use features as they compete for more users and trading volume."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exchange Character (Exchange Token)"
            description="Currency exchange is a digital asset introduced in crypto trading through the Initial Exchange Offering (IEO), a fundraising method for crypto companies such as the Initial Coin Offering (ICO). There are two different types of currency exchanges: those introduced by the exchange itself as a traditional coin or platform symbol, and those introduced by other crypto companies using token delivery infrastructure and trading services. These exchange assets can be tokens (digital assets enabled by an existing blockchain) or coins (digital assets operating in their blockchain)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exchange-Traded Commodity (ETC)"
            description="Exchange-Traded Commodity (ETC) is usually supported by a written note comprising of the underlying asset purchased at the ETC. As a result, Exchange-Traded Commodities are often regarded as a cross between the Exchange-Traded Fund (ETF) and the Exchange-Traded Note (ETN). This means that ETCs have other potential tax benefits and cost savings for ETNs, while also providing a degree of risk reduction in the event that the error is recorded."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exchange-Traded Fund (ETF)"
            description="An exchange-traded fund (ETF) is a financial product that is tied to a number of other financial instruments. This property gives investors a way to get exposure to assets or bulk assets without having to buy or own property directly. ETFs can be made up of all types of assets including stocks, commodities, and bonds. A digital asset ETF, for example, can allow investors to invest in a digital asset without the need to own the asset itself or collaborate on crypto currency exchanges."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exchange-Traded Note (ETN)"
            description="The Exchange-Traded Note (ETN) is a formal financial product issued as a high credit note, and is different from the Exchange-Traded Funds (ETFs) which represent a direct portion of the underlying asset. In other words, ETNs are not secure and are like bonds. ETNs were developed in 2006 by Barclays Bank to make it easier for ordinary investors to invest in old-fashioned assets, which are hard to come by. Because ETNs do not involve direct buying and selling of assets as ETFs, investor taxes do not result in fund sales, which can be beneficial to long-term investors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exchange-Traded Product (ETP)"
            description="A commodity trading (ETP) is a type of protection that follows the basic protection, index, or asset of a financial instrument, and can be purchased in exchange. ETPs trade on the National Stock Exchange (NSE) during the day. The first crypto ETP went on sale in 2019."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Execution Price"
            description="Consumption value is the amount at which the purchase or sale of a security order is completed, or executed. As prices fluctuate in a volatile market, what is offered to trade as an order price may not always be the same as the retail price of the trade. A strong price has a very small decrease or a change in price from the order price and is a sign of a healthy market and commodity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exit Scam"
            description="In the case of a blockchain, an exit scam is a process in which a company creates a fake business model, white paper, website, and other information to be used as a reliable blockchain business, and gives investors a way to participate in the various sponsorship rounds. tokens represent equity in the project, and eventually sell a large internal labor market organized by the founding members of the project who continue to steal investors' money and run."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exploit kit"
            description="Exploit kits are automated programs that contain a code of risk detection and installation of malicious software. They are the kind of tool that cybercriminals use to attack software vulnerabilities. Once they have infected the victim's machine, they compile the device information, search for the risk, determine the appropriate or most effective exploitation, and then use the exploit on behalf of the user of the exploit kit."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Exponential Decay Model"
            description="The exponential decay model is a cryptoeconomic minting machine used by many blockchain projects to reduce inflation. The blockchains following the model generate high value for the traditional currency at the time of launch and the early stages of the network, greatly decreasing over time, and the increasing difficulty of mining blockade in broadcasting. The model has been criticized for allowing inequality in the promotion of miners."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Extended Private Key (XPRIV)"
            description="Extended encryption key (XPRIV) is one of the main key pairs (another extended public key) used in hierarchical-deterministic wallets. A hierarchical-deterministic wallet is a crypto wallet that generates new pairs of cryptographic keys or addresses from a key key each time a cash is received."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Extended Public Key (XPUB)"
            description="Extended public key (XPUB) is one half of the main key pair (another extended key key) used in hierarchical-deterministic wallets. A hierarchical-deterministic wallet is a crypto wallet that generates new pairs of cryptographic keys or addresses from a key key each time a cash is received."
          />
        </Col>
      </Row>
    </section>
  );
}

export default ESection