import React from "react";
import { useState, useRef } from 'react';
import './ResourceCreator.css';
import { IonModal, IonHeader, IonCard, IonToolbar, IonButtons, IonButton, IonContent, IonItem, IonInput, IonTitle, IonList } from "@ionic/react";
import { OverlayEventDetail } from '@ionic/core/components';

const Resource: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
        ''
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            {/*setMessage(`Hello, ${ev.detail.data}!`);*/}
        }
    }
    
    
    return (
        <IonContent>
            <IonButton id="open-modal" shape="round" size="large" fill="outline" className="rCreatorButton">
            Share New Resource
            </IonButton>
            <p>{message}</p>
            <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)} className="rCreatorModal">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle className="modalTitle">Create Resources Here!</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => confirm()}>
                            Confirm
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="modalContent">
                    <IonList>
                        <IonItem>
                            <IonInput
                                label="Resource title"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                className="rCreatorInput"
                                placeholder="..."
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label="Resource description"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                placeholder="..."
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label="Subtopic"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                placeholder="..."
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label="Hyperlink"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                placeholder="..."
                            />
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonModal>
        </IonContent>
    );
};

export default Resource;