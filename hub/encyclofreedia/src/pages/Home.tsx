import React, { useState, useEffect, useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonList,
  IonItem,
} from "@ionic/react";
import Heading from "../components/Heading";
import TopicGuide from "../components/TopicGuide";
import TopicModel from "../components/TopicModel";
import Resource from "../components/Resource";
import './Home.css';

const Home: React.FC = () => {
  const [topicName, setTopicName] = useState("");
  const [topicColor, setTopicColor] = useState("");
  const [resourceOpen, setResourceOpen] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Encyclofreedia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Heading />
        <TopicGuide setTopicName={setTopicName} setTopicColor={setTopicColor} />
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
        {topicName != "" && (
          <TopicModel
            topicName={topicName}
            topicColor={topicColor}
            setResourceOpen={setResourceOpen}
          />
        )}
        <div
          style={{
            marginTop: "530px",
            width: "48.5vw",
            alignContent: "center",
          }}
        >
          {resourceOpen && (
            <div id="resource">
              <Resource topicColor={topicColor} />
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
