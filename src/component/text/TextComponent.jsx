import React from "react";
import "../text/styles.css";

const Title = (props) => {
  return (
    <h1 className="title" style={props.style}>
      {props.children}
    </h1>
  );
};

const Subtitle = (props) => {
  return (
    <h2 className="subtitle" style={props.style}>
      {props.children}
    </h2>
  );
};

export { Title, Subtitle };
