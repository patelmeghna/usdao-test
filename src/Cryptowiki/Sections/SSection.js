import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const SSection = () => {
  const sSectionRef = useNav("S");

  return (
    <section ref={sSectionRef} id="sSectionContent">
      <div className="titleWrap">
        <p className="title-line">S</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="S&P 500 (Standard and Poor’s 500)"
            description="The Standard and Poor’s 500 (S&P 500) are some of the world’s most popular stock indicators. The S&P 500 is made up of 500 major listed stock companies in the United States and contains many of the world's largest technology stocks. These include Apple Inc., Microsoft, Amazon.com, Facebook, Alphabet Inc. (class A & C), Tesla Inc., Berkshire Hathaway, JPMorgan Chase & Co., and Johnson & Johnson. The S&P 500 is so strong that it is often analyzed to predict U.S. direction. and the world economy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="S&P Global Ratings"
            description="S&P Global Ratings is one of the world's largest debt rating agencies and is part of S&P Global, best known for being the creator of the S&P 500 stock index. S&P Global Ratings aims to provide accurate data and information to potential market participants to measure debt efficiency of businesses, governments, financial institutions, securities, and the entire financial sector. S&P Global Ratings works with many global financial regulators and the financial sector to provide detailed information to help stabilize an equitable, transparent, forward-thinking global financial industry."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security Module (Aave)"
            description="Within the economic framework of Aave, the Safety Module is a special security feature designed to minimize the potential effects of an unexpected downturn, which could significantly reduce the overall value of the AAVE token. The Safety Module is built using the Balancer liquidity pool and allows AAVE and ETH tokens to be scaled 4: 1 for prizes and voting for protocol changes. If necessary, up to 30% of AAVE tokens included in the Safety Module may be sold for Aave funding."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sandbox (Security)"
            description="Within the context of cybersecurity, sandbox is a defense mechanism designed to minimize the potential impact of system failures and / or software vulnerabilities by allowing systems to operate independently and separately from the main device / network system. The sandbox is often used to test new uses and code bases or to test untested programs to ensure they behave in a systematic manner before shipping. Sandboxes are also commonly used during performance tests with Virtual Machine (VM) features."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Satellite (Storj)"
            description="Satellites are an integral part of a nationally distributed Storj data storage network that scans Storj storage areas to ensure that they store their shared data and operate efficiently. Satellites receive network protection payments and occasionally distribute payments to storage locations to provide data storage. In addition, Satellites also store metadata for various network files, enabling clients to access their files on request."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Satoshi Nakamoto"
            description="Satoshi Nakamoto is an anonymous person or group responsible for creating the Bitcoin protocol. Satoshi Nakamoto published a white Bitcoin paper in October 2008 and dug up the first 'genesis' block in the Bitcoin network in January 2009. In April 2011, Satoshi Nakamoto posted an online forum saying he had 'gone overboard' and disappeared. entirely from the blockchain community. Since then, the true identity of Nakamoto has remained unknown, although there are a variety of unconfirmed theories that reveal the identity of this person / group."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Satoshis"
            description="Named after the person or group that created Bitcoin, satoshis, or “sats,” it is a small separate cryptocurrency unit of bitcoin (BTC). Like all cryptocurrencies, bitcoin is fragmented and there are 100 million satoshi in one bitcoin. Many crypto enthusiasts track the price fluctuations of their secret currencies in terms of sats rather than fiat currencies, showing their skepticism about the common financial system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scalability"
            description="Within the context of blockchain technology, scalability is the capability of a blockchain network to maximize the final transaction speed and output required to improve the processing times of deployed and approved transactions with a network protocol. If the network is too high, it can send out very good transactions and process different types of data. Scalability is one of the three main components of a mature blockchain network, and the other two are securities and security."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scaling Solution"
            description="Measurement solution is any method designed to improve the efficiency and computer output of the Layer-1 blockchain network. Measurement solutions are usually built on Layer-2 principles - such as sidechains and off-chain layers - designed to increase network performance and overall speed. There are many different types of measurement solutions including roll-ups, state channels, sharding, network interaction tools, and more. Two of Layer-2's most well-known blockchain solutions are the OMG Foundation and Polygon, which are designed to increase transaction speed on the Ethereum blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scalp Trader (Scalper)"
            description="A scalp trader, or scalper, is a type of investor who usually enters and exits a financial position quickly - usually within minutes or seconds - with the goal of generating a steady profit with increasing price movements. To achieve this, scalpers often use high-end trading positions in the trading environment. Scalpers are often hired by large institutional investment firms, armed with a toolkit to help make their trading decisions automatically, and offer a large amount of investment to make their trading profitable."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scareware"
            description="Scareware is a type of malware program that uses social media to trigger fear, anxiety, and / or shock at the target to persuade them to buy unwanted software. Scareware tends to take in some kind of malicious security software, ransomware, or some other form of software that misleads a user into thinking that his or her device has been infected. If the user is sufficiently satisfied with the emergency and dangerous warnings of scarware, he may be forced to purchase additional software to remove the alleged 'threat'. Often the program the user downloads to fix the proposed problem is actually a malicious virus or a useless subscription-based service, which destroys resources."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Schelling Point (Focal Point)"
            description="As it relates to game theory, the focus area or point of the Schelling is a specific solution or outcome that people automatically choose in relation to the environment around them. For example, the landscape design of a building is built on selected areas such as a water source, a template, and other communication sites that often draw attention to the human eye. In a blockchain structure this could mean that the attention of the user or designer is naturally directed at a particular place or a few focus points forming the whole structure."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Encryption Signed by Schnorr-ElGamal"
            description="Schnorr-Signed ElGamal Encryption is an encrypted machine commonly used for various types of public-key cryptography (PKC) programs used by blockchains and other types of networks. The framework is designed to encrypt sensitive data using Schnorr's signature technology and is characterized by the exchange of Diffie-Hellman keys and other sophisticated methods. The Digital Signature Algorithm (DSA) set up by most blockchain systems on which it is based is a different type of Schnorr and ElGamal signature frameworks. The Schnorr-Signed ElGamal Encryption encryption system was named after its Egyptian creator Taher Elgamal, who proposed the solution in 1985."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SCORE (Intelligent Area Contract) (ICON Network)"
            description="SCORE (Intellectual Area Trusted Contract) is ICON's framework for designing, amending, and implementing smart contracts in the ICON network. In ICON 1.0, smart contracts were signed via Python. In the upcoming release of ICON 2.0, SCORE will be modified to use JavaScript. This should lead to increased performance and better integration with the ICON virtual machine. This should also improve the integration and development skills of software developers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Screen-Locking Ransomware"
            description="A screen lock ransomware is a type of software that blocks targeted user access to his or her device's operating system. This type of ransomware usually works by locking the user's device and displaying a message telling the user to pay a certain ransom to unlock his device, or risk the permanent loss of internal content."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scripting programming languages"
            description="The programming languages ​​use text to detect the operating time of the system so that it can work automatically instead of using the conjunction. The division of written language is usually broad and may include translated languages ​​and high-level dynamic languages. Data written in writing languages ​​is usually organized into small consecutive codes and then merged with other components to form a working system. Because of their versatility, writing languages ​​are generally well suited to the creation of both front and rear frames. Examples of widely used scripting languages ​​include JavaScript, Python, PHP, and CSS."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Scrypt"
            description="Scrypt is a hash function that converts input of letters and numbers into encrypted output for the cryptocurrency Litecoin. It is different from the SHA-256 hash function used by Bitcoin, but it also operates within the same Proof-of-Work (PoW) compliant system. The Scrypt hash function was originally designed to limit mining to CPUs and GPUs, although the ASICs that are able to write have been improved."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Second Market"
            description="The second market refers to the normal stock market. It is known as the second market because before bonds, stocks, derivatives, and other financial instruments are traded on the stock market, they are traded on the main market. In the second market the investors exchanged goods that already owned each other instead of the output business as in the main market. In a broader context, the secondary market is any market used for the exchange of goods or goods that can be used for their primary purpose (such as ethanol corn instead of producing food or animal feed)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Secure Hash Algorithms (SHA)"
            description="Secure Hash Algorithms (SHAs) are a family of cryptographic hash functions designed to keep data secure across a variety of computer networks and computer infrastructure. SHAs work by converting original data into a hash function algorithm that combines several unique compression functions with a modular extension. There are several SHAs available, and many of them are designed and developed by the National Security Agency (NSA). The Bitcoin network uses a SHA-256 hash algorithm that allows Bitcoin miners and the basic compliance method of the network to operate efficiently."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Secure Multi-Party Computation (SMPC)"
            description="Secure Multi-Party Computation (SMPC) is a subset of cryptography that enables tasks to be calculated in a distributed system across multiple groups, without having to share data between other network participants. SMPC allows nodes within a network to integrate work evenly while keeping inputs private from other nodes within the network. Processing is one of the many ways in a distributed computer that allows privacy and security in a blockchain environment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Strategic Security Proof (SPoS) (Elrond Network)"
            description="Proof of Stake Protocol (SPoS) is an improved version of the Elrond Network Proof of Stake (PoS). Enables advanced security and distributed integrity while removing computer garbage systems that Proof of Work (PoW) often fights against. The SPoS compatibility system achieves high security using a synchronization method such as the Byzantine Fault Tolerant (BFT) using random random authentication options for retranslation of nodes in some pieces. To achieve this, SPoS uses a multi-signature Boneh-Lynn-Shacham (BLS) technology to randomly select nodes within each chart to achieve the verification option by 100 milliseconds, or 0.1 seconds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Secure Sockets Layer (SSL) & Transport Layer Security (TLS) Certificate"
            description="Secure Sockets Layer (SSL) Certificate is a technology used to enable secure connection between a Web server and an Internet client. SSL certificates are embedded in the web server and encrypt the transfer data using encryption algorithms to prevent malicious characters from accessing data as it moves from one system to another. The Transport Layer Security Certificate (TLS) stands for the latest, updated version of SSL with enhanced security."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Securities and Exchange Commission (SEC)"
            description="The U.S. The Securities and Exchange Commission (SEC) is the largest independent body of U.S. unity government. responsible for upholding securities laws, enforcing government securities laws, and regulating the U.S. investment industry. The SEC is responsible for protecting investors, maintaining the efficiency and smoothness of the U.S. security markets, as well as facilitating the creation of funds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security"
            description="Securitization is the process of combining an asset or group of assets - usually types of contractual debt - into collateral. This could include residential and commercial housing, car loans, credit card debt, and other types of debt, packaged, purchased, secured, and sold to potential investors. Usually, investors are reimbursed to the principal and the flow of interest from the principal debt, which is also distributed as part of the new funding policy. Security savings often come in the form of mortgage-backed securities (MBS) and asset-backed securities (ABS), among other things."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security (Financial Assets)"
            description="An open-ended collateral is any financial asset that can be traded such as stocks, bonds, commodities, or other derivatives. However, the term varies from place to place because different authorities use different sections of the law to determine what constitutes security. The Securities and Exchange Commission (SEC), the Financial Industry Regulatory Authority (FINRA), and other regional and international regulatory bodies help define securities in their respective territories. Even some cryptocurrencies are considered securities in various areas. Generally, securities are divided into three types: equity, debt, and a combination between the two."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security (Network)"
            description="Security as associated with computer network infrastructure can be an ongoing process that companies often seek to address using a number of policies, procedures, and processes that help identify, prevent, and monitor unauthorized access, modification, misuse, or denial of computer network services. Adherence to strict security guidelines is often essential to maintaining a well-functioning system with reduced risk of data theft by malicious attackers by third-party companies that aim to disrupt, destroy, or alter the computer system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security Token"
            description="Protective tokens are securities with a token in the ownership of any valuable property, such as a business or a piece of real estate, recorded in a blockchain book. Within the context of a company's ownership, security tokens are similar to a business stock, or stocks / units, and therefore represent a share equity in the company, as well as any future restorative ownership of the entity involved, such as dividends. As a result, security tokens offer a flexible but secure way to transfer, exchange, and retain value."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Security Token Offerings (STO)"
            description="Security Token Offerings (STOs) are a way of distributing security tokens and exist somewhere between Initial Financial Offerings (ICOs) and Initial Public Offerings (IPOs). To better understand this, it is important to note that security tokens are equity tokens that represent a share equity in a company or asset, in addition to any future benefits associated with an entity that is part of that entity, such as dividends. STOs are generally considered superior to ICOs because STOs provide instant payment times, clear management guidelines, high fees, and a low barrier to entry in most cases, among other benefits. As businesses that create registered securities must comply with certain compliance and regulatory requirements, STOs avoid much of the market uncertainty that ultimately leads many investors to ICOs, while continuing to provide a straightforward, viable way for investors to withdraw, trade, and retain. shares equal tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Seed Support"
            description="Seed financing, sometimes called seed capital, is a type of financing in which an investor invests in a startup to trade in equity value, a flexible paper stake, or a stocked stock with a company token. Seed financing is often seen as an early investment to help support the start until it goes down and begins to generate cash flow, or we are in a position to get another investment. Seed support is often terminated by friends and family, seed venture capital (VC) funds, and angelic investors, among other sponsors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Seed Sheet"
            description="The seed phrase, also known as the “recovery phrase” is a code of 12, 18, or 24 words used as a backup access method when a user loses access to a crypto wallet or related secret key. The seed phrase is similar to the information stored inside a compatible wallet that can unlock the secret key needed to gain access."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sowing"
            description="Associated with peer-to-peer (P2P) file sharing, sowing is the act of uploading previously downloaded content for others to download. A computer connected to a P2P network usually becomes a seed after it has the required file; many seeds with the same file allow the user to download the file much faster than they could in one group. P2P file sharing sowing first came into play with mp3 music files in the late 1990s - and since then it has expanded to include sharing video files, video games, and computer programs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Separated Witness (SegWit)"
            description="Separate Witness (SegWit) is the name of a soft fork made in the Bitcoin network that changed the protocol transaction format. Segwit separates signature data from transaction data within the blockchain to increase the amount of data within a particular block. By rearranging the data contained in each block successfully, more space is released allowing for additional data insertion. SegWit is able to increase the size of the Bitcoin block from 1MB to 2MB and was designed to alleviate blockchain size restrictions that occasionally reduce purchasing power over the Bitcoin network. This is achieved by 'dividing' the work into two segments by removing the 'witness' data of the signature that opens in the first part and inserting it as a separate structure at the end of the block."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Self-Regulatory organization (SRO)"
            description="A self-governing body (SRO) is a business that has the power to create independently and to enforce accepted professional rules and regulations without the need for supervision or external intervention."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Self-Sovereign Identity (SSI)"
            description="Self-sovereign Identity (SSI) is a general term that describes a user's ability to own their own identifiable data without the need for a third party activity or certification. While there are many technological ways to make SSI a reality in reality, none will emerge as a widely accepted standard worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sell ​​the Wall"
            description="The selling wall is said to occur when a large order limit is set at a certain price level to sell a large amount of a particular asset. Walls for sale can lead to a significant reduction in property prices, especially if a large quantity is sold by a whale or a person with a very high value (HNWI). Trading walls can sometimes be seen as a form of fraud in the market, where the seller makes a big deal to sell the order at a certain price, and then moves the bet to a short short position that the price of the goods will drop in price."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sudden sale"
            description="A sudden sale, high volume collateral or other asset usually lowers the price of a qualifying asset, at least in the short term. While there are various reasons why a sale may occur, in many cases the sale occurs as a result of widespread market distribution, either as a result of bad news or a black swan event, or by systematic market exploitation initiated by the institution. investors or 'whales'."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Semantic Web"
            description="The semantic web is a long-awaited version of the World Wide Web extending to the parameters set by the World Wide Web Consortium (W3C). The semantic web is designed to allow online data to be machine-readable, leading to richer self-awareness, data usage, and information sharing. For decades, many believed that this idea would never be fulfilled. However, the semantic web seems to be slowly emerging - empowered by a series of ever-growing developments in artificial intelligence (AI), machine learning (ML), Internet of Things (IoT), blockchain, and other related technologies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Semantics (Computer Science)"
            description="In computer science, semantics is a mathematical study of the meaning of different programming languages. One of the ideas in editing semantics is that language presentations (symbols) show logical results, while phrases and word sets translate teaching formats that are different for both people and machines. Simply put, semantics describes how different programming languages ​​translate and use different types of engineer or machine-readable systems. In contrast, the syntax of editing is used to describe the arrangement of words and phrases within the programming language."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Separate account"
            description="A separate investment portfolio of an investor owned by an investment company - usually a registered investment adviser (RIA). Different accounts provide their owners with real-time visibility of everything they own and their operations as it happens, as opposed to going back, as it happens with shared funds. Although many different accounts are opened by a financial advisor or investment broker, they can be managed by an insurance company or a bank. Different accounts are also referred to as separate managed accounts (SMAs) or individual managed accounts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sequencer"
            description="As part of the proposed roll-up Layer-2 rating solution for the Ethereum network, successors - or mergers - process transactions outside the chain before sending it to the on-chain for completion. Although successive individuals are being rewarded financially for their role in the model industry, they should set up a bond - known as fraudulent evidence - as collateral to refute a brutal act. By using scale, this approach can save both money and provide benefits to Ethereum throughput capacity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Serenity (Ethereum Development)"
            description="Serenity is a multi-stage Ethereum development currently underway that transforms the Ethereum blockchain from a proven performance-based approach to Proof of Stake, while separating the network into special shard chains that have been developed to measure. Both upgrades are state-of-the-art technology initiatives that will increase speed, efficiency, and network compliance in Ethereum. Because of the difficulties involved in launching Ethereum 2.0, Serenity is designed to launch a total of four phases over the next five to ten years. Section 0 was successfully implemented in December 2020 with the introduction of a beacon chain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Series B funding"
            description="Prior to the Series A funding, the Series B funding is commonly used by established companies valued at more than $ 30 million USD. This fundraiser is often used by a company to grow, cover costs, or enter new markets. The B-stage platform usually provides the company with additional funding of more than $ 10 million, which may be provided by business finance and private firms in exchange for preferred shares."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Service Chain"
            description="In the context of a computer network, a service chain - or a series of services as it is commonly called - indicates a specific sequence of actions used to automate traffic and data flow between virtual network services. Service chains are also used to improve the use of network resources to improve application performance by choosing the best route. Integrating a service usually uses a few different features including a service template, virtual network, service model, and service policy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Service Background (Tool Layer)"
            description="A service layer, sometimes called middleware or a layer of tools, is part of a software stack used by computer systems to support application layer performance. In blockchain in particular, the service platform is usually made up of smart contracts, application programming interfaces (APIs), software development kits (SDKs), split oracle, websites, digital identities, and more. Without a service layer, the application layer and network layer will not be able to work together, making the system useless."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Solving"
            description="Payment is the process of determining when a work will be fully guaranteed, or resolved, by all parties involved. Until the payment provides a guarantee of the completed transaction, the transaction remains pending and unresolved. The speedy completion of payments has serious economic consequences for businesses. Prolonged payment periods can lead to costly delays and time consuming, and add to the market area to significantly delay the process of doing business in many industries. Short payment periods speed up business operations, save money, and eliminate uncertainty."
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
            title="Settlement Layer"
            description="The blockchain payment platform is part of the protocol used to settle financial transactions through smart contracts. Payment by smart contract technology is designed to eliminate or minimize the role of third party mediators, and thus facilitate direct unreliable exchanges between the user and the protocol itself. Automatic cancellation and payment on the blockchain network usually occurs with an automated market maker (AMM). In particular, with the increasing popularity of futures and futures markets, blockchain-based derivatives are greatly aided by the ability to perform different types of financial transactions using the payment platform."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SHA-256"
            description="SHA-256 is a member of the SHA-2 cryptographic hash function developed by the National Security Agency (NSA) and later known as a core part of the Bitcoin blockchain network. SHA-256 is a Secure Hash Algorithm (SHA) that protects data by using cryptographic mathematical operations to generate random sequences of 256-bit, 64-64 characters (called hash) without input. These functions are generally designed to work as one way almost impossible to undo once a piece of original data has been updated for its hash value."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Shamir Secret Sharing Cryptography (SSS)."
            description="Shamir Secret Sharing cryptography (SSS) is a special writing algorithm originally developed in 1979 by Isreal cryptographer Adi Shamir. Shamir Secret Sharing is designed to protect data encryption. It does this by sharing “secret” secrets within a distributed computer network. This process allows data to be separated by multiple shares, but only requires a small portion of the shares in order to reconstruct the initial secret. Due to its structure, the Shamir algorithm is extremely flexible and flexible, and provides a framework that allows private owners to convert or remove shares without changing the original secret."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Shard Chain"
            description="Shard chains are created by breaking the blockchain into smaller, manageable pieces. This process reduces the workload on the validator nodes, which are only required to maintain and manage a single framework instead of the whole blockchain system. In line with other arrangements, shard chains are expected to significantly increase network output and speed as opposed to monolithic alignment processes. The Ethereum 2.0 blockchain will be split into 64 shards that will serve as small blockchains integrated with the larger Beacon Chain. Ethereum 1.0 is intended to make one of those shards."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Separation"
            description="Shading is a method used to separate a blockchain network or another type of computer network or website. Its purpose is to spread network load and storage over a wide set of devices, or nodes, in order to increase the performance and performance speed of the entire system. Each node stores information related to a particular shard or subdivision, and since each node is responsible for processing a small portion of the total network load, the overall network processing capacity and robustness can be greatly improved. As a result, increased operational speed made possible through sharding allowed more blockchain-based networks to be faster, more secure, and better suited for widespread business use."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sharetip"
            description="Sharetip is an online consulting platform that allows you to advise content creators with bitcoin (BCH) money. You share the tip number and URL you wish to tip with Sharetip. Sharetip then attempts to link to an external account associated with the URL. If they can prove that they own the content, a tip is sent. Tip is refunded if not claimed within seven days."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sharing Economic"
            description="A sharing economy is a socio-economic system built on the idea of ​​sharing resources within a network for the benefit of all its members. This process is often enabled by peer-to-peer (P2P) networks that allow the purchase and / or exchange of goods and services in a way that is very different from standard corporate-to-customer business models. In recent years, the shared economic model has provided the emergence of fictional business models, from trap-sharing to content-oriented content platforms. Open blockchain social networks help to identify the strength of a shared economy because of its fragmented, transparent, and resilient nature of research."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Shelley Phase (Cardano)"
            description="Named after author Mary Shelly, the Shelley Section is the second of five stages in Cardano's road development map. It is designed as a secure and stable transition to an extended Cardano with network-operated network nodes. With game theory and tangible prizes, ADA character owners are encouraged to participate in state distribution network goals."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="ShibaSwap"
            description="ShibaSwap is a limited exchange (DEX) currently developed by the Shiba Inu blockchain project. ShibaSwap is designed to create a safe and easy-to-use environment for private trading in a fully integrated environment. Since the beginning of 2021, little has been announced about how DEX will differ from the existing bases on the market, however ShibaSwap is currently conducting security tests, audits, and final updates before the expected launch later in 2021."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Secure operations"
            description="Secure operations are a separate type of activity that hides certain data about transactions, such as transfer numbers or account addresses involved, in a manner that is guaranteed in a blockchain. Although different blockchain projects use different methods to operate secure transactions, many of these methods incorporate zk-SNARK cryptography to decrypt transaction data before transactions are recorded on the blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Short (Short)"
            description="Short-term trading (also known as 'diminishing' or 'diminishing') is the practice of seeking to gain by decreasing the value of an asset (for example, selling a temporary stock). The short seller sells shares borrowed from the seller. If the stock price drops, it can be discounted and returned to the seller. A short seller can pocket the difference between the purchase price and the amount the stock was initially shortened - or sold - at. However, if the price of a short stock goes up, the short seller is liable for the difference and may lose money."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Short Pressure"
            description="Short-term constipation begins when short-term stock increases in value. This increase in value may be due to good financial news or stock buyers with the knowledge that shorter traders should cover their positions. If short traders do not close their positions before the stock price rises sharply, they may incur financial loss or even their positions may be completely closed to complete losses."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sidechain (Side Chain)"
            description="Sidechain (or side chain) is a second external blockchain protocol connected to a main blockchain network (mainchain). Sidechains are generally designed to allow for the transfer of data and value between them and mainchain, and in many cases use a different concordance method than mainchain. As a result, sidechains can allow for greater flexibility and robustness, given that systems that play an important role in sidechain interactions are generally designed to cater to a wider range of business and individual users. For example, some sidechain solutions allow for the transfer of assets back and forth between multiple contracts such as Ethereum and Bitcoin. Some examples of sidechain capabilities include enhancements used in Layer-2 measurement solutions to increase the speed of large chain processing."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Signature (Cryptographic)"
            description="A cryptographic signature is a mathematical method used to verify the authenticity of a digital message or digital document within a digital network. Cryptographic signatures are often used for financial transactions, digital contract management, software distribution, and a wide range of other application cases that prioritize the accurate detection and prevention of fraud and data interference. In terms of blockchain technology, cryptographic signatures are often used to prove that the correct secret key is used to initiate and send the function through a complex authentication process that involves your use of both the private and public key."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Signature-Based Security Program"
            description="Signature-based security program is a type of security software that identifies a malware program using pre-recorded digital signatures or identifiers. These programs identify malicious computer programs by referring to other digital signatures of suspicious digital signatures of existing software that are archived stored on archived websites and to assist in identifying a wide range of types of malware."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Silk Road"
            description="Silk Road was a former black market online launched in February 2011, and was subsequently closed in October 2013 by the FBI. Silk Road has functioned as a platform for the sale of illegal drugs, weapons, and other sensitive items and data. Forum relies on Tor web browser which allows users to remain anonymous. At its peak, the website has provided services to more than 100,000 customers, and generally accepts payments in bitcoin (BTC). The founder, Ross Ulbricht, received two life sentences without parole for 40 years, although some human rights activists opposed his conviction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SIM Attack Switch"
            description="SIM Exchange Attack is an attack that involves the victim's SIM card control, which stores personal user data and a wide range of user access details. Attackers attacking SIM exchanges often use a variety of social engineering methods, such as phoning the victim and pretending to be a non-victim, in order to obtain sensitive personal information about the victim. If successful, the attacker will often use the information he has acquired to request a new SIM card, which will allow him to control the victim's phone number and any sensitive data attached to that number."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Simple Ledger Protocol"
            description="Simple Ledger Protocol (SLP) is a standard token in the Bitcoin Cash blockchain. Allows users to easily create their own tokens over the Bitcoin Cash protocol. SLP token creation and transactions can be viewed using the SLP-enabled block checker."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Simplified Payment Guarantee (SPV)"
            description="Simplified payment verification (SPV) allows the operation of a light node (or light-client node), commonly referred to as a crypto wallet. SPV allows a crypto wallet user to verify a crypto transaction without having to download every copy of the blockchain or any copy of the block containing the transaction the user wants to verify."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SKALE (SKL) Token"
            description="SKL ERC-777 token that assists SKALE Network capture and security, payments, prizes, and administrative voting."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SKALE Elastic Sidechains"
            description="SKALE Elastic Sidechains highly customizable blockchains work on visible subnodes. Users create Elastic Sidechains by submitting their application to the SKALE manager with the required registration fee."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SKALE network"
            description="SKALE is an Ethereum sidechain network that creates high throughput, low latency, low cost of development of distributed application space (dApp)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SKALE Node Core"
            description="The SKALE Network node is known as the SKALE Node Core. Each of these nodes is subdivided into visible subnodes to accommodate multiple Elastic Sidechains simultaneously."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SKALE Virtualized Subnode"
            description="SKALE-made subnodes enable each SKALE Node Core to run multiple Elastic Sidechains at once. In general, visual subnodes enable the expansive provision of network services according to the needs of each user."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Skynet (Sia)"
            description="Skynet is a Layer-2 platform built on the Sia blockchain to facilitate the delivery of split content during file sharing. Skynet is designed to store and deliver content, providing shared web hosting and applications. The name of the stadium is a reference to the language at Skynet court levels in the Terminator science fiction film series."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Slashing"
            description="Rubbing is a process often used automatically by blockchain protocols using Proof-of-Stake (PoS) or a related concordance method. If an investor inserts or places his or her crypto assets within a central network verification node and the node behaves in a dishonest or malicious manner, the token holder may be penalized, resulting in a loss of part of the initial investment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smooth"
            description="Within the financial context, fluency refers to the difference between the expected trading value relative to the actual value at which the trade is made. Slippage usually occurs when an investor buys or sells property in a low-income area with a low trading volume. If there is a large gap between the bid bid price in the exchange order book, the buyer may end up paying more for the goods or receiving less goods than expected once the transaction has been made."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Slot (Cardano Space)"
            description="Cardano blockchain uses a protocol called the Ouroboros Praos protocol. This unique consensus process works by dividing time into epochs that last for about 5 days, and then splitting into 432,000 spaces. Nodes are randomly selected to be slot leaders, who are also selected to produce blocks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Small and Medium Enterprises (SMEs)"
            description="Small and Medium Enterprises (SMEs) businesses employ a limited number of employees, compared to large companies. The division of SMEs is used by major international organizations such as the European Union (EU), the United Nations (UN), and the World Bank. The SME categories in different regions of the region will vary depending on the number of employees the company employs, but usually in the range of 50 to 250 employees. SMEs are often regarded as the blood of the national economy and often employ the largest number of people on a national or regional scale. SMEs often outperform large companies in large numbers and include startups and newly launched businesses by entrepreneurs, as well as long-term local and regional family businesses."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Small Cap"
            description="In the blockchain space, “coin” refers to a cryptocurrency asset with a small market capitalization. Market capitalization, or the total amount of cryptocurrency assets and the underlying blockchain business, is determined by the number of publicly distributed currencies, multiplied by the value of each coin. As a speculative term, there is no specific market limit indicating that an asset is a small coin."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SMART Alpha Bond (BarnBridge)"
            description="SMART Alpha Bond is a leading provider of BarnBridge DeFi protocol. The SMART acronym stands for Structured Market Adjusted Risk Tranches. Specifically, SMART Alpha bonds are tranche tokens (special segment tranches created from a collection of different types of securities) for alternatives based on volatility designed to mitigate exposure to price fluctuations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Contract"
            description="A smart contract is a code that runs on its own or a protocol that creates a set of instructions that are validated in a blockchain. These contracts are unreliable, independent, divisive and transparent; they are irreversible and cannot be repaired once used. Although they have many use cases, some of the most popular are various financial contracts (loans, derivatives, trading). It can also be used for legal contracts, patent management, and many other use cases. Famous for fixed finance (DeFi), smart contracts can be integrated into internationally distributed applications (dApps) to perform complex tasks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Contract-Intermediate-Level Language (Scilla) (Zilliqa)"
            description="Smart Contract-Intermediate-Level Language, or Scilla, is a planning language developed directly by Zilliqa. Focusing on the legitimacy of smart contract security, Zilliqa created Scilla to ensure the security of smart contracts and internationally distributed applications (dApps) used in its blockchain protocol. Engineers using Scilla can use mathematical evidence to ensure that their smart contracts meet certain requirements. Scilla is a security-oriented language designed for intelligent contractors, and designed to take full advantage of the scaling and segmentation of the Zilliqa network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Home"
            description="Smart home is a technology-enabled home setup where various functions such as heating, lighting, and electrical appliances are automated or remotely controlled by network-connected devices such as mobile phones or tablets. Smart home setup often involves your use of both hardware and software solutions to improve the comfort and efficiency of residents, and is one of the most popular Internet of Things (IoT) technology. For example, a wearable living room monitor can be customized with a room temperature control system, which will then automatically adjust the room temperature according to the resident bedroom patterns and personal preferences."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Order Router (SOR)"
            description="Smart order routing (SOR) is an automated online trading method that identifies and exploits the best trading opportunity available in a given range of financial markets and trading platforms. In fact, when using SOR the investor feeds a pre-set set of conditions to a set of bots or algorithms and then scans many markets using the given conditions to find the right place to execute a particular command. Investors often design algorithms used to use SOR to differentiate different trading areas according to common parameters such as delay level, payment structures, and available liquidity, as well as more complex parameters that target that investor’s unique trading strategy. As a result, implementing SOR requires a strong integration of the API across different forums in order to successfully implement this multi-platform, multi-platform trading strategy."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Pool (Balance)"
            description="On the Balancer platform, Smart Pools cash pools with adjustable parameters can be managed on a smart contract. These pools can be made of two to eight different tokens, and can be customized with adjustable weights to represent the desired size of each mark within a given pool. In addition to customizing token mixes and weights, Smart Pool administrators can also adjust exchange rates, select / limit providers, set maximum deposit limits, and initiate / stop trading tied to their pool. These flexible parameters allow for an unprecedented level of flexibility for financial providers in Balancer."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Smart Token"
            description="Intelligent tokens for cryptocurrencies can be arranged with a wide range of approximate limits. The purpose of a smart token depends on the specific parameters set, and other smart tokens used to reduce the risk of revenue, improve security ratings, or improve consumer behavior. For example, a smart token can be adjusted to adjust its value according to the Constant Reserve Rate (CRR) paid in a different basic currency, designed to work only with certain merchants or when purchasing certain items, or designed to expire after setting a time limit. The Bancor Network's Bancor token, released in June 2017, is widely known as the world's first smart token."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smart Treasury (Balance)"
            description="By applying the Balancer protocol, smart stocks can be used to automate the organization’s financial management. By controlling who can be a fundraiser for a particular smart pool, organizations can control who can withdraw or invest. In addition, assets invested in a smart investor are always viable - payments to earn money as a fundraiser and to implement a diversified portfolio strategy. So this smart pool can serve as an automatic investment manager for your team's assets, buying and selling tokens if prices reach a predetermined limit due to the automatic re-equation feature of the smart pool."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SMART Yield Bond (BarnBridge)"
            description="SMART Yield Bonds is a leading brand of the BarnBridge DeFi protocol. The SMART acronym stands for Structured Market Adjusted Risk Tranches. Specifically, SMART Yield Bond bonds are tokens (special segment tranches created from a collection of different types of securities) for other credit-based transactions designed to reduce interest rate volatility."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smishing"
            description="Smishing is different from phishing scams, including the use of misleading SMS or text messages to misdirect the target to share sensitive information or access. Text messages involved in smishing attacks usually contain malicious links or fake customer support or authorized phone intended for the target to click or call. If the target responds to this call to action (CTA), it will usually continue to trigger a certain type of risk activity, leading to the disclosure of sensitive information such as a Social Security Number or credit card details, or loss of access to his or her devices. ."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Smooth Love Potion (SLP)"
            description="The Smooth Love Potions (SLPs) Axie Infinity users tokens they need to have if they wish to reproduce their Axies. Tokens can be found within the Axie Infinity metaverse and can be sold at Uniswap."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SMS (Short message service)"
            description="SMS, or Short Message Service, is the main text messaging format used by most cell phones in the world. SMS uses standard communication protocols that allow mobile devices to send and receive short text messages up to 160 characters long. SMS also allows users to send messages to landline with a mediator service. The first SMS was sent in December 1992, and in 2010, SMS was the most widely used data app with an estimated 3.5 million active users, making up about 80 percent of all mobile devices worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Summary"
            description="In the blockchain context, 'achieved image' has several meanings. It usually refers to the ability to record the current state of a blockchain network over a period of time. The summary is usually taken within a specific block to record all ledger history up to that point and includes data such as transactions, existing addresses and balances, metadata, and more. The summary can also refer to a database that records the blockchain address of each user in order to properly distribute tokens during the issuance of airdrop token or token distribution event such as the Initial Exchange Offering (IEO)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Snowball Consensus Mechanism (Avalanche)"
            description="Snowball is a harmonious form of Avalanche's Proof-of-Stake (PoS). Snowball requires verification nodes within the subnet to interact with each other repeatedly to determine the appropriateness of network operations until they reach consensus. Snowball is the most advanced part of Avalanche's harmonious algorithm which is a combination of Avalanche's Directed Acyclic Graph (DAG) architecture, Slush system integration (single law agreement), and Snowflake (Byzantine Fault Tolerance-based) modes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Social Engineering"
            description="Social engineering is a broad term that encompasses a variety of strategies that take advantage of psychological factors - such as fear, trust, panic, ignorance, and confusion - to reduce targets. Rather than hacking a system directly or identifying technological weaknesses in personal devices or digital accounts, social engineering focuses on deceiving certain people into performing actions that may be of no interest to them, such as disclosing sensitive data or accidentally transferring money to a malicious location. actor. Social engineering strategies can also be used to gain access to networks and devices, where a malicious character can strip control of the legitimate owner to install a malicious computer program into the system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Social Impact Fund"
            description="The social impact fund is an investment fund designed to benefit the environment, human and social issues, and other related industries. Investors who contribute to community impact funds appreciate a commitment to community business commitment and community development as a whole. Social Responsible Investing (SRI) and Environmental, Social, and Governance (ESG) Investments are two different types of impact investments commonly used by public funds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Social Token"
            description="A public token is a cryptocurrency, or crypto token, created near a particular type, community, or individual. Public tokens representing social media promoters and other popular figures are gaining traction. Public tokens usually give their owners some form of additional access to the product, community, or person they represent - whether it's a line of communication, special products, access to events, or administrative rights."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Socios (Chiliz)"
            description="Socios is a blockchain entertainment platform designed in the form of a mobile app. Socios works by allowing users to purchase an original CHZ token - of Chiliz - which can be converted into Fans' Tokens associated with their favorite sports teams. By having token followers, owners gain access to special prizes and the ability to vote in votes that influence party decisions, for example, similar designs. This model encourages users to purchase CHZ, thus helping the Chiliz platform to continue its long-term growth."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Soft Cap"
            description="Soft cap refers to the small amount of money a future blockchain business wishes to raise with its first round of funding. The soft cap is often speculative and misinterpreted, and is compared to the hard cap which is the highest set price to achieve in a support cycle. Sometimes if a group is unable to reach the minimum level, or the minimum amount required to raise funds, the funds will be returned to investors and the project may halt development. In some cases where the soft cap is not achieved, projects may continue to be developed despite not achieving their stated goal."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Soft Fork"
            description="Fork is a software update to the backbone blockchain network, which means that a piece of software that has acquired a soft fork always works with its old legacy system. This means that the nodes can continue to communicate with the undeveloped nodes. In contrast, if the blockchain exceeds the fork, only the newly produced blocks will be recognized as valid. As a result, soft forks typically involve stronger protocol changes than solid forks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Soft Nail"
            description="A soft anchor is a type of exchange rate model used in a currency to maintain its value relative to a fixed amount or basket of currencies. In the blockchain context, a soft peg is often used in stablecoins to maintain their 1: 1 ratio in fiat currency like the American dollar, and generally allows a moderate level of financial flexibility that allows the system to deal with economic fluctuations and shocks. ."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Software Development Kit (SDK)"
            description="The software development kit (SDK) is a special suite of software development tools designed to enable application developers to build digital applications and perform other useful functions. Many SDKs integrate common software development tools such as software developers, bug fixes, and software components, making it easier for developers to design and build new software. There are a number of SDKs available that provide a variety of platforms and cases for use within the blockchain development space and beyond."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Software Stack"
            description="A software stack is a set of software components or sub-systems used to build applications running on a computer network without the need for additional external resources to work properly. In order for a software engineer to build a desktop or mobile application, he must use various components (or sections) of the stack. Software stacks usually have different levels (e.g. operating system, web server, middleware, website), and applications are said to run on stacks. Within multiple network structures, stack contains multiple layers - such as application layer, client layer, and service layer."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Software Wallet"
            description="Software wallet is a digital wallet that stores user 's public and / or private keys, thus protecting the user's digital assets. Since software wallets are computer programs, they are usually stored locally on the user's desktop or mobile phone and are connected remotely to the Internet. Software wallets are usually much easier than hardware wallets, but they are also often at risk of being hacked. Common types of software wallets include desktop pockets and mobile wallets. When using a software wallet, it is important for users to keep their devices and software up to date to minimize the risk of cybersecurity violations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Software-as-a-Service (SaaS)"
            description="Software-as-a-Service (SaaS) is a software license delivery system in which software is usually rented through a subscription-based service. SaaS is sometimes referred to as “the most sought after software” and is often classified as part of cloud computing, as well as other similar software delivery systems. SaaS is often accessed by businesses that employ software platforms, often as a white label, turnkey product tailored to their specific needs. SaaS is used for many types of business applications, including office software, computer-aid design (CAD) software, development software, management information systems (MIS), virtualization, geographic information systems (GIS), and many applications. endless."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Solana (SOL)"
            description="Solana is a blockchain-enabled blockchain that aims to naturally solve many measurement problems and exit other Layer-1 blockchain networks. SOL is a traditional token for the Solana network, and is heated to pay for the Solana network. Solana users can also contribute to SOL to become a blockchain platform, and the platform aims to enable SOL to be used in future Solana platform governance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Solid-State Drive (SSD)"
            description="Solid-state drive (SSD) is an advanced type of computer storage device faster than its hard disk drive counterpart (HDD) because it uses flash memory instead of spinning and moving objects such as HDDs. SSDs in many ways are responsible for a significant increase in computer speed due to their low learning times and fast output. SSDs began to be developed in the late 1970's but were much larger and more expensive to produce in large quantities for everyday use. However, since the beginning of 2010, SSDs are sold on computers accessible to the consumer on a daily basis."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Solidity Working Language (Ethereum)"
            description="Solidity is a software development language specially designed for the Ethereum blockchain framework. Solidity is an object-oriented programming language designed to build intelligent contracts that work in partnership with Ethereum Virtual Machine (EVM) and the Ethereum network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Solo Mining"
            description="Mining alone is where the crypto mine is directly linked to the Proof-of-Work (PoW) blockchain in which you operate. While you don’t have to pay any expenses on my own and get to keep all the block rewards, it can also make block rewards less likely, less likely, or less likely. For this reason, mining alone is often a thing of the past in many large mining blockchains. Most crypto miners join mining pools that combine their hash value and distribute block rewards to group participants based on the hash rating they contribute to the pool."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Solvency"
            description="Solvency is an organization’s ability to meet its financial obligations from a management and compliance perspective. For GUSD, this means that the value of the USD stored in the hosting account is equal to or greater than the tokens used. This solvency rate ensures that Gemini Dollar tokens retain their value in both the short and long term."
          />
        </Col>

        <Col lg={6}>
          <ContentComponent
            title="Somnium Cube Token (CUBE)"
            description="The Somnium Cube (CUBE) is an active ERC-20 token that assists economic activity throughout the Somnium metaverse. CUBE is equivalent to buying game tokens in the playground as it allows you to purchase in-game items such as digital world parcels and avatars."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Somnium Space Metaverse"
            description="The Somnium Space metaverse is a continuous visual space that holds users in one place while enabling the development of each planet. Players use virtual reality (VR) headsets and internet to create connections between their virtual reality world and the world of Somnium VR."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Source Code"
            description="Source code refers to a database of information that is responsible for determining how a software program will work based on a set of prescribed rules and regulations. In fact, computer or blockchain network source code is the first major feature of the software at the time of its creation. Editors comment, edit, read, and make changes to this source code before the first version is completed. Source code is often issued by open source software developers to contribute to the creation of a computer network in a fully accessible, open way for everyone to contribute."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Source Code Fork"
            description="The source code fork is a kind of strong fork that results when software developers take the original source code from an existing blockchain network to build a new network. Like all solid forks, source code forks can block previously invalid blocks and blockchain transactions, and require all nodes from the previous network to upgrade to the latest version of the software protocol. In addition, source code forks, like all solid forks, are not compatible with retrofitting, which means they cannot be restored to their original state."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Spartacus Attack"
            description="Spartacus Attack is a type of Sybil attack that works by stealing the identity of other nodes within a distributed or distributed network. It does this by using trust and dignity, but it does not produce a logical ID that is not a name. Instead, it simply steals one from the real node, thus gaining its trust value. Spartacus attacks usually occur during the bootstrapping phase of the network, and occur when Spartacus looks at the bootstrapping node, and later with nodes with high reliability scores. Spartacus hosts these nodes. After those nodes appear to be disconnected, it changes them by copying their IDs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SPDR S&P 500 ETF (SPY ETF)"
            description="The SPDR S&P 500 Trust ETF, sometimes referred to as the SPY ETF, is one of the world's most popular electronic traded funds (ETFs) and currently trades on the New York Stock Exchange (NYSE). The SPY ETF is used to track the American Standard and Poor's 500 Index, or S&P 500, which is made up of 500 major US stock market companies and several major technology stocks around the world including Apple Inc., Microsoft. , Amazon.com, Facebook, Alphabet Inc. (class A & C), Tesla Inc., and Berkshire Hathaway."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Spear Phishing"
            description="Spear Phishing is a type of phishing scam aimed at an individual, organization, or business. As with phishing scams, phishing scams often involve the use of misleading e-mails or other forms of electronic media. Attackers may mix up these false communications with the target audience within the organization, or they may insert other contextual information to mislead the victim more effectively. As a result, sensitive identity theft requires more post-targeted research than many other types of sensitive identity theft attacks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Speculative Investments"
            description="The projected investment involves a certain level of financial loss risk, both in terms of key terms and potential non-performing benefits. However, speculative investments tend to be those with high potential, making them attractive opportunities for investors with high risk tolerance. Many blockchain skeptics view cryptocurrencies as a viable investment, while traditional traditional investments include early-stage investments, trading options, and certain assets."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Spot Market"
            description="The spot market is a public financial market where the trade of financial instruments or assets is quickly resolved and delivered. While the delivery of purchased goods may be slightly delayed due to consideration of real estate operations or business principles. However, the purchase of a real estate market is paid for at a fixed price in the purchase area rather than at the time of distribution. This is in contrast to futures markets, where delivery should be made later, and prices may fluctuate in line with market movements that occur after a transaction has been made."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Spot Trading"
            description="Spot trading refers to the system of buying and selling goods without the use of force and differs from trading in alternatives such as futures or options. Spot orders come in a variety of forms: limited orders allow a person to place an order for a certain amount (goods may or may not reach the end), market orders allow a person to purchase goods at its current market price), and more complex. order types are also available. Spot trading is considered to be a very small risk than an exit trade because it does not involve potential power and property closures."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="SPV Chain Simulation Technology (Clover Finance)"
            description="SPV chain modeling technology is a dual two-bridge (2WP) bridge framework employed by Clover Finance-specific blockchain project to facilitate unreliable, seamless communication between blockchains. The system allows cross-platform interaction that allows different types of assets and data to be transmitted between different blockchains. SPV chain imitation technology allows the integration of Clover-based Clover-type addresses with Clover's Polkadot counterparts and, in this process, facilitates cross-chain interaction between the two systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Spyware"
            description="Spyware is a type of malware program designed to record, track, and harvest as much information as possible from an infected device. Different types of spyware include trojan, adware, keyloggers, tracking cookies, and other types of system monitoring software. Spyware is often distributed to unsuspecting users through infected websites, pop-up ads, emails, file downloads, and other methods. Spyware, like other forms of malware, can be dangerous for crypto users because it allows for the possibility of data theft of private wallet keys and other information, which can be used to steal user funds."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Stablecoin"
            description="Stablecoin is a digital currency that is designed to hold stable value. The amount of most stablecoins available is directly linked to pre-determined fiat currencies or tangible assets, such as the Gemini Dollar (GUSD), denominated in 1: 1 in US dollars. However, stablecoins can also gain price stability by using collateral against other cryptocurrencies or algorithmic token management. Since stablecoins are not very flexible in price, they are designed to be used instead of investing."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Stake (eos.system)"
            description="In the EOS system, where software developers send and communicate smart contracts with the presented actions, they are backed up by other types of resources: RAM, CPU and NET. Engineers can contribute to NET and CPU, and purchase RAM with EOS coins."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Staking"
            description="Staking is a process in which a blockchain network user 'captures' or locks their cryptocurrency assets into a network as part of a compromise process, thereby ensuring the security and performance of the series. Stake goods are usually held in a secure location or in a crypto wallet, and in order to encourage participation in many projects reward stacked token holders with an annual, usually refundable fee. Staking is a key feature of Proof-of-Stake (PoS) blockchain agreements, and each blockchain project that incorporates a critical feature has its own staking requirements requirements and withdrawal restrictions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Staking Derivative"
            description="Staking alternatives are a financial tool commonly used within certain types of decentralized finance (DeFi) blockchain contracts. Staking alternatives increase stacking, or the inclusion of assets in the blockchain protocol in order to collect regular cash prizes, in a different way, usually through the Proof-of-Stake (PoS) blockchain protocol. Stake emissions are usually given a prefix in front of the common token name, such as 'cTokens' representing other assets such as ETH (in the form of cETH) within the Compound blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Staking Pool"
            description="In the Stake Proof Network, staking pools allow multiple cryptocurrency participants to pool tokens in an integrated pool to protect the profits held by a large, collected network pole. By integrating accounting resources, individual participants who choose to participate in the staking pool combine their grip strength to effectively validate and validate new blocks, increasing their chances of winning a portion of the resulting block prizes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Staking Delay"
            description="Fixed delays are a coded, time-based method used by certain types of malware to bypass cybersecurity network security. After infecting a targeted system, a malware program with a portable delay machine often uses a series of useless, harmless CPU cycles to delay the production of its actual malicious code until the targeted network is no longer alert. If a malware program successfully overrides security defenses, it can continue to generate its malicious code with full effect."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Standard Deviation"
            description="The standard deviation is a measure of how far each value detected in a data set is than the average value. This measure shows that the spread of data is within the data set, and how far the specific data is from the normal process. Within the context of an investment, a standard deviation can be used to calculate the current rate of return on an investment related to its historical definition in order to determine the volatility of the investment history. In general, dynamic investments are characterized by high-level deviations, while stable investments often have a relatively low standard deviation."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Startup"
            description="The startup is a newly launched company that is in the early stages of its development. Getting started is usually a business venture started with money donated by the founding team itself and perhaps with friends or immediate family. Startups must work hard to build a strong business model (often with a prototype), hoping to get more investment in high-value individuals (HNWI), venture capitalists (VCs), and other funding mechanisms."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="State"
            description="A state as it is related to blockchain or computer science is a form of computer system that changes over time. The blockchain environment is very important for the health and proper functioning of the network because it records and maintains all the historical changes that have taken place in the network throughout its life cycle. This data can be used to restore the system to its original state (or version) if the network is unavailable or encounters significant interruptions or failures."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="State Channel (Rating Solution)"
            description="State channel facilitates dual communication between blockchain and off-chain transactions channels using various methods to improve transaction capacity and speed. The state channel does not require immediate mining involvement to confirm the operation. Instead, a network-based device is closed using a multi-signature or intelligent contract method. Once the activity or set of tasks has been completed on a provincial channel, the final “status” of the ‘channel’ ’and all existing changes are recorded in the basic blockchain. Liquid Network, Celer, Bitcoin’s Lightning Network, and Ethereum’s Raiden Network are examples of state channels. In trilemma trading, state channels sacrifice a certain level of segregation in order to achieve greater growth."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="State Machine Replication (SMR)"
            description="State Machine Replication (SMR) is a common computer-generated method of building error-tolerant systems. This is achieved by duplicating servers (provinces or state machinery) and arranging customer transactions via server replicas. SMR achieves this by extracting web service copies from a set of servers instead of just one. This approach may increase system performance and power as simulations provide additional resources to the service, while achieving performance tolerance by eliminating a single point of failure."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Status Network Token (SNT)"
            description="Status Network Token is the native ERC-20 Status Network token, an open source messaging platform. The SNT plays an important role in governance of the Situation division, as any State Sector participant can use the SNT to vote on network proposals. For each vote the dedicated SNT is consolidated into a separate decision token. As a result, while the number of SNT tokens a user has at the time of voting represents that voting power of that user in that decision, it does not cost any SNT to participate."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Stellar (XLM)"
            description="Stellar is an open source, nationally distributed payment protocol that allows for seamless transactions, crossing boundaries between all currencies. The project's native token, Stellar Lumens (XLM), is used to pay for network coverage, prevent network spam, and finance through the Stellar Distributed Exchange (SDEX)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Storage Unit (SKU)"
            description="Stock Exchange Units (SKUs) are used in asset management to distinguish a different type of commodity. The different categories of SKU include color, size, packaging material, manufacturer, description, and warranty terms. SKUs are used by companies, manufacturers, warehouse workers, and retailers to identify items as they go through a supply chain, and to provide data points for business management systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Stop Loss of Order"
            description="A stop-loss order is a type of order designed to help prevent major losses for traders. It works by setting the 'stop' and 'loss' values, where the 'loss' price is the initial value that causes the asset to prepare to sell when the 'stop' price is reached. Stop losses are designed to sell collateral if your price falls below a certain amount, helping to monitor unexpected losses. For example, a user may specify a sale of a particular company's stock or cryptocurrency assets if it decreases in value from its actual purchase price as described above."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Storage Miner (Filecoin)"
            description="The Filecoin protocol relies on storage miners to provide a cloud storage platform. Storage miners are node that solves cryptographic evidence to ensure storage at all times. These nodes must use the Filecoin (FIL) tokens as collateral to ensure that they maintain their contractual obligations, and in return receive additional FIL by storing data to customers on the network. Due to the design limitations imposed by Filecoin's Proof-of-Replication (PoRep) and Proof-of-Spacetime (PoSpacetime) methods, storage mines require robust hardware to meet network storage and algorithmic proof requirements."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Storage Area (Storj)"
            description="The Storj network uses storage space to provide network bandwidth and store customer data in a secure, separate format. Any person or organization with a stable Internet connection and excessive hard drive space and bandwidth can set up storage space. Each month, node operators are compensated for STORJ tokens with USD value based on current market rates."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Storefront"
            description="A storefront is an asset that is expected to retain its value / purchasing power over time and can be recovered in a reliable way and changed over time. Commodities that once were considered reliable stores of value include fiat, housing, and rare metals such as gold and silver. As blockchain technology grows exponentially, a growing number of people now view certain cryptocurrency tokens, especially bitcoin (BTC), as active value stores."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Storj"
            description="Storj is a blockchain-enabled data storage network that allows users to access remote, country-class and retrieval services, or provide backup services using excessive hard drive space and bandwidth. Although user files are not stored in the blockchain, Storj uses hashing, Proof of Work (PoW), key pair cryptography, and other blockchain features to provide data storage services with similar standards, and in some cases higher than . is provided by large central cloud storage services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="STRIDE (Crypto.com)"
            description="STRIDE is a threat model used by Crypto.com and other businesses to identify and prevent potential cybersecurity threats. The term 'STRIDE' is an acronym for 'Deception, Interruption, Denial, Disclosure of Information, Denial of Service, and Righteousness.' Each of these concepts is a common category of cyber threats, and security experts often use STRIDE as a framework to explore the various ways in which the system should be protected to avoid exposure."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="The price of the strike"
            description="A strike price is the amount by which an investor can exercise the right to buy or sell a principal collateral in an options contract. The strike price is set in a currency exchange, and may be the function of the base collateral, which is the market value of the collateral on the day the option is issued. For example, suppose an investor buys a $ 2 monthly call option to buy bitcoin (BTC) for $ 1,000. As a result, the strike price of this contract is $ 1,000, which means that the investor can choose to use his cryptocurrency buying option at this price before the end of the month and the contract expires."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Stroop"
            description="Very small system of lumens (XLM), which is divided into 7 decimal places (1 stroop = 0.0000001 XLM)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Subgraph (Graph)"
            description="The subgraph is a special type of application interface (API) employed by The Graph indexing and query forum. It is designed to create a global graph - via the Ethereum network - of the world's most important public data, which allows software developers to use, index, and provide blockchain data in a way that ensures cryptographically storage. The subtitles help to reduce the frequent formation of standard reference servers, which often require critical engineering resources and computer hardware to achieve logically secure access to shared data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Subgraph Manifest (Graph)"
            description="A subgraph manifest is a subgraph definition that allows subgraphs to automatically learn what Ethereum data will identify, as well as how to identify it. Subgraph display can help create subgraphs - which after deployment become part of a global graph of blockchain data network. Usually, subtitle display is part of a digital database (made up of multiple subgraphs) that defines what certain subcontracts for subtitle indicators are, what events occur from key contracts, and how to map event data to companies that store and produce Graph Node. questions around."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Subnetwork (Subnet)"
            description="Subnetwork (subnet) is a separate blockchain protocol built into working within the Layer-1 blockchain protocol (such as the Ethereum or Bitcoin network). It is not uncommon for there to be many subordinate networks - up to hundreds, or thousands in the future - working together and completing a parental chain. Subnetworks are commonly used by various blockchain ecosystems in the industry, and they all have different design parameters, depending on their individual structure and their proposed real-world use."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Substrate (Polkadot Development Framework)"
            description="Substrate is a blockchain integration platform and application development framework developed by Parity Technologies, the creator of blockchain interoperability Polkadot. The purpose of the Substrate is to help simplify the process of building dApps or independent blockchains running on the Polkadot network. Substrate accomplishes this by providing a fully flexible blockchain design framework that includes multilingual software development, forkless development, simple client design, and multi-featured development tools. As a result, the Substrate is one of the most powerful components of the Polkadot ecosystem. However, blockchains in the Polkadot network do not need to be built with Substrate."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Substrate Builders Program (Polkadot and Kusama)"
            description="Parity Technologies program that provides support for building projects, infrastructure, or internationally distributed applications (dApps) using a Substrate blockchain-building framework. The program provides technical assistance, direct support, and additional marketing assistance and business development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Supermini (Akash Network)"
            description="Akash Network Supermini is a mining machine designed and developed by Akash Network. Allows its users to access AKT tokens via the device. Supermini is designed to give users access to a compact, powerful, integrated, portable computer that acts as an AKT token node on the Akash Network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sushi Liquidity Provider (SLP) Token"
            description="Sushi Liquidity Provider (SLP) tokens is a term applied to the liquidity provider (LP) tokens platform in the SushiSwap protocol. SLP tokens represent an equal share of the assets consolidated in a particular area of ​​the SushiSwap liquidity pool. If, for example, a user provides money in a pool of ether liquidity (ETH) and sushi (SUSHI), they will receive SUSHI-ETH SLP tokens."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Switch (Alternative)"
            description="An exchange is a derivative contract that allows parties to exchange cash flows or the value of one asset to another. The fluctuations usually involve cash flows based on the principal consideration assumed as a bond or loan. Generally, the principal amount does not change hands during the exchange, while the different components of cash flow in the contract form one leg. Usually one currency flow is adjusted while the other fluctuates based on a floating exchange rate, a specific interest rate, or an index price. Exit fluctuations are made by large centers and occur off-the-counter (OTC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Swarm"
            description="In the context of the BitTorrent protocol, the peer-to-peer group shared a torrent (file)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Swing Trader"
            description="Swing Trading is a market trading strategy that attempts to capture short-term and medium-term gains based on fluctuations in the price of stocks, commodities, and / or currencies within a few days or weeks. In order to be effective, swing traders must carefully monitor their positions and time trading carefully. Their risk / reward ratio sits on the spectrum between that of day traders and style retailers. In many cases, swing traders often rely on married technical indicators to identify effective trading opportunities, although technical analysis is considered by many as incomplete science."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Switcheo"
            description="Switcheo is a separate cryptocurrencty exchange in the NEO blockchain with a clear and simple product focus that allows for cross-chain exchanges and currency trading for EOS, Ethereum, and NEO. The project's native token, Switcheo Token (SWTH), is a standard NEP-5 digital currency that can be used on the Switcheo network to receive trading discounts, as well as access to several special offers and services. SWTH was upgraded in October 2020 under a revised monetary monetary policy contract."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Sybil Attack"
            description="Sybil Attack is a violation of Internet security rules where an attacker can create multiple fake information that can act as nodes to flood a targeted network with the intention of disrupting or capturing it. Sybil Attack uses the way official nodes build connections. Sybil attacks can be particularly dangerous if targeted to systems where new nodes are created and easily adapted."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Symmetric encryption"
            description="Symmetric encryption is a type of encryption that uses the same key for both encryption and deleting electronic information. Both businesses that communicate with symmetric encryption should have identical copies of this key, which must be kept private and not shared with anyone in order to maintain the security of their interaction. In contrast, asymmetric encryption uses two keys - the public key to encrypt information, and the private key to decrypt the information."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Syntax (Computer Science)"
            description="In computer programming, syntax is the process by which a code is formed and integrated to form a large sequence. As it relates to a computer program and language service, syntax is usually compiled using a syntax format that is mathematically typed, where the code must be checked before sending it to the program, or typed randomly, where the code is only tested after program implementation. . In general, mathematically typed languages ​​are faster in writing compared to randomly typed languages. Different languages ​​use different types of syntax but there are two main syntax formats, graphic or typed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Synthetic Asset"
            description="Manufactured assets are cryptographic digital assets that represent assets such as gold and silver, stablecoins, fiat currencies, and similar financial instruments. In short, artificial assets are token versions of common types of assets that are generally not readily available to users participating in the general financial sector. Manufactured commodities can generally represent contractual transactions from basic assets such as stocks, bonds, commodities, currencies, indicators, and interest rates. This capability gives investors the opportunity to invest in traditional asset classes using different decentralized finance (DeFi) tools and their basic regulations, thereby increasing ease of use and reducing barrier to entry into the aforementioned investment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Synthetix (SNX)"
            description="Synthetix is ​​an Ethereum-based token trading platform that allows users to exchange tokens and transactions for cryptocurrencies, stocks, currencies, precious metals, and other commodities in the form of ERC-20 tokens. This is achieved through a dual Synthetix tokens model, in which users place the main forum token, Synthetix Network Tokens (SNX), as collateral to create new synthetic goods. These 'Synths' are designed to track metrics, usually the price, of real-world assets, thus allowing users to invest in assets without holding them back, as an alternative. Synthetix preceded Universal Market Access (UMA), which is also built on Ethereum and introduced to achieve the same purpose."
          />
        </Col>
      </Row>
    </section>
  );
}

export default SSection
