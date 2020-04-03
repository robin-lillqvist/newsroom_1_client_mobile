import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IonContent, IonButton, IonText, IonCard, IonImg } from '@ionic/react'

const DisplaySingleArticle = props => {
  const premiumUser = useSelector(state => state.premiumUser);
  let articleDetails
  let articlePremium = props.singleArticle.premium
  let article = props.singleArticle
  let premiumMessage = ""

  if (premiumUser === false && articlePremium === true) {
    article.content = article.content.substring(0, 200) + "...";
    premiumMessage = (
      <IonText id = 'premium-message' align='left'>This article requires a premium membership</IonText>
    )
  }
  articleDetails = (
    <IonCard key={article.id} align='center' color='light' class='ion-padding'>
      <IonText>
        <h1>{article.title}</h1>
      </IonText>
      <IonImg alt="image" src={article.image} />
      <IonText align='left'>
        <h5>{article.lead}</h5>
      </IonText>
      <IonText color='dark' align='left'>
        <p>{article.content}</p>
      </IonText>
      {premiumMessage}
      <IonButton
        fill='outline'
        id='back-button'
        color='danger'
        onClick={() => props.dispatch({ type: 'BACK_TO_ARTICLE_LIST' })}
        key={article.id}
        class = 'ion-margin-top'
      >Back</IonButton>
    </IonCard>
  )
  return (
    <IonContent
      fullscreen
      class='ion-padding'
      id='single-article'
      color='light'
    >
      {articleDetails}
    </IonContent>
  )
}

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  }
}

export default connect(mapStateToProps)(DisplaySingleArticle)
