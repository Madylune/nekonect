import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
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
  cursor: pointer;
  img {
    height: 25px;
  }
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      {map(activities, (activity, i) =>
      activity.path ? (
      <Link to={getPath(activity.path)} key={i}>
        <StyledButton>
          <img src={require(`../../img/icons/${activity.icon}`)} alt={`Icone ${activity.name}`} />
        </StyledButton>
      </Link>
      ) : (
        <StyledButton key={i}>
          <img src={require(`../../img/icons/${activity.icon}`)} alt={`Icone ${activity.name}`} />
        </StyledButton>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar
