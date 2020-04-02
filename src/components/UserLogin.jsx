import React from 'react'
import { onLogin } from '../modules/authentication'
import { useDispatch, useSelector } from 'react-redux'
import { IonContent, IonButton, IonInput, IonCard } from '@ionic/react'

const Login = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  // const message = useSelector(state => state.message)

  let login
  if (!authenticated) {
    login = (
      <IonContent>
        <IonCard class='ion-padding'>
          <form id='login-form' onSubmit={event => onLogin(event, dispatch)}>
            <IonInput
              id='email'
              color='dark'
              name='email'
              placeholder='Email'
              type="email"
              class='ion-padding'
              required
            />
            <IonInput
              id='password'
              color='dark'
              name='password'
              type='password'
              placeholder='Password'
              required
            />
            <IonButton
              id='login-button'
              color='danger'
              type='submit'
              value='Login'
            >
              Submit
            </IonButton>
            <IonButton
              color='danger'
              onClick={() => dispatch({ type: 'CLOSE_LOGIN' })}
            >
              Close
            </IonButton>
          </form>
        </IonCard>
      </IonContent>
    )
  } else {
    login = <></>
  }

  return <>{login}</>
}

export default Login
