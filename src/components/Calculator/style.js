import styled from "styled-components";
import { theme } from "../../style/GlobalStyle";

export const Container = styled.div`
  width: 60%;
  height: 80%;
  background-color: ${(props) => props.theme.colors.main_dark_background};
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  flex: 1;
  background-color: inherit;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;

  button {
    width: 100%;
    background-color: ${props => props.theme.colors.dark_light_background};
    border-radius: 2px;
    color: ${props => props.theme.colors.light_background};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.dark_light_hover_background};
    }
  }

  #result-button {
      grid-column-start: 4;
      grid-row-start: 4;
      grid-row-end: -1;
      background-color: ${props => props.theme.colors.red_background};
  }
  .button-operator {
      background-color: ${props => props.theme.colors.dark_lighter_background};
      color: ${props => props.theme.colors.red_background};
  }
`;