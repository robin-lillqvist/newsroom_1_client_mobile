import React from 'react'
import { IonSegment, IonSegmentButton } from '@ionic/react'

const Menu = () => {
  return (
    <IonSegment>
      <IonSegmentButton>All News</IonSegmentButton>
      <IonSegmentButton>Latest News</IonSegmentButton>
      <IonSegmentButton>Culture</IonSegmentButton>
      <IonSegmentButton>Tech</IonSegmentButton>
      <IonSegmentButton>Food</IonSegmentButton>
      <IonSegmentButton>Sports</IonSegmentButton>
    </IonSegment>
  )
}

export default Menu
