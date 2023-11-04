import React from "react";
import "./Heading.css";

const Heading: React.FC = () => {
  return (
    <div id="container">
      <p
        style={{
          fontFamily: "MuseoModerno",
          fontSize: "25px",
        }}
      >
        Welcome to{" "}
        <strong style={{ fontSize: "25px", color: "white" }}>Freedia</strong>,
        the internet encyclopedia for free resources!
      </p>
    </div>
  );
};

export default Heading;
