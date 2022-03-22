import React from 'react'

const ContentComponent = (props) => {
  return (
    <div>
      <div className="glossary-content">
        <p className="title">{props.title}</p>
        <p className="content">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default ContentComponent
