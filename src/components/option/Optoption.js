import Newopt from "../newoption/Newoption";
import { Button, Input, InputAdornment } from "@material-ui/core";
import {
  RadioButtonUnchecked,
  CheckBoxOutlineBlankRounded,
  Event,
  AccessTimeRounded,
} from "@material-ui/icons";
import "./SelectedOption.css";

export const Mcq = (props) => {
  let options = props.options;

  return (
    <div>
      <form id={props.uid}>
        {options.map((e, idx) => (
          <Newopt
            key={idx}
            ques={props.ques}
            quesidx={props.quesidx}
            id={idx}
            setques={props.setques}
          />
        ))}
      </form>

      <div>
        <RadioButtonUnchecked className="add-opt" color="disabled" />
        <Button className="adopt" onClick={props.addoption} variant="text">
          {" "}
          Add Option
        </Button>
      </div>
    </div>
  );
};

export const Dd = (props) => {
  let options = props.options;

  return (
    <div>
      <form id={props.uid}>
        {options.map((e, idx) => (
          <Newopt
            key={idx}
            ques={props.ques}
            quesidx={props.quesidx}
            id={idx}
            setques={props.setques}
          />
        ))}
      </form>

      <div>
        <RadioButtonUnchecked className="add-opt" color="disabled" />
        <Button onClick={props.addoption} variant="text">
          {" "}
          Add Option
        </Button>
      </div>
    </div>
  );
};

export const Cb = (props) => {
  let options = props.options;

  return (
    <div>
      <form id={props.uid}>
        {options.map((e, idx) => (
          <Newopt
            key={idx}
            ques={props.ques}
            quesidx={props.quesidx}
            id={idx}
            setques={props.setques}
          />
        ))}
      </form>

      <div>
        <RadioButtonUnchecked className="add-opt" color="disabled" />
        <Button onClick={props.addoption} variant="text">
          {" "}
          Add Option
        </Button>
      </div>
    </div>
  );
};

export const Dt = (props) => {
  return (
    <div>
      <Input
        disabled
        disableUnderline
        id="input-icon-adorment"
        startAdornment={
          <InputAdornment position="end">
            Month, Day, Year &nbsp;
            <Event />
          </InputAdornment>
        }
      />
    </div>
  );
};

export const Tt = (props) => {
  return (
    <>
      <Input
        disabled
        disableUnderline
        id="input-icon-adorment"
        startAdornment={
          <InputAdornment position="end">
            Time &nbsp;
            <AccessTimeRounded />
          </InputAdornment>
        }
      />
    </>
  );
};
