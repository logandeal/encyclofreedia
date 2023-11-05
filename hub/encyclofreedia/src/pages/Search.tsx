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
  IonCard,
  IonCheckbox,
} from "@ionic/react";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          animated={true}
          placeholder="Search topics, subtopics, and resources!"
        ></IonSearchbar>
        <div>
          <IonCard className="searchCard" style={{ width: "98.7vw" }}>
            <IonCheckbox>
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: "15px",
                  color: "#8c8c8c",
                }}
              >
                Search topics only
              </p>
            </IonCheckbox>
            <IonCheckbox>
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: "15px",
                  color: "#8c8c8c",
                }}
              >
                Search subtopics only
              </p>
            </IonCheckbox>
            <IonCheckbox>
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: "15px",
                  color: "#8c8c8c",
                }}
              >
                Search resources only
              </p>
            </IonCheckbox>
            <IonList>
              <IonItem></IonItem>
            </IonList>
            <p
              style={{
                fontFamily: "MuseoModerno",
                marginTop: "30px",
                fontSize: "25px",
                color: "#8c8c8c",
                textAlign: "center",
              }}
            >
              Results will appear here.
            </p>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
