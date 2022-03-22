import React from 'react';
import './team-member.scss';

const TeamMember = (props) => {
  return (
    <div className="team-box-wrap">
      <div className="team-member-img">
        <div className="img-wrap">
          <img src={props.teamImg} alt="" className="member-img" />
        </div>
      </div>

      <div className="team-info">
        <div className="team-about">
          <p className="name">{props.teamName}</p>
          <p className="designation">{props.teamDesignation}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember
