import React, { useEffect, useRef } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  createAnimation,
} from "@ionic/react";
import type { Animation } from "@ionic/react";

const TopicGuide: React.FC = () => {
  const cardAEl = useRef<HTMLIonCardElement | null>(null);
  const cardBEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      const cardA = createAnimation()
        .addElement(cardAEl.current!)
        .duration(1500)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-500px)", "translateX(100px)")
        .fromTo("opacity", "1", "0.2");

      const cardB = createAnimation()
        .addElement(cardBEl.current!)
        .duration(1500)
        .iterations(Infinity)
        .fromTo("transform", "translateX(0px)", "translateX(100px)")
        .fromTo("opacity", "1", "0.2");

      animation.current = createAnimation()
        .duration(2000)
        .iterations(Infinity)
        .addAnimation([cardA, cardB]);
    }
  }, [cardAEl.current, cardBEl.current]);

  animation.current?.play();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <IonCard color="primary" ref={cardAEl}>
        <IonCardHeader>
          <IonCardTitle>Health</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="secondary" ref={cardBEl}>
        <IonCardHeader>
          <IonCardTitle>Finance</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
    </div>
  );
};

export default TopicGuide;
