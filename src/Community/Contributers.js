import React from 'react'
import TeamMember from "../components/TeamMember";
import { Row, Col } from 'react-bootstrap';
import team from "../images/team/jay-hao.png";
import deepak from '../images/team/deepak-sharma.png';
import vaibhav from '../images/team/Vaibhav-Patel.png';
import parth from "../images/team/parth-devariya.png";
import abhishek from '../images/team/abhishek.png';
import surupam from '../images/team/surupam.png';
import sunandha from '../images/team/sunandha.png';
import vishal from '../images/team/vishal-panchal.png';

const Contributers = () => {
  return (
    <div className="contributer">
      <Row className="gy-4">
        <Col md={4} lg={3}>
          <TeamMember
            teamImg={team}
            teamName="Jay Hao"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={deepak}
            teamName="Deepak Sharma"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={vaibhav}
            teamName="Vaibhav Patel"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={parth}
            teamName="Parth Devariya"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={abhishek}
            teamName="Abhishek Sinha"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={surupam}
            teamName="Surupam Chandra"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={sunandha}
            teamName="Sunanda Vampati"
            
          />
        </Col>

        <Col md={4} lg={3}>
          <TeamMember
            teamImg={vishal}
            teamName="Vishal Panchal"
            
          />
        </Col>
      </Row>
    </div>
  );
}

export default Contributers
