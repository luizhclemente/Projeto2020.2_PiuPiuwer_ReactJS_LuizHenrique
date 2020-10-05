import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width: string;
  height: string;
  background: string;
  hover: string;
}

const Button: React.FC<ButtonProps> = ({ title, width, height, background, hover, ...rest }) => {
  return (
    <ButtonComponent
      background={background}
      height={height}
      width={width}
      hover={hover}
      {...rest}
    >
      {title}
    </ButtonComponent>
  )
}

export default Button