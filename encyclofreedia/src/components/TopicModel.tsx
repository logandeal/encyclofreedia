import React from "react";
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

const TopicModel: React.FC<{ topicName: any }> = ({ topicName }) => {
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
      <IonContent color="light" style={{ width: "100%" }}>
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
              >
                View resources
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
              >
                View resources
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
              >
                View resources
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
              >
                View resources
              </IonButton>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent color="light" style={{ width: "50%" }}>
        <p>Hello</p>
      </IonContent>
    </>
  );
};

export default TopicModel;
