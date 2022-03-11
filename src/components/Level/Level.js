import "./Level.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Level = (props) => {
  return (
    <div>
      <Header />
      <div className="level">
        <h1 className="level__description typewriter">SELECT A LEVEL</h1>
        <div className="level__buttons">
          <div className="button-wrapper">
            <Link
              className="level__button level__button--color1"
              to="/quiz/easy"
            >
              <button
                className="level__button level__button--color1"
                type="submit"
              >
                EASY
              </button>
            </Link>
          </div>
          <div className="button-wrapper">
            <Link
              className="level__button level__button--color2"
              to="/quiz/hard"
            >
              <button
                className="level__button level__button--color2"
                type="submit"
              >
                HARD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Level;
