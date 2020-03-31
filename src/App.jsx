import React from 'react';
import { connect } from "react-redux";
// import { Redirect, Route } from 'react-router-dom';
// import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonHeader } from '@ionic/react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DisplayAllArticles from './components/DisplayAllArticles';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonHeader>
      <Menu />
    </IonHeader>
    <DisplayAllArticles />
    <Footer />
  </IonApp>
);

export default connect()(App);
