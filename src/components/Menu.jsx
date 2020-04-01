import React from 'react'
import { IonSegment, IonSegmentButton } from '@ionic/react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CATEGORY_SELECTION } from '../state/actions/actionTypes'

const Menu = props => {
  const handleItemClick = event => {
    props.dispatch({
      type: CATEGORY_SELECTION,
      payload: {
        categoryName: event.target.id,
        activeItem: event.target.active
      }
    })
  }
  return (
    <IonSegment id='article-category' scrollable>
      <IonSegmentButton
        name='All News'
        id=''
        color='yellow'
        as={Link}
        to={{ pathname: '/' }}
        onClick={handleItemClick}
        active={props.activeItem === 'all'}
      >
        All
      </IonSegmentButton>
      <IonSegmentButton
        name='Latest News'
        id='latest_news'
        color='red'
        as={Link}
        to={{ pathname: '/latest_news' }}
        onClick={handleItemClick}
        active={props.activeItem === 'latest_news'}
      >
        Latest
      </IonSegmentButton>
      <IonSegmentButton
        name='Culture'
        id='culture'
        color={'purple'}
        as={Link}
        to={{ pathname: '/culture' }}
        onClick={handleItemClick}
        active={props.activeItem === 'culture'}
      >
        Culture
      </IonSegmentButton>
      <IonSegmentButton
        name='Tech'
        id='tech'
        color={'blue'}
        as={Link}
        to={{ pathname: '/tech' }}
        onClick={handleItemClick}
        active={props.activeItem === 'tech'}
      >
        Tech
      </IonSegmentButton>
      <IonSegmentButton
        name='Food'
        id='food'
        color={'teal'}
        as={Link}
        to={{ pathname: '/food' }}
        onClick={handleItemClick}
        active={props.activeItem === 'food'}
      >
        Food
      </IonSegmentButton>
      <IonSegmentButton
        name='Sports'
        id='sports'
        color={'green'}
        as={Link}
        to={{ pathname: '/sports' }}
        onClick={handleItemClick}
        active={props.activeItem === 'sports'}
      >
        Sports
      </IonSegmentButton>
    </IonSegment>
  )
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  }
}

export default connect(mapStateToProps)(Menu)
