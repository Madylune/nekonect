import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import get from 'lodash/get'
import random from 'lodash/random'
import { Switch, Route } from 'react-router-dom'
import { getPath } from '../routes'
import Sidebar from './sidebar'
import Toilet from './toilet'
import Shower from './shower'
import Garden from './garden'
import Dancefloor from './dancefloor'
import Header from './header'
import Footer from './footer'
import { withRouter } from 'react-router'
import Kitchen from './Kitchen'
import Night from './night'
import Settings from './settings'
import { MOOD_CHANGE, MOOD_CHANGED_LIFE } from '../reducers/mood'

const StyledHome = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const getBodyBg = location => {
  switch(true) {
    case location === getPath('home'):
      return `url(${require('../img/backgrounds/home.jpg')})`
    case location === getPath('kitchen'):
      return `url(${require('../img/backgrounds/kitchen.jpg')})`
    case location === getPath('toilet'):
      return `url(${require('../img/backgrounds/toilet.jpg')})`
    case location === getPath('bathroom'):
      return `url(${require('../img/backgrounds/bathroom.jpg')})`
    case location === getPath('garden'):
      return `url(${require('../img/backgrounds/garden.jpg')})`
    case location === getPath('dancefloor'):
      return `url(${require('../img/backgrounds/dancefloor.jpg')})`
    case location === getPath('night'):
      return `url(${require('../img/backgrounds/night.jpg')})`
    default:
      return ''
  }
}

const StyledBody = styled.div`
  flex-grow: 1;
  /* height: 100%; */
  text-align: center;
  position: relative;
  background-image: ${props => getBodyBg(props.location)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-color: ${props => props.location === getPath('settings') ? '#efefef' : ''};

  .Neko {
    height: 200px;
    position: absolute;
    bottom: 55px;
    left: 40%;
  }
`

const RANDOM_VALUE = random(50, 100)

class Home extends Component {
  componentDidMount() {
    const { moodChange, rebornCat } = this.props
    rebornCat() && moodChange(RANDOM_VALUE)
  }
  render() {
    const { history } = this.props
    const location = get(history, ['location', 'pathname'])
    return (
      <StyledHome>
        <Header />
        <StyledBody location={location}>
          <Sidebar location={location} />
            <Switch>
              <Route exact={true} path={getPath('kitchen')} component={Kitchen} />
              <Route exact={true} path={getPath('toilet')} component={Toilet} />
              <Route exact={true} path={getPath('bathroom')} component={Shower} />
              <Route exact={true} path={getPath('garden')} component={Garden} />
              <Route exact={true} path={getPath('dancefloor')} component={Dancefloor} />
              <Route exact={true} path={getPath('night')} component={Night} />
              <Route exact={true} path={getPath('settings')} component={Settings} />
            </Switch>
          {location === getPath('home') && <img src={require('../img/push-hello.png')} className="Neko" alt="Neko" />}
        </StyledBody>
        <Footer />
      </StyledHome>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  moodChange: val => dispatch({ type: MOOD_CHANGE, payload: { value: val } }),
  rebornCat: () => dispatch({ type: MOOD_CHANGED_LIFE, payload: { isDead: false } })
})

export default withRouter(connect(null, mapDispatchToProps)(Home))
