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
      <p>{topicName}</p>
    </>
  );
};

export default TopicModel;
