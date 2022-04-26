import React, {useEffect, useState}from 'react'
import './App.css';

const EffectCom = (props: any)=> {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({})
  useEffect(()=>{
    console.log('useEffec前--',props)

  })
  console.log('EffectCom--',props)
  useEffect(()=>{
    console.log('useEffect后--',props)

  })
  return (
    <div className="child">    
    <h1>{'----子组件----'}</h1>
    <button onClick={() => setCount(count+1)}>{`setcount`}</button>
    {/* <button onClick={() => setObj({...obj})}>{`setobj`}</button> */}
    <button onClick={() => setObj(obj)}>{`setobj`}</button>


    </div>
  );
}

export default EffectCom;

