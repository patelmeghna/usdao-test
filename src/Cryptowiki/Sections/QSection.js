import React from 'react'
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const QSection = () => {
  const qSectionRef = useNav("Q");

  return (
    <section ref={qSectionRef} id="qSectionContent">
      <div className="titleWrap">
        <p className="title-line">Q</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Qtum"
            description="Qtum is a Proof-of-Stake (PoS) blockchain public protocol based on Bitcoin code but has been modified to allow smart contracts to run on its UTXO (Unspent Transaction Output) model. With Qtum Neutron, the blockchain is able to connect to several virtual machines (VMs) simultaneously. This allows Qtum to use Ethereum Virtual Machine (EVM) and its modern x86 VM while using the power of its 1,000-node blockchain network."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quality Analysis"
            description="Quality analysis uses prudent judgment to analyze business value or potential long-term growth based on unparalleled knowledge such as management technology, research and development, industrial cycles, and other complex information. Quality analysis is the opposite of quantitative analysis, which focuses mainly on the reporting of numerical data and balance sheets. Both metrics are important to assess in order to get a better idea of ​​the potential investment opportunity."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quant Zone (FTX Exchange)"
            description="Quant Zone is a tool for FTX crypto exchanges to design structured rules for the use of automated trading strategies in the FTX environment. Traders can create Quant Zone rules and share them with other users. Quant Zone rules require trigger status and pre-response; to follow the concept of “if, then”."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quantitative Analysis"
            description="Quantitative analysis (QA) is a method that uses a statistical and mathematical model and research to understand behavior. QA is used to express a given fact using a numerical value and can be used to measure, operate, and analyze various financial instruments. In finance, QA is mainly used to help predict the price of various financial instruments such as derivatives, stocks, commodities, and the economy as a whole. QA is also used to predict changes in gross domestic product (GDP) in certain countries and to compile different sets of financial data in certain regions around the world."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quantum Bit (Qubit)"
            description="Associated with the field of quantum computing, quantum bit (qubit) is a basic unit of measurement similar to the classic binary bit used in a standard computer. Qubits use superposition states such as quantum entanglement and quantum superposition to allow quantum computers to operate in a widely used manner. Qubits helps facilitate the use of post-quantum cryptography or quantum-resistant computing and other related technologies. With the use of qubits, quantum computer systems were developed in theory to process mathematics faster and more efficiently than their traditional counterparts."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quantum Computing"
            description="Post-quantum cryptography, also known as quantum-resistant or quantum-proof cryptography, is a form of cryptographic computing architecture that uses public key cryptography (PKC) and is characterized by the ability to prevent quantum computing attacks. At the moment, many experts in the field believe that existing computer systems cannot withstand quantum, however, the potential of quantum computing attacks designed to exploit current computer infrastructure is still a possibility. For this reason, further research and development of quantum proof computer systems remains a priority for cryptographers and computer scientists worldwide."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quasar Smart Contract (OMG Foundation)"
            description="Quasar Intelligent Contract is a kind of intelligent contractor designed by the OMG Foundation and Enya.ai to develop their Plasma Layer-2 rating solution. Quasar's smart contract framework is designed to solve the immediate withdrawal problem users face when trying to withdraw their funds (it usually takes 14 days for business users to successfully withdraw their funds from Ethereum using standard models). Quasar’s smart contracts also provide a framework that allows users to securely and quickly withdraw money from the network and share opt-out payments with other users when they first withdraw."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Question"
            description="On a computer, a query is a specific request for information using a website or computer system. Queries can be placed on many types of computer systems or websites, and are used both publicly and privately by shop users, businesses, governments, and other elements. As it relates to blockchain and computer systems, questions are usually conducted using a separate location index and graphical forums that use a graph. Graphs are a type of intangible data designed to use non-target graphs and graphs with a graphical mathematical field."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quick Response Code (QR Code)"
            description="A quick response code (QR code) is a type of matrix barcode that uses a machine-readable visual label (usually scanned with a cell phone) that contains sensitive information about the object attached to it. QR codes usually contain data for tracker, finder, or identifier that identifies a mobile app or website. QR codes use four standard encoding methods (byte / binary, character numbers, numbers, kanji) to store data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quorum (Rule)"
            description="A quorum is defined as the minimum number of members required to conduct business in a particular group. In terms of blockchain technology, quorum bias means that when the majority of voters participate, the vote is more valid than, in turn, very few participants. This process can be used to determine the validity of certain proposed restrictions on blockchain-based governance, such as the minimum number of participation tokens required for the vote to take effect. Normally, if a vote fails to reach the quorum, it will be automatically canceled."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Quarter Blockchain (ConsenSys)"
            description="Quorum blockchain is a business blockchain program developed by JP Morgan and a few other major stakeholders. The stadium was purchased by ConsenSys in 2021 in an agreement that allowed JP Morgan to use the stadium in a concerted effort. Quorum is a modified version of the Ethereum network specifically designed for business applications and other services. Although the classification of Quorum blockchain is somewhat unclear, it is considered to be an integrated or mixed blockchain organization because it has both public (open) and private (closed) features."
          />
        </Col>
      </Row>
    </section>
  );
}

export default QSection
