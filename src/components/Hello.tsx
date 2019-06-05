import React, { FC, useState } from 'react';

export interface HelloProps {
  name: string;
}

const Hello: FC<HelloProps> = ({ name }) => {
  const [time, updateTime] = useState('tutaj bedzie czas');
  const click = () => {
    updateTime('another time');
  };
  return(
    <div>
      <h1>{ name }</h1>
      <h2>jakis name</h2>
      <button onClick={click}>Dawaj czas</button>
      <p>{time}</p>
    </div>
  );
};

export default Hello;
