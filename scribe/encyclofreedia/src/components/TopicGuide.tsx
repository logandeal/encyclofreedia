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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
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
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default TopicGuide;
