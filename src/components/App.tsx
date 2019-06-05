import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense, useState } from 'react';
import { Counter } from './Counter';
const Hello = lazy(() => import('./Hello'));

const App: React.FC = () => {
  const [poka, setPoka] = useState(false);

  const onClick = () => {
    setPoka(!poka);
  };
  return (
    <>
      <button onClick={onClick}>poka poka i nie cykaj</button>
      <Suspense fallback={<div>loading</div>}>
        {
          poka && (<Hello name="react-webpack-typescript-babel" />)
        }
        
      </Suspense>
      <Counter />
    </>
  );
};

export default hot(App);
