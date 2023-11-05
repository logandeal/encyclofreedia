import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
} from "@ionic/react";
import Resource from "../components/Resource";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
