import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const GSection = () => {
  const gSectionRef = useNav("G");

  return (
    <section ref={gSectionRef} id="gSectionContent">
      <div className="titleWrap">
        <p className="title-line">G</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Gartner"
            description="Gartner is an American research and consulting company that provides data and metrics to its top clients worldwide in all industries such as technology, finance, telecommunications, compliance, customer service, human resources, and supply chain. The company provides a wide range of services - usually to executives leading large international corporations - including webinars, written research, financial and industry data, and more. Gartner also hosts conferences, management training, and other forums for various businesses and government clients around the world."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gas"
            description="The fees associated with trading and making smart contracts in the Ethereum blockchain are called gas. Installed applications (dApps) in the Ethereum blockchain work using smart contracts that set the rules for event execution. Event creation happens through transactions, which come at a cost to the network. These costs are calculated based on the calculation power required for each action and for how long each action lasted. Gas costs are defined in gwei, ether (ETH) system, which is equal to 0.000000001 ETH. Gas is built into the system to provide resources to a network of miners who verify transactions and create new blocks. Gas also serves as a tool to reduce spam. By adding costs to each activity, malicious actors who may try to disrupt the system by sending a large number of small tasks are prevented from doing so."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gas (GAS)"
            description="GAS (not to be confused with gas costs available on the Ethereum network) and NEO are two native cryptocurrencies of the NEO blockchain protocol. NEO serves as the primary transaction fee and gives owners the right to vote on network proposals. Users can also access GAS by setting their NEO. GAS is also used to pay for network usage: service fees, storage costs, and fees related to the use of smart contracts. All NEO coins are made in protocol development, and GAS coins are made with each new block."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gas Fees"
            description="Gas bills are payments made by users to cover transaction costs or to make smart contracts on the Ethereum blockchain network, as compensation for the computer power required for such executions. Gas costs usually have a small amount of cryptocurrency ether (ETH). The activity sender can decide if you want the job to be sent slowly or quickly. When the work is processed quickly, you will need more gas money."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gas Limit"
            description="Ethereum charges a fee, called gas, for the calculation effort required to send a transaction to the network - and the gas limit is the highest Ethereum network can charge a user. The gas limit depends on the difficulty of the task, the selected transmission speed, and the current level of network congestion during the operation. Because the Ethereum network is so large, thousands of transactions are often queued and await verification, resulting in network miners prioritizing the highest paid users' transactions to post their transactions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gateway"
            description="Gates are devices that use Internet of Things (IoT) technology to connect to a blockchain system or related network infrastructure. Many IoT network devices are often hampered by poor battery life, limited computer power, limited network bandwidth, and other performance impediments. Gates are designed to help combat this malfunction and can be implemented with any number of devices capable of running the network on their own. Examples of gates include a mobile phone connected to a variety of portable devices, a smart car connected to multiple car devices, or a 5G base station connected to dozens of IoT devices."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gavin Wood"
            description="Gavin Wood is a British computer scientist best known for founding Polkadot, Kusama, Parity Technologies, and the Web3 Foundation. Wood became one of the first founders of Ethereum in 2013 and the Chief Technology Officer of the project (CTO). Wood also developed the Solidity system language used by Ethereum to design smart contracts. In 2019, Wood developed the Kusama blockchain network and continues to build Polkadot and Kusama, along with other related organizations."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gems (Sandbox)"
            description="In the Sandbox game, ERC-20 Token values ​​describe user attributes created by users. They are burned when used."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="General Availability (GA)."
            description="Version of General Availability (GA) refers to a version of a software program or program that is released for general public use. The GA version is usually released after the release of the RTM version and a few previous versions (including alpha and beta releases). The GA version has often been tested and finalized to be ready for purchase for commercial purposes, which includes control and protection testing and more."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="General Data Protection Regulation (GDPR)"
            description="The General Data Protection Regulation (GDPR) is a European data management and protection framework for the European Union (EU) and the European Economic Area (EEA). The GDPR is also responsible for the transfer of personal data outside the European Union (GDPR). EU). The main objective of the GDPR is to protect and regulate the rights of personal data and to facilitate the regulatory environment of international business within and outside the EU."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Genesis Block"
            description="Genesis block means the first block of any blockchain network. It is almost always embedded in the protocol software. It is the only blockchain network block that does not refer to the previous block."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Geographic Information Systems (GIS)"
            description="Geographic Information System (GIS) is a computer-based program used to map, share, analyze, manage, and translate multiple types of location and location data. It is common to use GIS technology to use certain types of data on maps for research, data analysis, and other engineering processes, planning, design, environmental monitoring and disaster relief, search and rescue, communications, and many other uses. GIS also uses location data and links such as length (x-axis), latitude (y-axis), and height (z-value) to achieve various purposes related to geospatial mapping and data integration of many different sectors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gigabyte (GB)"
            description="A gigabyte (GB) is a digital data storage unit made up of 1,000,000,000 bytes of data. GB is 1,000 times larger than a megabyte (MB) and is measured using the International System of Units (SI) measurement scale. Bytes are a basic data storage unit, but they have grown to include many large measurements including kilometers (KBs), megabytes, and terabytes (TBs). GB, such as MB, is commonly used to measure data storage on a computer or computer network, or on external USB storage devices or hard drives, and other related software or computer hardware."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Git"
            description="Developed by Linus Torvalds, Git is an open source software program used mainly by editors. It's free to use, Git allows system editors to work with code without a central server. For ease of use, some use intermittent Git ports such as GitLab, GitHub, or BitBucket. Using data formats such as the Merkle tree, changes in older versions of the system cannot be changed without recognition - it improves the brightness and development of secure code. Considered a version control system, Git allows you to revert to older versions of the software and allows more users to integrate their code changes into the new version at once."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="GitHub"
            description="GitHub, a Microsoft-owned company, provides collaborative online hosting software development services using Git, a distributed version tracking system. With a variety of advanced collaboration tools, security features, and version control, GitHub has become a de-facto standard for sharing, online software development. GitHub offers free personal accounts in addition to business accounts. It is often used to handle open source projects, although it also provides confidential storage as well."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Global Industry Classification Standard (GICS)"
            description="The Global Industry Classification Standard (GICS) is a financial tax system adopted by most of the global financial system. The “language” agreed upon to understand the industries and sectors in which certain companies are divided. The GICS framework consists of 11 sectors, 24 industrial groups, 69 industries, and 158 small industries. The GICS system separates public companies only."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Go to Language Planning"
            description="Go is an open source programming language designed by Google. Go is sometimes called 'Golang' because of its domain name (golang.org). Go is a programmed and integrated programming language similar to the C-structure structure, but incorporates advanced production features when working with large networks and code bases. Go is the preferred programming language for internationally blockchain networks, and is used with many dApp and other split tools."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Goguen Phase (Cardano)"
            description="Named by computer scientist Joseph Goguen, the Goguen Division is the third of the five long-term road maps of Cardano Road. One of Goguen's main goals is to allow both technical and non-technical users to build smart contracts and internationally distributed applications (dApps)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Golden Cross"
            description="The gold cross is a trading signal of a new technology in which a 50-day moving average falls above the 200-day moving average, which usually triggers a price cycle. It is the opposite of the cross-death trading signal, which is a bearish trading signal. Gold cross formations can also be found between short periods, such as 5-day and 15-day averages, although longer periods usually provide stronger signals."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Golem (GNT)"
            description="The Golem Network is a platform for democratic access to computing power that can withstand research. Allows users to provide and rent hardware that does not work in a peer-to-peer manner. Golem currently serves as an alternative to mid-range cloud computing solutions offered by Amazon, Microsoft, and IBM. The protocol solution layer allows for shared economy creation, where users earn revenue by renting their hardware. The network is sponsored by the Golem Network Token (GLM), which was previously identified as the GNT tick mark before the change of tokens in November 2020."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Google Authenticator"
            description="Google Authenticator is a mobile-based authentication system that uses two-factor authentication tools (2FA) using the Time-based One-Time Password Algorithm (TOTP) and the HMAC-based One-Time Password (HOTP) algorithm to verify user identity for used with software applications. The application generates a six-digit one-time password (which changes every 30 seconds) which must be entered in accordance with the user's regular login details. Google Authenticator serves as a preventive measure to reduce malicious players from hacking applications on a user's mobile device or web browser, and is used by most cryptocurrency exchanges as an added security measure."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gossip Protocol (Hedera Hashgraph)"
            description="Gossip Protocol is used by Hedera Hashgraph to spread information between network nodes and to reach consensus verification."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Governance"
            description="Blockchain governance refers to the official structure maintained by the blockchain ecosystem to ensure the long-term integrity, transparency, and innovation of the project. An equitable management framework includes a variety of voting methods for forum technologies, strategies, updates, and rules. Blockchain domination often includes both on-chain administration (such as cryptographic algorithms that control network configuration and compliance) and off-chain management (such as non-coded decision-making between people)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Governance token"
            description="Management token provides owners with a certain level of influence over platform protocols, products, and future performance. Governance tokens are usually issued using basic principles that aim to promote community-led growth and sustainability. Managers of administrative tokens are often able to propose changes to the protocol and use their tokens to vote on those changes. Administrative tokens are used to democratically manage the protocol in a fair and transparent manner. In Stake-proof blockchains (PoS), administrative tokens may be inserted into a pole between network verification nodes to protect the security and efficiency of the platform for normal rewards."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="GRNDPA Consensus Mechanism (Polkadot)"
            description="GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement) is one of the two main components of the integrated approach used by Polkadot to protect and maintain its network. GREAT is a way to complete the blockchain status, while its counterpart, Blind Assignment for Blockchain Extensio (BABE), is a way to produce blocks."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Graph Node (Graph)"
            description="The Graph blockchain protocol is designed to identify and query data from blockchains, and the Graph Node is a tool that allows this functionality. Graph Node is a Rust-based framework that acts as the main event source server for the Ethereum blockchain (the only blockchain currently supported) and associated system components. We are diligently updating the data store that can be asked and searched for the final GraphQL point. In fact, Graph Node is a master server that performs the processes needed to obtain answers to complex questions from the information blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Graphical User Interface (GUI)"
            description="Graphical User Interface (GUI) is a way to interact with a computer program in a visual way. GUIs are designed to simplify computer applications and use icons, windows, and menus. GUIs are very different from text-based user communications that require users to interact with computer programs using text-based instructions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Graphics Processor Unit (GPU) Mining"
            description="Mining Graphics Processor Unit (GPU) is a cryptocurrency mining system that uses GPUs instead of Central Processing Units (CPUs) that were used in the early days of the blockchain industry. For example, the Radeon HD 5970 GPU-miner is capable of performing 3,200 32-bit commands per clock. Compared to 4 32-bit commands per CPU clock, this represents an 800-fold increase in efficiency. Due to such extensive processing capabilities, GPU mines are very effective in performing the types of duplicate calculations required in cryptocurrency mines."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Grayscale (Institutional Investment Factory)"
            description="Grayscale is one of the world's leading investment companies that provides cryptocurrency assets to large institutional investors. Grayscale is famous for being one of the largest owners of bitcoin (BTC) and ether (ETH) in the world. The company provides institutional investors with a wide range of products and services including asset storage, trading, and access to its popular BTC and ETH Trusts. In addition, the company provides investment indicator funds, including the Deed Fund (DeFi) and the Digital Large Cap Fund. Grayscale is based in the U.S. and its headquarters have been in New York City since its inception in 2013."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Greenlist"
            description="Greenlist is a list of cryptocurrencies provided by the New York Department of Finance (NYDFS). NYDFS licensed token enterprises are allowed to use listed coins for authorized purposes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Grief"
            description="Tragedy occurs when a malicious user intentionally harasses or tramples other users online to interfere with their focus and strategies to cause loss to those involved (without grief). For example, grief can occur in the online video game community. Grief is usually not classified as cheating because it results from permitted use within the game (albeit for unintended purposes). Examples include destroying something built or built by other players. Basically, grief intentionally interferes with another player's in-game immersion during their play to cause loss."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gross Domestic Product (GDP)"
            description="Gross domestic product (GDP) is the market value of all completed goods and services produced in a country over a period of time. GDP is one of the most widely accepted metrics for measuring global economic power, and is used to measure the overall annual growth rate, domestic production, and total economic value. The value of a domestic product is usually calculated in three ways (by production, income, or cost) and can be adjusted for inflation and other metrics to provide the designated data. Although GDP has its limitations, it has historically served as an important tool to help guide policymakers, businesses, and investors in making informed decisions and strategies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gross Merchandise Value (GMV)"
            description="Gross Merchandise Value (GMV) - also known as Gross Merchandise Volume - is a category used in the online trading industry to indicate the total value of a trade (usually in US dollars, Euros, or other currencies) for domestic sales. . a specific market place at a given time. GMV also covers all arrears and deductions that are calculated independently, such as site revenue, which is derived from payments and is not the same as the amount of goods sold. GMV for ecommerce retailers is defined as the average price per item, multiplied by the number of individual items sold (also considered total revenue in this example)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Gwei"
            description="Gwei is an ether platform, a traditional cryptocurrency of the Ethereum blockchain. 1 gwei is equal to 0.000000001 ETH. The cost of gas, which is a charge for everything Ethereum does, is included in Gwei."
          />
        </Col>
      </Row>
    </section>
  );
}

export default GSection
