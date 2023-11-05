import React, { useState, useEffect } from 'react';
import { IonContent, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonCard, IonCardTitle, IonFooter, IonGrid, IonCardContent } from '@ionic/react';
import './Account.css';
import { IonToggle } from '@ionic/react';

const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  // Check login status when the component mounts
  // For example, by checking a token in local storage
  // Determines whether to show a sign out button or login options
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        {isLoggedIn ? (
          <div>
            <button onClick={() => {
              localStorage.removeItem('authToken');
              setIsLoggedIn(false);
            }}>Logout</button>
          </div>
        ) : (
          <div className="container">
            <IonCard className="cardStyle">
              <IonCardContent>
                <IonGrid>
                  <IonRow className="ion-justify-content-center">
                    <IonCardTitle className="cardTitle">Log in</IonCardTitle>
                    <IonCardTitle className="cardTitle">Sign up</IonCardTitle>
                  </IonRow>
                  <IonRow className="ion-justify-content-center">
                    <IonToggle 
                        aria-label="Login"
                        value="on"
                      />
                  </IonRow>
                  <IonCol size="auto">
                    {/* Login or sign up fields */}
                    <IonList className="inputList">
                      <IonItem className="usernameField">
                        <IonInput className="usernameField" label="" placeholder="Enter username"></IonInput>
                      </IonItem>
                      <IonItem className="passwordField">
                        <IonInput className="passwordField" label="" placeholder="Enter password"></IonInput>
                      </IonItem>
                    </IonList>
                  </IonCol>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Account;
