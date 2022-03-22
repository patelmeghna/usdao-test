import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const USection = () => {
  const uSectionRef = useNav("U");

  return (
    <section ref={uSectionRef} id="uSectionContent">
      <div className="titleWrap">
        <p className="title-line">U</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="zU.S. Financial Crimes Enforcement Network (FinCEN)"
            description="The Financial Crimes Enforcement Network (FinCEN) is part of the U.S. Treasury Department. assigned the task of collecting and evaluating information about financial transactions. U.S. policy Financial Crimes Enforcement Network to prevent and resolve financial crimes."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="UMA Improvement Proposal (UMIP)"
            description="The UMA Improvement Proposal (UMIP) refers to the document used to propose changes to the UMA ecosystem. Owners of UMA tokens can use UMIPs to promote and validate new financial contract templates, new price tags, and other administrative changes in the UMA data verification process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="UMA Token"
            description="The UMA token is the traditional administrative token for the UMA network. UMA users can use UMA tokens to vote for a way to resolve network disputes that occur as part of the data verification process, and make changes to the process through the UMA Improvement Proposal (UMIP) management process."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unallocated Gold"
            description="According to the set of regulatory and compliance standards with London Good Delivery, gold can be purchased in two different ways: shared or non-shared. Unallocated gold does not include direct ownership over certain gold poles, but instead is entitled to a certain amount of gold. In contrast, when a customer buys a supply of gold, he or she owns the gold and can choose to store it on its own, or in an area under the auspices of the London Bullion Market Association (LBMA)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unbanked"
            description="'Unbanked' refers to people who do not have access to the standard banking system and modern financial services. Many people who are considered 'bankers' do not have a stable internet connection and / or live in an underdeveloped community or in a developing country. As a result, these people are successfully excluded from participating in the global economy. It is the primary goal of sectors such as FinTech, fixed finance (DeFi), and blockchain to support the bankers by achieving equitable investment globally."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Uncle Block"
            description="Blockd block is a block in the Ethereum network that has been discarded because two blocks have been dug at about the same time and only one can be verified and become part of the ledger. The Ethereum block is similar to the bitcoin block orphan block. However, both occur on different networks. In addition, miners who produce uncle blocks in Ethereum are rewarded with ether (ETH), while miners who hold orphan blocks in the Bitcoin network can be rewarded with bitcoin (BTC)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unconfirmed Activity"
            description="Unconfirmed transactions are related to transaction status that is transmitted from one address to another via a blockchain protocol that must be fully integrated into the blockchain and completed. Generally, in order for the recipient to receive the goods contained in the work, the work must go through a few stages of network verification. The number of network credentials required to complete a transaction varies depending on the blockchain network from which the work is being performed. In the blockchain context, unconfirmed transactions are against the guaranteed function."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Underbanked"
            description='"Underbanked" refers to individuals who are unable to access a bank account, but who are generally unable to use full banking services due to lack of income or other reasons. Non-bankers often use other financial services such as payday loans, cash orders, and check exchange services instead of traditional loans and credit cards. "Bankers" (those who do not have any access to banking services) are sometimes considered a separate set of bankers. It is the ultimate goal of sectors such as FinTech, fixed finance (DeFi), and blockchain to support the needy by achieving equitable financial investment globally.'
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="UNI Token (Uniswap)"
            description="UNI (UNI) token is the traditional rule of Uniswap Protocol, cryptocurrency exchange (DEX). The token was first released in September 2020, when Uniswap dropped 400 tokens at each unique cryptocurrency address that shared with Uniswap Protocol prior to September 1, 2020. This first round distribution reached 50 50,000 Ethereum addresses, quickly making UNI one of the most advanced countries. tokens are widely distributed within the cryptocurrency space. In total, 60% of UNI genesis is targeted at the public, while the remaining 40% is given to Uniswap team members, investors, and advisers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Uniswap (UNI)"
            description="Uniswap is a limited exchange (DEX) that uses liquidity pools (LPs) to create markets without the need for order books or middlemen. Uniswap is backed by smart contracts that facilitate the exchange of tokens and provide a framework for incentives for investors to participate in the process. As one of the first automated market makers (AMMs) that will be live on the Ethereum network, Uniswap has taken a significant step in ensuring that AMMs can be an effective tool for digital digital marketing in a segregated and unlicensed environment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unit Of Account"
            description="An account unit is a standard unit of measurement of the value of an asset or service. By defining a particular unit of measurement of good or service, the monetary value of that offer can be clearly understood in terms that do not appear without the need to turn to trading. The need for account units to improve market transactions is one of the three basic functions of finance, the other two to be used as a value store and trading method."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="United States House Financial Services Committee"
            description="The United States House Committee on Financial Services is a United States House of Representatives committee set up to oversee the U.S. financial services industry, which includes insurance, securities, banks, and real estate. The Financial Services Committee also oversees the Securities and Exchange Commission (SEC), the Federal Reserve, and the United States Treasury, among other regulators of financial services in the U.S."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Universal Market Access (UMA)"
            description="Universal Market Access (UMA) is a special Ethereum-based protocol that allows users to create custom cryptocurrency tokens. Synthetic tokens are combined with other assets, while showing the value of that asset in real time. Virtually any type of asset, both physical and digital, can be token by UMA and integrated into an environmentally emerging financial system powered by blockchain (DeFi)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unrealized Profit and losses"
            description="Profit and losses (P&L) metrics used to track profits or losses of open trading positions in an exchange or related platform. Typically, incomplete P&L is calculated from open to closed. It is commonly used after opening trading platforms using exit tools, but can also be used for local trading and other forms of trading. Although Imperfect P&L can be calculated from any type of trader, it is a very important metaphor used by investment firms that offer large amounts of investment."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unused Activity Output (UTXO)"
            description="Unspent Transaction Output (UTXO) is the amount of cryptocurrency left over after transaction. Each UTXO represents a series of IDs, represented as a series of digital signatures in which the activity creator signs a message that transfers ownership of their UTXO to the recipient public key. As a result, UTXOs are responsible for initiating and completing each cryptocurrency transaction."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Unrestricted Domains"
            description="Unrestricted Domains is a service that allows users to send and receive tokens using a unique and easy-to-use domain name instead of an alpha-numeric wallet address. Unrestricted Domains are powered by Ethereum and Zilliqa blockchains. In addition, Unrestricted Domains have existing agreements with many blockchain wallets and service providers, so partner organizations can reduce their reliance on wallet addresses and still use their favorite wallet to hold their crypto currency."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="USD (USDC) Currency"
            description="The USD Coin (USDC) is a digital stablecoin denominated in the US dollar. Works on blockchains in Ethereum, Stellar, Algorand, and Solana. As of October 2021, USDC is the world's second-largest stablecoin commodity with market capitalization, with a total value of $ 32 billion. The USDC was first created by the Center consortium, which includes its two main founding members of the Circle and Coinbase. Each USDC token is backed up by a $ 1 deposit and regularly audited by Grant Thornton, a major accounting firm. USDC was launched in September 2018, and in March 2021 it was announced that Visa would facilitate the use of USDC to streamline its payment network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="User Experience (UX)"
            description="User Experience (UX) describes how the end user experiences the product or service. Although subjective, UX generally means product simplicity, ease of use, efficiency, or overall user experience. In a business setting, better UX may be associated with increased customer satisfaction, retention, and growth; UX is often discussed with digital products such as software, websites, and video games. In the blockchain space, many consider UX for crypto exchanges and crypto wallets to be highly developed, while also indicating that UX may have a way to go along with certain legacy financial systems."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="User Interface (UI)"
            description="User interaction (UI) usually refers to the interaction between the user and the system via a digital screen, computer, mobile device, website, or software application. Like the user experience (UX), the visual user interface must be easy to use, simple, efficient, secure and confidential. User interaction can also include Human-Machine Interfaces (HMIs) that interact with virtual computer systems such as a keyboard, mouse, or game controller, or with outgoing computer components such as a computer monitor, speaker, or printer."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Utility Token"
            description="A utility token is a digital asset symbol designed to give its owner access to blockchain products or services. As a result, utility tokens are intended for use within a blockchain network, rather than as an investment. However, considering that the number of used tokens fluctuates in value according to the popularity and acquisition of its network, many traders and crypto lovers still buy tokens for certain services as a speculative investment."
          />
        </Col>
      </Row>
    </section>
  );
}

export default USection
