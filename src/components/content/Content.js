import "./Content.css";
import Ques from "../ques/Ques";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Fab,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

const Content = (props) => {
  let ques = props.queslist;
  let formtitle = props.title;
  let formdescp = props.descp;
  let settitle = props.updatetitle;
  let setdescp = props.updatedescp;

  let onhandlechangeformtitle = (e) => {
    formtitle = e.target.value;
    settitle(formtitle);
  };

  let onhandlechangeformdescp = (e) => {
    formdescp = e.target.value;
    setdescp(formdescp);
  };

  let addques = (e) => {
    // it helps to stop reloading the page on submission
    e.preventDefault();

    // using wrapper is must
    // we can't use ques.push() here as it returns length of array
    // therefore state gets updated to a number and we will get array.map is not a function error.
    // cause the array is replaced by the length of array, therefore a int value
    // whereas concat() returns newly updated array and updates the state likewise.
    let dt = new Date();
    var obj = {
      id: `Added_${dt.getTime()}`,
      type: "radio",
      ques: "",
      options: [""],
      optans: [""],
    };
    ques.push(obj);
    props.updateques(ques.concat());
    console.log(ques);
  };

  return (
    <div className="content">
      <Card className="formtitle" variant="elevation">
        <form>
          <TextField
            id="title"
            variant="standard"
            value={formtitle}
            onChange={onhandlechangeformtitle}
            placeholder="Untitled Form"
            size="medium"
          />
          <br></br>
          <br></br>
          <TextField
            id="desc"
            variant="standard"
            placeholder="Form Description"
            value={formdescp}
            onChange={onhandlechangeformdescp}
            size="small"
          />
        </form>
      </Card>

      {ques.map((e, idx) => (
        <Ques
          key={ques[idx].id}
          name={e}
          queslist={ques}
          update={props.updateques}
          id={ques[idx].id}
        />
      ))}

      <Fab
        color="primary"
        id="fab-button"
        onClick={addques}
        title="Add question"
      >
        <Add />
      </Fab>
    </div>
  );
};

export default Content;
