import React, {useState} from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const HSection = () => {
  const hSectionRef = useNav("H");
  const [truncate, setTruncate] = useState(false);

  const removeTruncate = () => {
    setTruncate(!truncate);
  };

  return (
    <section ref={hSectionRef} id="hSectionContent">
      <div className="titleWrap">
        <p className="title-line">H</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Hack"
            description="Hijacking, or hacking, is a process in which a malicious cyber criminal hacks into a computer program or network that they have no legal access to. Hacks can be used to steal sensitive data, for financial gain, or for other malicious purposes. The cheating process may be used for legal purposes by various companies, private or public, to prevent cybercriminals from committing online crimes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hackathon"
            description="A hackathon is a competitive and time-sensitive event run by a company, consortium, or related business (for example in technology, FinTech, or blockchain industries). At these events, application engineers compete to produce programs, software programs, or entire computer networks. Hackathons usually offer a few different prize categories to the winning participants, and often have a specific focus - such as the programming languages ​​used, the type of operating system offered, or the number of specific people involved. The word Hackathon is a portmanteau of robbery and marathon."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hacker"
            description="Computer hackers often become aggressive players who use their programming skills and technologies to break into computer systems or networks to steal, destroy, or alter data. Cybercriminals are often hired by governments, big business, or other organizations for various purposes such as law enforcement agencies to obtain information that could lead to the arrest and sentencing of criminals."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hal Finney"
            description="Hal Finney was a well-known cryptographer and programmer who was employed by PGP Corporation for many years and eventually became known as one of the first pioneers responsible for building the Bitcoin network. Finney was the first recipient of Bitcoin transaction allegedly sent by Bitcoin creator Satoshi Nakomoto. Many have speculated that Finney himself was Satoshi Nakomoto, but during an interview just before his death in 2014, Finney claimed he was not Nakamoto. To this day he is regarded as one of the most influential software developers and the most iconic in our time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Half reduction"
            description="Half the reduction is when the income allocated to miners for digging new blocks decreases by 50%. Half-reduction events usually occur from time to time. For example, Bitcoin block revenue is halved every 210,000 blocks, and it happens almost every four years."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="HApps (Holochain)"
            description="Local application applications (dApps) built into the Holochain blockchain are called hApps. Holochain is a fully distributed open source network that allows anyone to create hApps. Many hApps have been developed to help users better manage their personal data by using strict privacy and security principles. Elemental Chat (P2P secure hApp) and HoloVault (integrated dashboard that allows users to control how their data is used) are two examples of hApps."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hard Cap"
            description="Hard cap has two different meanings related to blockchain. First, the hard cap shows the highest total offering of cryptocurrency ever built. For example, Bitcoin has a hard-capped supply of 21 million bitcoin (BTC). The second definition shows the maximum amount of money that will be given to investors during the First Income Offering (ICO) or funding cycle. For example, a new blockchain fundraising project could put a tight cap on 100 million tokens for initial sale, meaning that only 100 million tokens could be sold during the ICO."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hard Fork"
            description="Hard fork software update not backwards. In the case of blockchain technology, a strong fork occurs when new rules are introduced into a blockchain code that do not conform to the rules of the previous blockchain code. If network locations do not update their software, they will not be able to connect to the nodes to update their software. This sometimes causes the blockchain to split into two networks - one working on old rules and the other working on new, updated rules. For example, Bitcoin Cash emerged behind a strong Bitcoin blockchain fork."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hard Fork Combinator (HFC) (Cardano)"
            description="Cardano's hard fork combinator (HFC) is designed to slow down network updates without the need for system shutdown or basic chain reboot. It does this by combining pre- and post-fork blocks during the transition - with the ability to combine future blocks and their updates into a single compact asset or sales letter."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hard Peg"
            description="A solid anchor is a type of exchange rate model used in a currency to maintain its value relative to a fixed amount or basket of currencies. As they are related to the blockchain, a strong anchor is often used in stablecoins to keep its anchor in fiat currency like the American dollar, and often does not allow much flexibility to deal with economic shocks and volatility."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hardware Wallet"
            description="The hardware wallet is an unsecured wallet and is considered a secure way to store crypto in person. Normally looking like a USB stick, the hardware wallet is usually not connected to the internet but connects via USB or bluetooth to an online device when making a transaction. Although technically connected to the Internet at times, it is still considered cold - or offline - as activity is signed 'inside the device'. This means that the work is signed offline before it can be streamed to the blockchain online. Due to this security feature, the malware may not be able to sign these functions - or view your keys."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hash function"
            description="Hash functions algorithms take data of any size and convert it into a hexadecimal number of fixed length, or hash. Hash jobs are one-way jobs and cannot be distorted to reveal data input to create hash. The Bitcoin blockchain uses the SHA-256 hash algorithm in its transaction verification process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hash Rate"
            description="Hash level is a unit of measurement of the ability to make a computer a consistent method of proof of work. The level of hash is considered to be the number of trailers per second (TH / s), and it increases or decreases with the number of miners operating on the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hashi clock contracts (HTLCs)"
            description="Hashed Timelock (HTCL) contracts are smart contracts that facilitate atomic exchange. These smart contracts act as a 'visible lock box' that requires HashLock and a TimeLock key to unlock funds during an exchange."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Horses per second (H / S)"
            description="Horses per second (h / s) is a measure used to determine the level of hash in a blockchain network. This measure calculates the number of SHA-256 duplicate calculations performed on the Bitcoin blockchain network per second to facilitate cryptocurrency mining. The level of hash is important in determining how fast a blockchain can perform mining and transactions on a network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hashing"
            description="Hashing is the process of taking input of any size and using a mathematical function called a hash function to create output of a fixed size. Hash jobs are considered one-way jobs. Unlike encryption, intended to encrypt data as it flows over the network or stored on a device, hashing is used primarily to ensure the authenticity of the data. Hashing also provides important security functions in protecting network components such as passwords and sensitive information that can be stored as hash - results of hash operations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="HashLock key"
            description="During an atomic exchange, the HashLock key will distribute the exchange cryptocurrency only when both parties have signed their transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Haskell Programming Language"
            description="Haskell is a programming language suitable for a variety of applications in financial services and hardware design. Cardano is scheduled for Haskell."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Head & Shoulders (Technical Design)"
            description="Technically shaped head and shoulders include left shoulder, head, right shoulder, and neckline (drawn across the shape). This formation is caused by the rising and falling of the numbers forming two small 'shoulders' around a large 'head' in the center. The head and shoulders usually occur when the property is close to a price change. With the opposite head and shoulders shape, the opposite occurs when the pattern is defined, and the end result is usually an increase in price."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hedge"
            description="Fencing is where investments in collateral or assets are made with the aim of minimizing potential risk or loss elsewhere in the investment portfolio."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hedge (Hegic) Contract"
            description="Hedge Contracts are specialized smart contracts used by the Hegic protocol that allow for on-chain trading and the creation of option contracts. Like traditional options contracts, hedge contracts come your way with both strike and placement options."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hedge Fund"
            description="A hedge fund is an integrated investment fund that uses a complex combination of investment strategies and strategies to maximize its effectiveness. Hedge funds have a relatively low barrier to entry compared to other types of funds, but they are still reserved for accredited institutional investors and high value individuals (HNWI). Hedge funds can be expensive to gain compared to conventional investments, but they often show higher returns than the global market rate."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Heimdall Node"
            description="Heimdall node is a PoS verification node integrated with the Polygon pole contract system in Ethereum to enable Polygon's Proof of Stake (PoS) compatibility. This capability was made by building on the Tendermint compatibility engine with the signature system configuration and specific data structures. Heimdall nodes direct blockchain verification, block manufacturer committee selection, and testing Polygon sidechain blocks in the Ethereum network. The Heimdall layer comprises the blocks produced by Bor nodes into the Merkle tree and inserts the Merkle root sequence into the Polygon root series (one of any number of side chains created by Polygon)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hexadecimal (Hex)"
            description="In the field of mathematics and computer, the hexadecimal numerical system or the hex system is a numerical system that represents numbers using the 16 radius base. Instead of using the conventional method of representing numbers using 10 symbols, hexadecimal uses 16 Generally, the symbols “0” - “9” represent the numbers 0-9, while the “A” - “F” represent the numbers 10-15. Hexadecimal numbers are often used by computer system designers and software engineers to provide a personal representation of binary code values ​​for easy reading."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hidden snow"
            description="Hidden cap is a blockchain-focused fundraising strategy where the upper limit of the fundraising policy is kept confidential and known only to the blockchain team. Using other Initial Financial Offerings (ICOs) and similar equity contributions, proponents say hidden caps benefit small investors. This is because large investors often want the transparency of knowing the full value or supply of assets before they are willing to make a major investment. This usually does not encourage large investments as the hidden end affects budget decisions. Critics argue that hidden caps counteract the blockchain ethos of exposure, assertiveness, and dishonesty."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hierarchical-Deterministic (HD) Wallet"
            description="A hierarchical-deterministic wallet is a crypto wallet that generates new pairs of cryptographic keys or addresses from a key travel key for each cash receipt. This process is intended to improve the privacy of the wallet by distributing the complete cryptocurrency user balance held across several addresses. This feature also enhances wallet security by distributing private keys, while all previously used addresses remain usable and under user control."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="High"
            description="The high, or very high, value is one of the four key data points used on day trading in the stock market. The other three are called open, low, and closed prices - and the combined zones are known as OHLC. The maximum is generally considered to be the highest value earned during the 24-hour trading period since the market opened. Cryptocurrency markets are open 24 hours a day, all days of the year unlike the normal stock market, which is closed for trading on weekends."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="High-Frequency Trading"
            description="High frequency trading is an automated market trading method that uses algorithms to quickly buy and sell a large number of orders."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="High-Level Programming Language"
            description="Advanced programming language is a programming language with high levels of inaccessibility and is designed to be less complex and more efficient than standard languages. Advanced programming languages ​​are considered highly readable (usually English-based), widely treated for use with a wide range of platforms, and are easier to fix and maintain errors compared to their lower-level counterparts. Advanced editing languages ​​are also very useful, and often require the compiler to translate into machine-readable format. Many widely used programming languages ​​are considered advanced, for example JavaScript, C ++, Python, Java, C #, and WebAssembly (WASM)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="High-Net-Wrth Individual (HNWI)"
            description="A person with a high value (HNWI) is a person who has more than one liquid liquid, usually at least $ 1 million. These assets may include stocks, bonds, and commodities, among others."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="High-Yield Bonds (Waste)."
            description="A garbage can is a bond that carries a high risk of automation. Unwanted bonds are also called ‘high yields,’ because investors receive high interest rates as a return on taking out additional risk."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="HMAC-based One-time password (HOTP)"
            description="HMAC-based One-Time Password (HOTP) is a password-based password (OTP) algorithm that uses the Hash-Based Message Authentication Code (HMAC). HOTPs, such as one-time passwords (TOTPs), are used as a security measure for special authentication methods such as dual authentication (2FA). The HOTP method uses a one-time hash-generated password that allows users to securely access various websites via their cell phone using the authentication system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="HODL (Hold)"
            description="'Hodl' is a slang term meaning the confiscation of cryptocurrency assets, as opposed to termination. The name was taken from a post on Bitcointalk where the poster did not end well with the 'grab,' and later became a meme."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Home (March 2016)"
            description="Homestead was an Ethereum network development that took place in March 2016, after the first phase of the Ethereum network Frontier was decided to be stable enough to launch Homestead. Homestead has provided a lot of beta-level test experience like Frontier, next to the command line interface, more stability, and a few additional features."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Honest Geppetto Attack"
            description="Honest Geppetto attack refers to a computer network attack in which a criminal runs a large number of nodes over a long period of time in order to gain the trust of other nodes in a particular network. Once this is achieved, the attacker simply takes offline nodes with the intention of disrupting the entire network. The best way to prevent an Honest Geppetto attack is to build a large network that makes the attack less effective."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="HoneyBadger BFT (HBBFT)"
            description="HoneyBadger BFT (HBBFT) is a Byzantine Fault Tolerant (aBFT) network component designed to manage thousands of jobs per second (TPS) and scale over a wide area network. As a consistent BFT synchronization method, HBBFT does not rely on thinking about network connection time, which is beneficial in an environment where network nodes operate under very different conditions and connection speeds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Horizontal Relay-Routed Message Passing (HRMP)"
            description="Horizontal Relay-Routed Message Passing (HRMP) is a solution built into Kusama and Polkadot networks that help parachains communicate and share data. HRMP is finally said to be replaced by more advanced - but (since early 2021) it has not been completed - Cross-Chain Message Passing (XCMP) technology. HRMP is more computer-friendly compared to XCMP because it stores all the messages in Polkadot's Relay Chain. HRMP and XCMP are designed to help facilitate cross-chain communication and the transfer of assets and other information from blockchain regulation to another."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Horizontal Scalability"
            description="Horizontal alignment is a way to increase the trading power of a blockchain network by adding additional nodes to the network or development systems, rather than changing the protocol with code."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hostage Byte Attack (Storj)"
            description="Hostage byte attack is a perceived risk on the STORJ network where malicious storage areas may issue payments to users by refusing to transfer pieces of data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hot Wallet (Online)."
            description="The term hot wallet refers to a crypto wallet connected to the internet. The bag's assets are therefore stored online, unlike a cold wallet, stored in an offline location."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hotspot (Helium)"
            description="Hotspots are devices that run on the Helium Network both as special network nodes and as wireless internet sites. Helium Hotspots are manufactured by multiple vendors and are designed to be easy-to-use solutions to participate in the Helium Network and earn rewards for providing internet on various devices on the network."
          />
        </Col>
        <Col lg={6}>
          <div className="glossary-content">
            <p className="title">Howey test</p>
            <p className={!truncate ? "content truncate" : "content"}>
              The Howey Test is a series of four U.S. scenarios. Securities and
              Exchange Commission (SEC) use it to determine whether a financial
              transaction is considered to involve the purchase of collateral.
              The conditions are:
              <ul>
                <li>The work involves investment</li>
                <li>There are expected returns from investment</li>
                <li>Investing is a normal business</li>
                <li>
                  Any profits come from the efforts of a promoter or a third
                  party
                </li>
                <li>
                  If the work exceeds all four requirements of the Howey test,
                  it is legally considered to include the purchase of
                  collateral.
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
            title="Human-readable Agreement"
            description="Human-readable contracts are agreements written in human language (i.e. English) instead of code. This machine is important because it helps to allow the formation of computer system technology to better understand people."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Huobi (Cryptocurrency Exchange)"
            description="Huobi is a cryptocurrency exchange founded in 2013 by CEO Leon Li. Huobi provides services to both retail and institutional investors. It has a wrapped version of Bitcoin called Huobi BTC (hBTC), and has built its own blockchain called Huobi Eco Chain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Huobi BTC (HBTC)"
            description="A wrapped version of bitcoin introduced by Huobi Global, the HBTC crypto protocol generates ERC-20 representation for bitcoin (BTC). Supported by 1: 1 by BTC, HBTC is maintained by crypto and blockchain investment company Huobi."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Huobi Ecochain Blockchain (HECO)"
            description="The Huobi Ecochain blockchain is a related blockchain created by Huobi Group and its main cryptocurrency exchange Huobi Global. It is characterized by its cost-effectiveness, fast turnaround times, and Ethereum Virtual Machine (EVM) compatible features that allow developers to use Solidity-based smart contracts across the protocol. Huobi Ecochain is primarily designed to transfer token assets between different international distributed applications (dApps) and the various services offered by its region-specific Huobi exchange platforms. Huobi Ecochain provides the necessary technical infrastructure for the implementation of intermediate financial systems (CeFi) and fixed financial systems (DeFi) for both retail and institutional investors worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hybrid Blockchain"
            description="The hybrid blockchain network incorporates both your private and public blockchains. A mixed element of network architecture often involves a key public chain, in addition to secret side chains for a variety of purposes that connect back to the main chain and public access."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hybrid Exponential Minting"
            description="Hybrid exponential minting is a method of making coins used by the Filecoin network. In this model, 30% of the prizes are still distributed according to the defined decay model, where the block prizes become larger at the beginning of the protocol and decrease over time. 70% of prizes are still distributed in proportion to the growth in total network capacity. This model was developed to ensure the long-term performance of the Filecoin network because it rewards miners throughout the life cycle of the network, in proportion to the service they provide to the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hybrid Smart Contract (Chainlink)"
            description="Hybrid Intelligent Contract is a term used by the Chainlink protocol, referring to intelligent contracts that include both on-chain and off-chain features. An example of a mixed smart contract would be a financial application (DeFi) that relies on the external Chainlink pricing supply - integrating off-chain data into a smart on-chain contract structure. Hybrid smart contracts are thought to increase the performance of smart contract technology in a wide range of real-world applications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hydra (Cardano)"
            description="Cardano's Layer-2 solution developed by Input-Output Global (IOG), Hydra is designed to improve performance, reduce delays, and incorporate reduced costs - while still preventing Denial-of-Service (DoS) attacks. Hydra will achieve this by processing transactions outside the chain while also being comfortably integrated with the larger Cardano ledger to pay for the transaction. Hydra is scheduled for release date 2022 or 2023."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hyperinflation"
            description="Hyperinflation means a sharp increase, and often the immediate price in the economy resulting from the accumulation of cash. Political instability, weak economies, and loss of confidence in the financial system can lead to inflation, which could seriously affect national and economic finances."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hyperledger"
            description="The Hyperledger Project is an open blockchain project that was launched in December 2015 by the Linux Foundation. Hyperledger has received significant contributions from major global companies such as IBM, Intel, and JP Morgan to support collaborative development and continuous research of distributed ledger and blockchain technology. The goal of the project is to improve multi-industry collaboration to improve the blockchain to improve the performance and reliability of distributed ledger systems to support global business transactions. The Hyperledger project contains four key blockchain network agreements - Hyperledger Fabric, Hyperledger Sawtooth, Hyperledger Besu, and Hyperledger Iroha."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hyperledger fabric"
            description="Hyperledger Fabric is a blockchain-enabled blockchain protocol designed by IBM and other components designed to provide a modular framework that allows for precise node infrastructure specification, intelligent contract deployment (known as 'chaincode'), configurable compatibility, and blockchain services -agnostic. The Hyperledger Fabric is made up of Peer Nodes, Order Nodes, and Membership Service Providers (MSPs) typically using the Certificate Authority responsible for verifying the identity of the Hyperledger member and role types. Hyperledger uses JavaScript, Go, Java, and other languages. It can use many consensus methods, but is most commonly used with the Practical Byzantine Fault Tolerance (pBFT)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Hypertext Transfer Protocol (HTTP)"
            description="Hypertext Transfer Protocol (HTTP) is an application layer protocol that allows hypermedia data such as HTML to run online. HTTP is one of the basic Internet platforms and allows web pages, links, hypertext, data, and other connections to the various types of web servers needed to display information to users via a user interface (UI) or screen. HTTP includes not only HTML, but also other web-based applications such as JavaScript, cascade style sheets (CSSs), application programming interfaces (APIs), and Transmission Control Protocol (TCP) and Internet Protocol (IP) internet."
          />
        </Col>
      </Row>
    </section>
  );
}

export default HSection