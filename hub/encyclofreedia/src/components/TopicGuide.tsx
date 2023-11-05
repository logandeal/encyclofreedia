import React, { useEffect, useRef, useState } from "react";
import { globe, home, medkit, people, school } from "ionicons/icons";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import type { Animation } from "@ionic/react";
import "./TopicGuide.css";

const TopicGuide: React.FC<{ setTopicName: any; setTopicColor: any }> = ({
  setTopicName,
  setTopicColor,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const topics = document.querySelectorAll(".topic");

  const apiCall = async () => {
    try {
      const apiUrl = "https://api.example.com/data";

      const data = {
        test: "hello",
      };

      const response = await fetch("http://host.docker.internal/test-api/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseJson = await response.json();
      console.log("responseJson", responseJson);
      return responseJson;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const play = () => {
    topics.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.animationPlayState = "running";
      }
    });
    setIsPlaying(true);
  };
  const pause = () => {
    topics.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.animationPlayState = "paused";
      }
    });
    setIsPlaying(false);
  };

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <IonCard
          className="topic primary special-card"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Housing");
              setTopicColor("primary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Housing <IonIcon icon={home}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>
              2 Subtopics, 3 Resources, 4 Forums
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Real estate, property management, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Health");
              setTopicColor("secondary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Health <IonIcon icon={medkit}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>3 Subtopics, 2 Resources, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Medications, medical supplies, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Education");
              setTopicColor("tertiary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Education <IonIcon icon={school}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 2 Resources, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>K-12, University, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Environment");
              setTopicColor("success");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Environment <IonIcon icon={globe}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 1 Resource, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Clean energy, initiatives, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Organizations");
              setTopicColor("warning");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Organizations <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 1 Resource, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Businesses, non-profits, etc</IonCardContent>
        </IonCard>
      </div>
      <div
        style={{
          marginTop: "-135px",
          display: "flex",
        }}
      >
        <IonCard
          className="topic secondary special-card"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Housing");
              setTopicColor("primary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Housing <IonIcon icon={home}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>
              2 Subtopics, 3 Resources, 4 Forums
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Real estate, property management, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Health");
              setTopicColor("secondary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Health <IonIcon icon={medkit}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>3 Subtopics, 2 Resources, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Medications, medical supplies, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Education");
              setTopicColor("tertiary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Education <IonIcon icon={school}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 2 Resources, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>K-12, University, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Environment");
              setTopicColor("success");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Environment <IonIcon icon={globe}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 1 Resource, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Clean energy, initiatives, etc</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Organizations");
              setTopicColor("warning");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Organizations <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 Subtopic, 1 Resource, 1 Forum</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Businesses, non-profits, etc</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default TopicGuide;
