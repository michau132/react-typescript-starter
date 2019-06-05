import React from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';

export const App: React.FC = () => (
  <>
    <Hello name="react-webpack-typescript-babel" />
    <Counter />
  </>
);

