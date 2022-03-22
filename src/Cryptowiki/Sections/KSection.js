import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const KSection = () => {
  const kSectionRef = useNav("K");

  return (
    <section ref={kSectionRef} id="kSectionContent">
      <div className="titleWrap">
        <p className="title-line">K</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Kademlia Routing (Harmony)"
            description="Kademlia routing is a routing method used to deliver various messages to Harmony blockchain's adaptive state sharding system. Information about all Harmony network nodes in all different shards is stored in the Route table. By using a Kademlia-based route, messages between nodes in different shards travel much faster than conventional gossip to reach their destination. Through this process, the Kademlia router significantly reduces network load, leading to a more efficient blockchain in sending multiple messages."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Keep Network (KEEP)"
            description="Keep Network provides a privacy block for public blockchains that allow users and applications to secretly transfer and store data on containers outside a chain called 'keeps.' KEEP native network token. Participants may receive the funds stated in the KEEP to participate in the care of the final containers."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="KEEP Mark"
            description="KEEP is a traditional brand of Keep Network, a protocol that allows users of social blockchain and applications to secretly transfer and store data on containers outside a chain called 'storage.' Users can enter KEEP tokens for random selection to receive payments for performing network services such as encryption or data storage."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Keosd"
            description="Keosd is a master manager daemon used within the EOSIO blockchain system to store private keys and sign digital messages."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Kernel"
            description="The most important part of the operating system (OS), the kernel controls many components and functions of a computer, smartphone, or related hardware device. Every OS has a kernel inside it that connects hardware and software and device processes. The kernel determines how the central processing unit (CPU) operates, monitors and manages storage memory, handles software applications, and handles other important functions and functions required for the device to operate efficiently and reliably."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Key"
            description="A cryptographic key is a string of bits used by an encryption algorithm to convert encrypted text into plain text and vice versa as part of a paired access key. Keys are usually generated randomly and, unlike passwords, are intended to be memorized by users."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Key Management Interoperability Protocol (KMIP)"
            description="Key Management Interoperability Protocol (KMIP) facilitates data exchange between cryptographic key servers and clients. It plays an important role in connecting to the work of crypto wallets and other separate products. KMIP was established by the Organization for the Advancement of Organized Knowledge (OASIS), a nonprofit organization that focuses on the development and adoption of open standards for the sharing of global knowledge."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Keylogger"
            description="A keylogger is a software program that copies or records keys that a user can enter by keyboard on a mobile device, computer, or related system. Keyloggers are often used to steal sensitive information such as passwords, PIN numbers, or other personal data - usually for financial gain, or to steal personal information needed to clean a website, bank account, crypto wallet, computer. network, or hardware or software system."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Know Your Customer (KYC)"
            description="Know Your Customer (KYC) is a compliance process initiated by regulators so that businesses can verify the identity and risk level of their customers. This process usually requires users to provide official identity verification using a passport, driver's license, or similar documents. KYC law requires financial firms to collect personal data from their customers and verify the suitability of the person or client to whom they can provide services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Kraken (Cryptocurrency Exchange)"
            description="Kraken is a major U.S. crypto currency exchange. founded by CEO Jesse Powell in 2011. Provides exit trading, spot trading, and other related services."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Kyber Network (KNC)"
            description="Kyber Network is a blockchain protocol that integrates token funds across the Ethereum ecosystem and facilitates the exchange of tokens without a mediator."
          />
        </Col>
      </Row>
    </section>
  );
}

export default KSection
