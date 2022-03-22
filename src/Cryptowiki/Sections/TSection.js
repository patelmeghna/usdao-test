import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const TSection = () => {
  const tSectionRef = useNav("T");

  return (
    <section ref={tSectionRef} id="tSectionContent">
      <div className="titleWrap">
        <p className="title-line">T</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="T-Address (Zcash)"
            description="In the Zcash blockchain, t-address is a public address that provides the same light levels as a standard Bitcoin (BTC) address. In contrast, z-address is a fully secretive address that uses cryptography for anonymous information to protect address transactions and balances. Zcash dual address setup was designed to give users the power to decide whether to make anonymous or public appearances, while transactions can be freely sent to all types of addresses."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tailgating (or Piggybacking)"
            description="Tailgating attacks, also known as 'piggybacking', are a type of data breach that involves an unauthorized person following an authorized person to a protected building or area. In most cases, the perpetrator of a series of attacks attempts to access sensitive information or performs another brutal act once on the premises. While these attacks are low-tech and seemingly straightforward, they are a widespread security breach with potentially catastrophic consequences."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tamper-proof"
            description="Tamper-proof is a feature of blockchain network capabilities and consistency and resistance to research. Blockchains are designed to be flexible and easy to use in order to maintain the integrity and transparency of the system in an unobtrusive manner without the need for central authorities. Once the data (e.g., transaction history) has been uploaded to the blockchain, it must be unchanged so that malicious characters can alter the blockchain archive history to steal cryptocurrency or modify network records."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tangible property"
            description="A tangible property is any property that can be physically touched. Examples of tangible assets include a house, a car, or a computer, among other things. Related to blockchain, tangible assets include data capture centers, cryptocurrency mining rigs, or mobile phones that use cryptocurrency wallet. The separation of cryptocurrencies and non-affiliated tokens (NFTs) is unclear because they can be stored in a digital wallet or crypto exchange and have both tangible and intangible features."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tangle (IOTA)"
            description="IOTA Tangle is the name given to the IOTA Directed Acyclic Graph (DAG) distributed ledger protocol. Tangle is specially designed to be used for a business model based on IOTA's Internet of Things (IoT) and is based on IOTA in Germany. The protocol was developed to allow the use of inexpensive small-scale operations designed to accommodate the growing global ecosystem of IoT devices, which include smart electronics, smart homes, smart cars, accessories, and much more."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tardigrade (Storj)"
            description="Storj is moving closer to its spatial distribution system by integrating its product into both supply and market needs. Tardigrade is an organization powered by Storj Labs focused on business needs. To make it as easy as possible for anyone to purchase land-allocated storage in Storj, Tardigrade was established to handle all issues related to stadium customers, engineers, and partnerships. Storj, on the other hand, has been assigned to manage depot operators, tokenomics, and the community."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="tBTC"
            description="TBTC is a separate and unreliable system of wrapping bitcoin (BTC) in the Ethereum network developed by Cross-Chain Group. Each tBTC token is an ERC-20 token used in BTC in a 1: 1 ratio, with the total number of offers paid for all bitcoin transactions. TBTC allows users to enter and deposit bitcoin tokens on the Ethereum network without the middle person, thus allowing users to integrate Bitcoin into the local financial system (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TBTC Deposit Token (TDT)"
            description="The TBTC Deposit Token (TDT) is a non-affirmative (NFT) token used in the tBTC method as a means of exchange between tBTC and bitcoin (BTC) tokens as a threat occurs. New TDT is generated whenever a user requests a deposit to convert BTC into tBTC, and is burned whenever tBTC trades BTC."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TCAP Index Token (Total Market Money)"
            description="TCAP (Market Income) is a smart Ethereum contract that marks the market value of all cryptocurrencies and tokens listed in a specific crypto data provider."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Technical Analysis (TA)"
            description="Technical Analysis (TA) is a chart analysis method used by traders and investors by analyzing specific patterns on charts such as price and trading volume. There are hundreds of technical indicators that can be used in TA. Some of the most popular indicators include relative strength index (RSI), moving average convergence divergence (MACD), and Bollinger Bands. Technical analysts are trying to extend future price movements from a variety of historical data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Technical Index"
            description="A technical indicator is a specific mathematical signal or pattern based on historical value, volume, and / or the open interest of a collateral or contract. Technical indicators are often used by traders to predict future price movements, and they form an important part of technical analysis (TA)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Technical Resistance Level"
            description="Within the context of technical analysis, resistance level is a specific price point where stocks or securities have shown difficulty in maintaining or passing in the past. As a result, when the price of protection reaches or approaches a set resistance level again, the price movement tends to stop or decline. Different traders use different types of technical analysis and different times to determine certain resistance levels. In many cases, commonly seen technical indicators that suggest that the stock is close to its resistance level may trigger a fulfilling prophecy when traders try to drive the market by trading security in anticipation of a change in trend."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Technical Support Level"
            description="In technical analysis, the support level is a certain level of stock or collateral that fails to break below. Support levels are often created when most buyers buy an item at or near the same price as it has in the past. Traders often visualize support levels using various technical indicators (such as moving averages) or by drawing trend lines on a chart to connect the lowest for a period of time. The opposite is the level of support for the resistance level, and both should be considered when doing risk management properly while trading and investing."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Telegram"
            description="Telegram is a free cross-platform (IM) free platform launched for the first time in 2013. The platform also offers voice over Internet Protocol (VOIP) streaming, file sharing, and other resources. Telegraph is designed for Android, iOS, Windows, Mac, and Linux. It is often used in the blockchain industry because of its ability to create project-based business pages on various blockchain platforms that allow prospective users to ask questions about ongoing blockchain project development. The Telegraph has at times become aggressive because of its extravagant, surrealistic behavior and cruel behavior."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tendermint"
            description="Tendermint is a company founded in 2014 by computer scientist Jae Kwon. Tendermint is the creator of the proof-of-Stake (PoS) Tendermint Core Byzantine Fault Tolerant (BFT) compact that was originally developed for the Cosmos Hub blockchain protocol. Tendermint acts as a gateway to the Cosmos blockchain ecosystem. The company has created the Application Blockchain Interface (ABCI), which is designed to enable duplicate dupps written in various programming languages. They also developed an Inter-Blockchain Communication (IBC) protocol, an interactive protocol designed to improve data transfer security and value exchange between different blockchain networks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tendermint Core Byzantine Fault Tolerance (BFT)"
            description="Tendermint Core Byzantine Fault Tolerance (BFT) agreement is a language consensus designed by the Tendermint team to be a comprehensive, secure, and dedicated version of Practical Byzantine Fault Tolerance (pBFT), State Machine Replication (SMR), and Depth Limit Search (DLS) algorithms. As a result, Tendermint Core supports state-of-the-art equipment written in any programming language, enables faster completion rates, and can tolerate a third of existing nodes that fail automatically before network performance is severely affected. This harmonious engine was used to build many notable blockchains, including the Crypto.com blockchain platform and the Binance decentralized exchange (DEX) protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Terraswap"
            description="Terraswap is an automated market maker (AMM) created by the Terra blockchain project. It calls itself 'a dedicated protocol for seamless access to the use of assets in Terra'. The system allows users to exchange and exchange native Terra and CW20 tokens (typically CosmWasm token) directly from their Terra Station wallet using a web extension. All fierra-based stablecoins based on fiat, Mirror Protocol-based Assets, and other Terra related assets can be traded and traded on Terraswap."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TerraUSD (UST)"
            description="TerraUSD (UST) is one of the many cryptographic-based stablecoins used by the Terra blockchain ecosystem to represent a fixed value of 1 to 1 in fiat currency (in this case, the US dollar). TerraUSD, such as TerraKRW, TerraEUR, TerraJPY, TerraSDR and other stable currencies developed by Terra, uses the Terra blockchain ecosystem to facilitate the unauthorized, open, blockchain payment platform for the Terra ecommerce payment platform and exchange platform (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Testnet"
            description="Testnet is a sandbox or blockchain network test site that is usually made available for development purposes prior to the launch of the mainnet. Testnet is often used to ensure that the blockchain system is adequately protected and operates in accordance with its intended design. Once testnet has been tested and tested for pressure, engineers often fix bugs or add new features to the project mainnet before launch. Testnet is generally not intended to be directly converted to mainnet, so they are often unable to stream or verify network sales in the same way as a mainnet system can."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tether (USDT)"
            description="Tether (USDT) is the world's largest stablecoin by market capitalization and is paid at a ratio of 1: 1 in US dollars. Tether's USDT stablecoin is owned and operated by Tether Limited, the parent company of Bitfinex crypto currency exchange. In addition to USDT, Tether Limited also offers customers a stablecoin based on gold called Tether Gold (XAUT) which mimics the current price of gold using a 1: 1 ratio. As of September 2021, USDT stablecoin had a market capitalization of approximately $ 65.5 billion USD and a circular supply of 65.5 billion USDT tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Text-based User Interface (TUI)"
            description="On a computer, the Text-based user interface (TUI) is a user interface (UI) that uses text characters, symbols, and colors while working on a character-based terminal. TUIs were developed as the first way to interact with human computers before the widespread development of graphical user interfaces (GUIs). Similar to GUIs, TUI connections typically use the entire screen and accommodate mouse, keyboard, and other types of input calculators. The Disk Operating System, or DOS, which was first released in 1981, was one of the oldest text-based user interactions released in the 1960s, 1970s, and 1980s."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tezos (XTZ)"
            description="Tezos is a Proof-of-Stake (PoS) platform for blockchain that provides a world-class computer system where developers can build duplicate applications (dApps). XTZ is a traditional Tezos network brand, used to pay for network transactions, hosting, and winning prizes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="The Cryptography Mail List"
            description="Cryptography Mail List is a list of addresses by which Satoshi Nakamoto introduces Bitcoin. The Cryptography Mailing list focuses on the discussion of cryptographic technology and its political implications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="The DAO"
            description="DAO was an independent organization founded in 2016 on the Ethereum blockchain. DAO was originally designed to be an investor-led cryptocurrency wallet, but after raising $ 150 million ether (ETH) for the first token sale, the project was hacked, resulting in a loss of millions of dollars in ether. The scam of the event is notable in the crypto space as it has led to divisions within the Ethereum community which has led to a strong fork of the Ethereum network into two separate blockchains, Ethereum (ETH) and Ethereum Classic (ETC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="The Gold Level"
            description="Money linked to the value of tangible assets such as gold and silver uses the value of gold. The gold standard forms the basis of the international currency market until the 20th century. But in 1971, the program ended when the U.S. stops the direct conversion of American dollars into gold."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Theta Token Minter"
            description="Theta Token Minter is a special Theta token-making program that allows any user to create new TNT-20 tokens on the Theta blockchain with little experience of smart contract coding. This way, users can simply enter the name of the target token, tick mark, and the provisioning parameters of their new token and Token Minter will automatically generate new tokens. These tokens can be created without the use of technology and can be customized to have a permanent or flexible provision - features that promote the creation of a variety of applications and assets in Theta blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Third-Party Storage"
            description="Third-party storage means a portable or digital storage solution provided and managed by a foreign business such as a bank, single cryptocurrency exchange, or Amazon Web Services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Threshold Relay"
            description="Designed by the DFINITY team, Threshold Relay is a compact method used in the Internet Computer (ICP) protocol. Advanced Stack Proof (PoS), Threshold Relay is a multi-layer system that uses randomized verification (VRF) function to verify random and data transfer between node groups. This data transfer is a process of 'data transfer' method of concerted reference and was designed to achieve the immediate result while measuring network security concerns."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Threshold Signature"
            description="Threshold signatures represent a special digital signature encryption system designed to protect sensitive information. Threshold signatures are often distributed to a system that tolerates errors within a computer network. Technology is often regarded as the most common term because there are many types of signatures including Rivest – Shamir – Adleman algorithm (RSA), Digital Signature Algorithm (DSA), and the Elliptic Curve Digital Signature Algorithm (ECDSA), among others. Threshold signatures are commonly used to protect the public and private key data needed to process transactions on blockchain networks and other related computer platforms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Throughput"
            description="In a blockchain context, throughput is a measure of how quickly a blockchain is able to process a transaction. This is usually measured in terms of per second (TPS) and sometimes measured in minutes (TPM) or hours (TPH). In general, blockchain networks using Proof-of-Stake (PoS) compliant methods tend to have higher outputs than those using performance proof (PoW) methods."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tick ​​(Token Token)"
            description="A tick, or token symbol, is an abbreviation used to denote a particular cryptocurrency and its basic blockchain project. Token symbols are usually 3 or 4 characters long, such as BTC or LINK representing Bitcoin and Chainlink respectively. Token symbols are designed to make cryptocurrency names easily accessible and readable, especially when looking at trading pairs or charts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ticket Price (Fixed)"
            description="The determined participants receive one or more tickets (votes) depending on the number of DCR coins they lock in the protocol. The number of tickets issued depends on the ticket price (named DCR) at the time of collection. Ticket prices fluctuate every 144 blocks - or almost every 12 hours."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ticket Classification (Limited)"
            description="Ticket divisions occur when DCR owners split the cost of a full ticket. This process allows users to participate and participate in Decred rule with a few coins up to 5 DCR."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tickets (Limited)"
            description="After seizing DCR coins, the suspended stakers are given “tickets” or votes, non-transferable assets separate from the Determined network. These votes allow stakeholders to participate in network management decisions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Time-based One-Time Password (TOTP)"
            description="A Time-based One-Time Password (TOTP) is an algorithm used to generate a random one-time password (OTP) that is sensitive and only lasts until the next code is generated, which usually happens every 30 seconds. TOTP is an extension of the HMAC-One-Time Password (HOTP) algorithm, both of which have been used as security measures to prevent the mistakes of malicious individuals and characters from stealing sensitive information. TOTPs are used by most dual authentication systems (2FA), such as Google Authenticator, which allows users to securely access the account-based websites or services on their computer or mobile device."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Time-Weighted Average Price Time (TWAP)"
            description="A medium-term price (TWAP) is a trading algorithm based on the estimated value of a financial asset over a set period of time. High volume traders often use TWAP for financial assets to distribute large orders to many smaller orders with a TWAP price tag. This is done to avoid a sudden increase in the amount of financial assets due to a single order of sudden volume."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TimeLock key"
            description="The TimeLock Key is a secure method used during the atom exchange process. The TimeLock Key returns a cryptocurrency exchange if the trade does not work within the allotted time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Timestamp"
            description="Timestamp is a digital record or log used to identify the time at which an activity occurred. The time stamps recorded in the blockchain book do not change and differ from the specific function of the recorded time stamp."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Time-based avoidance"
            description="Time-based avoidance is a different malware utility to avoid detection within a targeted system. Coded Malware with a time-based avoidance strategy will only use its malicious code from time to time, such as when discovery levels are lowered or in response to previously defined actions taken by a system user, such as exiting a program or pressing a particular key."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="The mark"
            description="Within the context of blockchain technology, a token usually refers to a unit of fixed assets owned by a smart contractor and a distributed ledger. Tokens are the primary means of transferring and maintaining value on a blockchain network - usually Ethereum. Tokens can also be configured to be fungible or static, depending on network specific needs. And while many tokens are primarily used for simple transactions, a growing number of blockchain projects design tokens coded with a wide range of widely used cases, primarily in terms of on-chain governance and network retention."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Basket"
            description="Token Basket refers to a collection of token assets such as shares, assets, fiat-backed-backed stablecoins, bonds, or other assets. Most blockchain token baskets are made up of large cryptocurrencies such as bitcoin (BTC), ether (ETH), and others. In traditional currencies, a basket of tokens is simply a collection of many stocks or securities that usually come from the same or similar class of goods. These baskets can be used from independent trading platforms or combined with other types of financial instruments, and are usually carried out with institutional investment funds, hedge funds, mutual funds, and trading funds (ETFs)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Generation Event (TGE)"
            description="The Token Generation Event (TGE) is a process in which a new blockchain project and its founding team assist the next generation of technology and are introduced to marketing a real project coin. TGEs can occur in a number of ways, including a traditional First Income Donation (ICO), private sale, public sale, or a combination of different methods. TGE is designed to benefit the community and the interaction of potential investors, with the ultimate goal of raising funds to finance project development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Issuance"
            description="Token issuance is the process by which a company creates a blockchain-based token. The issuance of tokens requires consideration of many aspects of the token and how the issuers want the asset to operate in relation to its core protocol and the ecosystem as a whole. To allow for a balanced, effective, and continuous approach, token issuance usually takes into account a number of key factors, including: the modeling of the blockchain business structure and its relationship to its core protocol, the choice of token level (such as ERC-20). ), submission of token performance architecture to blockchain protocol, and technical updates and security of network codebase after deployment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Lockup"
            description="Locking tokens, or purchase times, represents a period of time during which a user can trade, sell, or transfer a set of cryptocurrency tokens. Apart from the closure approach, it is not uncommon for investors to engage in Initial Coin Offering (ICO) to sell their assets for immediate profit once the market is operating. The lock is designed to limit the sale pressure of an asset, so that the asset does not experience a sudden selloff. This lock can also free up pre-determined token values ​​at the same time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Migration"
            description="Token migration is the process of transferring cryptocurrency coins or tokens from one blockchain to another. This often happens when a project changes from using a third-party blockchain (like Ethereum) to using its own blockchain. The movement of tokens can also occur for other reasons, such as moving from one chain to another to save on transaction costs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Settlement Agent Node (Crypto.com)"
            description="In the Crypto.com blockchain, Settlement Agents are network nodes that play a role in allowing payments between the CRO's native token and other stable cryptocurrensets such as stablecoins. Payment agents rely on buyers and sellers to exchange tokens and resolve transactions accurately. The Settlement Node is eligible for profit by charging .5% of fiat payments."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Sales"
            description="Token trading is any token sale made by a blockchain project. Token sales are usually done in three main rounds of sponsorship: first a private sale, then a pre-sale, and finally a public sale. Initial Coin Offering (ICO) is often regarded as a public sale that allows small business investors to participate, while private trades are often reserved for large institutional investors such as venture capital companies (VC) to fund projects in advance. Pre-sale is moderate and allows small institutions, family offices, high-value individuals (HNWI), and other investors to participate."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token issuance"
            description="Token issuance is a standard measure of the number of tokens generated by a blockchain protocol, or that you will create in the future. There are different types of token distribution metrics, including the maximum offer (maximum offer of all tokens ever created), the circular distribution (the total number of tokens already issued to the public), and the total amount (the number of tokens already issued)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Exchange"
            description="Changing tokens can refer to two different processes. First, direct exchange of one-to-one crypto assets between two users - that is, from ETH to BTC - is usually delivered via a special exchange service or a decentralized (DEX) exchange. Second, the migration of crypto assets from one blockchain protocol to another - such as, for example, when the token originally created in the Ethereum blockchain was redesigned to run on Binance Smart Chain (BSC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token making"
            description="Token making is the act of converting the value of tangible or intangible assets into a token. A token itself is a piece of code made up of a reference to unique property, unique properties, and / or certain legal rights in accordance with a patent in which a token is produced. Once tokens have been made, the goods can be freely transferred, modified, or stored in conjunction with any digital platforms or markets for the token designed to match. By making tokens, almost any asset can be seamlessly integrated into the rapidly evolving ecosystem of blockchain networks and digital currencies are heavily documented."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tokenization Standard"
            description="The tokenization rate refers to the technical specification of a network blockchain protocol, which also determines the type of tokens associated with that network. In the years since blockchain technology was first introduced, several token standards have gained prominence, with ERC-20 tokens in the Ethereum network leading the package in terms of universal availability and acquisition. Token-making standards can also be changed to create new standards for the common token family. For example, security tokens (ERC-1400) and NFTs (ERC-721) are two different levels of Ethereum-based tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tokenization Value Chain"
            description="A token value chain is a model based on a standard value chain, or series of securities, which assists the creation, distribution, trading, payment, payment, disposal, storage, and storage of token assets via blockchain. The token number chain is generally considered to be simpler and more equal than the standard value chain, and it does not apply to those who want to hire external company consultants to perform its many processes. The model allows for the creation of newborn types of businesses and industries that may be new."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token representation"
            description="Token representation occurs when digital assets are closed with the caregiver, who then combines one to one representation of that token with another chain. Within the context of the Ren Virtual Machine (RenVM), the caregiver involved in this process is 'Darknode' extended to the central authority. By locking the asset in Darknode until the user wishes to use it, Ren users are able to complete the asset conversion process in a reliable but secure way."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Token Protection"
            description="A token protection is a tokenized cryptographic version of a common security or asset that is commonly used to represent stock, stablecoin, commodities, or various types of traditional assets. Securities with tokens are often used to trade blockchain-based derivatives and other related distribution financing methods (DeFi). Although the term 'security token' sounds similar to the term 'branded security', both are very different. Protective tokens are a special class of cryptocurrency assets with a token that uses strict control and compliance margins designed to protect investors by providing the company with guaranteed equity and a guaranteed share in future returns."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tokenized Stock"
            description="Token stocks are a trademark that is backed by stocks. Token stocks provide day-to-day availability and crypto-free environment in traditional stock markets. Tokenization allows these stocks to be available in additional markets and allows for the purchase of fractional shares."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tokenomics"
            description="Tokenomics, the 'token' and 'economic' portmanteau, refers to the basic features of a cryptocurrency token that encourages users to use the token project ecosystem. Among cryptocurrency investors, the term is often referred to depending on how the token is used within the project ecosystem, or how the token will follow monetary policy as the project progresses. Thus, the term tokenomics encompasses a variety of processes and concepts, some of which are hardly coded as blockchain protocols, and some that are more natural in nature."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TokenSets (Set Protocol)"
            description="Launched by Set Protocol in 2019, TokenSets is an application that allows for the creation and trading of Sets, ERC-20 tokens that represent a basket or portfolio of various crypto assets. These Sets can be coded with smart contracts to automatically use a specific trading strategy or re-algorithm. Using the TokenSets application, you can find Sets that work as productive farming tokens, used tokens, and tokens that give you exposure to various crypto indicators."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tokyo Stock Exchange (TSE)"
            description="The Tokyo Stock Exchange (TSE) is the largest stock exchange in Japan and Asia and is the third largest stock exchange in the world. TSE lists 3,786 companies as of September 2021, including Japanese companies Toyota, Sony, Keyence Corp, Softbank, Mitsubishi, Honda, and others. The TSE was established in May 1848 and is made up of the first five separate divisions comprising large corporations, the next two divisions comprising start-ups and small corporations, followed by the latter phase which is only available to investment institutions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ToolChain"
            description="ToolChain is a set of software programs designed to simplify complex software development tasks, or to help create specific types of software programs and applications. This common term should not be confused with VeChain's ToolChain, which is a Blockchain-as-a-Service (BaaS) provider for business use."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tor Browser"
            description="Tor Browser is an online network designed to verify anonymity by encrypting Internet traffic, which is transmitted to a few servers before it reaches its destination. The service is maintained by the nonprofit Tor Project, and uses its 'onion' domains on websites and services that can only be accessed through the Tor network. Tor has been criticized for being a black web gateway and illegal markets, however, it is also used by activists, journalists, lawmakers, and others who have to hide their online identity for security and safety purposes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Torrent"
            description="In the context of the BitTorrent protocol, the torrent file is downloaded from other peers in the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Total market capitalization (Cap)"
            description="Market value is a measure used to determine the total market value of a particular asset or class of an asset, such as gold. The market value of a company is determined by multiplying its share value by price per share, while the market limit for a blockchain project is instead determined by multiplying the circular distribution of coins by the value of each coin. The amount of money in the monetary market for all cryptocurrencies is determined by combining the appropriate market rates for all individual cryptocurrencies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Total Supply"
            description="The total number of tokens created by the blockchain project at the beginning of the project. This includes the amount provided to the foundation, the team, and the advisors. Projects often have a different delivery time for each assignment, and usually produce a certain percentage of the total provision of all tokens at a certain time to provide funding. The full offer is the opposite of the rounded supply, which is the number of tokens available for potential investors to buy at any time. Although the total number of offers usually stays the same, circulating offers often change, depending on the project token issuance process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Total Locked (TVL)"
            description="Locked value (TVL) is a metric that measures the aggregate value of all crypto assets locked in decentralized finance (DeFi) protocols using smart contracts. It became famous by DeFi Pulse in 2019, but with price data going back to DeFi genesis in 2017. TVL may also refer to the value locked in a particular protocol (such as Aave or Uniswap). TVL data can also be sorted and rated by DeFi Locked for a purpose or type (such as borrowing and withdrawal)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Traceability"
            description="Tracking refers to the level at which an outside company is able to track transaction details, such as the transaction value or ownership of the parties. Blockchain-based projects approach tracking in a variety of ways. For example, non-swearing tokens (NFTs) following ERC-721 standards were created to increase follow-up, while projects such as Monero designed systems that blur user accounts and activities from external viewers in an attempt to remain completely unattainable."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tracking cookie"
            description="A system tracking cookie used on a website to track online user behavior. Tracking cookies are automatically activated when a user accesses a website, usually in the hope of collecting data used to influence user's online shopping decisions. For example, some cookies may be able to determine which websites a user has recently visited. As a result, advertisements for products and services related to their browsing history may be displayed to maximize user purchasing opportunities."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trade Coordinator (TEC)"
            description="A Trade Execution Coordinator (TEC) is a process that takes place where the exchange platform - whether located in a single location or privately owned - disbands a business that is responsible for trading in a business that is responsible for pooling revenue. A robust TEC system is designed to help: Ensure that trade is done in accordance with the value of time value in the right way."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trading Bot"
            description="A trading bot is an application that enables automatic trading within pre-defined boundaries and areas. Trading boots are widely used by many traders, market speculators, and other financial market participants. Special parameters for each trading board set up can be customized according to its individual trading user strategy and procedures."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trading volume (Volume)"
            description="Within the context of financial markets, trading volume refers to the amount of securities that are traded over a given period of time. Trading volume is usually reported as the number of stock exchanges during a particular trading period or another period. The trading volume of all free-selling commodities is constantly changing, and the direction and size of these shifts are important changes that most investors incorporate into their analysis."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TradingView"
            description="TradingView.com is one of the most advanced and reputable methods of analyzing charts and trading platforms used for stock trading, crypto trading, and trading in other commodity classes. TradingView has both a desktop and mobile version, as well as functionality that allows users to share information such as investment strategies, technical analysis, and other indicators. TradingView was founded in 2011 and is often regarded as the gold standard for charting and technical analysis. Its rise in popularity could be attributed in part to the increase in cryptocurrency investment popularity in 2017 due to the 2017 Bitcoin bull run."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Traditional Funds (TradFi)"
            description="Traditional currencies (TradFi) refers to a financial system that exists outside of the blockchain, cryptocurrency, and dividends (DeFi). TradFi is often seen as legitimate financial institutions such as banks and large financial institutions operating using a centralized model."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Traditional Value Chain"
            description="A conventional value chain is a system used for the creation, distribution, trading, derecognition and payment, storage, and other financial services within a collateral value chain. Although it has emerged over time, and has been used in the financial industry for decades, it is becoming increasingly clear that the general price chain is flawed because it is less transparent, more efficient, and more efficient than it should be. Currently, a new method called tokenization value chain is evolving to become a more effective way of investing in the future as well as financial products and services around the world."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tranche"
            description="In organized finance, a tranche refers to the amount of the same securities or part of an investment created from a group of securities. Tranchets are often used to classify risk or other factors in ways that are marketable to different types of investors and to suit different investment strategies. For example, as they relate to bonds, tranches are often thought of as different 'classes' of notes, all of which have different bond credits. The traditional tranche model has recently been modified to work with different blockchain terms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transaction (TX)"
            description="In the blockchain context, transaction (TX) usually refers to sending and receiving different types of data between users on a blockchain network. Depending on the source, the product may be shipped in at a different speed and in terms of security and privacy. The most common type of activity allows users to exchange network-specific tokens between each other. For example, Bob sends Linda four ether (ETH) via the Ethereum network, which he receives immediately after a few minutes. In exchange, Linda then sent Bob an equal amount to bitcoin (BTC) via the Bitcoin network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transaction Cost Analysis (TCA)"
            description="Transaction Cost Analysis (TCA) is a system used by institutional investors to study price trends to obtain favorable trading windows. This metric is calculated according to the stated time and in relation to the various benchmarks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transaction Fee"
            description="The transaction fees are the fees charged for doing work in the blockchain, and are usually charged by the sender. The transaction fees are required to pay for the computer power that the network must use to broadcast and transmit transactions. The transaction fees, which can be paid in various ways to companies that provide blockchain transaction volume, are an integral part of the promotional models for many networks, including Bitcoin and the current Ethereum (1.0), where currency is called. 'gas'. Service costs are charged each time a participant in a network sends a cryptocurrency or some type of data from one recipient to another. The cost of transactions varies with each blockchain and is generally variable depending on the total transaction volume currently occurring on the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transaction ID (TXID)"
            description="The transaction ID, or work hash, is an immutable digital work record recorded in a blockchain block. Users are able to view any previous transaction using its corresponding transaction ID, usually with the help of a blockchain tester. In some cases, a cryptocurrency recipient may request a work ID from a suspected sender to verify the location of the origin of the purchase."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Time for Payment Made"
            description="Payment period refers to the time elapsed between the commencement of work and when assets are deposited into the recipient's account after all relevant financial institutions and / or algorithmic principles confirm the transaction as valid. The length of the payment period varies greatly depending on the structure of the different networks and the organizations that process the transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transaction Per Hour (TPH)"
            description="Hourly Performance (TPH) metric refers to the number of data activities a computer network can process per hour. TPH, as well as per minute transaction (TPM) and transaction processing (TPS), is sometimes used to determine the total blockchain network speed and size by measuring how quickly a particular platform can process data such as cryptocurrency transactions and smart contracts. Larger networks with higher transaction speed are critical to the widespread adoption of blockchain technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transactions Per Minute (TPM)"
            description="Transactions per minute (TPM) metric refers to the number of data operations a computer network can process per minute. TPM, as well as per second transaction (TPS), is sometimes used to determine the speed and size of a blockchain network, by measuring how quickly a particular platform can process data such as cryptocurrency transactions and smart contracts. Extremely high-performance networks are critical to the widespread adoption of blockchain technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transactions Per Second (TPS)"
            description="One-to-one operation (TPS) refers to the number of data operations a computer network can charge per second. The TPS rating used to send data to a blockchain network is usually an indication of the speed of the entire network protocol and scale, and measures how quickly a particular platform can send data such as cryptocurrency and smart contract operations. Larger networks with higher transaction speed are required for widespread adoption of blockchain technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transcoder"
            description="In a Livepeer network, Transcoder is a hardware device (preferably a GPU or CPU) that converts video from one format to another. Transcoders perform the process of transferring video code to the Livepeer network."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Transmission Control Protocol / Internet Protocol (TCP / IP)"
            description="Transmission Control Protocol / Internet Protocol (TCP / IP) is a system of communication protocols used to connect network devices to the Internet and transmit data through these communications. The Internet as we know it was very well designed and built on TCP / IP, although this set of protocols can also be used in the same way as the communication protocol within a private computer network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Transmuter (Alchemix)"
            description="Transmuter is a major browsing algorithm, which helps keep artificial assets, such as alUSD, in a 1: 1 ratio with stablecoins such as DAI. Transmuter is powered by a smart contract that allows users to participate in alUSD to earn a limited amount of DAI in doing so."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trapdoor function"
            description="Within the field of cryptography, the trapdoor function, also known as 'one-way operation', is an algorithmic complex that is easy to integrate straight in one direction, but the most difficult to solve if you take the opposite path. This unique feature makes trapdoor functions one of the most important designs embedded in a wide range of encrypted and cryptographic messages."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TRC-10 (TRON)"
            description="TRC-10 is another token standard used by the TRON blockchain which is different from its standard TRC-20 token standard. Although the TRC-10 and TRC-20 tokens have several technical differences, the main difference is that the TRC-20 tokens are designed to work in accordance with smart contracts with the TRON Virtual Machine (TVM), while TRC-10 tokens are not."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TRC-20 Symbol"
            description="The TRC-20 is a contract-based standard for creating tokens using the TRON optical machine. TRC-20 tokens fully compliant with Ethereum ERC-20 standard"
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Treasury Bill (T-Bill)"
            description="The treasury bill (T-Bill) is a short-term financial instrument issued by the U.S. government. These fixed income securities usually have a growth period of four weeks to a year. Due to their short duration, T-bills do not discriminate against investors for regular interest rates. Instead, they are sold at a discount on their face value at the time of purchase, and investors get the full amount of face value once the T-Bill has reached maturity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Treasury Bond (T-Bond)"
            description="Treasury bond (T-Bond) is collateral for the U.S. government they often issue us as a debt instrument to finance various government functions and obligations. These bonds usually have a maturity of more than 20-30 years, and pay a fixed return every six months. Generally, the longer the T-bond maturation, the higher its annual yield increases. Once a T-bond has been sold by the government at the first auction, it can be sold free of charge in the second market."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trending"
            description="Trend means the total financial market index or asset price. Trends are determined in large part by using technical chart analysis and trend lines that highlight specific price action that builds technical support and resistance levels. The uptrend occurs when the price makes a high swing, while the downtrend is reflected in making the price very low. Potential trends in crypto, stocks, bonds, derivatives, and any other type of market, even when measuring different types of data, such as a complete economic overview of a particular region over a period of time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trend Analysis"
            description="Trend analysis is a technical analysis method (TA) used to predict future price movements based on all trend data. Trend analysis helps traders and investors make better investment decisions based on overall market perspective and basic data points. Trend analysis often takes into account the conditions of the capital market, characterized by rising prices, or the bear market, characterized by falling prices. Trend analysis can be used for short, medium, and long term frameworks, but a few other data sets must be used for maximum efficiency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trend Line (Charging Tool)"
            description="A trend line is a line drawn on a chart to show trends in a price action over a period of time. Trend lines are often used to determine inflation, lateral, or lower price by connecting at least three price points to a chart to separate support and resistance areas. Prices that stay above the trend line and form support are considered bullish, while prices that fall below the trend line and that can jump above resistance are considered bearish."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Triangle (Technical Design)"
            description="The Triangle technology build is an important technical analysis tool (TA) because it helps traders decide whether to consider the bullish or bearish trend and the possible market downturn. Generally, there are three main patterns of a triangle: ascending, descending, and parallel triangles. Rising triangles often lead to price ups and downs, while declining triangles are usually a bearish pattern that leads to lower prices. Finally, equal triangles can be a bearish or bullish pattern depending on price confirmations above or below certain levels."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tribute to Talk"
            description="Tribute to Talk is a feature created by the Status-enabled messaging platform blockchain to prevent malicious activity and spam from invading their network. Status users can set a Tribute-to-Talk requirement, which is the minimum number of Status Network Token (SNT) unauthorized users need to hold to send them a message. When the recipient of a message responds to the sender's message, the SNT of the sender pole is sent to the recipient. If the sender's message is ignored or rejected, the SNT of the sender pole is returned to them, and they will not be able to attempt to communicate with the recipient for some time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trojan"
            description="Within the context of cybersecurity, Trojan defines any type of malicious program that hides its intended purpose in order to gain unauthorized access to a targeted device or network. In most cases, trojan is designed to look like an innocent program or is clearly attached to another piece of software. When a trojan secretly infiltrates its controls it is free to use its own malicious code, often injuring, stealing, or disrupting the targeted device or network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trojan Bankers"
            description="Trojan Bank is a type of malicious program designed to gain unauthorized access to confidential information or assets stored on online banking systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trojan Downloader"
            description="Trojan Downloader is a form of Trojan downloader that does not sleep inside an infected device until an internet connection is established. From there, the trojan downloader will connect to a remote server or website and download additional unwanted programs to the infected device."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trojan-Ransom Malware"
            description="Ransomware Trojans is a type of malware that is not compatible with the Trojan computer designed to defraud a victim after compromising the victim's device. In most cases, ransomware trojans will demand payment in order to undo the damage Trojan has inflicted on the victim's device. However, some types of ransomware trojan may require other payment methods, such as sensitive information or performing certain actions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TRON"
            description="Tron is a blockchain project dedicated to building a diverse internet infrastructure. Although the project initially started as an entertainment venue divided into an area with end-to-end technology, the ambitions for this project have grown almost identical to Ethereum. Tron's native network token, TRONIx (TRX), is used as a payment method across the entire Tron flexible service ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TRON Virtual Machine (TVM)"
            description="TRON Virtual Machine (TVM) is a complete Turing machine that provides a rich and easy-to-use environment for developers to build and test internationally distributed applications (dApps) and other web services within the Tron ecosystem. TVM is equivalent to the Tron of Ethereum Virtual Machine (EVM), and all software projects created through TVM are fully compatible with EVM."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TRONIx (TRX)"
            description="TRONix (TRX) is a traditional Tron blockchain protocol. Although the token was originally used to pay content creators only for digital content on the Tron platform, TRX has evolved into a widely accepted payment method across Tron's flexible service ecosystem."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="TRONI"
            description="TRONZ is a smart contract privacy protocol launched by TRON 4.0 in July 2020. TRONZ is built on the zk-SNARK approach, Zcash (ZEC) core privacy technology. TRONZ provides users with customized privacy settings, which can be customized according to user requirements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Troy Ounce"
            description="Troy ounce is a worldwide standard for measuring weight and purity of precious metals. One troy ounce is approximately 31.1 grams, unlike the average ounce of 28.35 grams, and this unit of measure is usually abbreviated as “t oz” or “oz t”."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Truffle (Ethereum Development Framework)"
            description="Truffle is a popular development toolbox for typing smart contract code on the Ethereum network. Truffle contains a series of products designed to help Ethereum developers build, test, and deploy software. In November 2020, the Truffle team and its technology were acquired by ConsenSys, one of the leading independent companies building Ethereum products."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trust Company"
            description="A Trust Company is a legal entity that acts as a fiduciary, agent, or trustee on behalf of an individual or organization. These companies are usually charged with seizing property that does not belong to them on behalf of the customer, and managing the liability for those assets until they are legally required to be transferred to a specific beneficiary. Since trust companies are fiduciary, they have a legal obligation to represent the financial interests of their clients."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Trusted Execution Environment (TEE)"
            description="The Trusted Execution Environment (TEE) is a separate device within the main device processor that allows for secure and confidential use of the code without the risk of interruption from any device or system. Only authorized code can be generated within TEE, which uses both hardware and software to protect data and code externally. In addition, trusted separate applications within TEE are protected from each other by cryptographic software and solutions, and these trusted applications have full access to the main device processor and memory. TEEs are commonly used to enhance the overall security of a device or network and to ensure that certain key processes can operate with complete reliability and integrity without the risk of exposure."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="They are not faithful"
            description="If the system is unreliable within the peer-to-peer (P2P) blockchain network, it means that all network participants do not need to know or rely on authentication from each other or third party. This means that the system is run independently with the basic technological build-up and compliance approach of the blockchain protocol itself. Shared, unreliable network trading is not seen in a central organization to ensure trust, and it is an important value proposition of blockchain technology. Many of the inventions emphasize the unreliable nature of blockchain networks, which include consistency, distribution, transparency, research resistance, and neutrality."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Tumbler (Crypto Tumbler)"
            description="Cryptocurrency tumblers (also known as connectors) provide a consolidation service when a user deposits crypto currency for mixing for privacy reasons. While mixing coin does not guarantee complete privacy, it makes tracking transactions much more difficult. These services are sometimes used to clean up “dirty coins,” which are collected by criminals. This is done by mixing dirty coins with coins from different wallets, and then transferring the 'purified' coins to another wallet. While cryptocurrency compounds are also used for non-criminal purposes, some countries have completely banned their use. Service providers typically charge 1-3% for this type of service. These services seem to be declining in popularity as new options emerge, which are not limited to conservation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Turing Completed"
            description="Complete testing is defined as a system of data fraud laws, such as computer programming language or set of instructions, that works everywhere. All computer programming languages ​​are ‘fully adaptable,’ meaning they can be easily used and interact with other similar programming languages ​​or systems related to less likely to encounter major problems. The concept was first introduced by English computer scientist and mathematician Alan Turing."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Turnkey solution"
            description="A turnkey product or service that can be sold to any consumer acting as a complete product, ready to be used without the need to customize the user. Turnkey solutions therefore differ in built-in products, designed according to the unique customer specifications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Two-factor Verification (2FA)"
            description="Two-factor authentication (2FA) is an additional layer of protection for user accounts. In its traditional form, 2FA requires the user to continue verifying your identity after entering an account password. This additional verification is usually achieved by entering a random code generated by a secondary device or program. As a result, 2FA minimizes various cybersecurity risks arising from both device hacking and human error. Examples of 2FA mobile applications include Google Authenticator and Authy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Two-way anchor (2WP)"
            description="A two-sided anchor (2WP) is an integrated or built-in blockchain protocol that can facilitate the transfer of tokens and other information from a central chain to an independent blockchain network. In fact, the 'transfer' of tokens does not really happen, but the goods that are sent to the original blockchain are closed so that they cannot be used, while the receiving blockchain creates a new number of tokens equal to the value. posted. There are several variations of the model - often referred to as bridges - that allow blockchains to send data and token assets back and forth between different blockchain agreements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Type Test"
            description="Type testing is a process of verifying the integrity and accuracy of a computer code using different programming languages. Type test is used to test the sequence of knowledgeable code and often includes testing functions, modules, presentations, variables, and other types of related data structure. This process is often used by programmers to eliminate or minimize the occurrence of bugs found in software programs and network infrastructure prior to initial deployment. Type testing can be done mathematically (during integration), rotation (during operation), or using your combination both depending on the programming language used."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="TypeScript Programming Language"
            description="TypeScript is a programming language that is a JavaScript syntax that adds vertical typing to language. TypeScript is maintained and designed by Microsoft and is designed for the development of large JavaScript-compliant applications for use with any browser, host, and operating system (OS)."
          />
        </Col>
      </Row>
    </section>
  );
}

export default TSection
