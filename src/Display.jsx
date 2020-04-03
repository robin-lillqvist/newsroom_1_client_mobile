import React from 'react'
import { connect } from 'react-redux'
import DisplayArticles from './components/DisplayArticles'
import { fetchArticles } from './state/actions/articleActions'
import { bindActionCreators } from 'redux'
import DisplaySingleArticle from './components/DisplaySingleArticle'
import Login from './components/UserLogin'
import Register from './components/UserRegistration'

const Display = props => {
  if (!props.showRegistration && !props.showLogin && !props.singleArticle) {
    props.fetchArticles()
  }
  return (
    <>
      {props.showArticlesList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      {props.showLogin && <Login />}
      {props.showRegistration && <Register />}
    </>
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
    singleArticle: state.singleArticle,
    showArticlesByCategory: state.showArticlesByCategory,
    showLogin: state.showLogin,
    showRegistration: state.showRegistration
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Display)
