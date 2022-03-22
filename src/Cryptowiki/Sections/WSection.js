import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const WSection = () => {
  const wSectionRef = useNav("W");

  return (
    <section ref={wSectionRef} id="wSectionContent">
      <div className="titleWrap">
        <p className="title-line">W</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="WabiSabi"
            description="WabiSabi is an anonymous authentication program to be introduced in the development of CoinJoin Wasabi Wallet 2.0. WabiSabi is designed to facilitate faster, more economical, to establish an automated payment system within CoinJoin, and possibly enable Wasabi Wallet to integrate seamlessly with other technologies."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wallet"
            description="A cryptocurrency wallet is a device or service that stores keys for public and private users, allowing them to connect to various blockchains and send and receive crypto assets. Wallets can be digital (software) or portable (hardware), hot (connected) or cold (disconnected), stored (a trusted third party controls the user's private keys) or not (only the user controls his keys are not secret)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WalletConnect"
            description="WalletConnect is an open source Web3 protocol that allows users to connect their crypto wallets with shared apps (dApps). You can create encrypted connections between wallet and dApp with QR code or by scanning a deep link. WalletConnect Protocol supports over 100 wallets and over 130 dApps."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WallStreetBets (WSB)"
            description="WallStreetBets (WSB) or r / wallstreetbets is a subreddit that is part of the Reddit online forum where users discuss stock and strategic trading options. The WSB is notorious for its tendency to trade aggressive tactics and offensive language, not to mention its role in the short-lived consolidation of Gamestop, which has resulted in huge losses in short-term positions from US firms. This loss increased to $ 70 billion USD in a short period in early 2021."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WannaCry Ransomware"
            description="WannaCry (also known as WCry, WanaCrypt0r, and Wana Decrypt0r 2.0) with bitcoin (BTC) to remove file encryption. The malware program spread rapidly through many computer networks and affected users in more than 150 countries, resulting in billions of dollars in damages and ransom payments."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wash Trading"
            description="Wash trading is a form of fraud in a market where collateral or other goods are bought and sold for the purpose of displaying misleading market information. Wash trading is usually conducted by the trader and trader for maximum profit. In some cases, trading in laundry is done by a single entity that acts as a buyer and seller of goods to control its value, or to show a higher trading volume compared to the actual selling price. Wash trading can also be done by trading firms, brokers, and cryptocurrency trading."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Watchdog Organization"
            description="A watchdog is a business, usually a non-profit, that monitors the activities of the government or industry in order to ensure that the government or industry does not behave illegally or unfairly. Monitors alert the public when they detect such behavior."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Watcher (OMG Foundation)"
            description="Within the OMG Foundation, the watchdog is a computer that monitors the network for unusual and malicious activity and ensures that the data sent to the Ethereum blockchain for completion is correct. The OMG Foundation viewer network is split and any OMG Foundation user can use the viewer."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Watch list"
            description="A checklist is a method, usually web-based, that allows users to create a list of hidden treasures they wish to track or track the best research projects they are considering investing in. Alternatively, watch lists can be used and compiled and display some ready-made ones. -Blockchain-related hand tools. For example, by creating a watch list on the stock charting.com platform, the user is able to store and quickly access favorite cryptocurrency technology charts to assess their investment readiness in real time."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wave NG"
            description="In a Waves network, the method that determines which node to generate the next block is called Waves-NG. This process splits the Waves blockchain into key blocks and microblocks to reduce the chances of a fork and improve network outages. This is achieved when the selected miner node obtains permission to generate the next free block by sending a key block. After the block key is sent, the node creates and sends microblocks during the digging period of three seconds (including transaction with reference to the previous microblock or key). Some miners then dig up these microblocks and publish them on the network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Weak Hands"
            description="The term “weak hands” is used in the crypto space to refer to an investor who chooses to sell his funds when there is a major immersion in the market, taking a loss. This is often seen as a poor investment strategy as long-term investors tend to believe that, over time, the value of their cryptocurrency portfolio will rise above their initial value despite major market volatility."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web 1.0 (Web1)"
            description="Web 1.0 was introduced in the early 1990's when the Internet began to enjoy common discovery. Web 1.0 was primarily a static, read-only infrastructure that generally lacked extended Web 2.0 functions. Web 1.0 infrastructure is made up of many companies that are less able to maintain their online identity because they were replaced by more efficient, more efficient systems that were widespread in the early 2000's. Today, many are seeing a new revolution in the internet, as blockchain programs seek to promote a more sophisticated, democratic, user-friendly online version: Web 3.0."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web 2.0 (Web2)"
            description="The realization of Web 2.0 began in the early 2000's. This second wave of online innovation is characterized by its interactive writing and writing model. Forums like Amazon, Facebook, Airbnb, Alibaba, and Twitter have led to the development of Web 2.0, providing a dynamic and multi-functional experience across all of our devices. However, many criticize Web 2.0 for being too single-centered, and for paving the way for profit-oriented, unscrupulous advertising, overcrowding, declining privacy, and widespread data theft. In response, the Web 3.0 movement seeks to use blockchain technology to turn the Web 2.0 model on its head and connect programs directly with each other."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web 3.0 (Web3)"
            description="The term Web 3.0 refers to a third-generation computer vision, which expects blockchain-like technologies to extend the Internet and divide Web 2.0 companies such as Facebook, Amazon, LinkedIn, and Apple to enable the exchange of online value, and allow users. to own their data. Web 3.0 is designed to benefit all participants using the peer-to-peer (P2P) model for websites, applications, and the Internet as a whole. It will focus on a wide range of ways, from generating semantic web-readable data-driven semantic web. Many believe that blockchain and crypto are essential to the realization of an open, public, research-free, unlimited, free: Web 3.0."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web Application"
            description="A web application is a software application or program that runs on a web server rather than the operating system of the device. Web applications are accessible through a web browser with an Internet connection and play an important role in interpreting user experience online (UX)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web Application Firewall (WAF)"
            description="A web application firewall (WAF) is a type of security program that filters, monitors, and blocks HTTP traffic to and from a particular web service. WAF resides between external users and web applications and plays a key role in protecting important business web applications and web servers from application framework attacks. WAFs differ from network firewalls, providing a barrier between external and internal network traffic, and are therefore designed to protect the local area network (LAN) protected from unauthorized access."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web of Trusted (Status)"
            description="Within the Status Network, the Trust Web is a shared shadow system where users place tokens against usernames to show trust in the user."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web socket"
            description="WebSocket is a computer communication protocol that enables dual, interactive communication between a web browser or another client and a server."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web Wallet"
            description="A web wallet is a cryptocurrency wallet accessed through a web browser. Many web wallets are security services run by cryptocurrency exchanges. Web bags are considered 'hot bags' because they are connected to the Internet."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Web3 Foundation (Polkadot)"
            description="The Web3 Foundation is a Swiss-based foundation dedicated to the development of Web3 technology. Web3 is considered to be the next generation of computers that will focus on web sharing, online value exchange, and users who own their data. Founded by Gavin Wood, a former CTO and founder of Ethereum, Web3 publishes research on cryptography and other blockchain-related fields and provides web-based startup grants and blockchain projects. The Polkadot blockchain is one such project."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WebAssembly (WASM)"
            description="WebAssembly (WASM) is the standard industry programming language for running binary programs in web browsers with close native functionality. WASM's main goal is to enable efficient web applications, and is designed to be a compilation policy for any language, including JavaScript, which has long been the main language of web browsers. As WASM is a product of ongoing collaboration between Web 3 Consortium (W3C), Google, Apple, Mozilla, and Microsoft, this standard has built-in support for all major browsers across all platforms and does not require plugins additional to work internally. many places."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WebAuthn"
            description="Short for Web Verification, WebAuthn is an online verification tool for online sites. WebAuthn allows users to verify their identity and verify their accounts using public key cryptography (PKC) instead of username and password. This is considered to be very secure as WebAuthn-enabled login credentials do not leave the user device and eliminate the possibility of password theft and cybercrime theft. WebAuthn can use biometric data and can be used to protect everything from your Twitter account to your crypto exchange account."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wedge (Technical Design)"
            description="The wedge is a technical activity used in technical analysis (TA) that usually refers to a change in the price of an asset. The two main types of wedges are climbing wedges and falling wedges. Wedges fall when the commodity price drops to a downtrend, which is followed by a decline in prices. In contrast, wedge-ups are the result of the price of a commodity rising in an upward spiral, followed by a price decline."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wei"
            description="Wei is a small ether (ETH) system. 1 ETH equals 1,000,000,000,000,000,000,000 (10 ^ 18)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="WeNano App (Nano)"
            description="The Nano Protocol can also be used by network participants using the WeNano mobile app. WeNano is a public fund that distributes payments and donations to other members of the public and also the Nano ‘spots’ feature that uses GPS technology. WeNano also allows users to find other Nano users near their current location."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Whale"
            description="A crypto whale is a person with a very high value (HNWI) - or organization - that holds a large amount of a certain amount of crypto currency. Although there is no direct currency limit, the holding of whale assets (if converted to USD) usually exceeds $ 10,000,000. The amount of coins (or tokens) required to be considered a whale varies by project. For example (at 2021 prices), the Ethereum whale may contain more than 10,000 ether (ETH) and the Bitcoin whale may contain more than 1,000 bitcoins (BTC). Notable Bitcoin wins include Satoshi Nakamoto, Tim Draper, Barry Silbert, and the Winklevoss twins."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="White Hat Computer Hacker"
            description="The white hat hacker is a computer hacker who works well to fight cyber criminals and their vicious attempts to steal data or commit fraud. White hat hackers identify potential security issues and recommend specific solutions to the work of unscrupulous black hat attackers. The terms “white hat” and “black hat” are intended to convey the idea of ​​good and bad. White hat hackers are often employed by governments, major banks, large multinational corporations, and other regions because of their expertise."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Whitelabel Product"
            description="A whitelabel product is a product or service that is produced by the same business but recreated by another company to make it look like it did."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Whitelist"
            description="The Whitelist has many meanings in the blockchain context. First, it may refer to a list compiled by blockchain developers to assess the suitability of potential investors - using identity verification and targeted investment rates - who want to participate in the next round of funding. Second, it may refer to when a cryptocurrency transaction or wallet asks a user to verify the authenticity of a withdrawal address by 'authorizing' the address. This is done to prevent the user from becoming a victim of fraudulent withdrawals from his or her wallet or exchange accounts with malicious players."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="White paper"
            description="A white paper is a report style document that describes a complex problem related to a particular industry or sector, and discusses how a business solves that problem. White papers often introduce a business model and development plan. In the context of the blockchain, the whitepaper is one of the first post-project documentation with an active product and revenue. It also serves as a platform for new investors to help the company further their funding process. In blockchain white papers, technical architecture, token economy, team, and other data are also often displayed."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Window proof of Spacetime time (WindowPoSpacetime)"
            description="Within the Filecoin network, Spacetime Proof (WindowPoSpacetime) is a special type of cryptographic proof that plays a key role in validating data on the Filecoin network under the proof-of-Spacetime (PoSpacetime) compatibility algorithm. With WindowPoSpacetime, bonds mined by storage miners are monitored 24-hour increments, resulting in zk-SNARK compressed evidence published in the Filecoin blockchain."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Withdrawal (Cryptocurrency Transaction)"
            description="Withdrawal is the process by which a user withdraws his or her funds (usually using cryptocurrency or fiat) from one place to another. Withdrawals are often used to move assets between wallets and exchanges, as well as to exchange fiat money between a bank account and a fiat on-ramp service provider. Withdrawals are a form of blockchain activity, and usually come with transaction fees charged by the service provider and the sub-blockchain network used to perform the function to cover network service charges."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Withdrawal Permission List"
            description="Withdrawal lists are an optional layer of security for cryptocurrency exchange accounts that allow users to create a list of authorized cryptocurrency addresses and limit withdrawals to those addresses only."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="World Wide Web Consortium (W3C)"
            description="The World Wide Web Consortium (W3C) is an international Web-based organization. W3C has more than 400 members jointly developing web standards in line with the community and full-time W3C staff. In addition, W3C builds software, teaching tools, and other resources to facilitate an open forum for online discussions."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Worldwide Asset Exchange (WAX)"
            description="Worldwide Asset Exchange (WAX) is a blockchain-based marketplace for virtual and virtual reality, which includes seamless tokens (NFTs) and video games."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wrapped Bitcoin (wBTC)"
            description="Bitcoin rolled (wBTC) is an ERC-20 token representing bitcoin (BTC) in a 1: 1 ratio. WBTC was jointly created by Bit Go, Kyber Network, and Ren, and was intended to bring more liquidity to the Ethereum ecosystem, especially to extended financial applications (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wrapped Ether (wETH)"
            description="Folded ether (wETH, also styled as 'WETH') represents the ERC-20 ether (ETH), which allows it to be traded directly with other ERC-20 tokens, something that is not possible with uninsulated ETH. To create wETH, you send ETH to a smart contract, which closes ETH and returns wETH. This wETH can be converted back to ETH and by sending wETH back to a smart contract."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wrapped Nexus Mutual (wNXM)"
            description="Wrapped Nexus Mutual (wNXM) is a representation of the ERC-20 one-to-one Nexus Mutual (NXM) token, a native token of the Nexus Mutual platform, another separate form of insurance. Although NXM can only be managed by members of Nexus Mutual, wNXM can be owned by anyone with an Ethereum address."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Wrapping"
            description="A folded token is a cryptographic asset identified in another cryptocurrency value. An asset is called a coin token or a folded token because the original asset is placed in a digital or special digital vault that allows for the creation of a folded token and used in another blockchain protocol. This is because different blockchains tend to offer different types of functionality for multiple uses - so adding one blockchain asset to another's network can open up a wider range of functionality for that asset."
          />
        </Col>
      </Row>
    </section>
  );
}

export default WSection
