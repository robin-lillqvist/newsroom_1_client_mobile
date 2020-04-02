import React from 'react'
import { connect } from 'react-redux'
import { IonContent, IonButton, IonText, IonCard } from '@ionic/react'

const DisplaySingleArticle = props => {
  let articleDetails
  let article = props.singleArticle
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
