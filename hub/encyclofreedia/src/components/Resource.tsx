import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonText,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import "./Resource.css";
import { radioButtonOn, radioButtonOff, person, time } from "ionicons/icons";
import VoteButtons from './VoteButtons';

const Resource: React.FC<{ topicColor: any }> = ({ topicColor }) => {
  /* r = resource */
  const rTitle = "Resource";
  const rText = "This resource is for a bunch of stuff.";
  const rLink =
    "https://whereisthemouse.com/how-to-use-button-as-link-in-react";
  /*const rID
    const rTopicID
    const rUserID
    const rPostTime*/

  return (
    <IonCard className="resourceCard special-card">
      <IonCardContent>
        <IonGrid>
          {/* Core Resource Info */}
          <IonRow className="resourceRow">
            <IonCol>
              <IonText color={topicColor}>
                <IonTitle size="large" style={{ fontFamily: "MuseoModerno" }}>
                  {rTitle}
                </IonTitle>
                <IonText className="resourceText">{rText}</IonText>
              </IonText>
            </IonCol>
            <IonCol>
              <IonButton
                href={rLink}
                target="_blank"
                rel="noopener noreferrer"
                className="resourceButton"
                expand="block"
                shape="round"
                color={topicColor}
              >
                Resource Website
              </IonButton>
            </IonCol>
          </IonRow>
          {/* Additional Resource Data */}
          <IonRow>
            <IonChip>
              <IonIcon icon={radioButtonOn} color={topicColor}></IonIcon>
              <IonLabel>Topic</IonLabel>
            </IonChip>
            <IonChip>
              <IonIcon icon={radioButtonOff} color={topicColor}></IonIcon>
              <IonLabel>Subtopic</IonLabel>
            </IonChip>
            <IonChip>
              <IonIcon icon={person} color={topicColor}></IonIcon>
              <IonLabel>User</IonLabel>
            </IonChip>
            <IonChip>
              <IonIcon icon={time} color={topicColor}></IonIcon>
              <IonLabel>Time Posted</IonLabel>
            </IonChip>
          {/*Upvote and downvote buttons*/}
            <VoteButtons/>
            <IonChip>5</IonChip>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default Resource;
