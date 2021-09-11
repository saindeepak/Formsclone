import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Selectpreviewtype from "./components/optpreview/Optpreview";
import "./Preview.css";

const Quespreview = (props) => {
  let options = props.option;
  return (
    <div className="quespreview">
      <div>{props.ques}</div>
      <Selectpreviewtype
        options={options}
        type={props.type}
        name={props.id}
        queslist={props.queslist}
        setques={props.setques}
      />
    </div>
  );
};

const Preview = (props) => {
  let queslist = props.questions;
  let setques = props.update;
  let formtitle = props.title;
  if (formtitle == "") formtitle = "Untitled Form";
  let formdescp = props.descp;

  let handlesubmit = (e) => {
    console.log(queslist);
    e.preventDefault();
  };

  return (
    <div>
      <Link to="/new-form" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained">
          Home
        </Button>
      </Link>
      <div className="preview">
        <div className="previewtitle">
          <h2>{formtitle}</h2>
          <p>{formdescp}</p>
        </div>
        <form onSubmit={handlesubmit}>
          {queslist.map((e, idx) => (
            <Quespreview
              key={e.id}
              id={e.id}
              type={e.type}
              ques={e.ques}
              option={e.options}
              queslist={queslist}
              setques={setques}
            />
          ))}
        </form>
        <Button variant="contained" color="primary">
          submit
        </Button>
        &nbsp;
      </div>
    </div>
  );
};

export default Preview;
