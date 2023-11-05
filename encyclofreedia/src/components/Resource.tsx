import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonButton, IonText, IonTitle, IonGrid, IonRow, IonCol, IonChip, IonIcon, IonLabel } from "@ionic/react";
import './Resource.css';
import { radioButtonOn, radioButtonOff, person, time } from 'ionicons/icons';

const Resource: React.FC = () => {
    /* r = resource */
    const rTitle = "Resource";
    const rText = "This resource is for a bunch of stuff.";
    const rLink = "https://whereisthemouse.com/how-to-use-button-as-link-in-react";
    /*const rID
    const rTopicID
    const rUserID
    const rPostTime*/

    return (
        <IonCard className="resourceCard">
            <IonCardContent>
                <IonGrid>
                    {/* Core Resource Info */}
                    <IonRow className="resourceRow">
                        <IonCol>
                            <IonText color="primary">
                                <IonTitle size="large">{rTitle}</IonTitle>
                                <IonText className="resourceText">{rText}</IonText>
                            </IonText>
                        </IonCol>
                        <IonCol>
                            <IonButton href={rLink} target="_blank" rel="noopener noreferrer" className="resourceButton" expand="block" shape="round">
                                Resource Website
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    {/* Additional Resource Data */}
                    <IonRow>
                        <IonChip>
                            <IonIcon icon={radioButtonOn} color="primary"></IonIcon>
                            <IonLabel>Topic</IonLabel>
                        </IonChip>
                        <IonChip>
                            <IonIcon icon={radioButtonOff} color="primary"></IonIcon>
                            <IonLabel>Subtopic</IonLabel>
                        </IonChip>
                        <IonChip>
                            <IonIcon icon={person} color="primary"></IonIcon>
                            <IonLabel>User</IonLabel>
                        </IonChip>
                        <IonChip>
                            <IonIcon icon={time} color="primary"></IonIcon>
                            <IonLabel>Time Posted</IonLabel>
                        </IonChip>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default Resource;