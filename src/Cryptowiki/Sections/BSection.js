import React from 'react'
import useNav from '../CustomHooks/useNav';
import { Row, Col } from 'react-bootstrap';
import ContentComponent from '../ContentComponent';

const BSection = () => {
    const bSectionRef = useNav("B");

  return (
    <section ref={bSectionRef} id="bSectionContent">
      <div className="titleWrap">
        <p className="title-line">B</p>
      </div>
      <Row className="gy-4">
        <Col lg={12}>
          <ContentComponent title="BABE Consensus">
            <p>
              BABE stands for ‘Blid Assignment for Blockchain Extension’ and is
              one two components used by the Polkadot blockchain to create its
              hybrid concensus mechanism.{" "}
            </p>
            <p className="mt-4">
              BABE is responsible for block production, whilst its counterpart
              GRANDPA (which stands for Ghost-based recursive ancestor deriving
              prefix agreement) is used for state finalization of blockchain
              transactions.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Back End">
            <p>
              In computing, back end refers to the software element of the
              system which is never displayed on the users screen, and generally
              is responsible for handling logic, core operating system processes
              and data storage.{" "}
            </p>
            <p className="my-4">
              It is in direct contrast to the Front End, which is what the user
              sees on their screen.{" "}
            </p>
            <p>
              Back End programming relies on a multitude of programming
              languages, including Javascript, C++, Python and WebAssembly
              (WASM).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Backdoor Access">
            <p>
              Backdoor access refers to a method of circumventing normal
              authentication of users before they can use a given computer
              system. Backdoors are often included by developers to assist with
              debugging and program development, but accidental backdoors can
              occur in poorly crafted software code which attackers can exploit
              to gain unauthorized access.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Backtesting">
            <p>
              Backtesting refers to simulating trading strategies against
              historical data to attempt to prove the effectiveness of the
              strategy.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bagholder">
            <p>
              A bag holder is a term which refers to an investor who is holding
              an asset which has significantly fallen in value.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Baiting">
            <p>
              Baiting refers to a social engineering technique (similar to a
              honeypot trap) which exploits victims with false promises,
              normally financial gains, in order to gain access to their
              computer systems or extort personal data from them.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Baking">
            <p>
              Baking is the process of adding new blocks to the Tezos
              blockchain, with users who are participating being called
              ‘Bakers’. Bakers are required to deposit the native XTZ token as
              collateral which is lost if they behave maliciously.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Balance Freeze">
            <p>
              Balance Freeze refers to the Ripple blockchain when transactions
              are halted (frozen) in order to prevent any form of abuse which
              may have been detected on the system.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Balancer">
            <p>
              Balancer is a non-custodial Automated Market Maker built onto the
              Ethereum blockchain which uses multiple pools of tokens which can
              be traded by users. Each pool is automatically weighted and
              re-weighted through the use of sophisticated algorithms, each with
              their own specific parameters.{" "}
            </p>
            <p className="mt-4">
              The balancer network has its own governance token BAL, which are
              earned by liquidity providers who supply the various pools.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bancor">
            <p>
              Bancor is a decentralized trading protocol which allows traders,
              liquidity providers and developers to participate in an open and
              permissionless marketplace.{" "}
            </p>
            <p className="mt-4">
              The network is governed by its community through the Bancor DAO,
              with holders of the platforms native BNT token able to create and
              vote on proposals. Furthermore, the BNT token is used as the
              default reserve currency of the protocol, and acts as an
              intermediate token for each trade.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BandChain">
            <p>
              BandChain is the network on the Band protocol which controls the
              transfer of API data to and from the network, allowing it’s oracle
              system to function properly.{" "}
            </p>
            <p className="mt-4">
              BandChain is very interoperable and compatible with most
              blockchains and development frameworks, and acts as an aggregator
              of API data, which is then packaged into a specific format which
              can be used efficiently across multiple chains.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bandwidth">
            <p>
              Bandwidth in computing refers to the amount of capacity available
              for simultaneous transactions to be conducted efficiently on a
              network.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bank for International Settlements (BIS)">
            <p>
              The Bank for International Settlements is an international
              financial institution which provides both financial settlement
              services for cross-border transactions, as well as guiding
              international monetary policy between nations. It is based in
              Basel, Switzerland and is controlled by major financial
              institutions and central banks.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Base Currency">
            <p>
              Base currency refers to the specific currency against which the
              price of an asset is quoted, and generally refers to the first
              currency reference in a currency pair. For example, in the case of
              ETH/USD, the base currency would be ETH and the quoted currency
              would be USD.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Basic Attention Token (BAT)">
            <p>
              Basic Attention Token (BAT) is a cryptocurrency which is used to
              reward internet users for engaging with advertisers and
              publishers, essentially paying them money for their attention on
              certain content.
            </p>
            <p className="mt-4">
              BAT is a novel feature built into the Brave browser, a major
              competitor of Google Chrome.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Beacon Chain">
            <p>
              Beacon Chain refers to the first stage in the Ethereum 2.0
              upgrade, which introduces Proof of Stake concensus to the network,
              allowing ETH holders to stake their tokens in order to become
              validators in the network.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bear Market">
            <p>
              A bear market refers to a market where the prices are in decline,
              typically falling by double-digit percentages from recent highs.
              It’s opposite is a bull market.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Benchmark Index">
            <p>
              A benchmark index refers to a main index security which is widely
              used to measure performance of the wider market or a specific fund
              against it (thus benchmarking). In the traditional world, the
              S&P500 (SPY) is one of the most commonly used benchmark indices.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BEP-2">
            <p>
              BEP-2 is the token standard used in transfers on the Binance Chain
              (BC).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BEP-20">
            <p>
              BEP-20 refers to the token standard used in transfers on the
              Binance Smart Chain (not to be confused with the Binance Chain).
              What is different about BEP-20 addresses is that they are
              identical to their Ethereum ERC-20 counterparts, which allows for
              Binance Smart Chain assets being interoperable with the Ethereum
              network, thus allowing for the transfer of digital assets between
              a number of the top blockchains.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Beta Version / Beta Release">
            <p>
              In software development, a Beta version (or Beta release) is a
              test version of a software product which, although still under
              development, is a roughly functional system which allows a wide
              range of users to test the functionality and potentially find and
              report bugs.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bid-Ask Spread">
            <p>
              Bid-Ask spread refers to the difference in price between the
              highest buy price (the bid) and the lowest sell (ask) price of an
              asset on an exchange. A large difference between bid and ask is
              normally indicative of reduced liquidity in a market.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Big Tech">
            <p>
              Big Tech refers to the largest companies in the IT world, which
              include companies such as Facebook, Amazon, Google, Apple and
              Microsoft. These companies have huge market capitalizations, in
              some cases into the trillions of dollars, and as a result have
              amassed a great deal of power and influence both in the United
              States and internationally.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Binance">
            <p>
              Binance is a centralized cryptocurrency exchange which offers a
              range of products including spot trading, staking, lending, an NFT
              marketplace and a range of other derivatives.{" "}
            </p>
            <p className="mt-4">
              The company also runs a number of other services, including social
              impact fund Binance Labs and token-launch platform Binance
              Launchpad.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Binance Chain">
            <p>
              Binance chain was created by cryptocurrency exchange Binance and
              supports the BEP-2 token standard, which facilities the transfer
              of assets between Binance Chain addresses.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Binance Smart Chain">
            <p>
              Binance Smart Chain is a second blockchain deployed and operated
              by the cryptocurrency exchange Binance, along with the Binance
              Chain.{" "}
            </p>
            <p className="mt-4">
              Binance Smart Chain uses the Proof of Staked Authority (PoSA)
              concensus method, and is designed to provide transactions between
              assets which use the BEP-20 token standard, as opposed to the
              BEP-2 standard.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Binary Code">
            <p>
              Binary Code is a set of computer processing instructions which use
              two symbols “0” and “1”.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bitcoin">
            <p>
              Bitcoin was the first blockchain network, launched in 2009 by the
              pseudonymous Satoshi Nakamoto, and is the largest cryptocurrency
              by market capitalization. The Bitcoin network uses the bitcoin
              cryptocurrency (BTC or XBT), of which only 21 million tokens will
              ever be minted.{" "}
            </p>
            <p className="mt-4">
              The blockchain uses a Proof of Work concensus mechanism for
              reaching decentralization.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bitcoin Cash">
            <p>
              Bitcoin cash was a chain which hard forked from the original
              Bitcoin chain, and was designed with increased block sizes and
              faster transaction times via the lightning network. This makes
              Bitcoin Cash (BCH) easier to use as a payment method compared to
              Bitcoin, although it does not have the dominance of Bitcoin.{" "}
            </p>
            <p className="mt-4">
              Bitcoin Cash and Bitcoin are not interoperable networks, and users
              should never send Bitcoin Cash to Bitcoin addresses, and
              vice-versa.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bitcoin Dominance">
            <p>
              Bitcoin dominance refers to the measure of the market
              capitalization of Bitcoin verses the combined market
              capitalization of all the other Altcoins.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bitcoin Improvement Proposal (BIP)">
            <p>
              A Bitcoin Improvement Proposal (BIP) is a proposal which alters
              the codebase on the Bitcoin network. BIP’s are normally superceded
              by the proposal number (for example BIP33, BIP44).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bitcointalk">
            <p>
              An internet forum open to all which was launched by the creator of
              Bitcoin, Satoshi Nakamoto in 2009 to allow users to hold
              discussions about Bitcoin and the associated blockchain
              technology. Whilst it is used much less today, it is still active
              and has a community of over half a million users.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BitLicense">
            <p>
              A Bitlicense is a regulatory license which cryptocurrency
              businesses must obtain before being permitted to operate in the
              state of New York. The licenses, issues by the NY department of
              Financial Services are extremely hard to come by, with only a
              small number being granted, including to companies such as Circle,
              Robinhood and Coinbase.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BitTorrent (BTT)">
            <p>
              BitTorrent is a TRC-10 token which is used on the BitTorrent
              Peer-to-peer filesharing network to incentivize file seeding.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Black Hat Hacker">
            <p>
              A black hat hacker is defined as a person who employs various
              hacking techniques in a malicious manner. This may include theft
              of funds or data or deliberate destruction of a computer system or
              network.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Black Swan Event">
            <p>
              A black swan event is an unforeseen event which could not be
              predicted. Generally black swan events occur suddenly, and almost
              always have a dramatic effect on global economies.{" "}
            </p>
            <p className="mt-4">
              Examples of black swan events include the Covid-19 Pandemic and
              the 9/11 attacks on the US.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Blake-256">
            <p>
              On the Decred network, Blake-256 refers to the algorithmic hashing
              function which uses the Hash Iterative Framework (HAIFA) on top of
              other complex hashing mechanisms.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block">
            <p>
              In a blockchain, a block is a record of all transactions made
              during a specific timeframe on the network. Blocks are added
              sequentially together onto the blockchain creating the public
              ledger. Each block uses a hash which is derived from previous
              blocks, which prevents malicious actors from changing data in past
              blocks.{" "}
            </p>
            <p className="mt-4">
              In order for data to be finalized into a block, a concensus must
              be reached by the miners (validators) of the blockchain who work
              to maintain decentralization of the chain.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Difficulty">
            <p>
              Block difficulty refers to how difficult it is to mine new blocks
              in a Proof of Work (PoW) blockchain such as the Bitcoin network.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Explorer">
            <p>
              A block explorer is a web based interface that allows users to
              access data on a blockchain in real time. Block explorers provide
              the ability for anyone to view wallet balances and the respective
              history of each wallet, including querying transactions to and
              from addresses.
            </p>
            <p className="mt-4">
              Essentially, block explorers allow anyone to audit the blockchain
              at any time, and therefore create the transparency of the system.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Header">
            <p>
              A block header is an identifier for individual blocks on a
              blockchain, with each having a unique header address. Block
              headers are hashed to create proof of work rewards, and contain
              multiple components and metadata pertaining to the relevant block.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Height">
            <p>
              Block height measures the number of blocks that came prior to a
              specific block. It is useful to think of creating blocks as akin
              to building floors on a skyscraper. The genesis block (the first
              block mined) has a block height of Zero, as no blocks came before
              it. Every time a new block is mined, the block height (or in our
              thought example the number of floors in the building) is
              incremented by 1.{" "}
            </p>
            <p className="mt-4">
              Block height acts as an identifier for blocks on the network, and
              also serves to allow an accurate measurement of the rate of
              creation of new blocks.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Lattice">
            <p>
              On the Nano network, block lattice refers to the concensus
              mechanism used by the protocol. The network relies on a Directed
              Acyclic Graph (DAG) architecture, and the block lattice structure
              on the nano network allows individual users to control their own
              blockchain, with fast and fee-less network confirmations.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Producer">
            <p>
              A block producer is someone who has chosen to validate
              transactions on a blockchain network. The term is generally
              reserved for users on Proof of Stake blockchains.{" "}
            </p>
            <p className="mt-4">
              Block producers on some blockchains are occasionally referred to
              by names such as “validators” and “witnesses”, particularly on
              Delegated Proof of Stake (DPoS) networks, such as the STEEM
              blockchain.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Reward">
            <p>
              Block rewards are the payments which are made to
              miners/validators/block producers for successfully validating a
              new block on a network. Rewards are almost always made in the
              native cryptocurrency of the chain or protocol.{" "}
            </p>
            <p className="mt-4">
              Without block rewards to incentivize users, it is unlikely that
              blockchains would retain their distributed and decentralized
              nature.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Size / Block space">
            <p>
              Block size refers to the amount of data available in a single
              block for data storage, typically measured in Megabytes (MB).{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Time">
            <p>
              Block time is the amount of time taken for a new block to be added
              to a blockchain and finalized.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Block Trade">
            <p>
              A block trade generally refers to a high-volume transaction of
              securities which are often executed off open marketplaces. Because
              of the large sums of money involved, generally block trades are
              conducted by institutions and sizable hedge funds.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Blockchain">
            <p>
              A blockchain is public ledger of digital data which is maintained
              and verified by a peer-to-peer network of computers, normally
              operated by many different users, which work both together (and in
              competition with one another) to create a decentralized concensus.{" "}
            </p>
            <p className="mt-4">
              Essentially, a blockchain can be thought of as a large database
              for transactions which grows over time, and which is not
              controlled by a single entity or group but by a widely distributed
              group of individuals who ensure that all these different actors
              all agree on what data the blockchain contains, and work to ensure
              that historical data cannot be manipulated by a bad actor.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Blockchain Trilemma">
            <p>
              The blockchain trilemma refers to a specific challenge in the
              blockchain world to achieving a working balance between three key
              elements of the blockchain:{" "}
            </p>
            <ul>
              <li>Scalability (volume and speed of transactions)</li>
              <li>Decentralization (the distribution of nodes)</li>
              <li>
                Security (maintaining and improving the systems integrity)
              </li>
            </ul>
            <p className="mt-4">
              The blockchain trilemma effectively suggests that it is impossible
              to give an equal priority to all of the above factors, meaning
              that there is often a trade-off of one factor above another.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Blockweave">
            <p>
              A blockweave refers to a data structure which has blockchain-like
              properties. In a blockchain, each block is linked to the preceding
              block, meaning that a change in the data of a historical block
              would change the hash of the current block (and thus indicate an
              attempt to defraud the blockchain).{" "}
            </p>
            <p className="mt-4">
              In a blockweave structure, each block is linked to both the
              preceding block AND a second ‘recall’ block, which is a block from
              earlier in the history of the chain.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bonding">
            <p>
              Bonding is a process which is very similar to staking on a Proof
              of Stake network. Through the process of bonding, users signal to
              the network that they are trusted participants who agree to accept
              and abide by the rules of the network on penalty of penalization
              should they behave in a malicious manner.{" "}
            </p>
            <p className="mt-4">
              Whilst on many Proof of Stake networks penalties are often applied
              for bad actors who are staking, there is debate as to whether
              bonding and staking are exactly the same.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bonding Curve">
            <p>
              A bonding curve is a mathematic concept which describes the
              relationship between the price of an asset and its supply.
            </p>
            <p className="my-4">
              The basic concept holds that when a user buys an asset which has a
              limited quantity (for example Bitcoin which has a fixed maximum
              supply), then each subsequent buyer will have to pay more as the
              number of available units of the asset will decrease as each one
              is acquired.{" "}
            </p>
            <p>
              In the cryptocurrency world, this is taken a step further with the
              advent of bonding curve smart contracts, which are token issuance
              contracts which create a market for the tokens independent from
              normal cryptocurrency exchanges.{" "}
            </p>
            <p className="my-4">
              This is because the bonding curve contracts sell tokens to users
              by calculating the token price against a base currency (for
              example ETH), and issuing them after the payment is confirmed. The
              same is true for buying and paying with the base currency, and in
              both cases, the contract calculates the average price and bases
              the current rate off this.{" "}
            </p>
            <p>
              Normally, this ensures that the price of each token sold through a
              bonding curve increases as the number of tokens issued increases.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Boneh-Lynn Shacham (BLS) Signature">
            <p>
              Boneh-Lynn-Shacham signatures are cryptographic mechanisms which
              allow for the accurate verification of a legitimate signer of a
              blockchain transaction.{" "}
            </p>
            <p className="mt-4">
              In 2020, BLS signatures we used extensively in version 2 of the
              Ethereum Blockchain (ETH2) for assuring that a specific ETH2
              validator had actually verified a particular transaction. It is
              also used on the Elrond network to allow the systems secure proof
              of stake mechanism to randomly select nodes which will complete
              validation and finalization of blocks.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bor Nodes">
            <p>
              Bor nodes increase transaction throughput (the number of
              transactions per second) in sidechains by facilitating block
              production whilst also keeping a constant and secure connection to
              the Ethereum Virtual Machine.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Borderless">
            <p>
              Borderless refers to applications and networks which have been
              designed to provide products and services to a global user base
              irrespective of their location.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bounty">
            <p>
              A bounty is a form of reward given to users in a blockchain
              community for active participation in the development of the
              protocol. For example, bounties may be paid to developers for
              finding bugs, or to community members for interacting with or
              creating marketing material, such as on social media, or for
              promoting and bringing new users into the community.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Brain Wallet">
            <p>
              A brain wallet is a private wallet key which has been memorized by
              its owner. Brain wallets are not generally recommended as a secure
              way of securing a wallet as they can be easily forgotten.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Brave Browser">
            <p>
              The Brave Browser is a free and open-source browser developed by
              the team responsible for the Basic Attention Token (BAT), and
              which incorporates the cryptocurrency into its core system and
              rewards users for viewing advertisements.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Bridge">
            <p>
              A bridge is a mechanism which allows inter-communication between
              different blockchains or potentially subchains, for example in the
              Polkadot network, a bridge facilitates communication between
              parachains and the relay chain to external non-polkadot blockchain
              networks.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Brute Force">
            <p>
              A brute force attack is where a hacker gains access to a specific
              account by iterating through all possible combinations of
              passwords until they find the correct one. This is why passwords
              should be ‘strong’ and increase the difficulty of guessing the
              password by using strategies such as random strings, different
              cases, alphanumeric and including symbols when setting the
              password.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Burning">
            <p>
              Burning relates to removing tokens from circulation by sending
              them to a null address, thus effectively destroying them as they
              can no longer be transacted.{" "}
            </p>
            <p className="my-4">
              Burning tokens has the effect of decreasing the overall total
              supply of an asset, and therefore increasing it’s theoretical
              value, as the market capitalization stays the same even whilst the
              number of available tokens has reduced.{" "}
            </p>
            <p>
              Some blockchain networks incentivize burning of their own tokens.
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="BUSD">
            <p>
              BUSD, or Binance US Dollar, is a stablecoin created by Paxos and
              the Binance exchange platform which is pegged 1:1 with the US
              dollar.{" "}
            </p>
            <p className="mt-4">
              BUSD is fully collateralized by Paxos, where for every BUSD in
              existence, there is an equivalent amount of US Dollars held in
              reserve.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Byron Phase">
            <p>
              In the Cardano ecosystem, the Byron phase is the first phase in
              the networks roadmap and was named after poet Lord Byron.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Byzantine Fault Tolerance">
            <p>
              Byzantine Fault Tolerance refers to the ability of a blockchain
              network to reach concensus, even in the event that some network
              nodes do not respond in a timely fashion, or potentially respond
              with information which does match.{" "}
            </p>
            <p className="my-4">
              The term comes from the ‘Byzantine Generals Problem’, a thought
              experiment which examines how to trust information from
              distributed sources even if one or more parties may be unreliable.{" "}
            </p>
            <p>
              The Bitcoin network is considered Byzantine fault tolerant through
              its use of Proof of Work concensus and the use of blockchain
              technology which enables anyone to audit block validation, which
              requires significant investment by network node operators, and
              thus incentivizes them to behave in an honest manner.{" "}
            </p>
          </ContentComponent>
        </Col>
        <Col lg={12}>
          <ContentComponent title="Byzantine Fault Tolerance Delegated Proof of Stake">
            <p>
              Byzantine Fault Tolerance Delegated Proof of Stake (BFT-DPoS for
              short) is the main concensus method used on the EOS blockchain
              among others, which allows for large scale participation in
              creating block-concensus through the use of proxy voting.{" "}
            </p>
          </ContentComponent>
        </Col>
      </Row>
    </section>
  );
}

export default BSection
