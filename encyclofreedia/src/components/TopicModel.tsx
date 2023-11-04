import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  createAnimation,
} from "@ionic/react";

const TopicModel: React.FC<{ topicName: any }> = ({ topicName }) => {
  return (
    <>
      <p
        style={{
          fontFamily: "MuseoModerno",
          marginTop: "30px",
          fontSize: "40px",
          color: "white",
          textAlign: "center",
        }}
      >
        {topicName}
      </p>
      <br />
    </>
  );
};

export default TopicModel;
