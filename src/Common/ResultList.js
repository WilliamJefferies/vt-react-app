import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {ResultBox} from "./ResultBox";
import {selectLotCode} from "../WineSearch/actions";

const ResultListContainer = styled.div`

`
export const ResultList = ({isLoading, results, clickable = false, clickHandler}) => {

    const loadingMessage = <div>Loading Results...</div>
    const content = (
        <ResultListContainer>
            {results.map(result =>
                <ResultBox
                    name={clickable ? result : null}
                    percentage={clickable ? null : result.percentage}
                    handleClick={clickable ? clickHandler: (f) => f = f}
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