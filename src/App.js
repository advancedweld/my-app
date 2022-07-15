import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import { Layout } from "antd";

import Button from "share/Checkbox/Button.tsx";
import Radio from "share/Checkbox/RadioGroup.tsx";
import TableCustomer from "share/Checkbox/TableSelectioncustomer.tsx";
import DraggerUpload from "share/Uploader/DraggerUpload.tsx";

import EffectCom from "share/EffectCom/EffectCom.tsx";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider></Sider>
        <Layout>
          <Content>
            <div style={{ position: "absolute" }}>
              <DraggerUpload />
            </div>
            <Button />
            <Radio></Radio>
            <EffectCom></EffectCom>

            {/* <TableCustomer></TableCustomer> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Button />
    //     <Radio></Radio>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Sider></Sider>
    // </div>
  );
}

export default App;
