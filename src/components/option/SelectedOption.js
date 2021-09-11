import { useState } from "react";
import "./SelectedOption.css";
import { Mcq, Cb, Dd, Dt, Tt } from "./Optoption";

const SelectedOption = (props) => {
  let ques = props.queslist;
  let setques = props.updateques;
  let type = props.type;
  let selectedcomp;
  let idx = props.idx;
  let id = ques[idx].id;

  let addopt = () => {
    ques[idx].options.push("");
    setques(ques.concat());
  };

  if (type == "radio") {
    selectedcomp = (
      <Mcq
        ques={ques}
        quesidx={idx}
        uid={id}
        addoption={addopt}
        options={ques[idx].options}
        setques={setques}
      />
    );
  } else if (type == "dropdown") {
    selectedcomp = (
      <Dd
        ques={ques}
        quesidx={idx}
        uid={id}
        addoption={addopt}
        options={ques[idx].options}
        setques={setques}
      />
    );
  } else if (type == "checkbox") {
    selectedcomp = (
      <Cb
        ques={ques}
        quesidx={idx}
        uid={id}
        addoption={addopt}
        options={ques[idx].options}
        setques={setques}
      />
    );
  } else if (type == "date") {
    selectedcomp = <Dt uid={id} />;
  } else {
    selectedcomp = <Tt uid={id} />;
  }

  return <div className="opt">{selectedcomp}</div>;
};

export default SelectedOption;
