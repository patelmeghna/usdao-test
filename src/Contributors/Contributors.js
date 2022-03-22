import React from "react";
import "./contributors.scss";
import TeamMember from "../components/TeamMember";
import { Row, Col } from "react-bootstrap";
import BannerTwo from "../components/BannerTwo";
import team from "../images/team/jay-hao.png";
import deepak from "../images/team/deepak-sharma.png";
import vaibhav from "../images/team/Vaibhav-Patel.png";
import parth from "../images/team/parth-devariya.png";
import abhishek from "../images/team/abhishek.png";
import surupam from "../images/team/surupam.png";
import sunandha from "../images/team/sunandha.png";
import vishal from "../images/team/vishal-panchal.png";
import shubham from "../images/team/shubham.png";
import rausan from '../images/team/rausan.png';
import pratiksha from "../images/team/pratiksha.png";
import anand from '../images/team/anand.png';
import meghna from "../images/team/meghna.png";
import dhanmik from '../images/team/dharmik.png';
import yakshit from "../images/team/yakshit.png";
import rumpa from "../images/team/rumpa.png";
import kapil from "../images/team/kapil.png";
import abhijit from '../images/team/abhijeet.png';
import pratik from "../images/team/prateek-desai.png";
import namrata from "../images/team/namrata.png";
import yogesh from "../images/team/yogesh.png";
import payal from '../images/team/payal.png';
import lokesh from "../images/team/Lokesh.png";
import Daniel from "../images/team/Daniel.png";
import Jigish from "../images/team/Jigish.png";
import rayaan from "../images/team/rayaan.png";
import Uday from "../images/team/Uday.png";
import sudip from "../images/team/sudip.png";
import harish from "../images/team/harish.png";
import nikolas from "../images/team/nikolas.png";
import parthpatel from "../images/team/parth.png";
import frank from "../images/team/frank.png";
import anilcremtex from "../images/team/anil.png";
import don from "../images/team/don.png";

const Contributors = () => {
  return (
    <div className="contributors-page">
      <title>USDAO Contributors</title>
      <BannerTwo highlightedTitle="USDAO" bannerTwoTitle="CONTRIBUTORS" />

      <div className="teamSection">
        <Row className="gy-4">
          <Col lg={1} xl={3} class="d-md-none"></Col>
          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={team} teamName="Jay Hao" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={deepak} teamName="Deepak Sharma" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={vaibhav} teamName="Vaibhav Patel" />
          </Col>
          <Col lg={1} xl={3} class="d-md-none"></Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={parth} teamName="Parth" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={abhishek} teamName="Abhishek" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={surupam} teamName="Surupam" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={sunandha} teamName="Sunanda" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={vishal} teamName="Vishal" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={shubham} teamName="Shubham" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={rausan} teamName="Rausan" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={pratiksha} teamName="Pratiksha" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={anand} teamName="Anand" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={rumpa} teamName="Rumpa" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={meghna} teamName="Meghna" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={yakshit} teamName="Yakshit" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={dhanmik} teamName="Dharmik" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={payal} teamName="Payal" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={kapil} teamName="Kapil" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={lokesh} teamName="Lokesh" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={abhijit} teamName="Abhijit" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={pratik} teamName="Pratik" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={namrata} teamName="Namrata" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={yogesh} teamName="Yogesh" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={Daniel} teamName="Daniel" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={Jigish} teamName="Jigish" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={rayaan} teamName="Rayaan" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={Uday} teamName="Uday" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={sudip} teamName="Sudip" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={harish} teamName="Harish" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={nikolas} teamName="Nikolas" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={parthpatel} teamName="Parth" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={frank} teamName="Frank" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={anilcremtex} teamName="Anil" />
          </Col>

          <Col md={4} lg={3} xl={2}>
            <TeamMember teamImg={don} teamName="Don" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contributors;
