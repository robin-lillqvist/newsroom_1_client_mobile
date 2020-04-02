import React from 'react'
import { connect } from 'react-redux'
import { IonFooter, IonToolbar, IonButton } from '@ionic/react'
import { LOGIN_USER, CLOSE_LOGIN } from '../state/actions/actionTypes'
import { useSelector } from 'react-redux'

const Footer = props => {
  const authenticated = useSelector(state => state.authenticated)
  let label
  let button
  if (authenticated) {
    label = 'Logout'
    button = (
      <IonButton
        name='login'
        id='login'
        color="danger" 
        onClick={() => props.dispatch({ type: CLOSE_LOGIN })}
      >
       Logout
      </IonButton>
    )
  } else {
    label = 'Login'
    button = (
      <IonButton
        name='login'
        id='login'
        color="danger" 
        onClick={() => props.dispatch({ type: LOGIN_USER })}
      >
        Login
      </IonButton>
    )
  }

  return (
    <IonFooter className='ion-no-border' align="center">
      {button}
    </IonFooter>
  )
}

const mapStateToProps = state => {
  return {
    showLogin: state.showLogin
  }
}

export default connect(mapStateToProps)(Footer)
