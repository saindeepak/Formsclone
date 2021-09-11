import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Newform from "./Newform";
import Preview from "./Preview";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  const [ques, setques] = useState([]);
  const [formtitle, settitle] = useState("");
  const [formdescp, setdescp] = useState("");

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/preview/">
            <Preview
              questions={ques}
              update={setques}
              title={formtitle}
              descp={formdescp}
            />
          </Route>
          <Route path="/new-form/">
            <Newform
              questions={ques}
              update={setques}
              title={formtitle}
              updatetitle={settitle}
              descp={formdescp}
              updatedescp={setdescp}
            />
          </Route>
          <Route path="/home/">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
