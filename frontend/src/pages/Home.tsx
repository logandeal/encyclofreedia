import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Heading from "../components/Heading";
import TopicGuide from "../components/TopicGuide";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontFamily: "MuseoModerno", fontSize: "30px" }}>
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
        <TopicGuide />
      </IonContent>
    </IonPage>
  );
};

export default Home;
