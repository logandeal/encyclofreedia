import React from "react";

const Heading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "MuseoModerno",
          fontSize: "25px",
          color: "#8c8c8c",
        }}
      >
        Welcome to{" "}
        <strong style={{ fontSize: "25px", color: "white" }}>
          Encyclofreedia
        </strong>
        , the encyclopedia for free internet resources!
      </p>
    </div>
  );
};

export default Heading;
