import React, { Suspense, useState } from 'react';
import './app.less';

const ComputedOne = React.lazy(() => import('Components/ComputedOne'));
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'));

const App = function () {
  const [showTwo, setShowTwo] = useState<boolean>(false);

  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type='button' onClick={() => setShowTwo(true)}>
          显示Two1222
        </button>
      </Suspense>
    </div>
  );
};

export default App;
