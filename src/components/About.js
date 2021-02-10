import React from "react";
import { animated, useSpring } from "react-spring";
import "./about.css";

function About() {
  const numbers = [];
  for (let i = 0; i < 1000; i++) {
    numbers.push(<li>*</li>);
  }

  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });
  const props = useSpring({ number: 100, from: { number: 0 } });
  return (
    <>
      <animated.div className="about-page" style={anim}>
        <h1>Name :- John Smith</h1>
        <p>
          Mollit excepteur qui et labore anim ad sit in cillum commodo esse
          velit ut. Aliquip et non consequat eu ad sit ad excepteur. Consequat
          sunt aute officia cillum sint. Velit ea pariatur ad Lorem tempor
          eiusmod sint ullamco culpa id culpa minim et duis. Cillum consectetur
          duis amet fugiat id anim dolor velit non laboris do.
        </p>
      </animated.div>
      <animated.span>{anim.number}</animated.span>
      <animated.p>{props.number}</animated.p>
    </>
  );
}

export default About;
