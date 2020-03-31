import React from 'react'
import { IonSegment, IonSegmentButton } from '@ionic/react'

const Menu = () => {
  return (
    <IonSegment>
      <IonSegmentButton>Sports</IonSegmentButton>
      <IonSegmentButton>Finance</IonSegmentButton>
      <IonSegmentButton>Culture</IonSegmentButton>
      <IonSegmentButton>Tech</IonSegmentButton>
    </IonSegment>
      
  )
}

export default Menu
