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
  const cardCEl = useRef<HTMLIonCardElement | null>(null);
  const cardDEl = useRef<HTMLIonCardElement | null>(null);
  const cardEEl = useRef<HTMLIonCardElement | null>(null);
  const cardFEl = useRef<HTMLIonCardElement | null>(null);
  const cardGEl = useRef<HTMLIonCardElement | null>(null);
  const cardHEl = useRef<HTMLIonCardElement | null>(null);

  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    if (animation.current === null) {
      const cardA = createAnimation()
        .addElement(cardAEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardB = createAnimation()
        .addElement(cardBEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardC = createAnimation()
        .addElement(cardCEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardD = createAnimation()
        .addElement(cardDEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardE = createAnimation()
        .addElement(cardEEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardF = createAnimation()
        .addElement(cardFEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardG = createAnimation()
        .addElement(cardGEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      const cardH = createAnimation()
        .addElement(cardHEl.current!)
        .duration(21000)
        .iterations(Infinity)
        .fromTo("transform", "translateX(-50vw)", "translateX(0vw)")
        .fromTo("opacity", "1", "0.8");

      animation.current = createAnimation()
        .duration(21000)
        .iterations(Infinity)
        .addAnimation([cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH]);
    }
    animation.current?.play();
  }, [
    cardAEl.current,
    cardBEl.current,
    cardCEl.current,
    cardDEl.current,
    cardEEl.current,
    cardFEl.current,
    cardGEl.current,
    cardHEl.current,
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
      }}
    >
      <IonCard color="tertiary" ref={cardHEl}>
        <IonCardHeader>
          <IonCardTitle>Education</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="success" ref={cardGEl}>
        <IonCardHeader>
          <IonCardTitle>Environment</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="warning" ref={cardFEl}>
        <IonCardHeader>
          <IonCardTitle>Organizations</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="primary" ref={cardAEl}>
        <IonCardHeader>
          <IonCardTitle>Housing</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="secondary" ref={cardBEl}>
        <IonCardHeader>
          <IonCardTitle>Health</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="tertiary" ref={cardCEl}>
        <IonCardHeader>
          <IonCardTitle>Education</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="success" ref={cardDEl}>
        <IonCardHeader>
          <IonCardTitle>Environment</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
      <IonCard color="warning" ref={cardEEl}>
        <IonCardHeader>
          <IonCardTitle>Organizations</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Card Content</IonCardContent>
      </IonCard>
    </div>
  );
};

export default TopicGuide;
