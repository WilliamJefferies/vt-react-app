import styled from 'styled-components'
import {WineSearch} from "./WineSearch/WineSearch";

const AppContainer = styled.div`
    font-family: Montserrat;
    font-style: normal;
    background: #E5E5E5;
    width: 100vw;
    height: 100vh;
`



function App() {
  return (
    <AppContainer>
       <WineSearch/>
    </AppContainer>
  );
}

export default App;
