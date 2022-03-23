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
        return action.payload;
      }
      if (state.includes(".") && action.payload === ".") {
        return state;
      }
      return (state += action.payload);
    case 'RemoveLastCharacter':
      return state.substr(-1, state.length)
    default:
      console.log(nada);
  }
}

export const Calculator = (params) => {
  // const [currentNumber, setCurrentNumber] = useState("0");
  const [state, dispatch] = useReducer(reducer, "0");

  const handleChangeCurrentNumber = (number, action) => {
    if (action === 'insert') {
      dispatch({type: 'insertCharacter', payload: number})
    } else {
      dispatch({type: 'RemoveLastCharacter'})
    }
    // setCurrentNumber((prev) => {
    //   if (prev === "0") {
    //     return number;
    //   }
    //   if (prev.includes(".") && number === ".") {
    //     return prev;
    //   }
    //   return (prev += number);
    // });
  };
  return (
    <Container>
      <CompleteOperationContainer>
        <CompleteOperation />
      </CompleteOperationContainer>
      <NumberViewContainer>
        <NummberView number={state} />
      </NumberViewContainer>
      <ButtonContainer>
        <Button type={"button"} className="button-operator">
          C
        </Button>
        <Button type={"button"} className="button-operator">
          %
        </Button>
        <Button type={"button"} className="button-operator">
          ÷
        </Button>
        <Button type={"button"} className="button-operator">
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
        <Button type={"button"} className="button-operator">
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
        <Button type={"button"} className="button-operator">
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
        <Button type={"button"} >
          <HiBackspace />
        </Button>
      </ButtonContainer>
    </Container>
  );
};
