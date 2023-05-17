import React from "react";
import "./skill.css"
import Frontend from "./Frontend";
import Backtend from "./Backend";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My tecnical level</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Backtend/>
      </div>
    </section>
  );
};

export default Skill;
