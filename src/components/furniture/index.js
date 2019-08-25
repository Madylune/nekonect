import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'

const StyledFurniture = styled.div`
 
  .Icon-tv {
    position: absolute;
    width: 90px;
    height: 82px;
    top: 142px;
    right: 73px;
  }

  .Icon-umbrella {
    position: absolute;
    width: 125px;
    height: 119px;
    top: 292px;
    right: 9px;
    transform: rotate(-12deg);
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

