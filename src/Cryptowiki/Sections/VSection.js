import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const VSection = () => {
  const vSectionRef = useNav("V");

  return (
    <section ref={vSectionRef} id="vSectionContent">
      <div className="titleWrap">
        <p className="title-line">V</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Verification"
            description="Within the context of blockchain technology, a guarantor is a business that is responsible for verifying and authorizing transactions delivered by users and / or blockchain clients. Each blockchain protocol has its own set of parameters for what constitutes an acceptable authentication and how these certificates work. Many blockchain networks are broken down depending on a specific type of validator node to process on-chain transactions in an unregulated and distributed way."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Value Investment"
            description="Value investing is an investment strategy that involves identifying stocks and other securities that appear to be trading below their internal value. Price investors often carefully work the securities they like to follow and stick to long-term holdings of investments. As a result, these investors tend to ignore price movements that do not appear to be in line with the company's long-term foundations, such as a sudden reaction to broader industry issues or short-term market events."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vault"
            description="A vault is a piece of blockchain structures used for the storage, deposit, and withdrawal of various types of cryptocurrency assets, particularly in financial protocols (DeFi). For example, when a user transports, lends, borrows, or consolidates different crypto assets, the DeFi protocol should automatically exchange the correct number of assets between different entities through smart contracts. The vault mechanism can also be used to keep a stable 1: 1 stable with fiat coins by adding and subtracting various cryptocurrensets (usually baskets of coins) and stable coins during buy or sell pressures."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vault (Reserve Protocol)"
            description="The Reserve Protocol uses a vault used to stabilize the stablecoin stockcoin (RSV) and to maintain a limited vault ratio. This is achieved by adding and removing RSV, RSR, and bond securities when the RSV bond drops below or rises above its US $ 1 value range between $ 0.98 and $ 1.02. In addition, when the vault rating reflects appreciation values ​​and depreciation levels of less than + 0.1% or -0.1%, RSR owners buy or sell RSR to obtain property tokens to help maintain RSV equity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="VeChain Improvement Proposal (VIP)"
            description="VeChain Improvement Proposal (VIP) is a method used by VeChain and the basic VeChainThor blockchain to allow VeChain ecosystem participants and community members to propose changes to the VeChain protocol and development path. There are four main types of VIPs: app, interface, info, and theme. Once the VIP has been nominated, the VIP author is responsible for building consensus among the community and writing opposing views."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="VeChain Token (VET)"
            description="VeChain Token (VET) is a symbol of traditional governance and resources that support the VeChainThor blockchain network and the VeChain ecosystem as a whole. VET owners can contribute to network security and compatibility by capturing VET within different nodes within the VeChainThor blockchain (AM, XN, EN)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Venture Capital (VC)"
            description="Venture Capital (VC) is a type of private financing program offered by a company to set up businesses that are considered to have high growth potential. A VC is usually issued to high value individuals (HNWI), investment banks, or large corporations that invest in a particular industry. Often VC blockchain firms only invest in blockchain-based business start-up projects. Venture funding also sometimes includes technical or administrative technology. VC firms often provide funding to companies in their early stages, such as seed funding around."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Venus Smart Contract Controller"
            description="Part of the Venus Protocol, Venus Controller Contract works on Binance Smart Chain (BSC) as a separate version of the processor space. This smart contract controller verifies oracle price feeds, evaluates collateral deposits, guarantees purchases, and directs transactions between smart contracts associated with the platform. The controlling contract uses market capitalized securities and guarantees financial and collateral requirements prior to the execution of any prudent contract work."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Verifiable Delay Function (VDF)"
            description="VDF Verified Verification Function (VDF) is a cryptographic primitive created in 2018, designed to use a given number of sequences that allow the end result to be successfully verified. VDFs can be used within the context of blockchain and computer programs to help create distrust, social disorder in network-based environments. In order to achieve the desired result within a distributed system, verified delay functions usually involve three main processes: setting, testing, and verification."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Verifiable Random Function (VRF)"
            description="Verrifiable Random Function (VRF) is a cryptographic primitive one invented in 1999 and has many useful applications that include pre-determined commitments and having outbursts against previous attacks. When used, VRF contains three related algorithms that perform the following: Key Generation: A mathematical function that when given random input generates a verification key / private key pair, Test: This function takes the message and the secret key generated to generate false output, as well as related evidence, Verification: This function uses the verification key and other values ​​to ensure that the output of the test function could only be performed by someone with the associated secret key - all except that secret key that has ever been disclosed, VRF has a wide range of cases to be used in all cryptographic schemes, agreements, and programs."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Verification code"
            description="A digitally generated code verification code is usually sent to the user's email account, mobile device, or computer to verify the validity of the login attempt. Verification codes are usually sent via email, text message, or received by two-factor authentication services (2FA) such as Google Authenticator which can randomly generate a six-digit number every 30 seconds using the Time-based One-Time Password algorithm (TOTP ) or HMAC's One-Time Password algorithm (HOTP)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vertical Scalability"
            description="Direct growth refers to the network or device capacity of hardware upgrades or software capabilities by adding additional resources. The most common types of direct measurements include adding extra RAM or processing power to the device. However, the exact measurement can be done in a variety of ways, depending on the network / device configuration and the nature of the intended development."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vesting"
            description="Within the context of the blockchain, vesting is the process of releasing time-bound tokens. These tokens are usually built for the blockchain project team, partners, and other contributors who actively help develop the project. Funds set aside for this purpose are usually temporarily locked by smart contracts, which effectively block access to tokens until fixed terms are met."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="VeThor (VTHO)"
            description="VeThor coins (VTHO) are used to enable the VeChain network. New VTHO coins are continuously produced from VET coin owners each time a new block is created. A new block is usually added to the VeChain book once every 10 seconds, and each VET produces 0.00000005 VTHO each new block, which means about 0.000432 VTHO generated per VET per day. VET owners can increase the VTHO production rate of their VET coins by placing their coins at different nodes, classified tiers in accordance with their catch requirements. The VeChain economic model is designed to prevent transaction fees from fluctuating in relation to VET prices, thus ensuring the consistency of transaction costs and forecasts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Video Transcoding"
            description="Video Transcoding is the process of converting video file from one format to another, with the aim of making videos viewable with different devices and internet bandwidth. This process usually occurs when the target device does not support a specific file format, or has limited storage capacity. Video codecs allow broadcasters to download large video files in seconds instead of hours, allowing widespread access to video streaming or related services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Virtual Commodity Association (VCA)"
            description="Founded in 2018, the Virtual Commodity Association (VCA) is a non-profit organization working towards the goal of establishing an industry-sponsored, self-governing corporation of the U.S. financial services industry. The organization started out as a committee to explore ways to ensure consumer protection and market integrity in the real estate markets, and has since transformed into a legal entity spread across six committees and overseen by a board of directors."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Virtual Machine (VM)"
            description="Virtual Machine (VM) is a cloud-based simulation of a computer system that provides virtual computer system operation. VMs can be customized to mimic your specialty computer software, software, or combination both, and provide a framework for data creation and marketing on blockchain networks. The most popular VM in the blockchain industry is the Ethereum Virtual Machine (EVM)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Virtual Private Network (VPN)"
            description="A virtual private network (VPN) is a type of technology used to integrate and transmit data over the Internet through a private channel. VPNs are usually encrypted to ensure the security and privacy of data are not affected by malicious actors from outside companies. VPNs can be used by private commercial clients or large corporate environments, allowing access to network services and sensitive data that are often not publicly available. VPNs are aptly named because they provide visibility instead of physical access to a private network and come in two main types: remote access, and site to site."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Virtual Reality (VR)"
            description="Virtual Reality (VR) is a very different simulation experience in the real world. Today, the virtual reality can be used for entertainment (such as video games), educational programs (such as medical or military training), and many other fields. Generally, VR takes two main types: Focused VR, and text-based VR (also called cyberspace). At the moment, virtual headsets are one of the most common ways to engage in VR, allowing users to explore realistic images, sounds, and real-life scenarios that mimic the physical presence of a user in a particular environment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vishing"
            description="Vishing is a form of fraudulent theft of sensitive information based on fraudulent phone calls or voice messages to mislead targets in revealing personal information, such as account passwords or credit card details. In many cases, a vicious actor who uses vishing will disguise himself as a reputable company or trusted authority, and their message will usually include the giving of a “free prize” or a fictional problem that the target should be familiar with immediately"
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vitalik Buterin"
            description="Vitalik Buterin is a Russian-Canadian editor and author best known for launching Ethereum. In 2013, Buterin published a white paper promoting Ethereum as a global computer capable of handling multiple applications (dApps). In contrast to bitcoin (BTC) - which is mainly aimed at payment and function as a value store - Ethereum was intended to function as a 'Swiss-army knife protocol', with flexible and comprehensive applications. Buterin continued to work with several other developers to develop Ethereum, which was launched in 2015. To date, Buterin is regarded by many crypto enthusiasts as the de facto figurehead of Ethereum."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Voice (EOS Blockchain)"
            description="Voice is an EOS blockchain social media platform, and was created in an effort to provide a seamless and profitable social media solution compared to traditional central social media platforms such as Facebook and Instagram. Word is said to be a very transparent social media platform because the amount of content is still distributed to maintain a user base and community. However, Voice is often unproven and its parent organization block.one is accused of unnecessary levels of placement at times. It remains to be seen whether Voice will be able to find a user base that competes with that of the largest and most popular social media platforms from tech giants."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Voice Over Internet Protocol (VOIP)"
            description="Voice Over Internet Protocol (VOIP), sometimes known as IP telephony, is a technology used to make voice communications, video calling, and online video conferencing. VOIP works by sending and receiving voice and video data between two or more IP addresses. VOIP became popular with Skype, Zoom, and several other large businesses over the past 30 years. VOIP has changed the way most businesses communicate because it is usually free or much cheaper to use compared to remote phones. VOIP started as a computer-to-computer service but has recently expanded from mobile to mobile."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Volatility"
            description="Within the context of a market environment, volatility refers to the degree of variability in the trading price of an acquired asset compared to its lower value over a period of time. The higher the price of a commodity, the greater the frequency and the price. Volatility is usually measured using the standard deviation of the logarithmic return. Many investors track asset volatility in order to identify and take advantage of trading opportunities based on perceived price trends. However, excessive price volatility and unpredictability often deter investors with low risk tolerance."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Volume Weighted Average Price (VWAP)"
            description="In technical analysis, the average volume value (VWAP) is a stop sign that calculates the price at which an asset is traded throughout the day, based on both volume and quantity. By automatically estimating intraday closing prices for assets over time, VWAP is able to serve as a guide for identifying various levels of support and resistance. This makes VWAP an important intraday indicator for traders who rely on technical indicators to have a more efficient time to enter and exit their positions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="VTokens (Venus)"
            description="VTokens are a great way for users to interact with Venus Protocol. VTokens are securities identifiable devices that allow users to make tokens of their common crypto assets such as bitcoin (BTC) or ether (ETH) in order to acquire vBTC or vETH. VTokens are used in protocols as a rescue tool for borrowing and supplying goods and making VAI stablecoins. Also, transactions with vTokens - which include redeeming, repaying loans, closing loans, or transfers - are done through a vTok contract. Examples of vTokens found on Venus include: vBTC, vETH, vBNB, vBUSD, vUSDC, and vXVS."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Vulnerability Rewards Program (VRP)"
            description="A risk reward program (VRP), or distraction benefit program, is a program that blockchain or software development businesses may offer to external engineers to promote appropriate reporting of potential problems in computer code that creates network or platform protocols. VRPs generally offer financial rewards to successful auditors of computer code. In the blockchain field, these rewards usually come in the form of a basic network cryptocurrency or crypto token."
          />
        </Col>
      </Row>
    </section>
  );
}

export default VSection
