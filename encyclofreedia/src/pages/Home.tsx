import React, { useEffect } from "react";
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
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Many topics to explore... click one!
        </p>
        <TopicGuide />
      </IonContent>
    </IonPage>
  );
};

export default Home;
