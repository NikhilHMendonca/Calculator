import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const CalcyButton = styled.button`
    width: 75px;
    height: 75px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border: none;
    background: none;
`;

const ResultButton = styled.button`
    width: 100%;
    height: 50px;
    text-align: center;
    // border: none;
    background: none;
`;

const Input = styled.div`
    padding: 0;
    margin: 0;
    border: 1px solid red;
    height: 50px;
    background: white;
`;

class CalcyButtons extends Component {
    state = {
        number1: 0,
        number2: 0,
        operator: null,
        result: null
    }

    handleOnDigitSelect = (value, type) => {
        const { number1, operator, number2 } = this.state;
        if(!!number1 && !operator) {
            const num = number1.toString();
            const newNumber1 = parseInt(num.concat(value))
            this.setState({ number1: newNumber1 })
        } else if(!!number1 && operator){
            const num = number2.toString();
            const newNumber2 = parseInt(num.concat(value))
            this.setState({ number2: newNumber2 })
        } else {
            this.setState({ number1: value });
        }
    }

    handleOnOperationSelect = (operator) => {
        console.log(operator);
        this.setState({ operator })
    }

    handleOnShowResultSelect = () => {
        const { number1, number2, operator } = this.state;
        const result = number1 +  operator + number2;
        this.setState({ result });
    }

    render() {
        const { number1, operator, number2, result } = this.state;
        console.log(number1, number2)
        return (
            <div>
                <Input>{result ? result : `${number1} ${operator} ${number2}`}</Input>
                <Container>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('1', 'integer')}>1</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('2', 'integer')}>2</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('3', 'integer')}>3</CalcyButton>
                    <CalcyButton>CE</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('4', 'integer')}>4</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('5', 'integer')}>5</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('6', 'integer')}>6</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnOperationSelect('+', true)}>+</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('7', 'integer')}>7</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('8', 'integer')}>8</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('9', 'integer')}>9</CalcyButton>
                    <CalcyButton>-</CalcyButton>
                    <CalcyButton onClick={() => this.handleOnDigitSelect('0', 'integer')}>0</CalcyButton>
                    <CalcyButton>.</CalcyButton>
                    <CalcyButton>÷</CalcyButton>
                    <CalcyButton>­*</CalcyButton>
                </Container>
                <ResultButton onClick={this.handleOnShowResultSelect}>=</ResultButton>
            </div>
        )
    }
}

export default CalcyButtons;