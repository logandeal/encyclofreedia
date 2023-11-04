import React, { useEffect, useRef, useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  createAnimation,
} from "@ionic/react";
import type { Animation } from "@ionic/react";
import "./TopicGuide.css";

const TopicGuide: React.FC = () => {
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
          className="topic primary"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Housing</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Health</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Education</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Environment</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic primary"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Organizations</IonCardTitle>
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
          className="topic secondary"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Housing</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary"
          color="secondary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Health</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary"
          color="tertiary"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Education</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary"
          color="success"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Environment</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
        <IonCard
          className="topic secondary"
          color="warning"
          style={{ cursor: "pointer" }}
          onClick={isPlaying ? pause : play}
        >
          <IonCardHeader>
            <IonCardTitle>Organizations</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};

export default TopicGuide;
