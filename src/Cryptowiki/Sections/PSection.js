import React from "react";
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const PSection = () => {
  const pSectionRef = useNav("P");

  return (
    <section ref={pSectionRef} id="pSectionContent">
      <div className="titleWrap">
        <p className="title-line">P</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Paper Wallet"
            description="A wallet is an offline device (a piece of paper) that includes a user's private key, a public key, and a wallet address used to store and exchange cryptocurrensets (when connected online to an exchange or blockchain). Paper wallets were mainly used when Bitcoin was first created but are currently rare and have been replaced by hardware and software wallets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parachain (Polkadot and Kusama)"
            description="Polkadot independent blockchain-based Parachains are connected to and exit from the Polkadot main Relay Chain Parachains network which can also be viewed as charts (they have all the blockchains within them). Parachain operates in relation to Relay Chan and analyzes related transactions using sharding and displays very fast transaction times. Parachains are able to manage their own blockchain-based assets assets within their private network and control their payment processes by using the parachain slot by attaching to the main Relay Chain. Parachain also operates on Rococo Relay Chain on the Kusama network (both Polkadot and Kusama networks have the capacity to use 100 parachains with their compatible Relay Chain)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parachain Slot (Polkadot and Kusama)"
            description="The parachain slot is a component similar to the Polkadot Relay Chain dock (or Rococo Relay Chain in Kusama) designed specifically for the parachain to connect to a central network control center. In both Polkadot and Kusama networks, there are 100 parachain spaces available, but they are a rare resource because there are hundreds of blockchains competing for one. The team is awarded a parachain slot for the successful outcome of the parachain slot auction. As a result, the winner can become a member of the 100-parachain master Polkadot network (or Kusama network), which allows all blockchains within the network to communicate instantly."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parachain Slot Auction (Polkadot and Kusama)"
            description="Parachain Slot Auction is a process that allows potential blockchains to compete with each other in hopes of securing a parachain location in the Polkadot Relay Chain or Kusama Rococo Relay Chain, rental periods between 6 months and 2 years in length. These lease periods can be extended longer by re-election. To protect the parachain slot, potential parachains must bind or attach KSM or DOT coins within the authentication area to Polkadot or Kusama networks. In Polkadot, parachain slot auctions take place in the main Polkadot Relay Chain, and in Kusama, they take place in the Rococo Relay Chain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parallel Augur (ParaAug)"
            description="Parallel Augur (ParaAug) is a program designed to enable the use of two different user environments (UIs) - two different Augurs - to allow for different DeFi and predictions of Augur platform market usage. Clearly, there is one Augur for ETH (AugurETH) and one for DAI (Aug v2). AugurETH is a similar Augur v2 deployment that supports commercial operations and manages its order books. ParaAug infrastructure will also support future deployments of Augur Automated Market Maker (AugurAMM), Betting Exchange UI, and Layer-2 or offline trading."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Similar or Similar Similarities"
            description="Parallel processing is the process of processing data in a consistent or side-by-side way on a blockchain network (or using other types of computer network infrastructure) to perform multiple calculations at once. Concurrent processing is often used in sharding and other methods to increase transaction processing and measurement times on a computer network. Similarity is another name for the same process, and it is becoming increasingly the paradise of computer architecture. Similarities are often achieved using a multi-core processing system that uses several critical processing units simultaneously to maximize system performance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parent Chain"
            description="Parental chain is a system used to define relationships between key chains and various sub-networks or sidechains in the blockchain network ecosystem. Parent chains are often large Layer-1 blockchain networks responsible for not only maintaining network compliance, but also using smaller blockchains over it."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Parity Technologies"
            description="Parity Technologies is a blockchain development firm focused on the development of distributed computer platforms and applications designed to empower the next generation of services provided by non-governmental organizations (NGOs), large businesses, cooperatives, governments, startups, and more. Parity focuses on creating solutions that utilize state-of-the-art cryptography and compatibility structures designed to provide improved balancing, security, improvement, and collaboration. Parity Technologies has directly linked (and is part of its owner) Web3 Foundation, Polkadot, and Kusama."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Participation Node (Algorand)"
            description="Sharing Nodes are the most powerful nodes that form the Algorand blockchain network and are responsible for using Algorand's Pure Proof of Stake (PPoS) compliant approach. Any network participant can participate in the proposed and voting process by installing ALGO and generating a valid participation key to become a Partner Node. Algorand’s PPoS consensus approach uses a two-stage blockchain process that involves nomination and voting. Collaborative Nodes connected by another type of Algorand network nodes - Relay Nodes - facilitate communication between the participating nodes and do not directly participate in nomination and voting."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Passive Yield"
            description="Fixed yield is any type of investment income; however, the term usually refers to investments held over the medium to long term. Especially in terms of blockchain technology and crypto investing, a continuous yield is seen when an investor buys cryptocurrency with a certain amount of investment value (for example, by buying ETH or BTC in fiat currency like US dollars) and earning interest. in that crypto over time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Password"
            description="A password is a special type of password that is created as a systematic sequence of words, used to access a particular account, device, or system. Since the entry phrase is usually made up of individual matching words instead of an obscure series of letters, numbers, and symbols, it is often easier to remember than random passwords, although the entry provides the same — and sometimes even higher — security if used properly. . Within the blockchain field, login terms are often used as a defense mechanism that helps users protect their cryptocurrency assets by reducing the risk of account hacking and / or unauthorized third-party access."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Password Manager"
            description="Password Manager is an online application that stores and manages user passwords. It may also generate and obtain complex passwords."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Payment method"
            description="Within the Stellar blockchain technology framework, payment method refers to payments that are sent in one currency and received in another (for example payments sent in USD and received in EUR). Road payments are processed through the Stellar's decentralized exchange (DEX), are inherent in nature, and are processed as a single function to reduce the risk that the end user will receive an unwanted asset. Remember, the method is a special type of trade, or trading series, that exists in the Stellar SDEX order book (the order book is a list of orders for the purchase and sale of certain goods)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pattern (Technical Design)"
            description="In charting technical analysis (TA), the pattern is to measure the price of an asset operating differently. Technical patterns vary as commodities themselves and use different levels of support and resistance, trend lines, and technological structures such as flags, triangles, wires, channels, and more. By studying and identifying patterns, traders use a few data points to predict a possible price movement of an asset, in the hope of maximizing profits. Patterns are also used to identify specific styles of technical indicators that form a large part of technical analysis."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pattern Day Trader (PDT)"
            description="Pattern Day Trader (PDT) is a trader’s control system that trades more than four trades a day during five consecutive business days. The appointment of PDT places certain limits (restricting extreme risk and risk-based trading) on ​​the trader's trade and may result in the trader being barred from trading for up to 90 days in order to remain compliant with the NYSE (New York Stock Exchange) regulations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pax Dollar (USDP)"
            description="Formerly known as the Paxos standard (PAX), the pax dollar (USDP) is an ERC-20 stablecoin backed by a 1: 1 ratio to the U.S. dollar. Created by Paxos Trust Company - which also issues Gemini dollars (GUSD) and pax gold (PAXG) stablecoins - all USDP is backed by proven dollar reserves. The parent company Paxos is a Trust Chartered company that complies with the requirements for financial services operating in the United States."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="PAX Gold (PAXG)"
            description="PAX Gold (PAXG) is an ERC-20 stablecoin designed to help investors maintain the benefits of buying gold without hindrance to the traditional gold mining process. Each PAX Gold item is marked on a 1: 1 scale in one troy ounce (t oz) of 400 London Good Delivery gold bar stored in Brinks Security vaults in London. PAX Gold is backed by the London Bullion Market Association-accredited (LBMA) gold bars and is fully usable with real, portable gold."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pay train"
            description='A pay train is a type of digital infrastructure designed to transfer money from one person or business to another without using a bank account (although payment methods can be linked to a bank account). There are many different types of payment methods based on FinTech, including: Credit cards like Visa or Mastercard,
                Payment service providers such as PayPal or Venmo,
                Blockchain network agreements,
                The concept indicates the proximity of the user and the payment sent or received. The "remote" side of the job is the "hidden" part of the job, and the "immediate side" is made up of whoever sends the work.'
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peer to Peer (P2P)"
            description="Peer-to-peer (P2P) network structure as it relates to blockchain technology is generally considered to be distributed and designed to work in the best interests of all parties involved, rather than primarily benefiting one central business. The peer-to-peer blockchain network works by connecting different computers (or nodes) together so that they can work seamlessly. This process creates a computer network that is resistant to research, open, allowing important data and other functions to be shared across the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peer-to-Peer (P2P) Borrowing"
            description="Peer-to-peer (P2P) lending is the process of lending money (or crypto, and other assets) to an individual or business (usually without an intermediary mediator) through a separate online service provider that compares lenders and borrowers. Peer-to-peer lending service providers often offer their services in a cheaper and more transparent way with a little more performance, compared to a regular financial institution. This often results in better lenders and borrowers as a whole. Recently, P2P borrowing has become quite common in the blockchain industry with the apparent rise in the DeFi sector."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peer-to-Peer (P2P) market place."
            description="The blockchain-based peer-to-peer (P2P) (P2P) market is a marketplace that is often more fragmented and transparent than its many traditional competitors. Peer markets are designed to work in the best possible way for all parties involved, rather than benefiting largely from a single central business. The peer-to-peer blockchain market works by connecting buyers and sellers to create an open, global, inclusive market space that can be effectively utilized by all stakeholders. Many blockchain platforms have built P2P markets that operate within their blockchain network agreements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peer-to-Peer (P2P) Network"
            description="Peer-to-peer (P2P) network structure as it relates to blockchain technology is often regarded as intimidating and is designed to work in the best interests of all parties involved, as opposed to greatly benefiting one central business. The peer-to-peer blockchain network works by connecting different computers (or nodes) together so that they can work seamlessly. This process creates a computer network that is resistant to research, open, allowing important data and other functions to be shared across the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peer-to-peer (P2P) trading"
            description="Peer trade takes place directly between two or more network participants in a separate, low-risk manner; usually on a blockchain-based exchange decentralized (DEX) or a crypto wallet. This process removes the average person who allows domain users to pay less or zero in order to use the service. During this time, many crypto wallets make quick exchanges within a single wallet interface that allows the user to quickly switch between different types of cryptocurrencies and fiat currencies. However, the lack of liquidity (both mobile phones and DEX), as well as the limited user base are significant barriers to the widespread use of this technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peg"
            description="Anchors are a method that combines the value of one cryptocurrency with another on an equal basis of 1: 1. Pegs exist primarily to facilitate the exchange of non-identical assets, currently restricted due to reliance on different blockchain protocols. Pegging also allows users to buy and sell certain products denominated in a 1: 1 ratio to their native goods (for example, the BEP2 Binance Chain version of bitcoin is connected to the first bitcoin version from the Bitcoin network) without having to wait a while long to secure or pay a high transaction fee to transfer goods between blockchains."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peg (Stablecoin)"
            description="A peg is a predetermined amount used to establish the exchange rate between two assets. In general, most assets are volatile in the market, but stablecoins are subject to assets such as the US dollar to maintain price stability and to protect investors from market volatility. Usually, stablecoins are given a hard peg or a soft peg. Stablecoins usually keep their anchor by squeezing (burning) or purifying (grinding) the amount of supply that is often the result of large economic factors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Peg-Zone"
            description='The peg-zone is a machine used by the Cosmos ecosystem to allow blockchain agreements - such as Bitcoin and Ethereum - that may lack a settlement end (for example because they use possible endpoints), to work with the Cosmos Network. Typically, Cosmos uses the Inter-Blockchain Communication protocol (IBC) to interact with other chains. However, IBC can only be used effectively if both the first chains and the destination are able to achieve the end of compensation. To solve this problem, anchors are built to serve as a translator or "gadget." Peg-zones usually use a two-way anchor, which means that goods can be sent between chains in both directions.'
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pension (Individual Retirement Plan)"
            description="An annuity, an individual pension plan, or an individual pension plan, the amount of money that is regularly deposited into an individual account - usually through an retirement account (IRA) - by his or her employer, usually for many years to save for his or her retirement savings. Pension plans vary widely in nature, but are usually made on a regular basis, equal monthly payments and start at a certain age (usually 65) after a person has chosen to retire permanently."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Permaweb"
            description="A permaweb is a human-readable layer built on the Arweave protocol. Permaweb allows you to view a collection of webpage and webpage applications (dApps) hosted by Arweave. The permaweb is intended to be visually similar to the normal web and can be accessed through standard web browsers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Permissioned Ladger (Allowed Blockchain)"
            description="An approved login or blockchain is a blockchain program that uses an additional security system that contains an access control layer that only allows certain groups to use the network. This means that network access is usually restricted unless the user has a key authentication key or password, which means that certain tasks can only be performed by certain network participants with pre-determined access. Due to this structure, licensed domains are very different from social blockchain programs such as Bitcoin and Ethereum networks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Permissionless Innovation"
            description="New licensing is a phase that identifies the division of blockchain-based network agreements and blockchain technologies. No permissions, as the name suggests, mean that users and developers of the network do not need permission from anyone to operate and run network services. Theoretically, anyone can use an unauthorized network without access provided by the central authority. Open public blockchains are generally not licensed by nature, while private blockchain systems are closed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Permissionless Ledger (Unauthorized Blockchain)"
            description="A licensed ledger or an unauthorized blockchain is a blockchain program that can be used by a network participant without obtaining permission from the central authorities or any other organization. Unauthorized licenses are usually built in an open and personalized way using their cryptocurrency. Permitted networks are peer-to-peer (P2P) networks and are generally regarded as open, public, unlimited, neutral, research-resistant, transparent, and consistent. Unauthorized blockchains are blockchains with the opposite permission where users must have a special permission to use the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Perpetual Swap"
            description="A permanent exchange, or a non-permanent future contract, is a derivative trading tool that allows an investor to buy or sell an asset at an unspecified future time. Endless exchanges are usually paid out of expiration date on the expiry date when the investor opens a position. When you open a position, payments are sometimes exchanged between the owners of both parties to the contract (both long and short) meaning that the direction and amount of the payment is based on differences in the underlying asset and the contract amount, and, if applicable, the equity difference between the two parties."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Phishing"
            description="Phishing scams are a common computer-based method used to obtain sensitive information such as email addresses, secret key addresses, cell phone numbers, and credit card details from an unsuspecting victim. Fraudulent theft of sensitive information is carried out by malicious foreign companies that pretend to be trustworthy organizations such as their counterparts or law enforcement agencies to gain access to the accounts. While the crime of stealing sensitive information is a common form of cybercrime, it is more a matter of self-confidence than fraudulent crimes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Portable bitcoins"
            description="Portable bitcoins are usually imitation coin coins (designed to look like Bitcoin) with secret keys hidden under a flawless sticker or hologram. They can be purchased pre-loaded with a certain amount of cryptocurrency or without any digital value at all. Casascius Coins business has issued the first famous coin that represented Bitcoin which was widely traded in the global blockchain community. Currently, you may purchase other tangible currencies that represent and support other cryptocurrency assets (such as Litecoin, Ethereum, and Bitcoin Cash). The existence of these physical assets should also be considered a blockchain activity because the recipient now has a secret key under the sticker with proof of coinage. Generally, tangible coins representing different types of cryptocurrency assets are used once, and once used, they cannot be reused."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Plaintext"
            description="Plaintext is an information format that refers to non-formatted text in a computer environment that can be understood or translated by an individual or computer-based software program. When it comes to security, encryption on the Internet should be accompanied by an additional layer of protection to maintain confidentiality. The encryption process using an encryption algorithm or cipher converts plain text into ciphertext, which is encrypted unreadable data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Plasma Chain"
            description="The plasma chain is a solution that measures the Layer-2. The plasma series is a limited type of sidechain where users can withdraw their funds and return to the mainchain in case of errors or security breaches."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Platform"
            description="A blockchain platform usually refers to any type of distributed blockchain network that can be used to develop, create, and deploy applications or other related technologies on it. 'Platform' is one of the many words that can also be used to refer to a blockchain network protocol itself, but this term usually refers to the network's ability to handle other network resources built and built to function as a network extension. the network itself."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Platform-as-a-Service"
            description="Platform-as-a-Service (PaaS) or Application-Platform-as-a-Service (aPaaS) is a component of cloud computing infrastructure such as Software-as-a-Service (SaaS) that allows customers to create, treat. , and use cloud computing and hosting applications. PaaS provides a simple and effective way to launch cloud-based applications without the need for application developers to develop and implement individual applications. Platform-as-a-Service (PaaS) cloud computing can be designed for a variety of computer network applications, including the use of distributed and cloud-based blockchain cloud solutions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Play to Win"
            description="Play-to-earn defines the type of play in which users receive reward rewards for participating in continuous gaming. In general, gaming games for profit allow players to receive in-game rewards that can be exchanged for other real-world assets (such as BTC, USD, and other fiat currencies). In the blockchain context, play-to-earn games allow users to collect non-affirmative tokens (NFTs) in the form of new characters and items that allow users to progress in the game more quickly and effectively, further promoting their continued participation. Play-to-earn is gaining popularity with platforms like Axie Infinity and Sandbox."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Plutus (Cardano)"
            description="Plutus Stadium is a smart contract development platform designed by IOHK and the Cardano blockchain ecosystem. Plutus' smart protocols include both computer code in a blockchain-enabled chain, as well as an off-chain or client code running on a user's machine. Plutus' clever contracts are written in Haskell's programming language."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Point Of Sale (POS)"
            description="Sales area (POS) may refer to the physical or visual location of a customer purchasing an item, or a real-time sales device (usually a special hand-held or stationary device located in front of the store). POS systems, location, and configuration enable advertisers to target customers with new products and service offerings and gain a wealth of information about customers and prospects."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Politeia (Determined)"
            description="Politeia is an integrated, systematic management system used by Decred for the purpose of promoting a free communication environment. Politeia is designed to encourage users to share ideas and provide a voting framework for use."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Polkadot"
            description="Polkadot is a blockchain network protocol designed to allow independent blockchain networks to connect and transmit data between each other through interactive chain cross-chain technologies. Polkadot was founded by former Ethereum founder and Chief Technology Officer (CTO) Drs. Gavin Wood. Polkadot uses the GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement) and BABE (Blind Assignment for Blockchain Extension) to create an integrated Stake Assignment Process (NPoS). Polkadot uses DOT as the network's original asset, which is used for signing, sending, and receiving transactions, administering administrative parameters, and performing other processes within the Polkadot blockchain ecosystem."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Polkadot Relay Chain"
            description="Relay Chain is the main protocol and the most powerful part of the Polkadot network. It is responsible for maintaining network compliance with the help of the GRANDPA combination and the BABE Nominated Proof-of-Stake (NPoS) compliance method. Relay Chain uses authenticators, parachains, compilers, fishermen, and selectors to ensure that the network always operates and is used as a central control center to connect to external blockchains through bridges and blockchain agreements based on Polkadot (parachains) ). Relay Chain also uses DOT assets to allow various areas in the ecosystem to operate efficiently and for other uses."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Ponzi scheme"
            description="The Ponzi scheme is a type of investment that is fraudulent or fraudulent, often characterized by promising very high returns and low risk to investors. Ponzi schemes usually operate by providing a return on previous investments with the proceeds of the latest investments. They often want to make the victims believe that the profits are from a legitimate business, when in reality the ‘profits’ are allegedly money taken from recent investors to create a profit profile among former investors. The Ponzi scheme and the pyramid scheme are related concepts. Ponzi schemes tend to end well when the flood of investment from new investors begins to die down."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="PoolTogether"
            description="PoolTogether is an open blockchain open source protocol that uses 'prize pool that you can lose'. The system works by allowing users to place their crypto in a swimming pool and earn tickets on exchange. If a user has tokens placed in a liquidity pool, they have a chance to win prizes. PoolTogether has created this model to encourage token owners to increase the total cost of protocol, as well as to allow project developers to earn revenue by borrowing consumer goods while preparing a prize rescue model."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Portfolio"
            description="An investment portfolio is a collection of investments that can have a variety of strengths such as cryptocurrencies, stocks, commodities, cash, stock exchanges (ETFs), and other assets. Traditionally, stocks and bonds may cover a large portion of an investment portfolio, but the direct allocation of different assets to each given portfolio is less than an individual preference. Variability, risk tolerance, and time limits are all important factors in compiling and adjusting an investment portfolio. Portfolios can be managed by its owner or financial advisor, investment business, or other financial institution."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Portfolio Manager"
            description="A portfolio manager is a person or group of people responsible for managing a client's investments. Portfolio managers work to reduce risk, apply investment strategies, and manage day-to-day trading with different types of investments. This may include cryptocurrencies, stocks, bonds, derivatives, and joint ventures, which are traded, or closed, or any other type of investment. Portfolio managers are often employed by banks, investment and commercial institutions, or other related businesses and work directly or indirectly with their clients."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Position Management System (PMS)"
            description="Caspian's Position Management System (PMS) is an algorithmic portfolio and position management system that allows users to manage their trading positions through multiple exchanges and wallets, monitor real-time and historical P&L data, and access other advanced metrics that simplify and improve trading. and the investment process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Position Trading"
            description="Positive trading is an investment strategy that prioritises long-term investment in assets. Instead of actively trading short-term daily fluctuations on a daily basis as a day trader, position traders hold assets for months and years and value continued growth. Among cryptocurrency investors, trading positions is called holding, or 'HODL' in crypto-colloquial terms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Post-Mine"
            description="Mining is a practice that creates new coins after the initial implementation of the blockchain project, but before public mining can take place. Mining usually takes place within the date of the summary of token production - where token rates are calculated so that newly created tokens can be released online or traded - but before the platform code is used and outsiders can dig out tokens. The post-mining process, like its pre-mining counterpart, has occasionally come under criticism for allowing developing teams to have a significant impact on the value of an asset and its metrics for token production."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Post-Quantum Cryptography"
            description="Post-quantum cryptography, also known as quantum-resistant or quantum-proof cryptography, is a form of cryptographic computing architecture that uses public key cryptography (PKC) and is characterized by the ability to prevent quantum computing attacks. At the moment, many experts in the field believe that existing computer systems cannot withstand quantum, however, the potential of quantum computing attacks designed to exploit current computer infrastructure is still a possibility. For this reason, further research and development of computer-based computer systems remains a top priority for cryptographers and computer scientists worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Post-Trade"
            description="Post-trade is a system of processes that take place after the purchase and sale of goods through the stock market, an online exchange, or a related investment service provider. Post-trade usually involves the specification and payment of investment assets, the provision of security investment services, and other related processes that allow the value chain to operate efficiently. Post-trade services are often complex and require market participants to adhere to strict rules, compliance, and legal guidelines."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Practical Byzantine Fault Tolerance (pBFT)"
            description="Practical Byzantine Fault Tolerance (pBFT) is a harmonious method designed to develop the Byzantine Fault Tolerant (BFT) harmonization method to fully protect against Byzantine errors occurring in distributed networks. PBFT was founded in the early 1990s by Barbara Liskov and Miguel Castro, and is used to maintain compliance with a wide range of distributed computer systems and blockchain platforms. PBFT is designed to operate on asynchronous systems, designed to be extremely advanced, and is intended to solve many problems related to the standard conformity methods of Byzantine Fault Tolerance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pre-mine"
            description="Pre-mining is a practice that generates a certain amount of blockchain project revenue before public sale takes place, usually provided to the developers and founders of the project. Pre-mining is like selling part of a company to existing founders and employees before the company goes public. Apart from pre-mine, the first coins of the project usually go to investors participating in the Initial Coin Offering (ICO) community. Pre-mining has sometimes been criticized for allowing founding groups to have a significant impact on commodity prices prior to the exchange list and initial release."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pre-Mining"
            description="Pre-mining refers to the mining of cryptocurrency assets (project creators and key software developers) before the project is publicly launched and its basic blockchain network protocol begins live. Pre-mining allows project developers to have a pre-designated fund, which is often used to ensure project length. However, early excavation can sometimes be seen as a controversial practice because project creators are able to own assets before setting a market price."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pre-sale"
            description="Pre-sale is owned by other blockchain businesses after the private sale is completed, but before the public sale, when a certain portion of the coin is sold to potential investors. These pre-sales are often held to give institutional investors, as well as small investment investors who miss out on private sales, the opportunity to donate. Usually family members and close friends of the project developers, as well as high-value individuals (HNWI), are given this opportunity to receive early funding before the Initial Exchange Offering (ICO) or similar public offering, such as the Intial Exchange Offering. IEO)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Predicting market"
            description="Predicting markets - sometimes called speculative markets, futures futures, event events, stock markets, or information markets - trading markets designed to bet only on the outcome of certain real-world events to be realized. Predictable market prices usually trade between 0 and 100%. Basically, market prediction is a way for speculators to predict the outcome of a particular set of data, event, or outcome they desire in the real world. Predicting markets can also bet on the outcome of future events with the exit trade using a very high rate, and other complex financial instruments."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Prediction algorithm"
            description="Predictive algorithm analytics is a software-based method that uses data mining, machine learning, and modeling technology to analyze the impact of current data on future outcomes. Today, forecasting algorithms are used by large companies such as Amazon and Facebook to effectively determine the most effective way to increase sales of products and services. Predictability algorithms are also increasingly being used to create digital personal knowledge and targeted strategies in a growing number of sectors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pretexting"
            description="Pretexting is a social engineering technique used in cybercrime where the attacker is often seen as an honest person such as a bank official, head of a company, or law enforcement officer through communication channels with the intent to defraud the victim. By pretending to be honest, attackers trick victims into sharing sensitive data or money, often through digital channels."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Price Acquisition"
            description="Price acquisition is the process of determining the exact value of an asset in a market place. This process is often used in futures and futures markets, or when an asset or category is new. In the event of an event that could affect the value of the asset - such as a major product release or an official move on a publicly traded company - the short-term price will change until the event is priced. Market reactions represent the period of price recovery. For investors and traders, this scenario often benefits people with more experience, knowledge, and access to changing market data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Price movement (Price action)"
            description="The price movement, or price action, is the process of price change over a period of time in a market. Price action forms the basis of market trading and chart links."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Price-to-Earnings Ratio (P / E Rate)"
            description="Receivable Prices (also known as P / E, P / E, or PER) are the corporate value proposition associated with a company's profit per share. The rating is used to determine the relative value of a company's shares, and whether the share price is currently too high or too low. Revenue measurements can also be used to compare a company's current value with its historical value, or to compare different combined markets over a period of time. The P / E rating is a key tool for key analysts that determines the internal value of an asset."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Primary Market"
            description="The primary market is part of the money market that is responsible for the issuance and sale of securities based on shares directly by the issuer for the first time. The release of primary market stocks usually occurs through Initial Public Offerings (IPOs), private placement, preferred shares, and issuance of rights. Basic markets are often the first source of new securities sold to businesses, governments, and other organizations in order to obtain support for debt-based or equity-based securities. In contrast, secondary markets are often built on traditional stock markets such as the New York Stock Exchange (NYSE) or the NASDAQ."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Primary Network (Avalanche)"
            description="The Basic Network is a special subnet network (subnet) within the Avalanche blockchain ecosystem. All members of the custom subnet - or blockchains created on the Avalanche platform - must also be a member of the Basic Network that requires them to install 2000 AVAX coins. The main purpose of the Basic Network is to secure, secure, and facilitate the unique use of the Exchange Chain (X-Chain), the Platform Chain (P-Chain), and the Contract Chain (C-Chain) of the Avalanche network - three components. independent networks responsible for the various activities in Avalanche."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Primary Rate"
            description="The primary (primary) interest rate is medium and often commercial banks charge borrowers at very strict mortgage rates, usually large businesses. In the United States, the level of public finances, banks spending overnight loans to each other, is determined by the Federal Reserve. The fiscal level serves as the basis for the principal rate, while the principal rate serves as the starting point for many interest rates on commercial banks, including mortgages, personal loans, and small business loans."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Principal"
            description="The term principal can have many meanings in the financial industry, but it usually refers to the initial amount of money borrowed from a loan agreement. Example: If a borrower takes out a $ 500,000 loan, the principal is $ 500,000. The loan service fee is usually an interest rate based on a percentage calculated above the remaining principal."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Principal-Agent Dilemma"
            description="A major agent problem is a conflict of interest found between an individual, business, or group (principal) and the authorized representative party (agent). The issue is the result of unfair compensation in which the agent is encouraged to work for personal gain for the benefit of the principal, or those authorized to act independently. The key agent problem is felt throughout business, finance, and markets, and often requires a change in the system reward structure to balance priorities on both sides - which is a key motivational effort."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Privacy Policy"
            description="A private currency is a cryptocurrency designed specifically to help maintain the privacy of its users and the root network protocol - often by hiding your identity and transaction data during the exchange of information and token assets. Typically, blockchain-focused networks use anonymous evidence (usually zk-SNARKs) - a type of cryptographic evidence used to encrypt information in a way that ensures cryptographically consistent and error-free storage. Monero and Zcash are two well-known blockchain programs that focus on privacy and use such cryptographic evidence."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Private Blockchain"
            description="A private blockchain system is a distributed network that operates with significant differences in a public open blockchain protocol such as Ethereum or Bitcoin. Private blockchains are usually managed by a single entity and are used by large organizations - businesses and governments, for example - that require access to administration, research rights, and special privacy models. Although private blockchains are built with speed and balance in mind to provide for the needs of the customer organization, they are not isolated or protected by a distributed network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Private Equity Investment (PIPE)"
            description="Private Investment in Public Equity (PIPE) is a type of investment that does not involve the allocation of funds to publicly traded companies, who prefer to invest in private companies. Private equity investments are usually made by investment funds that directly buy, sell, and invest in companies that are not publicly traded in stock. Private equity investments are often dominated by large institutional investors, pension funds, capitalists, and other authorized investors because of their ability to influence the perceptions of the companies in which they invest - and the potential for greater profit than publicly traded companies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Key"
            description="Public key cryptography (asymmetric cryptography) is a special cryptographic system that uses long alphanumeric key pairs that only work when used in conjunction. Public keys represent a wallet address that can be shared with others. Private keys should be known only to their owner and give them access to the funds. The creation of these keys is made possible by the use of cryptographic algorithms based on mathematical problems to produce a one-way function."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Private Sales"
            description="A private auction is usually the first round of sponsorship given at the beginning of the blockchain prior to pre-sale and public sale, or First Offer Income (ICO). The purpose of private marketing is to give large institutional investors the opportunity to invest heavily to support early project development. While this practice may be criticized for its moderate approach, it is often an effective way for beginners to get the money they need to achieve their goals of sustainable development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Probabilistic Nanopayment"
            description="Probabilistic nanopayment is a special payment method used on the Orchid blockchain platform, a blockchain-based VPN provider. Orchid users purchase network bandwidth by charging instant microtransactions with the traditional Orchid (OXT) service token. Possible nanopayments are used as proxy functions until OXT payments are consolidated and resolved. Possible nanopayments play a direct role in Orchid's internal control system by reducing costs and increasing network speed and transparency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Process programming language"
            description="Process programming language is the language used to change network status by a process call (a series of programming commands within a single unit). Process programming languages ​​follow a completely different framework compared to functional writing or editing languages ​​because they are command-driven by complex semantics (mathematical interpretation of coding sequences) and are usually integrated using a conjunction instead of a default. Examples of process programming languages ​​include C, Java, Rust, and others."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Production Version (Sustainable Release)"
            description="A production version of software release, sometimes referred to as a stable release, is the final version of candidate (RC) that passed all tests to be submitted to the production phase (RTM). The production version may have some bugs and inefficiencies that need to be considered and fixed before the final release to the public. The production version precedes the RTM phase, the standard discovery phase (GA), and the golden master build (GM) phase. It is also common for a production version to have two different versions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Profit and Loss (P&L)"
            description="Profit and Loss (P&L) is a measure of how much money a person earns or loses by trading a person or institution. P&L is an important source of information for institutional investment companies. Incomplete P&L represents the amount of profit or loss a trader has taken since opening a position, and is a useful metrics for exit trade."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Profit and Loss Statement (P&L)."
            description="A profit and loss statement (P&L) is a financial statement that summarizes income, expenses, and expenses over a period of time. The P&L statement is one of the company's three main financial statements (the other two are the balance sheet and cash flow statement). The P&L statement provides data on the business's ability to generate revenue by increasing revenue, reducing costs, analyzing research and development costs (R&D), and other approaches. The P&L statement should not be confused with the P&L metric that may be displayed on exchange forums to evaluate investment performance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Programmability"
            description="Programmability is a computer programming capability that will be developed through a software development process (using a variety of programming languages) by encoding knowledgeable code to create computer-based or mobile applications, network infrastructure, and blockchain network protocols. Systematically, the blockchain network allows for the creation and automation of various methods with intelligent contract technology and other similar methods. In general, structured blockchain networks can offer much lower operating costs, better usability, robust security, and improved openness - which can lead to significant savings in time, money, and energy compared to other website solutions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of access (PoA) (Arweave)"
            description="PoA is a compliant form of Aweave Protocol. In order to mine or secure a new block, miners must provide cryptographic proof that they have access to a recall block, which is a block from the beginning of the blockweave history. For this reason, Arweave Compatibility algorithm is called Proof of Access (PoA), and is a variation of the proof of algorithm (PoW). PoA aims to promote long-term data retention because miners have to access old, random blocks from blockweave history to dig new blocks and earn mining rewards."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Burning (PoB)"
            description="Using the Proof-of-Burn (PoB) consensus method, miners deliberately destroy, or “burn,” tokens in order to obtain equal access to new blocks and to justify operations. The more tokens a miner burns, the more likely the miner will be selected as the next blockchain guarantor. By demonstrating their commitment to the network by deliberately destroying tokens instead of using computational resources and using powerful mining hardware, miners within the PoB set are able to operate at much less power than traditional PoW systems. PoB compatibility method is used by Counterparty, Slimcoin, Factom and many other blockchain systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Competence (PoC)"
            description="Proof of Capacity (PoC) is a consensus method that uses the available hard drive space on a miner's device to determine its mining rights and to ensure transactions rather than using collateral power. With a PoC machine, a list of possible cryptographic mining solutions is stored on the mining device's hard drive even before the mining operation begins, with larger hard drives capable of storing as many solution solutions as possible. The PoC is designed to reduce both the inefficiency of the old Proof of Work (PoW) processes and the collection of tokens that may sometimes arise from using multiple Stake Proof (PoS) settings."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Proof of Donation (PoC / PoCo)"
            description="Proof of Contribution (PoC) is a consensus-based method of donating money to a user on a network. This process works by using special algorithms that monitor the contributions of all network nodes during each sync cycle. A node with the highest contribution value in each cycle is given the right to generate the next block. Proof of donation is considered a consensus model divided into areas. Proponents of her case have been working to make the actual transcript of this statement available online."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Cover (PoC)"
            description="Proof Cover (PoC) is a compliant method used by Helium Network. As a form of Proof of Work (PoW), PoC relies on mines to achieve network compliance. However, miners in the Helium Network - known as Hotspots - double as a wireless Internet access point for Internet of Things (IoT) devices. Thus, PoC incorporates subtle ways to track the participation of nodes - or Hotspots - and their ongoing service delivery."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Goods Delivery"
            description="In the Crypto.com blockchain network architecture, Proof of Goods and Services is secured to verify that payment has been sent and received correctly between its Visa card and mobile wallet products in merchant accounts. This method is used by payment brokers and customers to ensure the validity of the payment process and to ensure the holding of the goods."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof Of Historical (PoH)"
            description="Historical Evidence (PoH) is a consensus approach to the Solana blockchain that incorporates time measurements in a blockchain blocker for the purpose of measuring and simplifying outgoing activity. While most blockchains operate without a timestamp, PoH acts as a country-wide clock that allows nodes in the Solana network to process transactions without providing processing power in resolving minor differences in time and order."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Value (PoI)"
            description="Proof of Value is a compatibility algorithm developed by the NEM blockchain protocol and is a variation of Proof Proof. The program allows multiple users to participate in the addition of new blocks to receive token rewards. Prizes are determined proportional to the school that measures the user's contribution to the network. Additionally, PoI promotes healthy ecosystem performance by preventing users from accumulating XEM assets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of duplication (PoRep)"
            description="Proof of duplication (PoRep) is one of the compatible methods used by the Filecoin network. Clearly, it is a process by which a storage miner proves in a blockchain protocol that you have created a separate copy of a specific piece of data on behalf of a network. This process is verified by SNARK's cryptographic authentication technology."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Service (Holochain)"
            description="Service authentication is a rare compliance method used for certain blockchain protocols such as Holochain. In the case of Holochain, Proof of Service does not work as a traditional blockchain compatibility method, because the distributed hash table (DHT) plays a key role in achieving network compatibility. In this case, the Proof of Service protocol is simply designed to ensure that once the peer work is completed, the service provider automatically issues the invoice and receives payment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Service (PoSe)"
            description="The DASH blockchain integrates a masternode system called Proof of Service (PoSe) because of the important services provided by masternodes to the DASH network. Proof of Service is a method within the DASH blockchain network that is used to determine whether a participating masternode provides reliable services to users who have donated coins to it."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Spacetime (PoSpacetime)"
            description="Spacetime Proof (PoSpacetime) is a compact method used by the Filecoin network. It allows the blockchain to prove its capacity, and in doing so, can cryptographically ensure that the entire file is stored in an uninterrupted manner at the agreed time. Spacetime Time Proof is made up of two different subsets: 1.) Spacetime Proof (WindowPoSpacetime) and 2.) Effective Spacetime Proof (WinningPoSpacetime)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Stakeholder (PoS)"
            description="Proof of Stakeholder (PoS) emerges as one of the most widely used blockchain modes available. PoS networks encourage participants to hold native coins in a network of verification notes. When a task is closed, validator nodes are randomly selected to validate block data, thus generating the next block, and earning native coins as a reward. A strong nodal network provides increased network security, durability, and integration capabilities. Stake proof systems also generally allow validator nodes to contribute to democracy in the platform governance by distributing voting on key updates and decisions. Although still relatively new, PoS networks have already proven to be faster and more aggressive than Proof-of-Work (PoW) blockchains, in addition to better power efficiency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Storage (PoStorage)"
            description="Proof of Storage (PoStorage) is a compatible algorithm used by the Filecoin network to prove that network participants actually provide the stated storage value they claim to be. This storage space is verified by the network through cryptographic authentication technology zk SNARK."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Proof (PoV)"
            description="Proof of Validation (PoV) is a unique Stake proof verification method that works to achieve consensus by checking the number of verification nodes. Typically, each location within the system keeps a copy of the transaction sequence in blockchain-linked blocks and a copy of user accounts identified by a specific public key or address. Accounts within the protocol bond or hold coins within verification notes. The amount of coins tied to a guarantor is equal to the number of votes a particular guarantor has, and can only be reduced when coins are opened on a later date."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Proof of Work (PoW)"
            description="Proof of Work (PoW) is a blockchain-compliant method that first became popular with the Bitcoin blockchain network. Proof of work experience depends on the mining system for network maintenance. Miners provided competing computer systems to solve the cryptographic complexities needed to verify altered data on a network, and were rewarded for doing so with a basic cryptographic token for doing so. Workplace blockchain systems are separate and secure compared to other network compliance methods, but they often struggle to achieve the network strength required to increase global business acceptance. Proof of Work is also criticized for their high power."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Prospectus"
            description="The prospectus, as related to finance, is the official disclosure document describing the investment contribution of potential buyers. It usually provides investors with information about a particular stock, mutual fund, bond, or other type of investment that describes the company's business model, financial statements, inventory, and other important information. The prospectus is usually distributed by subordinates and brokers to potential buyers with a pledge of First Aid (IPO)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Protobuf"
            description="Protocol Buffers, or Protobuf, is a Google-based system designed for organized data editing. The system allows the interface language of the interface to describe the structure of different types of data. This ensures that the various distributed network networks - such as blockchain programs - are able to integrate the use of multilingual software editing software to adapt to their growing needs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Protocol Layer"
            description="The protocol layer is made up of a basic blockchain alignment and nodes that form the basis of the entire blockchain. This layer can also include various types of external Layer-2 blockchain programs such as sidechains, as well as virtual machines. In general, the protocol layer refers to the basic configuration of all Layer-1 blockchain networks. The protocol layer is made up of geographical addresses, error reporting, interface recognition systems, network synchronization and status changes, as well as sending, receiving, and processing network operations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Provenance"
            description="Provenance is the historical record of ownership of any tangible or intangible assets. Public open blockchain systems use an appropriate structure to track the availability of assets due to their unrestricted, consistent, and research-resistant features."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Fake-Unknown (Fake Name)"
            description="Pseudo-anonymous is a program used to identify a user in a blockchain space with no visible identifier or information that can be directly linked to their real identity. The difference between anonymity and pseudonyms is that an anonymous person cannot be identified at all while a false person claims to be using a false name to hide his true identity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Address"
            description="Public address is an abridged version of a public cryptographic key. Public addresses are used to detect transactions via blockchain network protocols and are often used instead of public keys."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Public Blockchain"
            description="A social blockchain is a socially isolated system designed for public use and unrestricted, which means that it is possible for various people and organizations to join, use or contribute to network building. Public blockchain systems generally use cryptocurrencies, and most are considered to promote research resistance, unlimited, open, neutral, and public use. Social blockchain programs are different from private blockchain networks that are usually in the middle and closed, where network participants often need special access to use the basic platform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Key"
            description="The public key is to allow you to access cryptocurrency transactions. Coupled cryptographic code and secret key. Although anyone can send a transaction to a public key, you need a secret key to 'unlock' them and prove that you own the cryptocurrency acquired in the transaction. You can therefore share this key with the public, while your private key must be kept private. The public key you can find in action is usually the address, which is a shortened form of your public key."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Ledger"
            description="Community book refers to a shared site where related activities and information are recorded at multiple locations simultaneously to facilitate the exchange of certain information and other data. In a blockchain space, a public domain is usually an unauthorized, isolated protocol stored on a network of centralized nodes. The term ‘public book’ comes from an old record system that was commonly used to record public information such as agricultural commodity prices, news, and analysis."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Representative Node (P-Rep) (ICON Network)"
            description="Public Representative Node (P-Reps) is the most powerful node available within the ICON Network. P-Reps are responsible for network authentication and for creating blogs and other important processes. There are 100 P-Reps responsible for ICON Network governance (consisting of 22 main P-Reps and 78 second P-Reps). The position of the P-Rep is constantly changing and determining the voting power of ICX-focused members of the international ICON Network community (known as ICONists)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Sales"
            description="Public Sales, or Initial Outbursts (ICOs), are usually the third and final round of funding provided by the blockchain after confidential transactions and previous sales cycles. Public auctions are usually open to retail investors, large investors, and the general public. ICOs gained widespread popularity in 2017 - in line with the 2017 crypto bull market - and in the meantime, ICOs have recently switched to other forms of support including Initial Exchange Offerings (IEOs) and Initial DEX Offerings (IDO)."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Public-Key Cryptography (PKC)"
            description="The public key cryptography (asymmetric cryptography) is a special cryptographic system that uses pairs of long keys of letters and numbers that work together in pairs: public keys, non-distributed to others, and private keys, known only to their owner. Public keys are used to store cryptocurrencies in the blockchain. They are also used to send private money in accordance with the use of the private key corresponding to the public key. The creation of these keys is made possible by the use of cryptographic algorithms based on mathematical problems to produce a one-way function."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Public Key Infrastructure"
            description="Public key (PKI) infrastructure is a set of policies, processes, and combinations of hardware-software required to authorize users and devices online. Actually, this involves one or more trustworthy parties who digitally sign a digital document or shared space to verify that a cryptographic key belong to a particular user or device. PKIs play a key role in creating, managing, distributing, deploying, and maintaining digital certificates, and managing public key encryption."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pump and Disposal (P&D)"
            description="Pumping and dumping is a process that occurs when a trader or investment company buys a large amount of goods - sometimes illegally - and later promotes, or 'pumps' the company that originates with misleading information to attract unsuspecting investors to buy increases its value. Shortly thereafter, the seller or investment company “discards” the sale of the property at a much higher price, resulting in a loss to future buyers. In crypto markets, this often happens when a whale buys a large amount of a certain crypto asset for a large sum of money in order to significantly increase the pre-sale price after a huge profit."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Pure Proof of Stake (PPoS) (Algorand)"
            description="Pure Proof of Pack (PPoS) is Algorand's variation in the standard Proof-of-Stake (PoS) agreement process. It is a Byzantine Protocol protocol divided by an area characterized by a low entry barrier, requiring at least 1 ALGO to be a participatory site. PPoS strives for fast processing and conclusion processing. It uses random verification functionality to integrate its participation areas."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Put Option"
            description="The deposit option contract (opposite the call option) is a special contract sometimes used in trading other transactions. It gives the investor the right, but not the obligation, to sell the principal collateral (or cryptocurrency, or any other type of asset) at a specified price over a specified period. When the option contract expires, the investor may choose to sell the principal collateral or allow the value of the option contract to decrease to zero. Deposit options can sometimes be used in conjunction with call options to create unique trading strategies."
          />
        </Col>
      </Row>
    </section>
  );
};

export default PSection;
