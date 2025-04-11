




import React, { useState, useEffect } from 'react';

const Buttons = () => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(true);

  const nextBtn = () => {
    setCounter(prevIndex => prevIndex + 1);
  };

  const backBtn = () => {
    setCounter(prevIndex => prevIndex - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) return;
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [pause]);

  const getColor = () => {
    if (counter > 0) return 'green';
    if (counter < 0) return 'red';
    return 'black';
  };

  const toggleAutoCount = () => {
    setPause(prev => !prev);
  };

  return (
    <div className="container">
      <h1 style={{ color: getColor() }}>{counter}</h1>
      <div className="container_card">
        <button className='negative_btn' onClick={backBtn}>-1</button>
        <button className='reset_btn' onClick={reset}>reset</button>
        <button className='positive_btn' onClick={nextBtn}>+1</button>
        <button className='auto_btn' onClick={toggleAutoCount} style={{ backgroundColor: pause ? 'purple' : '#f1c40f' }}>
          {pause ? 'Start Auto-count' : 'Stop Auto-count'}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
