import styled, { css } from 'styled-components';

interface ButtonProps {
  background: string;
  width: string;
  height: string;
  hover: string;
}

export const ButtonComponent = styled.button<ButtonProps>`
  color: #FFF;
  background:${props => props.background};
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Montserrat;

  width:${props => props.width}rem;
  height:${props => props.height}rem;
  border-radius: 25px;
  cursor: pointer;

  border: none;
  outline: none;
  
  transition-duration: 0.2s;

  &:hover {
    background:${props => props.hover}
  }
`
