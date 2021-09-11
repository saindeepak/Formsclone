import { useState } from "react";
import "./Ques.css";
import SelectedOption from "../option/SelectedOption";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Divider,
  Switch,
} from "@material-ui/core";

import {
  ArrowDropDownCircle,
  Event,
  AccessTimeRounded,
  CheckBoxRounded,
  RadioButtonCheckedRounded,
  DeleteOutlined,
  FilterNoneOutlined,
  MoreVert,
} from "@material-ui/icons";

const Ques = (props) => {
  let [type, settype] = useState("radio");
  let [inputques, setinputques] = useState("");

  let ques = props.queslist;
  let setques = props.update;
  let idx = ques.findIndex((o) => o.id === props.id);

  let onhandlechangeselect = (e) => {
    type = e.target.value;
    settype(type);
    ques[idx].type = type;
  };

  let onhandlechangeques = (e) => {
    inputques = e.target.value;
    setinputques(inputques);
    ques[idx].ques = e.target.value;
  };

  let onhandledelete = () => {
    if (idx != -1) {
      ques.splice(idx, 1);
      props.update(ques.concat());
    }
  };

  return (
    <div className="ques">
      <b>{props.id}</b>

      <div className="ques-drop">
        <TextField
          id="default-ques"
          placeholder="Question"
          value={ques[idx].ques}
          variant="filled"
          onChange={onhandlechangeques}
          multiline
        />

        <FormControl variant="outlined">
          <Select
            name="type"
            id="customized-select"
            value={ques[idx].type}
            onChange={onhandlechangeselect}
          >
            <MenuItem value={"radio"}>
              <RadioButtonCheckedRounded /> &nbsp; Multiple choice
            </MenuItem>
            <MenuItem value={"checkbox"}>
              <CheckBoxRounded /> &nbsp; Checkboxes
            </MenuItem>
            <MenuItem value={"dropdown"}>
              <ArrowDropDownCircle /> &nbsp; Dropdown
            </MenuItem>
            <MenuItem value={"date"}>
              <Event /> &nbsp; Date
            </MenuItem>
            <MenuItem value={"time"}>
              <AccessTimeRounded /> &nbsp; Time
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <br />
      <SelectedOption
        type={type}
        idx={idx}
        queslist={ques}
        updateques={setques}
      />
      <br />

      <Divider />
      <div className="my-icons-list">
        <IconButton onClick={() => {}}>
          <FilterNoneOutlined />
        </IconButton>
        <IconButton onClick={onhandledelete}>
          <DeleteOutlined />
        </IconButton>
        <Divider orientation="vertical" />
        Required
        <Switch color="primary" />
        <IconButton onClick={() => {}}>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
};

export default Ques;
