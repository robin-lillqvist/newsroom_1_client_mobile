import React from 'react';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';

const Footer = () => {
  return (
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle align="center">This is a Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  )
}

export default Footer;
