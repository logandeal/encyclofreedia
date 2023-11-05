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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default TopicGuide;
