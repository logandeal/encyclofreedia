import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonSearchbar,
  IonCard
} from "@ionic/react";
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonSearchbar animated={true} placeholder="Search topics and resources"></IonSearchbar>
        <div>
          <IonCard className="searchCard">
            <IonList>
              <IonItem></IonItem>
            </IonList>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
