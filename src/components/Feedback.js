import React from "react";
import { useSpring, config, animated } from "react-spring";
import "./about.css";

function Feedback() {
  const card = useSpring({ ...animated, config: config.default });
  return (
    <animated.div className="card" style={card.config}>
      <h1>Feedback Page</h1>
    </animated.div>
  );
}

export default Feedback;
