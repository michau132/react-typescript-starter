import React, { lazy, Suspense } from 'react';
import { Counter } from './Counter';
const Hello = lazy(() => import('./Hello'));


export const App: React.FC = () => {
  
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Hello name="react-webpack-typescript-babel" />

      </Suspense>
      <Counter />
    </>
  );
};

