import React, { useRef } from 'react';
import { Button } from 'antd';

const RefCom = () => {
  const ref = useRef(0);
  const changeRef = () => {
    ref.current = Math.random() * 100;
    console.log('ref-----', ref.current);
  };
  return (
    <div>
      <h1>{`当前ref ${ref.current}`}</h1>
      <Button onClick={changeRef}>改变ref</Button>
    </div>
  );
};

export default RefCom;
