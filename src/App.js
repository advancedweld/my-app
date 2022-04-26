import logo from "./logo.svg";
import "./App.css";

import Container from "./Container.tsx";
import ChildCom from "./ChildCom.tsx";
import ChildScroll from "./ChildScroll.tsx";

import EffectCom from "./EffectCom.tsx";
import { useEffect, useState } from "react";

const dataList = new Array(10000).fill("列表元素");
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("父组件渲染-----", count);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        onClick={() => setCount(count === 2 ? 1 : 2)}
      >{`设置父组件count is ${count}`}</button>

      <Container>
        {/* <ChildCom /> */}
        {/* <ChildCom  count = {count}/> */}
        <div className="scrollContainer">
          <ChildScroll>
            {dataList.map((item, index) => {
              return (
                <div
                  style={{ height: "50px" }}
                >{`${index}----${item}-----${Date.now()}`}</div>
              );
            })}
          </ChildScroll>
        </div>
      </Container>
      <EffectCom />
    </div>
  );
}

export default App;
