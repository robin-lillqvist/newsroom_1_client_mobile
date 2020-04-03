import React from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { IonFooter, IonButton, IonToolbar } from '@ionic/react'
import { LOGIN_USER, REGISTER_USER } from '../state/actions/actionTypes'
import { onLogout } from '../modules/authentication'

const Footer = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  let button

  if (authenticated) {
    button = (
      <IonButton
        name='logout'
        id='logout'
        color='danger'
        onClick={() => onLogout(dispatch)}
      >
        Logout
      </IonButton>
    )
  } else {
    button = (
      <>
        <IonButton
          name='login'
          id='login'
          color='danger'
          onClick={() => props.dispatch({ type: LOGIN_USER })}
        >
          Login
        </IonButton>
        <IonButton
          name='register'
          id='register'
          color='danger'
          onClick={() => props.dispatch({ type: REGISTER_USER })}
        >
          Register
        </IonButton>
      </>
    )
  }

  return (
    <IonFooter align='center'>
      <IonToolbar color='light'>{button}</IonToolbar>
    </IonFooter>
  )
}

const mapStateToProps = state => {
  return {
    showLogin: state.showLogin,
    showRegistration: state.showRegistration
  }
}

export default connect(mapStateToProps)(Footer)
