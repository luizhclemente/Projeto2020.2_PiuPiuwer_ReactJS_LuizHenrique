import React, { InputHTMLAttributes } from 'react';

import { InputAreaDiv } from './styles'
import { type } from 'os';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string
}

const InputArea: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <InputAreaDiv {...rest}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </InputAreaDiv>
  )
}

export default InputArea;