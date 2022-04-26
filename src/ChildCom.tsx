import React from 'react'
import './App.css';

const ChildCom = (props: any)=> {
  const {count} = props
  if(count != 2) {
    return (<>
    <h1>count不等于2</h1>
    </>)
  }
  return (
    <div className="child">    
    <h1>{'----子组件----'}</h1>
    </div>
  );
}

export default ChildCom;

