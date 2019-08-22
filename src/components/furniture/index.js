import React, { Component } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'

const StyledFurniture = styled.div`
  .Icon-furniture {
    img {
      width: 90px;
      height: 82px;
    }
  }

  .Icon-tv {
    position: absolute;
    top: 142px;
    right: 73px;
  }
`
function Furniture(props) {
  const items = props.items
  return (
    <StyledFurniture>
      <div className="Icon-furniture">
        {map(items, (item, i) => 
          <img 
            key={i}
            src={require(`../../img/icons/${item.icon}`)} 
            id={item.name} className={`Icon-${item.name}`}
            alt={`${item.name}`}/>
        )}                  
      </div> 
    </StyledFurniture>);
}

export default Furniture

