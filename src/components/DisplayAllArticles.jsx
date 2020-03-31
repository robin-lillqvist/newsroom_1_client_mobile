import React from 'react'
import { connect } from 'react-redux'
import { IonContent, IonGrid } from '@ionic/react'

const DisplayAllArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <IonGrid key={article.id} align='center'>
        <h1>{article.title}</h1>
        <p>{article.lead}</p>
      </IonGrid>
    )
  })
  return <IonContent id='article-list'>{articleDisplay}</IonContent>
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(DisplayAllArticles)
