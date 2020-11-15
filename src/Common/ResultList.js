import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {ResultBox} from "./ResultBox";

const ResultListContainer = styled.div`

`
export const ResultList = (results) => {
    //map results to resultBox
    return (
        <ResultListContainer>
            <ResultBox left={null} right={null}/>
        </ResultListContainer>
    )
}
