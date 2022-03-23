import React from "react";

import { Button } from "../Button";
import { NummberView } from "../NumberView";

import { Container, ButtonContainer, NumberViewContainer } from "./style";

export const Calculator = (params) => {
  return (
    <Container>
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
        <Button type={"button"}>clear</Button>
      </ButtonContainer>
    </Container>
  );
};
