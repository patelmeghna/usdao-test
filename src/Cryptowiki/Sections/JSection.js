import React from "react";
import { Row, Col } from "react-bootstrap";
import useNav from "../CustomHooks/useNav";
import ContentComponent from "../ContentComponent";

const JSection = () => {
  const jSectionRef = useNav("J");

  return (
    <section ref={jSectionRef} id="jSectionContent">
      <div className="titleWrap">
        <p className="title-line">J</p>
      </div>
      <Row className="gy-4">
        <Col lg={6}>
          <ContentComponent
            title="Jager"
            description="Very small Binance Coin (BNB) system, which is divided into 8 decimal places (1 jager = 0.00000001 ADA)."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Java Programming Language"
            description="Java is a popular standard programming language commonly used for client web applications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="Java Virtual Machine (JVM)"
            description="Virtual machine (VM) type, Java Virtual Machine (JVM) converts Java language programming language files into machine code for processing operating system (OS). JVM's main functions are to manage system memory and allow Java applications to run on any device or OS. An integral part of Java programs, JVM works in partnership with the Java Development Kit (JDK), a development platform, and the Java Runtime Environment (JRE), which runs and runs the program."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="JavaScript (JS) Planning Language."
            description="JavaScript (JS) is a popular programming language used to build various web applications."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="JavaScript Object Notation (JSON)"
            description="JavaScript Object Notation (JSON) is a data exchange format and an open source file format that uses human-readable text to transfer and store data."
          />
        </Col>
        <Col lg={6}>
          <ContentComponent
            title="John Bollinger"
            description="John Bollinger is a writer, financial analyst, and expert analyst specialist best known as the creator of the Bollinger Bands technical chart chart. The Bollinger Bands technical indicator is represented by the top and bottom line on the chart (which is used to track asset volatility and whether it is over-selling or over-selling) with an equally centered line between the two. Bollinger has always advocated a relationship between both technical and fundamental analysis rather than focusing on their differences."
          />
        </Col>
      </Row>
    </section>
  );
};

export default JSection;
