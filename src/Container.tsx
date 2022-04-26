import React from 'react'
import './App.css';

// import ChildCom from './ChildCom'

const Container = (props: any)=> {
  
  const children = props?.children
  return (
    <div className="container">    
    <h1>{'----容器组件----'}</h1>
    {children}
    </div>
  );
}

export default Container;