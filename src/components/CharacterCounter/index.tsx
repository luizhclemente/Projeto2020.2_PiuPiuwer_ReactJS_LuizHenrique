import React from 'react';


interface CharacterCounterProps {
  character: number,
  color: string,
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({ character, color }) => {
  return (
    <p style={{ color: `${color}` }}>{character}/140</p>
  )
}

export default CharacterCounter