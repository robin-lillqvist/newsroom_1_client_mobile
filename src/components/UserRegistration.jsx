import React from 'react'
import { onRegistration } from '../modules/authentication'
import { useDispatch, useSelector } from 'react-redux'
import { IonContent, IonButton, IonInput, IonCard } from '@ionic/react'

const Register = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)

  let register
  if (!authenticated) {
    register = (
      <IonContent>
        <IonCard class='ion-padding'>
          <form
            id='registration-form'
            onSubmit={event => onRegistration(event, dispatch)}
          >
            <IonInput
              id='email'
              color='dark'
              name='email'
              placeholder='Email'
              type='email'
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
            {/* <IonInput
              id='password_confirmation'
              color='dark'
              name='password_confirmation'
              type='password'
              placeholder='Confirm password'
              required
            /> */}
            <IonButton
              id='register-button'
              color='danger'
              type='submit'
              value='Login'
            >
              Submit
            </IonButton>
            <IonButton
              color='danger'
              onClick={() => dispatch({ type: 'CLOSE_REGISTRATION' })}
            >
              Close
            </IonButton>
          </form>
        </IonCard>
      </IonContent>
    )
  } else {
    register = <></>
  }

  return <>{register}</>
}

export default Register
