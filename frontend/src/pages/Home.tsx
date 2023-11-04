import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
} from "@ionic/react";
import type { ToggleCustomEvent } from "@ionic/react";
import Heading from "../components/Heading";
import TopicGuide from "../components/TopicGuide";
import "./Home.css";

const Home: React.FC = () => {
  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  useEffect(() => {
    toggleDarkTheme(true);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{
              fontFamily: "MuseoModerno",
              fontSize: "30px",
              float: "left",
            }}
          >
            Freedia
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TEST</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Heading />
        <p
          style={{
            fontFamily: "MuseoModerno",
            fontSize: "25px",
            color: "#8c8c8c",
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Many topics to explore...
        </p>
        <TopicGuide />
      </IonContent>
    </IonPage>
  );
};

export default Home;
