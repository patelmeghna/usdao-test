import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";


const MSection = () => {
  const mSectionRef = useNav("M");

  return (
    <section ref={mSectionRef} id="mSectionContent">
      <div className="titleWrap">
        <p className="title-line">M</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Machine learning (ML)"
            description="Machine Learning (ML) is a subset of artificial intelligence (AI) and is a study of algorithms that work better with information without being programmed to do so. Machine learning algorithms detect patterns in large data sets to generate data-based claims and assumptions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Machine Learning Prediction"
            description="Machine prediction (ML) is the result of a machine learning algorithm that analyzes a set of historical data. The ML forecast can then be used in new data sets, where it can be used to predict results as future stock price movements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Machine to Machine (M2M)"
            description="The term machine to machine (M2M) refers to the interaction between devices that take place without human input. In the blockchain industry, this is often related to automated payments made through smart contracts. Automation eliminates the role of gatekeepers and coordinators, which greatly reduces costs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mainchain"
            description="Mainchain is a term used to describe a core, Class 1-blockchain network protocol such as Bitcoin or Ethereum. The term ‘mainchain’ usually means the strongest blockchain network and the most important blockchain network within a particular blockchain ecosystem. Typically, some blockchain protocols and split applications are built 'on' mainchain. For example, many of the most prominent financial projects (DeFi) have been built to further the Eincreum mainchain network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mainnet"
            description="Mainnet is a fully developed and released version of the blockchain network. This is in contrast to testnet, which is often used for testing and testing on the blockchain before the mainnet is released. Testnet is used while the blockchain is live to test and upgrade so as not to disrupt the main series."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Manufacturer (MKR)"
            description="Manufacturer (MKR) is the administrative token of MakerDAO, an Ethereum-based protocol that extends Dai stablecoin and makes it easy for mortgage-backed loans without a mediator. MKR is a governing token that allows owners to vote for changes to the protocol, such as the addition of new collateral assets and protocol updates."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Maker Protocol (MakerDAO)"
            description="MakerDAO is an Ethereum-based protocol released by Dai, stablecoin that tracks the value of the US dollar. MakerDAO also provides collateral loans without a mediator. The platform is managed by the owners of Indigenous Token (MKR) tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Malware"
            description="Malicious software refers to any type of 'malicious software', designed to harm computers and computer programs. Examples of malware programs include viruses, trojan horses, and ransomware, among others."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Management Information Systems (MIS)"
            description="Management Information System (MIS) is a computer-based program that uses hardware and software components to control the company's internal and external operations. MISs are used to manage, organize, analyze, and compile the information needed to make the best business decisions with the aim of achieving the highest levels of business profitability. Management Information Systems uses staff, technology, and other methods to facilitate better short-term and long-term decision-making processes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Margin Call"
            description="A phone call occurs when the value of the investor's margin account - the type of account that allows investors to buy securities with a loan - falls below the minimum required amount of the seller. Specifically, a gene call is a seller's requirement for an investor to deposit additional funds or securities into the account in order to return it to its original value or face completion."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Marine Trading (Marks)"
            description="Margin trading refers to the system of using a loan from a trader or exchanging to sell financial assets in a limited position. This rate can vary greatly, ranging from 2 - 150 times your mortgage. The higher the average used, the greater the risk of money laundering. If the trade is against the trader (i.e. the wrong approach), it may result in the permanent loss of the original position as the trader’s collateral expires. Margin trading is not recommended for inexperienced traders because of your high risk profile and the potential for significant financial losses."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mark and Market"
            description="Mark to market, also known as fair value accounting or marking in the market, is the practice of accounting for assets in terms of current market value, as opposed to fixed book value."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market Capitalization (Market Cap)"
            description="In the blockchain industry, market capitalization, or market cap, refers to the value of all cryptocurrency or token offerings. Market value is calculated by taking the market value of a single coin or token and multiplying it by the total number of coins or tokens distributed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market Depth"
            description="Market depth usually refers to the ability of a particular market to obtain large market orders without changing the price of the underlying bond. Market depth analysis takes into account the total and range of open orders, bids, and offers of a particular asset. If the market depth of an asset is deep (with a large amount of cash available) it means that a very large order is often required to change the value significantly. The depth of the market should be considered as the depth of liquidity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market Maker"
            description="In finance, a market maker - or a broker - is a company or individual that buys and sells large quantities of goods to ensure that the market remains liquid. Although it is not always necessary when the biological trade volume is high, many trades - both stocks and crypto - use market makers to secure liquid markets. Creating markets gives traders enough money to trade, lower slots, and faster trading speed - especially in large orders. Market makers 'create a market' to earn a living, taking part in the distribution of bids for their financial assets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market order"
            description="The most common type of trading done by trading investors, market order is used to buy or sell goods at current market value. Market orders are the fastest and most efficient way to buy goods when you trade, and they are usually filled immediately when there is a solid currency and trading volume. Market orders are placed within the online order book on the commercial interface, usually on a computer or mobile device."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market Feelings"
            description="Used in financial markets, market sentiment refers to the general attitude of investors and market participants in terms of overall market conditions (or those of a particular asset) and where they see them moving in value. A steady increase in rising prices often reflects market sentiment, while higher inflation and declining prices reflect bearish market sentiment. Typically, the overall market sentiment is acquired by combining multiple data points that can include metrics from baseline analysis (FA), technical analysis indicators (TA), and price history charts of different periods."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market signal"
            description="A market signal, also known as a trading signal, is an indicator of buying or selling a product based on a particular type of technical or basic analysis. Traders can generate market signals using a variety of criteria, such as earnings reports, trading volume analysis, or a wide range of technical metrics based on market metrics."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Market Integrity Committee (MIC)"
            description="The Polymarket Markets Integrity Committee (MIC) is a body whose members help ensure the legitimacy, trust, and efficiency of the Polymarket forum."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Marlowe Programming Language"
            description="Marlowe is a programming language designed for topic professionals with little or no knowledge of editing. Embedded in Cardano's Haskell language, it makes it easy to write - and understand - on-chain contracts that are well suited to financial products and tools."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mastercoin"
            description="Renamed as Omni in 2015, Mastercoin is designed to enable the issuance of new currencies, assets, and tokens over the Bitcoin blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Maximum Supply"
            description="Higher offerings refer to the maximum number of coins or tokens that will ever exist in the lifetime of a particular crypto asset, such as the high value of bitcoin (BTC) or ether (ETH). This category corresponds to the total number of fully traded shares of a stock traded on the common stock market. The maximum offer differs from the rounded offer (representing the number of tokens circulating in the public market) and the total offer (representing the number of tokens already issued, any token issued)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Medium"
            description="Launched in 2012, Medium is a blogging platform hosting articles written by a combination of illiterate and professional writers. Medium has internally paid professional staff and also encourages independent writers with a compensation program based on student engagement. While some articles are free, some are behind the paywall and require paid membership to access them. In the blockchain industry, Medium has become a popular platform for blockchain groups to reach out to their communities, submit technical updates, and share project-related issues."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Medium of Exchange"
            description="An exchange method is a widely accepted asset for the exchange of goods and services. Fiat currency is an example of how to exchange today, but historically it has covered everything from shells to precious metals."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Megabyte (MB)"
            description="A megabyte (MB) is a digital data storage unit made up of 1,000,000 bytes of data. Bytes are a standard data storage unit, but they have grown to include many large measurements including kilometers (KBs), gigabytes (GBs), and terabytes (TBs) - using the International System of Units (SI) measurement scale. MBs are commonly used to measure data storage on a computer or computer network, or on external USB storage devices or hard drives, as well as other related software or computer hardware."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Membership Service Provider (MSP)"
            description="An affiliate service provider (MSP) is an internal component of a blockchain network used to manage membership for different users, or nodes, and their digital identities. MSPs are used to authenticate, authenticate, and identify different users and to grant them permission to use the blockchain network. MSPs are customized to meet specific customer needs determined by the network creator, and provide interaction between different membership levels and structures. Hyperledger Fabric is one of the most popular blockchains using MSP."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Memecoin"
            description="Memecoin is a cryptocurrency or crypto token based on a viral joke or cultural index. Projects made of memecoins rely heavily on social hype to attract new users / investors. This means that while certain memecoins may have operational conditions and sound cryptoeconomics, these projects can be dynamic and often highly dependent on the strength of their marketing efforts and community programs to drive acquisition."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Memorandum of Understanding (MOU)"
            description="A Memorandum of Understanding (MOU) is a document that outlines the agreement reached between two or more parties. MOUs do not bind legally, but generally indicate that the parties are likely to sign a binding contract in the future."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mempool"
            description="Mempool is where the unconfirmed function waits after node verification and before blocking. Mempool uses the Replace by Fee (RBF) method, which allows transactions with higher transaction costs to exceed pre-transactions with lower payouts. When more operations are waiting in mempool, network traffic becomes more congested and verification time increases. Network nodes should check to ensure that transactions within the mempool are effective by ensuring appropriate signature schemes, that the output does not exceed input, and that funds are not spent twice."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Merkle Root"
            description="The Merkle root is located at the top of the Merkle tree and represents the active hashes found at the bottom of its related Merkle tree. These processed horses are then accelerated repeatedly by pairs until only one Merkle root is left. Merkle root can be used to validate all functions found in its Merkle tree."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Merkle Tree"
            description="The Merkle Tree is a data structure composed of hash converters that are used by blockchains to ensure information security. The Merkle Tree summarizes everything that is done on the block by producing digital fingerprints (i.e., one hash) for every set of tasks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mesh Network"
            description="The mesh network is a network topology that uses a decentralized network architecture that is characterized by a seamless, flexible, and direct connection to a high number of nodes. The goal is for all nodes within a network to work together to maximize the performance of the entire system. Mesh networks are generally independent, self-contained, and self-organized, promoting a flexible distribution of computer workload that can help the network stay stable even when several nodes in the system fail. This can result in a network that is more secure and less prone to errors and lower operating costs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Metachain (Elrond Network)"
            description="Metachain operates as an Elrond control center and is designed to operate within its own unique chart to allow interaction with other shards and perform operations that fall within the Elrond Network. The main purpose of Metachain is not to process transactions, but instead to inform and finalize shard block titles, to maintain and maintain network verification registrations, to start new erasers, and to process various fishing activities."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Metadata"
            description="Metadata is a type of data created by other data. For example, file metadata can specify when a file was created and what type of file it is."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="MetaMask"
            description="MetaMask is a web-based blockchain wallet that allows users to connect to Ethereum default applications (dApps) without using the full Ethereum node. MetaMask is also used to integrate multiple trading platforms (DEX) such as Uniswap. Currently (December 2020) the mobile version of MetaMask is undergoing major development and will be fully launched in 2021."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Metaverse"
            description="Metaverse is a virtual world shared."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Metropolis (October 2017)"
            description="Metropolis has been the development of the Ethereum network that took place in October of 2017. It won Homestead, and became the last phase of Ethereum before the Serenity phase was launched in 2020. Metropolis has provided a fully integrated interface by opening the doors for dApp Development and tokens, which also boosted the 2017 ICO boom. Throughout Ethereum's history, it has become clear that the continuous development of a growing, secure blockchain network has become an ongoing goal - as there is an open source, community-based commitment to governance and development processes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Micro Cap"
            description="In the blockchain space, 'small coin' refers to a cryptocurrency asset with a very small market capitalization. Market capitalization, or the total value of cryptocurrency assets and the underlying blockchain business, is determined by the number of publicly distributed currencies, multiplied by the value of each coin. As a speculative term, there is no specific market limit indicating that an asset is a major currency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Micropayment"
            description="Micropayment is a service, usually online, that involves a small amount of money — sometimes as little as half a cent."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Microtransaction (MTX)"
            description="Microtransaction (commonly abbreviated as MTX) is a type of activity that allows users to purchase tangible assets in micropayments, usually in the form of a visual store within applications where in-game items are sold. For example, within the Apple App Store this process is called 'in-app purchases,' while Google refers to using the same 'as in-app billing.' Although microtransaction is commonplace in the field of mobile games, it is also widely used in other contexts, including console games and digital software distribution platforms. Microtransactions are also very similar to micropayments (a term often used outside the context of a game). Both of these terms refer to customer purchases in an online location."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mid Cap"
            description="In the blockchain space, 'middle currency' refers to a cryptocurrency asset that has a medium-sized market capitalization. Market capitalization, or the total value of cryptocurrency assets and the underlying blockchain business, is determined by the number of publicly distributed currencies, multiplied by the value of each coin. As a self-concept term, there is no specific market limit indicating that an asset is a medium currency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Middleware"
            description="Middleware is part of a computer system or network that exists within a system, usually adding to the functionality of the entire platform. Middleware can also be considered as a service layer. In the blockchain context, middleware has been developed by various systems that help installed applications (dApps) increase their usability. In the blockchain, examples of middleware include smart contracts, forecasts, information details, digital identities, file storage, and various communication devices. The service layer is also composed of application programming interfaces (APIs), multi-signature technology, digital assets, blockchain administration systems, and other components."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mimblewimble"
            description="Mimblewimble is a secret blockchain design that was first proposed in 2019 by anonymous Tom Elvis Jedusor. The design of the Mimblewimble novel suggests a way to keep activity data privacy while performing virtual authentication that does not require network nodes to maintain the entire blockchain history. Grin and Beam use open source Mimblewimble tech."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Miner"
            description="Miners are an integral part of all Proof-of-Work (PoW) blockchain consensus protocols, and are responsible for ensuring new transactions and recording them in the blockchain register. Miners secure this transaction by solving complex mathematical problems, leading to the creation of new tokens while strengthening the security and reliability of the network. To encourage users to give the processing power to dig new blocks, miners are often rewarded with a portion of the network's traditional revenue for all blocks dug successfully."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Minimum Collateralization Ratio (MCR)"
            description="A small collateralization ratio (MCR) is a small amount of debt and collateral that will not lead to liquidation, which can occur when the asset price rises so that the collateral can no longer exceed the prescribed MCR. For example, suppose a user first deposits $ 2,000 USD in order to create an item costing $ 1,000 USD (200% compilation rate). If the price of the property then rises above $ 1.50, the mortgage rate will drop below 150% and the position will be filled."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Minimum Viable Product (MVP)"
            description="Minimum Viable Product (MVP) is a pre-existing version of the product with enough features that the company can test the product and collect data on how customers or customers can use it."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining"
            description="Mining is a process of using computer power to verify and record blockchain transactions. Mining also results in the creation of new coins, which miners receive as a reward for their efforts. Mining is used in proof-of-service (PoW) blockchains."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining algorithm"
            description="The mining algorithm is part of the Proof-of-Work (PoW) blockchain. Mining algorithm is often a confusing puzzle that requires a great deal of complexity to solve. This protects the network while encouraging miners to protect us (through mining awards). Popular algorithms in blockchain mines include hash algorithms (SHAs) SHA-256 and secure SHA-3 - as well as Ethash, Scrypt, and Equihash."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mine as a service (MaaS)"
            description="Mining as a service (MaaS) is a cloud product that allows you to purchase mining power (or hash rate) from a cloud mining provider, usually measured by horsepower per second (mh / s) and purchased periodically, which can vary from week to several years. Also called cloud mining, MaaS tends to refer to hash measurement sales from the perspective of a cloud mining provider - as a way to monetize the existing hash value and mining platforms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining Farm"
            description="A mining farm is a virtual area, usually quite large, storing many specialized computers designed to mine certain cryptocurrencies. The most commonly used cryptocurrency is bitcoin (BTC), but mining farms are some crypto assets. Mining farms are often very expensive to set up due to the high cost of their electricity needs, continuous maintenance of mining equipment, and comprehensive cooling systems. However, it is becoming increasingly common for renewable energy sources to empower crypto mining farms to combat this inefficiency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining Pool"
            description="The mining pool includes - or 'ponds' - the hash level of crypto miners who join the mining blocks and distribute the corresponding block prizes. This is to ensure that miners have a more reliable level of return on their mines and allow smaller mining operations to compete with larger mining farms. Blockchain-based mining pools also typically charge 0 - 2% of all block prizes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining Revenue"
            description="The mining prize, also known as the reward of the block, is the indigenous network of mines that they receive through the successful blocking of work blocks. Mining revenue may vary over time. For example, Bitcoin block revenue decreases by 50% every 210,000 blocks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mining Area"
            description="A mining machine is a system used to extract cryptocurrency tokens. This feature can be a device specifically designed and designed for mining, or a personal computer used for temporary cryptocurrency mining."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Minting"
            description="Minting is the process used to create new blockchain network tokens. Minding does not require resources and is used to maximize circulating offerings. Validator nodes (in systems containing these types of nodes) are usually run. Generally made Cryptocurrencies do not have a high supply limit and often rely on the continued growth of the project's economic plan to remain relevant. Crypto minting is similar to fiat currency printing within the traditional financial and banking system, in that there is no limit to the amount of money that can be printed, except that printing should be regulated to prevent inflation / depreciation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mirror Asset (mAsset)"
            description="A short form of “Mirror Assets,” Assets are artificial assets produced by Mirror Protocol that mimic the price behavior of real-world assets from leading businesses around the world."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mirror Protocol"
            description="Mirror Protocol is a separate blockchain protocol running on the Terra blockchain network. Allows the creation of complex artificial assets called mirror assets, or mAssets. Assets 'reviews' real-time continuous real-time stock prices from leading global businesses such as Tesla (mTSLA), Apple (mAAPL), Microsoft (mMSFT) and countless others. Mirror Protocol uses its MIR usage token and can be used to create mirror assets and other multi-currency (DeFi) applications within the Terra ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mirror Token (MIR)"
            description="Mirror Token (MIR) is a traditional Mirror Protocol symbol. It acts as a rule token, which allows its owners to vote for protocol changes. Additionally, MIR is being distributed as a reward to users who provide Mirror Asset funding (mAsset) to automated market builders (AMMs)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mixer (Crypto Mixer)"
            description="Cryptocurrency cryptocurrencies (also known as tumblers) provide a merging service when a user deposits crypto currency for mixing for privacy reasons. While mixing coin does not guarantee complete privacy, it makes tracking transactions much more difficult. These services are sometimes used to clean up “dirty coins,” which are collected by criminals. This is done by mixing dirty coins with coins from different wallets, and then transferring the 'purified' coins to another wallet. While cryptocurrency compounds are also used for non-criminal purposes, some countries have completely banned their use. Service providers typically charge 1-3% for this type of service. These services seem to be declining in popularity as new options emerge, which are not just limited."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mobile Wallet"
            description="Mobile wallet is a cryptocurrency wallet installed on a smartphone. Mobile phone bags are usually 'hot' bags, which means they are connected to the internet."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Modern Portfolio Theory (MPT)"
            description="Modern Portfolio Theory (MPT) is a mathematical framework used to build an asset portfolio to increase the expected return based on a certain level of risk. MPT is considered an official extension of investment diversification (which holds a variety of assets within the portfolio). Its framework states that the risk and return of an asset should not be assessed on its own, but rather on how it contributes to the overall portfolio of risk and recovery potential. Well-known economist Harry Markowitz gave the MPT an idea in a 1952 essay that later won him the Nobel Memorial Prize in economics."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Moment (NBA Top Shot)"
            description="Occasionally immovable tokens (NFTs) are developed by the Dapper Labs NBA Top Shot collection platform that contains a video clip highlighting a particular game and other related information, such as statistics about a particular game and player featured in a video clip. . Each NBA season has a unique serial number and a fixed amount, and uses the Flow blockchain. Times vary depending on shortage and quantity. As of spring 2021, there are five categories of Top Shot Moments NFTs including Genesis Ultimate, Platinum Ultimate, Legendary, Rare, and Common."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Monero (XMR)"
            description="Monero is a blockchain focused on Proof of Work Processes created in 2014. Its privacy features include anonymous transaction values ​​and addresses of trading groups. Its native property is XMR."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Monetary Authority Of Singapore (MAS)"
            description="The Singapore Monetary Authority (MAS) is Singapore's largest bank and chief financial officer. MAS is responsible for ensuring compliance, stability, and efficiency of the Singapore banking system, investment, monetary policy, insurance, securities, and the financial sector as a whole - and the issuance of the Singapore Dollar (SGD))."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Monetary Policy"
            description="Monetary policy refers to economic policies made by government to ensure sustainable economic growth and economic prosperity. Monetary policy is usually made by the central bank to regulate the supply of money, interest rates, inflation, and other parameters that shape the country's economy. Monetary policy can also be integrated with major regions of the country such as the European Union, using the European Central Bank (ECB) and other regions to ensure the long-term economic prosperity of the European Union."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Money Services Business (MSB)"
            description="Money Service Business (MSB) is a legal term used to describe any company that transfers or converts money, checks money, trades in foreign currencies, conducts payments and remittance services, and other related services. Major MSBs around the world include PayPal, Western Union, MoneyGram, Revolut, and TransferWise, among others. MSBs have strict regulatory and compliance guidelines that they must comply with, including the Know Your Customer (KYC) and Anti-Fraud (AML) procedures to avoid potential fraud, theft, and misappropriation by malicious players. MSBs provide similar services to banks and must have a valid money transfer license."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Money Transfer License"
            description="A transfer license is a license certificate issued by international payment service providers or financial services businesses (MSBs) obtained through regional, international, and national regulatory bodies that allow users in various locations to send and receive various types of fiat currencies. In the United States, the Money Transfer Regulators Association (MTRA) and other key regulatory bodies oversee the legal framework for MSBs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Money Transfer Regulators (MTRA)"
            description="The Money Transfer Regulators Association (MTRA) is one of the key regulatory bodies - such as licensing, Know Your Customer (KYC), and anti-money laundering (AML) guidelines - that the United States Mortgages (MSBs) must compatible with it to work. MTRA operates internationally, nationally, and nationally to provide a transparent currency exchange system for US and global users, albeit with a strong focus on the United States."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Moon"
            description="If an asset increases significantly in value over a relatively short period of time, the asset is generally said to be impaired. The term is very common in cryptocurrency markets, where many crypto assets have shown volatile behavior, and where other assets are known to not only lose value (loss of a large percentage of their original value) but also monthly in price (increase in value. compared)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Moore's Law"
            description="Moore's law is an assertion made by Gordon Moore in 1965 that due to technological advances in microchips, the power and speed of computers will double every two years, as well as a reduction in connection costs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="More Viable Plasma (MoreVP)"
            description="More Viable Plasma (MoreVP) is a variation of Plasma, Layer-2 Ethereum measurement technology presented by Vitalik Buterin and Joseph Poon. MoreVP combines what works together and guarantees it off the blockchain before restoring it in bulk to be verified by Ethereum. The OMG Foundation uses MoreVP."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Motoko Planning Language (DFINITY)"
            description="Created by the DFINITY Foundation, the Motoko programming language was designed to create blockchains (subnets), duplicate applications (dApps), and other tools in the Internet Computer (ICP) protocol. Although based on WebAssembly (WASM) programming language, Motoko was designed to be more flexible, secure, and more efficient than the original WASM language. Motoko has also integrated into WASM due to its reverse web flexibility and browser functionality. This also allows any language that can integrate into WASM the ability to encrypt the ICP protocol."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="MOVE Contract (FTX Exchange)"
            description="MOVE Contracts on the FTX crypto exchange track of how the underlying asset moves, up or down, at the end of the specified period. In other words, the trader is betting on the underlying asset. MOVE Contracts are available with daily, weekly, or quarterly expiration. MOVE Contracts serve as futures contracts, except that they expire on the value of the goods delivered, rather than the value of the asset itself."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Moving Average (MA)"
            description="Movable Measurement (MA) is a special method used to measure different data points by generating a series of intermediate measurements of sub-data sets related to the full data set. In the financial context, the MA index is commonly used for technical analysis (TA) to help predict trends and market direction, asset prices, return on investment, and other types of data. The moving average has many variables, including Simple Moving Average (SMA), Cumulative Moving Average (CMA), and Weighted Moving Average (WMA), which are used to measure different types of data in a predetermined format."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Moving Average Convergence Divergence (MACD)"
            description="Moving average convergence divergence (MACD) is a trading index used in technical analysis that uses moving averages to measure asset dynamics."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mt. Gox"
            description="Mt. Gox was a medium-term cryptocurrency exchange that lost more than 700,000 bitcoin in a 2014 robbery. Created by Jed McCaleb in 2010, Mt. Gox was sold to Mark Karpeles in 2011 who was running it from Japan. Mt. Gox filed for defamation and suspension following the 2014 robbery. Debtors are still waiting to be compensated for their lost money."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multi-DLT (mDapp) (Quant) application"
            description="Multi-DLT (mDapps) applications are area-based applications (dApps) that run the Quant’s interoperable Overledger solution. MDapps allows the deployment of applications on many different types of blockchain platforms simultaneously, allowing for the additional customization required for multiple applications. Multi-DLT applications are designed to be simple and easy and with little technical challenges for software developers to use. According to Quant, mDapps is truly collaborative due to its ability to be used in any distribution platform (DLT) system and its ability to be edited in almost any programming language."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multi-Factor Authentication (MFA)"
            description="Multi-factor authentication (MFA) - which includes two-factor authentication (2FA) and a few other related methods - is an electronic verification method in which the device user is given access to a website or application only if they have successfully presented two or more data. types (or features) as a verification method. MFA usually requires the user to continue verifying his or her identity after entering the account password (for example, by entering a random code generated by a secondary device or application). The purpose of the MFA is to reduce the risk of various cybersecurity threats in the authentication process that may result from robbery or personal error."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multi-Hop Routing"
            description="In the context of the Orchid protocol, ‘hops’ refers to the way data is transmitted, especially encryption and encryption of web traffic via virtual private network (VPN). Multi-hop routing refers to the traffic route through multiple VPNs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multi-Ledger (MLT) (Quant) Token"
            description="Multi-Ledger Tokens (MLTs) special tokens are employed on the Quant Overledger platform for blockchain interaction. MLTs are used to create stablecoins that are compatible with various blockchains, as well as to support central bank digital transfers (CBDCs). Commonly used MLTs are employed by banks, FinTech businesses, and various low payment platforms and markets. MLTs are also used for cross-border payment services as well as trading and investing in consortium blockchain programs. MLTs allow the transfer of ownership between different businesses, which means that transactions are recorded and stored throughout their life cycle, thus creating a source of truth that can be secured confidentially."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multi-Sig) Wallet with multiple Signatures"
            description="A multi-signature wallet (multisig) is a wallet that requires multiple keys to sign a task before it can be done. Non-multisig wallets require only one signature to authorize the transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Multiplayer Online Battle Arena (MOBA)"
            description="Multiplayer Online Battlefield (MOBA) is a type of video game that is very similar to real-time strategy games (RTS). MOBA usually involves teams competing in a large battlefield with computer-assisted units supporting each side. The goal of rival factions is to defend their territory and to overthrow their enemies by eliminating opposition members and taking their place. The World of Warcraft Franchise is often regarded as a separate set of RTS or MOBA games."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mutual Fund"
            description="A mutual fund is an investment fund made up of large amounts of money collected by multiple investors to invest a large number of types of assets including stocks, bonds, and derivative instruments. Joint funds are managed by investment management professionals whose job it is to distribute the assets of the fund in order to produce a strong return on investment for the fund's investors. Joint investments enable individual investors to access a professional portfolio of various assets that allow each shareholder to contribute equally to the profit or loss of the entire fund."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Mutual Insurance Company"
            description="A joint venture company is an entirely owned insurance company. The main goal of a shared insurance company is to provide care for its members, who also play a key role in managing the company."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Mutualized Proof of Stake (MPoS)"
            description="Mutualized Proof of Stake (MPoS) is a compact method used by the Qtum blockchain. Unlike Stick Proof, MPoS divides the reward for each block between a blockchain manufacturer and nine previous manufacturers. The block manufacturer receives 10% of the block revenue immediately, and the remaining 90% is distributed after waiting 500 blocks. This is done to eliminate malicious network attacks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="My Story™ (VeChain)"
            description="My Story™ is a blockchain-based digital authentication solution developed by VeChain and DNV (formerly DNV GL). My Story ™ helps consumers to scan a product QR code to learn about product life cycle and information related to quality, social issues, environment, and ethics."
          />
        </Col>
      </Row>
    </section>
  );
}

export default MSection
