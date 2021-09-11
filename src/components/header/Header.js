import { Link } from "react-router-dom";
import Axios from "axios";
import { Button, IconButton, Card } from "@material-ui/core";
import {
  DescriptionOutlined,
  VisibilityOutlined,
  MoreVert,
} from "@material-ui/icons";
import "./Header.css";
require("dotenv").config();

const Header = (props) => {
  let ques = props.queslist;

  let insertdb = (e) => {
    e.preventDefault();

    let obj = {
      formid: "form1",
      form_title: "Test",
      formdescp: "sdfksf",
      quesarray: ques,
    };

    Axios.post(process.env.REACT_APP_BASE_URL + "/insert", obj)
      .then((res) => {
        alert("Status: " + res.data + " | Sucessfully inserted into DB.");
      })
      .catch((err) => {
        alert(err + ", Server is not connected.");
      });
  };

  return (
    <div>
      <Card className="header">
        <div id="heading-icon-text">
          <DescriptionOutlined color="primary" fontSize="large" />
          &nbsp; Untitled form
        </div>

        <div className="head-ques">Questions</div>

        <div className="top-right-icons">
          <Link to="/preview" style={{ textDecoration: "none" }}>
            <VisibilityOutlined titleAccess="preview" />
          </Link>

          <Button
            onClick={insertdb}
            variant="contained"
            color="primary"
            size="medium"
          >
            Insert
          </Button>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>

          <IconButton title="More">
            <MoreVert />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default Header;
