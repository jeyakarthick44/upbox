import "../App.css";
import Background from "./Background";
import Navbar from "./Navbar";
import Main from "./Main";

function Section1() {
  return (
    <div className="section1">
      <Background />
      <Navbar />
      <Main />
    </div>
  );
}

export default Section1;
