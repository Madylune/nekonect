import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import { activities } from './fixtures'
import { getPath } from '../../routes'
import { Link } from 'react-router-dom'

const StyledSidebar = styled.div`
  padding: 10px 3px;
  border: 1px solid black;
  border-radius: 30px;
  height: 400px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
`

const StyledButton = styled.div`
  margin: 10px 5px;
  cursor: pointer;
  img {
    height: 30px;
  }
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      {map(activities, activity =>
      <Link to={activity.path && getPath(activity.path)}>
        <StyledButton>
          <img src={require(`../../img/icons/${activity.icon}`)} alt={`Icone ${activity.name}`} />
        </StyledButton>
      </Link>
      )}
    </StyledSidebar>
  )
}

export default Sidebar
