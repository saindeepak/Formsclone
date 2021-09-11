import { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Clear, RadioButtonUnchecked } from "@material-ui/icons";

let cstyle = {
  width: "85%",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const Newopt = (props) => {
  let [optinput, setinput] = useState();
  let ques = props.ques;
  let idx = props.quesidx;
  let optionidx = props.id;
  let setques = props.setques;

  let onchangeinput = (e) => {
    optinput = e.target.value;
    setinput(optinput);
    ques[idx].options[optionidx] = optinput;
  };

  let deleteopt = (e) => {
    e.preventDefault();
    if (optionidx != -1) {
      ques[idx].options.splice(optionidx, 1);
      setques(ques.concat());
    }
  };

  return (
    <div>
      <label>
        <RadioButtonUnchecked color="disabled" id={props.id} />

        <TextField
          style={cstyle}
          onChange={onchangeinput}
          value={ques[idx].options[props.id]}
        />
      </label>

      <IconButton onClick={deleteopt}>
        <Clear />
      </IconButton>
    </div>
  );
};

export default Newopt;
