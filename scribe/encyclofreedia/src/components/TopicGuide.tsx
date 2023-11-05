import React, { useEffect, useRef, useState } from "react";
import {
  globe,
  home,
  medkit,
  people,
  school,
  briefcase,
  laptop,
} from "ionicons/icons";
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
      const apiUrl = "http://host.docker.internal:8000/test-api/";

      const data = {
        test: "hello",
      };

      const response = await fetch(apiUrl, {
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
          marginRight: "-400px",
          display: "flex",
        }}
      >
        <IonCard
          className="topic primary special-card"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Intro to CS SIG");
              setTopicColor("primary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Intro to CS <IonIcon icon={school}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>5 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Meant for lowerclassmen students</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Interview Prep SIG");
              setTopicColor("secondary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Interview Prep <IonIcon icon={briefcase}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>4 resources, 2 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Get prepared for the career fair</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Web Dev SIG");
              setTopicColor("tertiary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Web Dev <IonIcon icon={globe}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>3 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Learn mainly front-end development</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("TigerHacks Prep");
              setTopicColor("success");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              TigerHacks Prep <IonIcon icon={laptop}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>2 resources, 4 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Assets related to TigerHacks planning</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary special-card"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Events");
              setTopicColor("warning");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Events <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>3 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Any meetings that MCA holds</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="danger"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Projects");
              setTopicColor("danger");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Projects <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 resources, 1 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Personal and group projects</IonCardContent>
        </IonCard>
      </div>
      <div
        style={{
          marginTop: "-135px",
          marginRight: "-400px",
          display: "flex",
        }}
      >
        <IonCard
          className="topic secondary special-card"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Intro to CS SIG");
              setTopicColor("primary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Intro to CS <IonIcon icon={school}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>5 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Meant for lowerclassmen students</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Interview Prep SIG");
              setTopicColor("secondary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Interview Prep <IonIcon icon={briefcase}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>4 resources, 2 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Get prepared for the career fair</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Web Dev SIG");
              setTopicColor("tertiary");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Web Dev <IonIcon icon={globe}></IonIcon> SIG
            </IonCardTitle>
            <IonCardSubtitle>3 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Learn mainly front-end development</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("TigerHacks Prep");
              setTopicColor("success");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              TigerHacks Prep <IonIcon icon={laptop}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>2 resources, 4 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Assets related to TigerHacks planning</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Events");
              setTopicColor("warning");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Events <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>3 resources, 3 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Any meetings that MCA holds</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary special-card"
          color="danger"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isPlaying) {
              setTopicName("Projects");
              setTopicColor("danger");
              pause();
            } else {
              play();
            }
          }}
        >
          <IonCardHeader>
            <IonCardTitle>
              Projects <IonIcon icon={people}></IonIcon>
            </IonCardTitle>
            <IonCardSubtitle>1 resources, 1 forums</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Personal and group projects</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default TopicGuide;
