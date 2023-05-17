import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="quealification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Js</h3>
                <span className="qualification__subtitle">Udemy.com</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> September 21, 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Frontend web development
                </h3>
                <span className="qualification__subtitle">udemy.com</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> March 21, 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python development</h3>
                <span className="qualification__subtitle">
                  open-bootcamp.com
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> February 10, 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">University Cartagena</h3>
                <span className="qualification__subtitle">
                  Systems Engineer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> August 21, 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frelanceer</h3>
                <span className="qualification__subtitle">Web developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> February 6, 2023 - Now
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SIPREMCOL S.A.S</h3>
                <span className="qualification__subtitle">Web developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  September 11, 2021 -October 30, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
