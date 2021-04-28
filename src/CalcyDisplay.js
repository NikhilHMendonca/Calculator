import styled from 'styled-components';
import CalcyButtons from './CalcyButtons';

const Container = styled.div`
    width: 100%;
    height: 100px;
`;

const CalcyDisplay = () => {
    return (
        <Container>
            <CalcyButtons />
        </Container>
    )
}

export default CalcyDisplay;