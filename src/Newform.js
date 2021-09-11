import React from "react";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import "./Newform.css";

const Newform = (props) => {
  return (
    <div className="new-form">
      <Header queslist={props.questions} updateques={props.update} />
      <Content
        queslist={props.questions}
        updateques={props.update}
        title={props.title}
        descp={props.descp}
        updatetitle={props.updatetitle}
        updatedescp={props.updatedescp}
      />
    </div>
  );
};

export default Newform;
