import styled from 'styled-components';
import CalcyDisplay from './CalcyDisplay';

const Container = styled.div`
  background: orange;
  width: 300px;
  height: 400px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <CalcyDisplay />
    </Container>
  );
}

export default App;
