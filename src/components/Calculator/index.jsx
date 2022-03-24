import React, { useState, useReducer } from "react";
import { HiBackspace } from "react-icons/hi";

import { Button } from "../Button";
import { CompleteOperation } from "../CompleteOperation";
import { NummberView } from "../NumberView";

import {
  Container,
  ButtonContainer,
  NumberViewContainer,
  CompleteOperationContainer,
} from "./style";

function reducer(state, action) {
  switch (action.type) {
    case "insertCharacter":
      if (state === "0") {
        if (action.payload === '.') {
          return state += '.'
        }
        return action.payload;
      }
      if (state.includes(".") && action.payload === ".") {
        return state;
      }
      return (state += action.payload);
    case 'RemoveLastCharacter':
      if (state.length == 1) {
        return state = '0'
      }
      return state.substr(0, state.length -1)
    case 'reset':
      return state = '0'
    default:
      console.log(nada);
  }
}

export const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, "0");
  const [totalOperation, setTotalOperation] = useState('');

  const handleChangeCurrentNumber = (number, action) => {
    if (action === 'insert') {
      dispatch({type: 'insertCharacter', payload: number})
    } else {
      dispatch({type: 'RemoveLastCharacter'})
    }
  };
  const handleChangeTotalOperation = (operation) => {
    setTotalOperation(prev => prev += state + operation)
    dispatch({type: 'reset'})
    console.log(totalOperation);
  }
  return (
    <Container>
      <CompleteOperationContainer>
        <CompleteOperation operation={totalOperation || '0'}/>
      </CompleteOperationContainer>
      <NumberViewContainer>
        <NummberView number={state} />
      </NumberViewContainer>
      <ButtonContainer>
        <Button type={"button"} className="button-operator" >
          C
        </Button>
        <Button type={"button"} className="button-operator">
          %
        </Button>
        <Button type={"button"} className="button-operator" onClick={() => handleChangeTotalOperation('÷')}>
          ÷
        </Button>
        <Button type={"button"} className="button-operator" onClick={() => handleChangeTotalOperation('x')}>
          x
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("7", 'insert')}>
          7
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("8", 'insert')}>
          8
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("9", 'insert')}>
          9
        </Button>
        <Button type={"button"} className="button-operator" onClick={() => handleChangeTotalOperation('-')}>
          -
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("4", 'insert')}>
          4
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("5", 'insert')}>
          5
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("6", 'insert')}>
          6
        </Button>
        <Button type={"button"} className="button-operator" onClick={() => handleChangeTotalOperation('+')}>
          +
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("1", 'insert')}>
          1
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("2", 'insert')}>
          2
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("3", 'insert')}>
          3
        </Button>
        <Button type={"button"} id="result-button">
          =
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("0", 'insert')}>
          0
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber(".", 'insert')}>
          .
        </Button>
        <Button type={"button"} onClick={() => handleChangeCurrentNumber("<", 'remove')}>
          <HiBackspace />
        </Button>
      </ButtonContainer>
    </Container>
  );
};
