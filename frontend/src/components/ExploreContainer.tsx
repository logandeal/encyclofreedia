import React from "react";
import "./ExploreContainer.css";

const ExploreContainer: React.FC = () => {
  return (
    <div id="container">
      <strong>Welcome to Freedia, a customizable hub</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
