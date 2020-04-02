import React from 'react'
import { connect, useSelector } from 'react-redux'
import { IonContent, IonButton, IonText, IonCard } from '@ionic/react'

const DisplaySingleArticle = props => {
  const premiumUser = useSelector(state => state.premiumUser);
  let articleDetails
  let articlePremium = props.singleArticle.premium
  let article = props.singleArticle
  let premiumMessage = ""

  if (premiumUser === false && articlePremium === true) {
    article.content = article.content.substring(0, 200) + "...";
    premiumMessage = (
      <IonText id = 'premium-message'>This article requires a premium membership</IonText>
    )
  }
  articleDetails = (
    <IonCard key={article.id} align='center' color='light' class='ion-padding'>
      <IonText>
        <h1>{article.title}</h1>
      </IonText>
      <IonText align='left'>
        <h5>{article.lead}</h5>
      </IonText>
      <IonText color='dark' align='left'>
        <p>{article.content}</p>
        {premiumMessage}
      </IonText>
      <IonButton
        fill='outline'
        id='back-button'
        color='danger'
        onClick={() => props.dispatch({ type: 'BACK_TO_ARTICLE_LIST' })}
        key={article.id}
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
