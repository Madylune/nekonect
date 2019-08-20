import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import { activities } from './fixtures'
import { getPath } from '../../routes'
import { Link } from 'react-router-dom'

const StyledSidebar = styled.div`
  padding: 10px 3px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 30px;
  height: 80%;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 5px;
  top: 5%;
  z-index: 1;
`

const StyledButton = styled.div`
  margin: 5px;
  cursor: ${props => props.isNight ? 'pointer' : 'not-allowed'};
  opacity: ${props => props.isNight || props.wakeupIcon ? '0.3' : '1'};
  img {
    height: 25px;
  }
`

const Sidebar = ({ location }) => {
  const isNight = location === getPath('night')
  return (
    <StyledSidebar>
      {map(activities, (activity, i) => {
      const wakeupIcon = get(activity, 'name') === 'wakeup'
      return (
        <Link to={getPath(activity.path)} key={i}>
          <StyledButton isNight={!wakeupIcon && isNight} wakeupIcon={!isNight && wakeupIcon}>
            <img src={require(`../../img/icons/${activity.icon}`)} alt={`Icone ${activity.name}`} />
          </StyledButton>
        </Link>
        )
      })}
    </StyledSidebar>
  )
}

export default Sidebar
