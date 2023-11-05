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
} from "@ionic/react";

const TopicModel: React.FC<{
  topicName: any;
  topicColor: any;
  setResourceOpen: any;
}> = ({ topicName, topicColor, setResourceOpen }) => {
  const [subTopicName, setSubTopicName] = useState("");
  const [resourceTabOpen, setResourceTabOpen] = useState(false);

  return (
    <>
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
      <br />
      <IonContent
        color="light"
        style={{
          height: "50%",
          width: resourceTabOpen ? "60%" : "100%",
          float: "left",
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
          These are the subtopics for the {topicName} topic.
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
                First Subtopic
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                25 resources, 30 posts, 300 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                onClick={() => {
                  setResourceTabOpen(true);
                  setSubTopicName("First");
                }}
                color={topicColor}
              >
                Resources
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
                Second Subtopic
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                25 resources, 30 posts, 300 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
              >
                Resources
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
                Third Subtopic
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                25 resources, 30 posts, 300 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
              >
                Resources
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
                Fourth Subtopic
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno",
                  marginTop: "20px",
                  fontSize: "25px",
                  color: "#8c8c8c",
                  float: "left",
                }}
              >
                25 resources, 30 posts, 300 upvotes
              </p>
              <IonButton
                shape="round"
                style={{
                  float: "right",
                  marginTop: "-20px",
                }}
                size="large"
                color={topicColor}
              >
                Resources
              </IonButton>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent
        color="light"
        style={{
          height: "50%",
          width: resourceTabOpen ? "38.5%" : "0%",
          float: "right",
        }}
      >
        <IonButton
          shape="round"
          style={{
            float: "right",
            margin: "20px",
          }}
          size="large"
          color={topicColor}
          onClick={() => {
            setResourceTabOpen(!resourceTabOpen);
          }}
        >
          Close
        </IonButton>
        <p
          style={{
            fontFamily: "MuseoModerno",
            marginTop: "30px",
            fontSize: "25px",
            color: "#8c8c8c",
            textAlign: "center",
          }}
        >
          These are the resources for the {subTopicName} subtopic.
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
                First Resource
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
                  // const content = document.getElementById("content");
                  // content.scrollTop = content.scrollHeight;
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
                Second Resource
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
                Third Resource
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
                Fourth Resource
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
