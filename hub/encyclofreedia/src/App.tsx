import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import AccountPage from "./pages/Account";
import { home, search, person } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  useEffect(() => {
    toggleDarkTheme(true);
  }, []);

  return (
    <IonApp className="mainContent">
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/*
            Use the render method to reduce the number of renders your component will have due to a route change.

            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
            <Route path="/" render={() => <HomePage />} exact={true} />
            <Route path="/search" render={() => <SearchPage />} exact={true} />
            <Route
              path="/account"
              render={() => <AccountPage />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="top" className="tabBar">
            <IonTabButton tab="home" href="/" style={{ maxWidth: "35vw" }}>
              <div>
                <IonLabel
                  style={{
                    fontFamily: "MuseoModerno",
                    fontSize: "40px",
                    color: "white",
                    paddingBottom: "60px",
                  }}
                >
                  Encyclofreedia
                </IonLabel>
              </div>
            </IonTabButton>

            <IonTabButton tab="" href="/">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>

            <IonTabButton tab="account" href="/account">
              <IonIcon icon={person} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
