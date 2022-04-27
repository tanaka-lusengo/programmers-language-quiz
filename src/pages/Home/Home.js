import React from "react";
import "./Home.scss";
import Logo from "../../assets/images/quiz.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__description typewriter">
        TEST YOUR “LANGUAGE” SKILLS AND STAY MOTIVATED
      </h1>
      <div className="home__logo">
        <img className="logo" alt="Quiz logo" src={Logo} />
      </div>
      <div className="button-wrapper">
        <Link className="home__button" to="/level">
          <button className="home__button" type="submit">
            START QUIZ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
