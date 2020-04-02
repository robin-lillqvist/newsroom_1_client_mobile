import React from 'react'
import { connect } from 'react-redux'
import {
  IonContent,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent
} from '@ionic/react'
import { fetchSingleArticle } from '../state/actions/articleActions'
import { bindActionCreators } from 'redux'

const DisplayArticles = props => {
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID)
  }
  let articles
  if (props.categoryName) {
    articles = props.articles.filter(article => {
      return article.category === props.categoryName && article
    })
  } else {
    articles = props.articles
  }
  let articleDisplay = articles.map(article => {
    return (
      <IonCard
        key={article.id}
        align='center'
        color='#eb445a'
        shade='#eb445a'
        class='ion-padding'
      >
        <IonCardTitle mode='ios'>{article.title}</IonCardTitle>
        <IonCardContent mode='ios'>{article.lead}</IonCardContent>
        <IonButton
          fill='outline'
          color='danger'
          id={`open-article-${article.id}`}
          onClick={() => singleArticle(article.id)}
          key={article.id}
        >
          Read More
        </IonButton>
      </IonCard>
    )
  })
  return (
    <IonContent id='article-list' color='light'>
      {articleDisplay}
    </IonContent>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categoryName: state.categoryName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles)
