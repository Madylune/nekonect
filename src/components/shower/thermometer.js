import React, { Component } from 'react'
import styled from 'styled-components'


// const StyledDiv = styled.div`
//   width:10px;
//   height:10px;
//   background-color:red;
// `

const StyledBar = styled.div`
    height: 45vh;
    width: 10px;
    border-radius: 0px 0px 200px 200px;
    -moz-border-radius: 0px 0px 200px 200px;
    -webkit-border-radius: 0px 0px 200px 200px;
    border: 1px solid #000000;
   
`

const StyledBarContenue = styled.div`
   height:20vh;
   width:20px;
   background-color: red;  
`

const StyledCercle = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 20px;
    border: 1px solid #000000;
    background-color:red;
    position:absolute;
    bottom: -20px;
    right: -12px;

`

const StyledThermometer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 52px;
    bottom: 169px;

    .test {
        position:relative; 
    }
`

class Thermometer extends Component {
    render() {
        return (
            <StyledThermometer>
                <div className="test">
                <StyledBar>
                {/* <StyledBarContenue></StyledBarContenue> */}
                </StyledBar>
                <StyledCercle>

                </StyledCercle>
                </div>
            </StyledThermometer>

        )
    }
}

export default Thermometer