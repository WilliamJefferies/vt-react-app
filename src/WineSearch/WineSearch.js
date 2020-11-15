import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {SearchBox} from "./SearchBox";

const TitleContainer = styled.div`
position: static;
width: 159px;
height: 33px;
left: 0px;
top: 16px;
font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 26px;
line-height: 32px;
display: flex;
align-items: center;
text-align: center;
color: #0F1010;
`

const WineSearchContainer = styled.div`

`


export const WineSearch = () => {
    return (
        <WineSearchContainer>
            <TitleContainer>
                wine search
            </TitleContainer>
            <SearchBox/>
        </WineSearchContainer>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WineSearch)