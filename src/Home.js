import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <Link
        to="/new-form"
        style={{ textDecoration: "none", maxHeight: "220px" }}
      >
        <Card className="home-tile">
          <Add />
          New-Form
        </Card>
      </Link>
    </div>
  );
};

export default Home;
