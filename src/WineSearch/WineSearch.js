import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {ResultList} from "../Common/ResultList";
import {loadLotCodes} from "./thunks";

import {getLotCodesLoading, getSearchInput, getSearchResults} from "./selectors";
import {searchTextCleared, searchTextInput} from "./actions";

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

const SearchBoxInput = styled.input`
position: static;
width: 624px;
height: 48px;
background: #FFFFFF;
flex: none;
align-self: center;
`

const WineSearch = ({startLoadingLotCodes, isLoading, searchResults, onInput}) => {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        startLoadingLotCodes();
    }, []);
    return (
        <WineSearchContainer>
            <TitleContainer>
                wine search
            </TitleContainer>
            <SearchBoxInput
            type="text"
            placeholder="placeholder here"
            value={inputValue}
            onChange={e => {
                setInputValue(e.target.value)
                onInput(inputValue)
            }}
            />
            <ResultList results={searchResults} isLoading={isLoading} isSearch={true} setSearch={(f) => f = f}/>
        </WineSearchContainer>
    )
}

const mapStateToProps = state => ({
    isLoading: getLotCodesLoading(state),
    searchResults: getSearchResults(state),
    inputValue: getSearchInput(state)
})

const mapDispatchToProps = dispatch => ({
    startLoadingLotCodes: () => dispatch(loadLotCodes()),
    onInput: (input) => dispatch(searchTextInput(input)),
    onSearchCleared: () => dispatch(searchTextCleared())
});

export default connect(mapStateToProps, mapDispatchToProps)(WineSearch)