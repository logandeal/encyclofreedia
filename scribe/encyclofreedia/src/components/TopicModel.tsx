import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  createAnimation,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import ResourceCreator from "./ResourceCreator";

const TopicModel: React.FC<{
  topicName: any;
  topicColor: any;
  setResourceOpen: any;
}> = ({ topicName, topicColor, setResourceOpen }) => {
  const [subTopicName, setSubTopicName] = useState("");
  const [resourceTabOpen, setResourceTabOpen] = useState(false);

  return (
    <>
      <IonRow>
        <IonCol size="7">
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
        </IonCol>
        <IonCol size="5" style={{ marginTop: "30px" }}>
          <ResourceCreator topicColor={topicColor} topicName={topicName} />
        </IonCol>
      </IonRow>
      <IonContent
        color="light"
        style={{
          height: "50%",
          width: topicName != "" ? "100%" : "0%",
          float: "right",
        }}
      >
        <p
          style={{
            fontFamily: "MuseoModerno",
            marginTop: "30px",
            fontSize: "25px",
            color: "#8c8c8c",
            textAlign: "center",
          }}
        >
          These are the resources for {topicName}.
        </p>
        <IonList inset={true} lines="full">
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                FreeCodeCamp
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                onClick={() => {
                  setResourceOpen(true);

                  function scrollToElement() {
                    const element = document.getElementById("resource");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      // Element not found, retry in 100ms (adjust the delay as needed)
                      setTimeout(scrollToElement, 100);
                    }
                  }

                  scrollToElement();
                }}
                color={topicColor}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                MDN Web Docs
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);
                }}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                Kaggle
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);
                }}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                GoDot Engine
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);
                }}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                LeetCode
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);
                }}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  fontSize: "25px",
                  color: "white",
                }}
              >
                Fast.ai
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
                onClick={() => {
                  setResourceOpen(true);
                }}
              >
                View below
              </IonButton>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default TopicModel;
