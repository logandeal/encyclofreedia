import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
} from "@ionic/react";
import Heading from "../components/Heading";
import TopicGuide from "../components/TopicGuide";
import TopicModel from "../components/TopicModel";
import "./Home.css";

const Home: React.FC = () => {
  const [topicName, setTopicName] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TEST</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Heading />
        <TopicGuide setTopicName={setTopicName} />
        <p
          style={{
            fontFamily: "MuseoModerno",
            marginTop: "30px",
            fontSize: "25px",
            color: "#8c8c8c",
            textAlign: "center",
          }}
        >
          Many topics to explore... click one!
        </p>
        {topicName == "" && (
          <p
            style={{
              marginTop: "30px",
              fontSize: "15px",
              color: "#8c8c8c",
              textAlign: "center",
            }}
          >
            Click a topic to see subtopics and resources.
          </p>
        )}
        {topicName != "" && <TopicModel topicName={topicName} />}
      </IonContent>
    </IonPage>
  );
};

export default Home;
