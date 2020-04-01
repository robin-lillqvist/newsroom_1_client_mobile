import React from 'react'
import { connect } from 'react-redux'
import { IonApp, IonHeader } from '@ionic/react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import DisplayAllArticles from './components/DisplayAllArticles'
import { fetchArticles } from './state/actions/articleActions'
import { bindActionCreators } from 'redux'
import image from './images/berlingo.png'
import DisplaySingleArticle from './components/DisplaySingleArticle'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
 import './theme/variables.css';

const App = props => {
  props.fetchArticles()
  return (
    <IonApp>
      <IonHeader align='center'>
        <img src={image} alt='logo' />
      </IonHeader>
      <IonHeader>
        <Menu />
      </IonHeader>
      {props.showArticlesList && <DisplayAllArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      <Footer />
    </IonApp>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}
const mapStateToProps = state => {
  return {
    showArticlesList: state.showArticlesList,
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
