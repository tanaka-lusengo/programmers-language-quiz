import "./Quiz.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import circleEasy from "../../assets/images/blue-circle.svg";
import circleHard from "../../assets/images/purple-circle.svg";
import circle from "../../assets/images/circle.svg";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Quiz = (props) => {
  return (
    <div>
      <Header />
      {/* <div>Your score 4/5</div> */}
      <section className="quiz">
        <article className="question-card">
          <div className="question-card__wrapper-header">
            <div className="card__number">
              <h3>Question 1/5</h3>
            </div>
          </div>
          <div className="question-card__wrapper-content">
            <div className="card__text">
              How do you create a function in JavaScript?
            </div>
            <div className="card__answer">
              <div className="button-wrapper">
                <button className="card__button answer__button--color answer__button--correct">
                  <img className="circle" src={circle} alt="circle" />
                  <span className="answer"> function myFunction() </span>
                </button>
                <button className="card__button answer__button--color answer__button--correct">
                  <img className="circle" src={circle} alt="circle" />
                  <span className="answer"> function:myFunction() </span>
                </button>
                <button className="card__button answer__button--color answer__button--correct">
                  <img className="circle" src={circle} alt="circle" />
                  <span className="answer"> function = myFunction() </span>
                </button>
                <button className="card__button answer__button--color answer__button--correct">
                  <img className="circle" src={circle} alt="circle" />
                  <span className="answer"> function myFunction() </span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Quiz;
