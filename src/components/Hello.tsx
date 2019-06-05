import React, { FC } from 'react';

export interface HelloProps {
  name: string;
}

const Hello: FC<HelloProps> = ({ name }) => (
  <div>
    <h1>{ name }</h1>
    <h2>jakis name</h2>
  </div>
);

export default Hello;
