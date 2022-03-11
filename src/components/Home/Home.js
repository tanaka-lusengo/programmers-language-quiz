import "./Home.scss";
import Logo from "../../assets/images/quiz.svg";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Home = (props) => {
  return (
    <div className="home">
      <h1 className="home__description typewriter">
        TEST YOUR “LANGUAGE” SKILLS AND STAY MOTIVATED
      </h1>
      <div className="home__logo">
        <img className="logo" alt="Quiz logo" src={Logo} />
      </div>
      <Link className="home__button" to="/level">
        <button className="home__button" type="submit">
          START QUIZ
        </button>
      </Link>
    </div>
  );
};
export default Home;
