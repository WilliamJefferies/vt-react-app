import React from 'react';
import styled from 'styled-components'

const ResultBoxContainer = styled.button`
position: static;
width: 624px;
height: 48px;
background: #FFFFFF;
flex: none;
align-self: center;
`

export const ResultBox = ({name, percentage, handleClick}) => {
    return (
        <ResultBoxContainer onClick={() => handleClick(name)}>
            {name}
        </ResultBoxContainer>
    )
}