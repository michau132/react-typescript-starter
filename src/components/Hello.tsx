import React, { FC } from 'react';

export interface HelloProps {
  name: string;
}

// eslint-disable-next-line react/prop-types
export const Hello: FC<HelloProps> = ({ name }) => (
  <div>
    <h1>{ name }</h1>
    <h2>jakis name</h2>
  </div>
);

      
