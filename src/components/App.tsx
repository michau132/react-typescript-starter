import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { Counter } from './Counter';
const Hello = lazy(() => import('./Hello'));

const App: React.FC = () => {
  const button = useRef<HTMLButtonElement>(null);
  const [poka, setPoka] = useState(false);
  useEffect(() => {
    fetch('api/users/michau132')
      .then(res=> res.json())
      .then(res=> {
        console.log(res);
        return res;
      });
  }, []);
  const onClick = () => {
    setPoka(!poka);
    if(button && button.current) {
      button.current.innerHTML = '<p>czesc</p>';
    }
  };
  const a = {
    name: 'Adam',
    surname: 'Kowalsky',
  };
  const jakisObiekt = useMemo(() => ({ ...a }), [a]);
  console.log('jest');
  return (
    <>
      <button ref={button} onClick={onClick}>poka poka i nie cykaj</button>
      <Suspense fallback={<div>loading</div>}>
        {
          poka && (<Hello name="react-webpack-typescript-babel" />)
        }
      </Suspense>
      <Counter info={jakisObiekt} />
    </>
  );
};

if (module.hot) {
  module.hot.accept(); // already had this init code 
  module.hot.addStatusHandler((status: string) => {
    if (status === 'prepare') console.clear();
  });
}

export default hot(App);
