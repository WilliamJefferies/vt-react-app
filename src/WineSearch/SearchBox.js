import React from 'react';
import styled from 'styled-components'

const SearchBoxContainer = styled.div`
position: static;
width: 624px;
height: 48px;
background: #FFFFFF;
flex: none;
align-self: center;
`

export const SearchBox = () => {

    return (
        <SearchBoxContainer>
            search box container
        </SearchBoxContainer>
    )
}