import { Radio } from "antd";

export default () => {
  return (
    <Radio.Group defaultValue="b" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
    </Radio.Group>
  );
};
