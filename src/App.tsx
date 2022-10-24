import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';

function App() {
  return (
    <AppContainer>
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
