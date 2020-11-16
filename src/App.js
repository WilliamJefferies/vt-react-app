import styled from 'styled-components'
import {connect} from 'react-redux';
import WineSearch from "./WineSearch/WineSearch";
import {getPage} from "./router";

const AppContainer = styled.div`
    font-family: Montserrat;
    font-style: normal;
    background: #E5E5E5;
    width: 100vw;
    height: 100vh;
`


// todo move to switch statement and store these vars in router file
const app = ({page}) => {
    return (
        <AppContainer>
            {page === 'search'? <WineSearch/>: null}
        </AppContainer>
    );
};

const mapStateToProps = state => ({
  page: getPage(state)
});

export default connect(mapStateToProps)(app)