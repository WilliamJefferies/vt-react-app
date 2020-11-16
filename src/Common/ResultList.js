import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {ResultBox} from "./ResultBox";
import {selectLotCode} from "../WineSearch/actions";

const ResultListContainer = styled.div`

`
export const ResultList = ({isLoading, results, isSearch = false, setSearch}) => {
    //map results to resultBox
    console.log(results)

    const loadingMessage = <div>Loading Results...</div>
    const content = (
        <ResultListContainer>
            {results.map(result =>
                <ResultBox
                    name={isSearch ? result : null}
                    percentage={isSearch ? null : result.percentage}
                    handleClick={isSearch ? setSearch: (f) => f = f}
                />
            )}
        </ResultListContainer>
    )
    return isLoading ? loadingMessage : content
}

const mapDispatchToProps = dispatch => ({
    setSearch: (code) => dispatch(selectLotCode(code))
})


export default connect(mapDispatchToProps)(ResultList)