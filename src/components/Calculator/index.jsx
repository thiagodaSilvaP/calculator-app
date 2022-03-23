import React from "react";
import {HiBackspace} from 'react-icons/hi';

import { Button } from "../Button";
import { CompleteOperation } from "../CompleteOperation";
import { NummberView } from "../NumberView";

import {
  Container,
  ButtonContainer,
  NumberViewContainer,
  CompleteOperationContainer,
} from "./style";

export const Calculator = (params) => {
  return (
    <Container>
      <CompleteOperationContainer>
        <CompleteOperation />
      </CompleteOperationContainer>
      <NumberViewContainer>
        <NummberView />
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
        <Button type={"button"}>7</Button>
        <Button type={"button"}>8</Button>
        <Button type={"button"}>9</Button>
        <Button type={"button"} className="button-operator">
          -
        </Button>
        <Button type={"button"}>4</Button>
        <Button type={"button"}>5</Button>
        <Button type={"button"}>6</Button>
        <Button type={"button"} className="button-operator">
          +
        </Button>
        <Button type={"button"}>1</Button>
        <Button type={"button"}>2</Button>
        <Button type={"button"}>3</Button>
        <Button type={"button"} id="result-button">
          =
        </Button>
        <Button type={"button"}>0</Button>
        <Button type={"button"}>.</Button>
        <Button type={"button"}><HiBackspace/></Button>
      </ButtonContainer>
    </Container>
  );
};
