/* Main page with one button saying solve a puzzle 
and another saying solve my puzzle*/

import { API } from "../constants";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div>
        <Link to={`/Solvemypuzzle`} style={{ textDecoration: "none" }}>
          <button class="button button1">Solve my puzzle</button>
        </Link>
        <Link to={`/Solveapuzzle`} style={{ textDecoration: "none" }}>
          <button class="button button2">Solve a puzzle</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
